import {
Entity,
PrimaryGeneratedColumn,
Column,
UpdateDateColumn,
CreateDateColumn,
ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Bank } from '../bank/bank.entity';
    
    
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    amount: number;

    @Column()
    @ManyToOne((type) => Bank, (bank) => bank.id)
    bank_sender: number;

    @Column()
    bank_receiver: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

}
