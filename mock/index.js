const Mock = require('mockjs');
const levelMocks = require('./level');
const videoMocks = require('./video');

Mock.setup({
    timeout:'200'
})

const mocks = [
    ...levelMocks,
    ...videoMocks
];


mocks.forEach(mock => {
    Mock.mock(
        new RegExp(mock.url),
        mock.method || 'get',
        mock.tpl
    )
});

module.exports = Mock;