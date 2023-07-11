-- CreateTable
CREATE TABLE `Authorization` (
    `id` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL,
    `updateAt` DATETIME(3) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `consumerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Authorization` ADD CONSTRAINT `Authorization_consumerId_fkey` FOREIGN KEY (`consumerId`) REFERENCES `Consumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
