import { Repository } from 'typeorm';
import { Bank } from './bank.entity';
import { BankCreate } from './bank.dto';
export declare class BankService {
    private repo;
    constructor(repo: Repository<Bank>);
    create(bank: BankCreate): Promise<Bank>;
    findOne(id: number): Promise<Bank>;
    update(id: number, bank: BankCreate): Promise<Bank>;
}
