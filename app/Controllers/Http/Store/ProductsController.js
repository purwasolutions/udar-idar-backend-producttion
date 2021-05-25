"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityNotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/EntityNotFoundException"));
const Product_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Product"));
const ProductCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProductCategory"));
const Store_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Store"));
class ProductsController {
    async store({ response, request }) {
        const store = await Store_1.default.firstOrCreate({ id: 1 }, {
            name: 'TesterStore',
            address: 'Jalan Raya Wanayasa Timur No 23',
            villageId: 1
        });
        if (!store) {
            throw new EntityNotFoundException_1.default('Store not found');
        }
        const category = await ProductCategory_1.default.findBy('id', request.input('categoryId'));
        if (!category) {
            throw new EntityNotFoundException_1.default('Category not found');
        }
        const product = new Product_1.default();
        product.name = request.input('name');
        product.price = request.input('price');
        product.categoryId = category.id;
        product.storeId = store.id;
        await product.save();
        return response.json(product.serialize());
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsController.js.map