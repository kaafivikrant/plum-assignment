import { IsDefined, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { Exclude, Type } from 'class-transformer';

import { User } from '../user/user.entity';

export class TransactionCreate {

    @IsDefined()
    @IsInt()
    @Type(() => Number)
    amount: number;

    @IsDefined()
    @IsInt()
    @Type(() => Number)
    bank_sender: number;

    @IsDefined()
    @IsInt()
    @Type(() => Number)
    bank_receiver: number;

}
