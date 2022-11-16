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
    export class Transaction {
        @PrimaryGeneratedColumn()
        id: number;
    
        
    }
    