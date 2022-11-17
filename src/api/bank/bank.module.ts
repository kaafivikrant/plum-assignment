import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Bank } from './bank.entity';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bank]), TransactionModule],
  providers: [BankService],
  controllers: [BankController],
})
export class BankModule {}
