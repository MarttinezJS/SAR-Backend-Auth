/*
  Warnings:

  - Added the required column `resumen` to the `Noticias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Noticias" ADD COLUMN     "resumen" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UsuariosApp" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "dispositivo" TEXT NOT NULL,

    CONSTRAINT "UsuariosApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partners" (
    "id" SERIAL NOT NULL,
    "imagen_url" TEXT,
    "fecha_subscripcion" TIMESTAMP(3),
    "fecha_caducidad" TIMESTAMP(3),
    "activo" BOOLEAN DEFAULT false,
    "donacion" TEXT,
    "descripcion_negocio" TEXT,
    "sitio_web" TEXT,
    "empresa" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "representante" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puntos_Url" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "Puntos_Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Partners_empresa_key" ON "Partners"("empresa");

-- CreateIndex
CREATE UNIQUE INDEX "Partners_nit_key" ON "Partners"("nit");
