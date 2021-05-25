"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Orders extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'orders';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('courier_id').unsigned();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('courier_id', 'id').references('users');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Orders;
//# sourceMappingURL=1621832911104_orders.js.map