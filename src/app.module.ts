import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { SalesModule } from './sales/sales.module';
import { AuthorsModule } from './authors/authors.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    SalesModule,
    ClientsModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bh6z5c69loepazaeabwp-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uqgstmdemro7ohwb',
      password: 'GC9QpGk5DIf21tmSL2iK',
      database: 'bh6z5c69loepazaeabwp',
      autoLoadEntities: true,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([
      BooksModule,
      AuthorsModule,
      SalesModule,
      ClientsModule,
    ]),
  ],
  exports: [TypeOrmModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
