import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BlogEntryModule } from './blog-entry/blog-entry.module';
import { CommentEntity } from './database/entity/comment.entity';
import { BlogEntryEntity } from './database/entity/blogEntry.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [BlogEntryEntity, CommentEntity],
      synchronize: false,
    }),
    BlogEntryModule,
  ],
  controllers: [],
})
export class AppModule {}
