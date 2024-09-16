/*
  Warnings:

  - The primary key for the `character` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `leaderboard` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "character" DROP CONSTRAINT "character_gameId_fkey";

-- DropForeignKey
ALTER TABLE "leaderboard" DROP CONSTRAINT "leaderboard_gameId_fkey";

-- AlterTable
ALTER TABLE "character" DROP CONSTRAINT "character_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ADD CONSTRAINT "character_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "character_id_seq";

-- AlterTable
ALTER TABLE "game" DROP CONSTRAINT "game_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "game_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "game_id_seq";

-- AlterTable
ALTER TABLE "leaderboard" DROP CONSTRAINT "leaderboard_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gameId" SET DATA TYPE TEXT,
ADD CONSTRAINT "leaderboard_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "leaderboard_id_seq";

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
