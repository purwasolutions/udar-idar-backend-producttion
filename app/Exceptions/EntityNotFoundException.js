"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class EntityNotFoundException extends standalone_1.Exception {
    async handle(error, ctx) {
        ctx.response.status(404).send(error.message);
    }
}
exports.default = EntityNotFoundException;
//# sourceMappingURL=EntityNotFoundException.js.map