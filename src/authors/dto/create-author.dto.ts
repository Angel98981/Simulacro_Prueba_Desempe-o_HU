import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The name of Author' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The last name of Author' })
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The biography of Author' })
  biography: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ description: 'The birthdate of the Author' })
  birthdate: Date;

  createdAt: number;
}
