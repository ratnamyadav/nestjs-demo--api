import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { BlogEntryService } from './blog-entry.service';
import { BlogEntryEntity } from '../database/entity/blogEntry.entity';
import { BlogEntryDto } from './blog-entry.dto';
import { ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../pipes/joiValidation.pipe';

const createBlogEntrySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  body: Joi.string().required(),
  publishedDate: Joi.date(),
});

@Controller('blog-entry')
export class BlogEntryController {
  constructor(private readonly blogEntryService: BlogEntryService) {}

  @Get()
  async findAll(): Promise<BlogEntryEntity[]> {
    return this.blogEntryService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Gets record from database',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BlogEntryEntity> {
    const blogEntry = await this.blogEntryService.findOne(id);
    if (blogEntry) {
      return blogEntry;
    } else {
      throw new NotFoundException();
    }
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Returns created object',
  })
  @UsePipes(new JoiValidationPipe(createBlogEntrySchema))
  async create(@Body() blogEntry: BlogEntryDto): Promise<BlogEntryEntity> {
    return this.blogEntryService.create(blogEntry);
  }
}
