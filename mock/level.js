let levelList = [
    {
        id: 0,
        title: '基本手法',
        pass: false,
        timeLimit: 10,
        score: 0,
        difficulty: '2'
    },
    {
        id: 1,
        title: "咏春八手",
        pass: false,
        timeLimit: 8,
        score: 0,
        difficulty: '1'
    },
    {
        id: 2,
        title: "纯手法",
        pass: false,
        timeLimit: 5,
        score: 0,
        difficulty: '0'
    },
]

module.exports = [
    {
        url: '/campusstu/level/list',
        method: 'get',
        tpl() {
            return {
                httpCode: 200,
                message: 'ok',
                data: levelList
            }
        }
    },

    {
        url: /\/campusstu\/level\/list\/(?<levelId>\w+)/,
        method: 'put',
        tpl({ url, body }) {
            const { levelId } = /\/level\/list\/(?<levelId>\w+)/.exec(url).groups;
            const { score } = JSON.parse(body);

            levelList[levelId].pass = true;
            levelList[levelId].score = score;

            return {
                httpCode: 200,
                message: 'ok'
            }
        }
    },

    {
        url: /\/campusstu\/level\/info\/(?<levelId>\w+)/,
        method: 'get',
        tpl({ url }) {
            const { levelId } = /\/level\/info\/(?<levelId>\w+)/.exec(url).groups;

            const strategy = {
                0: {
                    title: '基本手法',
                    describes: `三拳：日字冲拳，寻桥抽拳，寻桥栏撞拳
                    三掌：正掌，横掌，昂掌．或曰直掌（心－包括正掌，横掌，昂掌），杀掌（阴掌沿），摌掌（阳掌沿）
                    三脚：（三身法）：出自寻桥之（正身）撑脚，（侧身）撑脚及（反身）撑脚
                    三步：正（箭）步，横步，圈步`,
                    videoSrc: '',
                    steps: [
                        {
                            stepindex: 1,
                            label: '左手',
                            prop: 'left'
                        },
                        {
                            stepindex: 2,
                            label: '右手',
                            prop: 'right'
                        },
                        {
                            stepindex: 3,
                            label: '右手',
                            prop: 'right'
                        },
                        {
                            stepindex: 4,
                            label: '左手',
                            prop: 'left'
                        },
                        {
                            stepindex: 5,
                            label: '左手',
                            prop: 'left'
                        },
                        {
                            stepindex: 6,
                            label: '右手',
                            prop: 'right'
                        },
                        {
                            stepindex: 7,
                            label: '右手',
                            prop: 'right'
                        },
                        {
                            stepindex: 8,
                            label: '左手',
                            prop: 'left'
                        }
                    ],
                    timeLimit: 10000
                },
                1: {
                    title: '咏春八手',
                    describe: `手掌──伏
                    手腕──圈、构
                    前臂──枕、摊、膀、刮及捞。
                    全臂──冲包括拳、掌、间、标及拂〈问〉`,
                    videoSrc: '',
                    steps: [
                        {
                            stepindex: 1,
                            label: '左手',
                            prop: 'left'
                        },
                        {
                            stepindex: 2,
                            label: '右手',
                            prop: 'right'
                        },
                    ],
                    timeLimit: 8
                },
                2: {
                    title: '纯手法',
                    describe: `窒
                    标
                    冲
                    拍
                    揿/㩒〈按〉手
                    圈
                    构
                    拂〈发〉手
                    刮
                    脱〈削〉
                    擸〈擒〉
                    托〈拿〉`,
                    videoSrc: '',
                    steps: [
                        {
                            stepindex: 1,
                            label: '左手',
                            prop: 'left'
                        },
                        {
                            stepindex: 2,
                            label: '右手',
                            prop: 'right'
                        },
                        {
                            stepindex: 3,
                            label: '左手',
                            prop: 'left'
                        }
                    ],
                    timeLimit: 5
                }
            }

            return {
                httpCode: 200,
                message: 'ok',
                data: strategy[levelId]
            }
        }
    }
]