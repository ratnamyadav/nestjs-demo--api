import {MigrationInterface, QueryRunner} from "typeorm";

export class createInitialTables1617445115698 implements MigrationInterface {
    name = 'createInitialTables1617445115698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `comment_entity` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NULL, `body` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `isPublished` tinyint NOT NULL DEFAULT 1, `blogEntryId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `blog_entry` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NULL, `description` varchar(255) NULL, `body` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `likes` int NOT NULL DEFAULT '0', `publishedDate` int NULL, `isPublished` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `comment_entity` ADD CONSTRAINT `FK_2448f70dbb3e9aa3dcc047544a1` FOREIGN KEY (`blogEntryId`) REFERENCES `blog_entry`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comment_entity` DROP FOREIGN KEY `FK_2448f70dbb3e9aa3dcc047544a1`");
        await queryRunner.query("DROP TABLE `blog_entry`");
        await queryRunner.query("DROP TABLE `comment_entity`");
    }

}
