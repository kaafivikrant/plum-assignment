import {
    Controller,
    Post,
    UseGuards,
    Body,
    Get,
    Param,
    ParseIntPipe,
    UseInterceptors,
    ClassSerializerInterceptor,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    Patch,
  } from '@nestjs/common';
  
  import { BankService } from './bank.service';
  import { BankCreate } from './bank.dto';
  import { User } from '../user/user.entity';
  import { Bank } from './bank.entity';
import { TransactionService } from '../transaction/transaction.service';
import { Transaction } from '../transaction/transaction.entity';
import { TransactionCreate } from '../transaction/transaction.dto';
  
@Controller('bank')
export class BankController {
  constructor(private readonly service: BankService, private transaction: TransactionService) {}

  @Post('add')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() bank: BankCreate): Promise<Bank> {
      return await this.service.create(bank);
  }

  @Post('trasaction')
  @UseInterceptors(ClassSerializerInterceptor)
  async transactionCreate(@Body() bank: TransactionCreate): Promise<Transaction> {
      return await this.transaction.create(bank);
  }

}
