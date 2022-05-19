import axios from 'axios';
import Swal from 'sweetalert2';
import store from '@/store';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000,
    // headers:{
    //     Authorization:'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..7fTQqfYi_THuBlHb.udkrVj8iBhAVlS2Ypy3zAr3fQ-SY5cZn4jhO-0B4r7f6dk-qrTHHNXYCpDz8w1H-rGOmMfKdC3k8iT4AL-EWVvxmU1tMuPH5IlobEhRblVSuzrM3ZMAtW8C3acNKMQDUYFj1BDIuwXglYKBfyJarH_lxHY2-ui_QSnkSN-TuACmy7I94VXkUsjH8PR7U6hYLcxA_kyIGtaejiI4owZnov_7BUMYtnIDasrgh2DtkKZ3sdvFqX18zFhN1hKEm_KgvTKoJ0Eu5d4YK2GE2_O8pQ6N_itHcUancJi5xaY2sv6HPpMgDr-2T.q-XQukTPkj1wekB1KCoIEg'
    // }
})

service.interceptors.request.use(
    config => {
        let token = store.state.user.token;

        if (token) {
            config.headers['Authorization'] = token;
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

const errHandleStrategy = {
    '400'() { },
    '401'() {
        store.dispatch('user/resetToken')
        location.reload();
    },
    '500'() { }
}

// response interceptor
service.interceptors.response.use(
    response => {
        const {
            data,
            httpCode,
            message
        } = response.data

        console.log(response.data)

        if (httpCode !== 200) {
            Swal.fire({
                icon: 'error',
                text: message
            })
            errHandleStrategy[httpCode]();
            return Promise.reject(message);
        }

        return data;

    },
    error => {
        Swal.fire({
            icon: 'error',
            text: error.message
        })
        return Promise.reject(error)
    }
)

export default service;