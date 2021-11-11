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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StuffDto = void 0;
const class_validator_1 = require("class-validator");
class StuffDto {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.Matches)(/^[A-Z0-9-]+$/, { each: true }),
    __metadata("design:type", Array)
], StuffDto.prototype, "eids", void 0);
exports.StuffDto = StuffDto;
//# sourceMappingURL=stuff.dto.js.map