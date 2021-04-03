import { Test, TestingModule } from '@nestjs/testing';
import { BlogEntryService } from './blog-entry.service';

describe('BlogEntryService', () => {
  let service: BlogEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogEntryService],
    }).compile();

    service = module.get<BlogEntryService>(BlogEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
