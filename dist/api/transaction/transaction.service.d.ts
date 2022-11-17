import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { TransactionCreate } from './transaction.dto';
export declare class TransactionService {
    private readonly repo;
    constructor(repo: Repository<Transaction>);
    create(transaction: TransactionCreate): Promise<TransactionCreate & Transaction>;
}
