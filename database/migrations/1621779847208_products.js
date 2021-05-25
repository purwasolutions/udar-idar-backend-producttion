"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Products extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'products';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('store_id').unsigned();
            table.integer('product_category_id').unsigned();
            table.string('name');
            table.double('price');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('store_id', 'id').references('stores');
            table.foreign('product_category_id', 'id').references('product_categories');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Products;
//# sourceMappingURL=1621779847208_products.js.map