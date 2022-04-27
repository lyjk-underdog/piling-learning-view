import service from "@/utils/request";

const getList = () => service({
    url:'/video/list',
    method:'GET'
})

export default {
    getList
}