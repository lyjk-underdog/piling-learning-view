//UDP服务
const dgram = require('dgram');
const updServer = dgram.createSocket('udp4');
updServer.bind(9090);

//websocket服务
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function (ws) {
    updServer.on('message', function (msgBuffer) {
        ws.send(msgBuffer.toString())
    });
});


