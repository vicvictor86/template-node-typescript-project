import { Module } from '@nestjs/common';
import { AuthenticateController } from './controller/authenticate.controller';
import { CreateAccountController } from './controller/createAccount.controller';
import { DatabaseModule } from '@/database/database.module';
import { CryptographyModule } from '../cryptography/cryptography.module';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
  ],
})
export class HttpModule {}
