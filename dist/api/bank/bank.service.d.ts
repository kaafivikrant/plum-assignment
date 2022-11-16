import { Repository } from 'typeorm';
import { Bank } from './bank.entity';
import { BankCreate } from './bank.dto';
export declare class BankService {
    private readonly repo;
    constructor(repo: Repository<Bank>);
    create(bank: BankCreate): Promise<Bank>;
}
