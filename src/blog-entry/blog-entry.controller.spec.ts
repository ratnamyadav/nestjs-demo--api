import { Test, TestingModule } from '@nestjs/testing';
import { BlogEntryController } from './blog-entry.controller';

describe('BlogEntryController', () => {
  let controller: BlogEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogEntryController],
    }).compile();

    controller = module.get<BlogEntryController>(BlogEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
