import { ApiProperty } from '@nestjs/swagger';
//respons
export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com', description: 'unice email' })
  readonly email: string;

  @ApiProperty({ example: '1234qwe', description: 'unice passwor' })
  readonly password: string;
}
