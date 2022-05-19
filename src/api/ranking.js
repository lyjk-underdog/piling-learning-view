import service from "@/utils/request";

const get = () => service({
    url:'/campusstu/ranking/list',
    method:'GET'
})

export default {
    get
}