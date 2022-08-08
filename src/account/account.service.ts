import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { CreateAcccountDto } from './dto/create-account.dto';
import { Account } from './schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async createAccount(accountDto: CreateAcccountDto): Promise<Account> {
    return this.accountRepository.create({
      owner: accountDto.owner,
    });
  }
}
