"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    let Port = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(Port);
    console.log("Listen Port >>>", Port);
}
bootstrap();
//# sourceMappingURL=main.js.map