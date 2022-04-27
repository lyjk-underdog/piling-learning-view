import service from "@/utils/request.js";

const getList = () => service({
    url: '/campusstu/level/list',
    method: 'GET'
})

const getInfo = (levelId) => service({
    url: '/campusstu/level/info/' + levelId,
    method: 'GET'
})

const updateList = ({ levelId, score }) => service({
    url: '/campusstu/level/list/' + levelId,
    method: 'PUT',
    data: {
        score,
        pass:true
    }
})

export default {
    getList,
    getInfo,
    updateList
}