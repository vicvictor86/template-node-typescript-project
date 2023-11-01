import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Encrypter } from '@/modules/cryptography/encrypter';

@Injectable()
export class JwtEncrypter implements Encrypter {
  constructor(private jwtService: JwtService) {}

  encrypt(payload: Record<string, unknown>): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
