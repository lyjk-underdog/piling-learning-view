const Mock = require('mockjs');
const levelMocks = require('./level');
const videoMocks = require('./video');
const rankingMocks = require('./ranking');

Mock.setup({
    timeout:'200'
})

const mocks = [
    // ...levelMocks,
    // ...videoMocks,
    ...rankingMocks
];


mocks.forEach(mock => {
    Mock.mock(
        new RegExp(mock.url),
        mock.method || 'get',
        mock.tpl
    )
});

module.exports = Mock;