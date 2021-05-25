"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Districts extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'districts';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('region_id').unsigned();
            table.string('name');
            table.string('code').unique();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.foreign('region_id', 'id').references('regions');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Districts;
//# sourceMappingURL=1621771407812_districts.js.map