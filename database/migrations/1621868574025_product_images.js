"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class ProductImages extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'product_images';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('product_id').unsigned();
            table.string('path');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('product_id', 'id').references('products');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = ProductImages;
//# sourceMappingURL=1621868574025_product_images.js.map