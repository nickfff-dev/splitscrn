-- This is an empty migration.

ALTER TABLE `account` ADD  FOREIGN KEY (`userId`) REFERENCES `usx`er` (`id`) ON DELETE CASCADE;


ALTER TABLE `session` ADD  FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

