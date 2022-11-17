import {
    Injectable,
    NotFoundException,
    ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bank } from './bank.entity';
import { BankCreate } from './bank.dto';

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private repo: Repository<Bank>,
    ) {}

    async create(bank: BankCreate): Promise<Bank> {
        try{
            const newBank = this.repo.create(bank);
            return await this.repo.save(newBank);
        } catch (e) {
            throw new ForbiddenException(e.message);
        }
    }

    findOne(id: number): Promise<Bank> {
        return this.repo.findOne({account_number: id});
    }

    update(id: number, bank: BankCreate): Promise<Bank> {
        return this.repo.save(bank);
    }

}
