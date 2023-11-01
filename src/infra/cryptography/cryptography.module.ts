import { Module } from '@nestjs/common';
import { JwtEncrypter } from './jwtEncrypter';
import { BcryptHasher } from './bcryptHasher';
import { Encrypter } from '@/modules/cryptography/encrypter';
import { HashComparer } from '@/modules/cryptography/hashComparer';
import { HashGenerator } from '@/modules/cryptography/hashGenerator';

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [
    Encrypter,
    HashComparer,
    HashGenerator,
  ],
})
export class CryptographyModule {}
