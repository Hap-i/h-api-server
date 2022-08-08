import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountRepository extends EntityRepository<AccountDocument> {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {
    super(accountModel);
  }
}
