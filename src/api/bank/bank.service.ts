import {
    Injectable,
    NotFoundException,
    ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bank } from './bank.entity';
import { BankCreate } from './bank.dto';
import { User } from '../user/user.entity';

@Injectable()
export class BankService {
constructor(
    @InjectRepository(Bank)
    private readonly repo: Repository<Bank>,
) {}

async create(bank: BankCreate): Promise<Bank> {
    try{
        const newBank = this.repo.create(bank);
        return await this.repo.save(newBank);
    } catch (e) {
        throw new ForbiddenException(e.message);
    }
}

}
