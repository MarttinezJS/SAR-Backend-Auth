/*
  Warnings:

  - A unique constraint covering the columns `[dispositivo]` on the table `UsuariosApp` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UsuariosApp_dispositivo_key" ON "UsuariosApp"("dispositivo");
