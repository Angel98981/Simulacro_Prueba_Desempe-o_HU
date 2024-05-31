import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { Books } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private readonly booksRepository: Repository<Books>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}
  async create(
    createBookDto: CreateBookDto,
  ): Promise<{ message: string; data: Books }> {
    try {
      const author: Author = await this.authorRepository.findOne({
        where: {
          id: createBookDto.authorId,
        },
      });
      if (!author) {
        throw new Error('Author not found');
      }
      const book = this.booksRepository.create({
        title: createBookDto.title,
        publication_date: new Date(createBookDto.publication_date),
        price: createBookDto.price,
        author,
        availableBooks: createBookDto.available_books,
      });
      await this.booksRepository.save(book);

      return {
        message: 'Success',
        data: book,
      };
    } catch (err) {
      return {
        message: 'Failed to create',
        data: null,
      };
    }
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
