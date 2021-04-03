import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntryEntity } from '../database/entity/blogEntry.entity';
import { CommentEntity } from '../database/entity/comment.entity';
import { BlogEntryDto } from './blog-entry.dto';

@Injectable()
export class BlogEntryService {
  constructor(
    @InjectRepository(BlogEntryEntity)
    private blogEntryEntityRepository: Repository<BlogEntryEntity>,
  ) {}

  findAll(): Promise<BlogEntryEntity[]> {
    return this.blogEntryEntityRepository.find(); // Select * from blog_entry
  }

  findOne(id: number): Promise<BlogEntryEntity> {
    return this.blogEntryEntityRepository.findOne(id);
  }

  create(blogEntryBody: BlogEntryDto): Promise<BlogEntryEntity> {
    const { title, description, body, publishedDate } = blogEntryBody;
    const blogEntry = this.blogEntryEntityRepository.create({
      title,
      description,
      body,
      publishedDate,
    });
    return this.blogEntryEntityRepository.save(blogEntry);
  }

  async update(
    id: number,
    blogEntryBody: BlogEntryDto,
  ): Promise<BlogEntryEntity> {
    console.log(JSON.stringify(blogEntryBody));
    const { title, description, body, publishedDate } = blogEntryBody;
    const blogEntry = await this.blogEntryEntityRepository.findOne(id);
    blogEntry.title = title;
    blogEntry.description = description;
    blogEntry.body = body;
    blogEntry.publishedDate = publishedDate;

    return this.blogEntryEntityRepository.save(blogEntry);
  }

  async delete(id: number): Promise<BlogEntryEntity> {
    const blogEntry = await this.blogEntryEntityRepository.findOne(id);

    return this.blogEntryEntityRepository.remove(blogEntry);
  }

  async getComments(id: number): Promise<CommentEntity[]> {
    const blogEntry = await this.blogEntryEntityRepository.findOne(id);

    return blogEntry.comments;
  }
}
