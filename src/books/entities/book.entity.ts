import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Author } from 'src/authors/entities/author.entity';
import { Sales } from 'src/sales/entities/sale.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publication_date: Date;

  @Column('float')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ type: 'int' })
  availableBooks: number;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: 'Authors_idAuthors' })
  author: Author;

  @OneToOne(() => Sales, (sale) => sale.books)
  sales: Sales;
}
