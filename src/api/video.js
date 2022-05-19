import service from "@/utils/request";

const getList = async (videoType) => {
    let data = await service({
        url: '/video/getlist',
        method: 'GET',
        params: {
            videoType
        }
    })

    return data.map(item => ({
        ...item,
        videoCover: process.env.VUE_APP_UPLOAD_URL + item.videoCover,
        videoSrc: process.env.VUE_APP_UPLOAD_URL + item.videoSrc
    }))
}


const getCategory = () => service({
    url: '/video/category',
    method: 'GET'
})

export default {
    getList,
    getCategory
}