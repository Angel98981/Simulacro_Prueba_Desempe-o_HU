import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { SalesModule } from './sales/sales.module';
import { AuthorsModule } from './authors/authors.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    SalesModule,
    ClientsModule,

    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
