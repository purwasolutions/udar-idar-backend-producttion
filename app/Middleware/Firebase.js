"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityNotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/EntityNotFoundException"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
class Firebase {
    async handle(ctx, next) {
        const idToken = ctx.request.header('Authorization');
        if (idToken) {
            const verifyToken = await firebase_admin_1.default.auth().verifyIdToken(idToken);
            if (verifyToken) {
                const user = await User_1.default.findBy('uid', verifyToken.uid);
                if (!user) {
                    throw new EntityNotFoundException_1.default('User not found');
                }
                ctx.user = user;
            }
        }
        await next();
    }
}
exports.default = Firebase;
//# sourceMappingURL=Firebase.js.map