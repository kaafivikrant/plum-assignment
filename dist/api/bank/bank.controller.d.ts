import { BankService } from './bank.service';
import { BankCreate } from './bank.dto';
import { Bank } from './bank.entity';
import { TransactionService } from '../transaction/transaction.service';
import { Transaction } from '../transaction/transaction.entity';
import { TransactionCreate } from '../transaction/transaction.dto';
export declare class BankController {
    private readonly service;
    private transaction;
    constructor(service: BankService, transaction: TransactionService);
    create(bank: BankCreate): Promise<Bank>;
    transactionCreate(transactionvalues: TransactionCreate): Promise<TransactionCreate & Transaction>;
}
