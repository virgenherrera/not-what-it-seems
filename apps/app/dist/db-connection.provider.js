"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DbConnectionProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnectionProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const url_1 = require("url");
let DbConnectionProvider = DbConnectionProvider_1 = class DbConnectionProvider {
    constructor(configService) {
        this.configService = configService;
    }
    static forRootAsync() {
        return mongoose_1.MongooseModule.forRootAsync({
            useClass: DbConnectionProvider_1,
            imports: [config_1.ConfigModule],
        });
    }
    createMongooseOptions() {
        const MONGO_URI = this.configService.get('MONGO_URI');
        if (!MONGO_URI) {
            throw new Error('forgot to provide MONGO_URI env variable.');
        }
        const url = (0, url_1.parse)(MONGO_URI, false);
        if (url.protocol !== 'mongodb:' || !url.auth || !url.port || !url.path) {
            throw new Error('you provided and invalid formatted MONGO_URI env variable.');
        }
        return { uri: url.href };
    }
};
DbConnectionProvider = DbConnectionProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DbConnectionProvider);
exports.DbConnectionProvider = DbConnectionProvider;
//# sourceMappingURL=db-connection.provider.js.map