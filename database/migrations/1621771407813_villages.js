"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Villages extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'villages';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('district_id').unsigned();
            table.string('name');
            table.string('code').unique();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('district_id', 'id').references('districts');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Villages;
//# sourceMappingURL=1621771407813_villages.js.map