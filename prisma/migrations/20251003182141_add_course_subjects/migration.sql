/*
  Warnings:

  - A unique constraint covering the columns `[year,division]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "CourseSubjects" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseSubjects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseSubjects_course_id_name_key" ON "CourseSubjects"("course_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Courses_year_division_key" ON "Courses"("year", "division");

-- AddForeignKey
ALTER TABLE "CourseSubjects" ADD CONSTRAINT "CourseSubjects_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE CASCADE ON UPDATE CASCADE;
