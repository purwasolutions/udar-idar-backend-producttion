"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProductCategory"));
class ProductCategoriesController {
    async paginate({ response, request }) {
        const query = request.qs();
        const page = query.page || 1;
        const perPage = query.length || 10;
        const categories = await ProductCategory_1.default.query().paginate(page, perPage);
        return response.json(categories);
    }
}
exports.default = ProductCategoriesController;
//# sourceMappingURL=ProductCategoriesController.js.map