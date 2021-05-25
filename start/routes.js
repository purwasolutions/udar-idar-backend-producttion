"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default
    .group(() => {
    Route_1.default.post('/', 'UsersController.register');
    Route_1.default.get('/', 'UsersController.loggedUser').middleware('firebase');
})
    .prefix('user');
Route_1.default
    .group(() => {
    Route_1.default.group(() => {
        Route_1.default.post('/', 'ProductCategoriesController.store');
    }).prefix('product-categories');
})
    .prefix('admin')
    .namespace('App/Controllers/Http/Admin');
Route_1.default
    .group(() => {
    Route_1.default
        .group(() => {
        Route_1.default
            .post('/', 'ProductsController.store');
    })
        .prefix('products');
})
    .prefix('store')
    .namespace('App/Controllers/Http/Store');
Route_1.default
    .group(() => {
    Route_1.default.get('/product-categories', 'ProductCategoriesController.paginate');
    Route_1.default.get('/products', 'ProductsController.paginate');
    Route_1.default.get('/products/:id', 'ProductsController.findById');
});
//# sourceMappingURL=routes.js.map