import { IsDefined, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { Exclude, Type } from 'class-transformer';

import { User } from '../user/user.entity';

export class BankCreate {
    @IsDefined()
    @IsInt()
    @Type(() => Number)
    account_number: number;

    @IsDefined() 
    @IsString()
    account_name: string;

    @IsDefined()
    @IsInt()
    @Type(() => Number)
    age: number;

    @IsInt()
    @Type(() => Number)
    balance: number;

}
