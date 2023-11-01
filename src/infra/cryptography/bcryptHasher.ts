import { compare, hash as bcryptHash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { HashGenerator } from '@/modules/cryptography/hashGenerator';
import { HashComparer } from '@/modules/cryptography/hashComparer';

@Injectable()
export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_PASSWORD_SALT_LENGTH = 8;

  hash(plain: string): Promise<string> {
    return bcryptHash(plain, this.HASH_PASSWORD_SALT_LENGTH);
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash);
  }
}
