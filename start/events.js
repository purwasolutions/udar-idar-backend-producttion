"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
Event_1.default.on('PrivateMessage:onInitialize', 'PrivateMessage.onInitialize');
Event_1.default.on('PrivateMessage:sendMessage', 'PrivateMessage.sendMessage');
//# sourceMappingURL=events.js.map