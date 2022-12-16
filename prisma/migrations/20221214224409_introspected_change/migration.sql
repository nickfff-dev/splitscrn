-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deposit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `txHash` VARCHAR(191) NOT NULL,
    `credits` INTEGER NOT NULL,
    `walletId` INTEGER NOT NULL,
    `fees` DOUBLE NULL,

    INDEX `Deposit_walletId_idx`(`walletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `draft` (
    `name` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NULL,
    `time` VARCHAR(191) NULL,
    `leagueId` INTEGER NULL,

    UNIQUE INDEX `Draft_name_key`(`name`),
    INDEX `Draft_leagueId_idx`(`leagueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fixture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MatchId` VARCHAR(191) NOT NULL,
    `DateTime_UTC` VARCHAR(191) NOT NULL,
    `Team1` VARCHAR(191) NOT NULL,
    `Team2` VARCHAR(191) NOT NULL,
    `Tab` VARCHAR(191) NOT NULL,
    `leagueId` INTEGER NULL,

    INDEX `Fixture_leagueId_idx`(`leagueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `league` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NULL,
    `buyIn` VARCHAR(255) NULL,
    `buyInFee` INTEGER NULL,
    `inviteOnly` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,
    `maxPlayers` INTEGER NOT NULL,
    `minPlayers` INTEGER NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `inviteCode` VARCHAR(255) NULL,
    `endDate` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `draftTime` VARCHAR(191) NOT NULL,
    `points` DOUBLE NULL,
    `draftReady` BOOLEAN NOT NULL DEFAULT false,
    `populateRosters` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `League_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mainwallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DOUBLE NOT NULL,
    `credits` INTEGER NOT NULL,
    `houseFee` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `points` DOUBLE NULL,
    `leagueId` INTEGER NULL,
    `adc` VARCHAR(100) NULL,
    `jungle` VARCHAR(100) NULL,
    `mid` VARCHAR(100) NULL,
    `support` VARCHAR(100) NULL,
    `team` VARCHAR(100) NULL,
    `top` VARCHAR(100) NULL,
    `fantasyname` VARCHAR(255) NULL,
    `leaguename` VARCHAR(255) NULL,
    `draftOrder` INTEGER NULL,
    `draftName` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,
    `confirmedAttendance` BOOLEAN NULL DEFAULT false,
    `inviteCode` VARCHAR(255) NULL,
    `inviteComplete` BOOLEAN NULL DEFAULT false,
    `isReady` BOOLEAN NULL DEFAULT false,
    `adcPoints` DOUBLE NULL,
    `junglePoints` DOUBLE NULL,
    `midPoints` DOUBLE NULL,
    `supportPoints` DOUBLE NULL,
    `teamPoints` DOUBLE NULL,
    `topPoints` DOUBLE NULL,

    UNIQUE INDEX `Participant_fantasyname_key`(`fantasyname`),
    INDEX `Participant_draftName_idx`(`draftName`),
    INDEX `Participant_leagueId_idx`(`leagueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playerresult` (
    `name` VARCHAR(191) NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `creepScore` INTEGER NULL,
    `visionScore` INTEGER NULL,
    `kills` INTEGER NULL,
    `deaths` INTEGER NULL,
    `assists` INTEGER NULL,
    `game` VARCHAR(191) NOT NULL,
    `teamTotalKills` INTEGER NULL,
    `points` DOUBLE NULL,
    `leagueId` INTEGER NULL,
    `date` VARCHAR(191) NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `participantId` INTEGER NOT NULL,
    `playerId` INTEGER NULL,
    `team1` VARCHAR(191) NULL,
    `team2` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,

    INDEX `PlayerResult_leagueId_idx`(`leagueId`),
    UNIQUE INDEX `PlayerResult_name_game_participantId_key`(`name`, `game`, `participantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NULL,
    `team` VARCHAR(100) NULL,
    `position` VARCHAR(100) NOT NULL,
    `points` DOUBLE NULL,
    `leagueId` INTEGER NULL,
    `selected` BOOLEAN NULL DEFAULT false,
    `selectedBy` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,

    INDEX `Players_leagueId_idx`(`leagueId`),
    UNIQUE INDEX `Players_name_leagueId_key`(`name`, `leagueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teamresult` (
    `game` VARCHAR(191) NOT NULL,
    `teamKills` INTEGER NULL,
    `dragonKills` INTEGER NULL,
    `riftHeraldKills` INTEGER NULL,
    `turretKills` INTEGER NULL,
    `inhibitorKills` INTEGER NULL,
    `baronKills` INTEGER NULL,
    `didWin` BOOLEAN NULL,
    `points` DOUBLE NULL,
    `leagueId` INTEGER NULL,
    `date` VARCHAR(191) NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `participantId` INTEGER NOT NULL,
    `teamId` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `team1` VARCHAR(191) NULL,
    `team2` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,

    INDEX `TeamResult_leagueId_idx`(`leagueId`),
    UNIQUE INDEX `TeamResult_name_game_participantId_key`(`name`, `game`, `participantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NULL,
    `top` VARCHAR(100) NOT NULL,
    `jungle` VARCHAR(100) NOT NULL,
    `mid` VARCHAR(100) NOT NULL,
    `adc` VARCHAR(100) NOT NULL,
    `support` VARCHAR(100) NOT NULL,
    `points` DOUBLE NULL,
    `leagueId` INTEGER NULL,
    `selected` BOOLEAN NOT NULL DEFAULT false,
    `region` VARCHAR(191) NULL,
    `selectedBy` VARCHAR(191) NULL,

    INDEX `Teams_leagueId_idx`(`leagueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `playerIn` VARCHAR(191) NOT NULL,
    `playerOut` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `participantId` INTEGER NOT NULL,
    `leagueId` INTEGER NOT NULL,

    INDEX `Trade_participantId_idx`(`participantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `userName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` BOOLEAN NULL,
    `birthDate` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `province` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `admin` BOOLEAN NOT NULL DEFAULT false,
    `walletkey` VARCHAR(191) NULL,
    `verificationCode` INTEGER NULL,

    UNIQUE INDEX `User_userName_key`(`userName`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verificationtoken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `credits` INTEGER NULL,

    UNIQUE INDEX `Wallet_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `withdrawal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `txHash` VARCHAR(191) NOT NULL,
    `credits` INTEGER NOT NULL,
    `walletId` INTEGER NOT NULL,
    `fees` DOUBLE NULL,

    UNIQUE INDEX `Withdrawal_txHash_key`(`txHash`),
    INDEX `Withdrawal_walletId_idx`(`walletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
