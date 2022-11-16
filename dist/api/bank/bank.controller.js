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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const bank_service_1 = require("./bank.service");
const bank_dto_1 = require("./bank.dto");
const transaction_service_1 = require("../transaction/transaction.service");
const transaction_dto_1 = require("../transaction/transaction.dto");
let BankController = class BankController {
    constructor(service, transaction) {
        this.service = service;
        this.transaction = transaction;
    }
    async create(bank) {
        return await this.service.create(bank);
    }
    async transactionCreate(bank) {
        return await this.transaction.create(bank);
    }
};
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_dto_1.BankCreate]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('trasaction'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.TransactionCreate]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "transactionCreate", null);
BankController = __decorate([
    (0, common_1.Controller)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService, transaction_service_1.TransactionService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map