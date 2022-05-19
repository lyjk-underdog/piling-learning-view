import service from "@/utils/request";

const login = (phoneNum , password) => service({
    url:'/user/login',
    method:'POST',
    params:{
        phoneNum,
        password
    }
})

export default {
    login
}