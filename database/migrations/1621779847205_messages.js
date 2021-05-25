"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Messages extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'messages';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('from_id');
            table.string('to_id');
            table.string('content');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('from_id', 'uid').references('users');
            table.foreign('to_id', 'uid').references('users');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Messages;
//# sourceMappingURL=1621779847205_messages.js.map