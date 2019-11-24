import WebSocketAPI from 'magicws-api';

export default class CtpServer extends WebSocketAPI {
    constructor(port = 1241) {
        super({ port });
    }
};