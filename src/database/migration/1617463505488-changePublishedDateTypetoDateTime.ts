import {MigrationInterface, QueryRunner} from "typeorm";

export class changePublishedDateTypetoDateTime1617463505488 implements MigrationInterface {
    name = 'changePublishedDateTypetoDateTime1617463505488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `blog_entry` DROP COLUMN `publishedDate`");
        await queryRunner.query("ALTER TABLE `blog_entry` ADD `publishedDate` datetime NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `blog_entry` DROP COLUMN `publishedDate`");
        await queryRunner.query("ALTER TABLE `blog_entry` ADD `publishedDate` date NULL DEFAULT 'NULL'");
    }

}
