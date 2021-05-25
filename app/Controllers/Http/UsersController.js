"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async register({ request }) {
        const role = await Role_1.default.firstOrCreate({ name: 'customer' });
        const user = new User_1.default();
        user.uid = request.input('uid');
        user.name = request.input('name');
        user.email = request.input('email');
        user.roleId = role.id;
        await user.save();
        return user.serialize();
    }
    async loggedUser({ response, user }) {
        return response.json(user);
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map