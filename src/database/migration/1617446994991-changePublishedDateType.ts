import {MigrationInterface, QueryRunner} from "typeorm";

export class changePublishedDateType1617446994991 implements MigrationInterface {
    name = 'changePublishedDateType1617446994991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `blog_entry` DROP COLUMN `publishedDate`");
        await queryRunner.query("ALTER TABLE `blog_entry` ADD `publishedDate` date NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `blog_entry` DROP COLUMN `publishedDate`");
        await queryRunner.query("ALTER TABLE `blog_entry` ADD `publishedDate` int NULL DEFAULT 'NULL'");
    }

}
