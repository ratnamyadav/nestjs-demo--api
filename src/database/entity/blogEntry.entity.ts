import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommentEntity } from './comment.entity';

@Entity('blog_entry')
export class BlogEntryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: 0 })
  likes: number;

  @Column({ nullable: true, type: 'datetime' })
  publishedDate: Date;

  @Column({ default: true })
  isPublished: boolean;

  @OneToMany(() => CommentEntity, (comment) => comment.blogEntry)
  comments: CommentEntity[];
}
