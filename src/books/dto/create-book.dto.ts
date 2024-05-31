import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsArray,
  Matches,
  IsInt,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The publication date', example: '2023-05-30' })
  @IsDate()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'publicationDate must be in the format YYYY-MM-DD',
  })
  publication_date: Date;

  @ApiProperty({ description: 'The Price of the book' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'The Author of the book' })
  @IsInt()
  authorId: number; // Assuming authors are identified by their ID

  @ApiProperty({ description: 'The number of books availables' })
  @IsArray()
  available_books: number; // Assuming sales are identified by their ID

  @IsNumber()
  createdAt: number;
}
