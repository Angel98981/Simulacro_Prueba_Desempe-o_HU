import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Books } from 'src/books/entities/book.entity';
import { Clients } from 'src/clients/entities/client.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sale_date: Date;

  @Column()
  amount: number;

  @Column('decimal')
  total_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Books, (book) => book.sales)
  @JoinColumn({ name: 'Books_idBooks' })
  books: Books;

  @ManyToOne(() => Clients, (client) => client.sales)
  @JoinColumn({ name: 'Client_idClient' })
  clients: Clients;
}
