import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Bank } from './bank.entity';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TransactionService } from '../transaction/transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bank]), TransactionService],
  providers: [BankService],
  controllers: [BankController],
})
export class BankModule {}
