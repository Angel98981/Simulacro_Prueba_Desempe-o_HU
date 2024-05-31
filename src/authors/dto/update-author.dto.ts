import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
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
}
