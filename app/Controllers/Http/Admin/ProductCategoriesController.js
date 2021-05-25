"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProductCategory"));
class ProductCategoriesController {
    async store({ request }) {
        const category = new ProductCategory_1.default();
        category.name = request.input('name');
        await category.save();
        return category;
    }
}
exports.default = ProductCategoriesController;
//# sourceMappingURL=ProductCategoriesController.js.map