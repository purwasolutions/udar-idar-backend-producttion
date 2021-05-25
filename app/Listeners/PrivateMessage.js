"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Message"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class PrivateMessage {
    async onInitialize(props) {
        const { uid, socketId } = props;
        const user = await User_1.default.findBy('uid', uid);
        if (user) {
            user.socketId = socketId;
            await user.save();
        }
    }
    async sendMessage(props) {
        const user = await User_1.default.findBy('socket_id', props.from);
        if (user) {
            const message = new Message_1.default();
            message.fromId = user.id;
            message.toId = user.id;
            message.content = props.content;
            await message.save();
        }
    }
}
exports.default = PrivateMessage;
//# sourceMappingURL=PrivateMessage.js.map