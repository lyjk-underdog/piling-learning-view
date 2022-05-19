import service from "@/utils/request.js";

const getList = () => service({
    url: '/campusstu/level/list',
    method: 'GET'
})

const getInfo = async (levelId) => {
    try {
        let info = await service({
            url: '/campusstu/level/info/' + levelId,
            method: 'GET'
        });

        return {
            ...info,
            videoSrc: process.env.VUE_APP_UPLOAD_URL + info.videoSrc
        }
    } catch (e) {
        throw e;
    }
}

const updateList = ({ levelId, score }) => service({
    url: '/campusstu/level/list/' + levelId,
    method: 'PUT',
    data: {
        score,
        pass: true
    }
})

export default {
    getList,
    getInfo,
    updateList
}