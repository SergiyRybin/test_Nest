import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'hell@mail.com',
      create: Date.now(),
    };
  }
}
