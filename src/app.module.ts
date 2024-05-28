import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { OffersModule } from './offers/offers.module';
import { Offer } from './offers/entities/offer.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Offer],
      synchronize: true
    }),
    UsersModule,
    OffersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
