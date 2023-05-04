"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const PROT = process.env.PROT || 3002;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), { cors: true });
    await app.listen(PROT, '0.0.0.0');
    console.log(`http://localhost:${PROT}`);
    console.log(`${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map