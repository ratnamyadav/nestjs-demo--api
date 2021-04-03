import { Module } from '@nestjs/common';
import { BlogEntryController } from './blog-entry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntryEntity } from '../database/entity/blogEntry.entity';
import { BlogEntryService } from './blog-entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntryEntity])],
  controllers: [BlogEntryController],
  providers: [BlogEntryService],
})
export class BlogEntryModule {}
