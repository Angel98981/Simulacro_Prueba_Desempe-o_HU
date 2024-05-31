import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}
  async create(
    createAuthDto: CreateAuthorDto,
  ): Promise<{ message: string; data: Author }> {
    try {
      const author: Author = await this.authorRepository.create(createAuthDto);
      console.log(author);
      await this.authorRepository.save(author);
      return {
        message: 'Author saved successfully',
        data: author,
      };
    } catch (err) {
      return {
        message: 'Author saved successfully',
        data: null,
      };
    }
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    try {
      const author = await this.authorRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!author) {
        throw new NotFoundException('Author not found');
      }
      return author;
    } catch (error) {
      throw new NotFoundException('Author not found');
    }
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author: Author = await this.authorRepository.findOne({
      where: {
        id: id,
      },
    });
    Object.assign(author, updateAuthorDto);
    return await this.authorRepository.save(author);
  }

  async remove(id: number): Promise<Author> {
    const author = await this.authorRepository.findOne({
      where: {
        id: id,
      },
    });
    return await this.authorRepository.softRemove(author);
  }
}
