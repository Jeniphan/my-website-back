-- CreateTable
CREATE TABLE `Contacts` (
    `id` VARCHAR(255) NOT NULL,
    `platFormName` VARCHAR(255) NULL,
    `platFormId` VARCHAR(255) NOT NULL,
    `authorId` VARCHAR(255) NULL,
    `platFormLink` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,

    INDEX `authorId`(`authorId`),
    INDEX `platFormId`(`platFormId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contents` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `skips` VARCHAR(255) NULL,
    `content` VARCHAR(255) NULL,
    `profilePic` VARCHAR(255) NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `isActive` BOOLEAN NOT NULL,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Educations` (
    `id` VARCHAR(255) NOT NULL,
    `start` VARCHAR(255) NULL,
    `end` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `marjor` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MyApplications` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personals` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `skips` VARCHAR(255) NULL,
    `content` VARCHAR(255) NULL,
    `resume` VARCHAR(255) NULL,
    `personalPic` VARCHAR(255) NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projects` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `date` DATETIME(0) NULL,
    `discription` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skills_back` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `discription` ENUM('Proficient', 'Intermediate', 'Basic') NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skills_front` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `discription` ENUM('Proficient', 'Intermediate', 'Basic') NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skills_soft` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `discription` ENUM('Proficient', 'Intermediate', 'Basic') NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `role` ENUM('admin', 'user') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Works` (
    `id` VARCHAR(255) NOT NULL,
    `start` VARCHAR(255) NULL,
    `end` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `marjor` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `authorId` VARCHAR(255) NULL,
    `createAt` DATETIME(0) NULL,
    `updateAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    INDEX `authorId`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlatFormTypes` (
    `id` VARCHAR(255) NOT NULL,
    `platFormName` VARCHAR(255) NULL,
    `platFormSlug` VARCHAR(255) NULL,

    UNIQUE INDEX `platFormSlug`(`platFormSlug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contacts` ADD CONSTRAINT `Contacts_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Contacts` ADD CONSTRAINT `fk_contacts_platFormType` FOREIGN KEY (`platFormId`) REFERENCES `PlatFormTypes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Contents` ADD CONSTRAINT `Contents_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Educations` ADD CONSTRAINT `Educations_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Personals` ADD CONSTRAINT `Personals_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Skills_back` ADD CONSTRAINT `Skills_back_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Skills_front` ADD CONSTRAINT `Skills_front_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Skills_soft` ADD CONSTRAINT `Skills_soft_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Works` ADD CONSTRAINT `Works_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
