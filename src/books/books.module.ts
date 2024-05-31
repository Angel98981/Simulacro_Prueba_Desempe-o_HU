import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Books } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books, Author])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
