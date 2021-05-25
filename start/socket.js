"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
const Ws_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/Ws"));
Ws_1.default.boot();
Ws_1.default.io.use((socket, next) => {
    const uid = socket.handshake.auth.uid;
    if (!uid) {
        return next(new Error('UID Uninitialized'));
    }
    socket.uid = uid;
    Event_1.default.emit('PrivateMessage:onInitialize', {
        uid,
        socketId: socket.id
    });
    next();
});
Ws_1.default.io.on('connection', (socket) => {
    socket.on('PrivateMessage:sendMessage', ({ content, to }) => {
        Event_1.default.emit('PrivateMessage:sendMessage', {
            from: socket.id,
            to,
            content
        });
        socket.to(to).emit('PrivateMessage:sendMessage', {
            content,
            from: socket.id
        });
        socket.emit('PrivateMessage:receiveMessage', {
            content,
            from: socket.id
        });
    });
});
//# sourceMappingURL=socket.js.map