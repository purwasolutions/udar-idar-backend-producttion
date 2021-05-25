"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class OrderItems extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'order_items';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('order_id').unsigned();
            table.integer('store_id').unsigned().nullable();
            table.string('name');
            table.integer('quantity');
            table.double('price');
            table.text('note').nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('order_id', 'id').references('orders');
            table.foreign('store_id', 'id').references('stores');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = OrderItems;
//# sourceMappingURL=1621832921006_order_items.js.map