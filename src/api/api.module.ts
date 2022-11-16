import { Module } from '@nestjs/common';
import { BankModule } from './bank/bank.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, BankModule],
})
export class ApiModule {}
