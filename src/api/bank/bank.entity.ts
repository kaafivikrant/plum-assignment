import {
Entity,
PrimaryGeneratedColumn,
Column,
UpdateDateColumn,
CreateDateColumn,
ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from '../user/user.entity';

@Entity()
export class Bank {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    account_number: number;

    @Column()
    account_name: string;

    @Column()
    age: number;

    @Column({
        default: 0,
    })
    balance: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
