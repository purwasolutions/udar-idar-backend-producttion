"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityNotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/EntityNotFoundException"));
const Product_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Product"));
class ProductsController {
    async paginate({ response, request }) {
        const query = request.qs();
        const page = query.page || 1;
        const perPage = query.perPage || 10;
        const products = await Product_1.default.query().paginate(page, perPage);
        return response.json(products);
    }
    async findById({ response, request }) {
        const product = await Product_1.default.findBy('id', request.param('id'));
        if (!product) {
            throw new EntityNotFoundException_1.default('Product not found');
        }
        return response.json(product.serialize());
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsController.js.map