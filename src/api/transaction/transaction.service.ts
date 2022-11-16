import {
    Injectable,
    NotFoundException,
    ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transaction } from './transaction.entity';
import { TransactionCreate } from './transaction.dto';
import { User } from '../user/user.entity';

@Injectable()
export class TransactionService {
constructor(
    @InjectRepository(Transaction)
    private readonly repo: Repository<Transaction>,
) {}

async create(transaction: TransactionCreate): Promise<Transaction> {
    try{
        const newTransaction = this.repo.create(transaction);
        return await this.repo.save(newTransaction);
    } catch (e) {
        throw new ForbiddenException(e.message);
    }
}

}
