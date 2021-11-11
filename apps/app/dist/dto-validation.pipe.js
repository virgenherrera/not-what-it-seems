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
var DtoValidationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let DtoValidationPipe = DtoValidationPipe_1 = class DtoValidationPipe {
    constructor(validatorOptions = DtoValidationPipe_1.defaultValidatorOptions, classTransformOptions = DtoValidationPipe_1.defaultClassTransformOptions) {
        this.validatorOptions = validatorOptions;
        this.classTransformOptions = classTransformOptions;
        this.skipTypes = [Array, Boolean, Number, Object, String];
    }
    static get pipe() {
        return new DtoValidationPipe_1();
    }
    async transform(value, { metatype }) {
        if (!metatype || this.skipTypes.includes(metatype))
            return value;
        const instance = (0, class_transformer_1.plainToClass)(metatype, value, this.classTransformOptions);
        const validationErrors = await (0, class_validator_1.validate)(instance, this.validatorOptions);
        if (validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length) {
            const details = this.parseErrors(validationErrors);
            const errorResponse = {
                code: 'bad-request-error',
                message: 'Bad Request',
                details,
            };
            throw new common_1.BadRequestException(errorResponse);
        }
        return instance;
    }
    parseErrors(validationErrors, parent) {
        const initialValue = [];
        return validationErrors.reduce((accConstraints, validationError) => {
            var _a;
            const propConnector = parent ? `${parent}.` : '';
            const propertyName = `${propConnector}${validationError.property}`;
            const constraints = ((_a = validationError.children) === null || _a === void 0 ? void 0 : _a.length)
                ? this.parseErrors(validationError.children, propertyName)
                : Object.values(validationError.constraints).map((constraint) => constraint.replace(validationError.property, propertyName));
            return [...accConstraints, ...constraints];
        }, initialValue);
    }
};
DtoValidationPipe.defaultValidatorOptions = {
    whitelist: true,
    forbidNonWhitelisted: true,
    skipMissingProperties: true,
};
DtoValidationPipe.defaultClassTransformOptions = {
    excludeExtraneousValues: false,
};
DtoValidationPipe = DtoValidationPipe_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object])
], DtoValidationPipe);
exports.DtoValidationPipe = DtoValidationPipe;
//# sourceMappingURL=dto-validation.pipe.js.map