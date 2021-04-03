import { ApiProperty } from '@nestjs/swagger';

export class BlogEntryDto {
  @ApiProperty({
    minLength: 1,
    required: true,
  })
  title: string;

  @ApiProperty({
    minLength: 1,
    required: true,
  })
  description: string;

  @ApiProperty({
    minLength: 1,
    required: true,
  })
  body: string;

  @ApiProperty({
    description: 'Date on which the model will be published.',
    required: false,
  })
  publishedDate: Date;
}
