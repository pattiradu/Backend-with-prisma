-- CreateTable
CREATE TABLE `tbl_roles` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_roles_role_name_key`(`role_name`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `names` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user` (
    `u_id` INTEGER NOT NULL AUTO_INCREMENT,
    `u_names` VARCHAR(191) NOT NULL,
    `u_phone` VARCHAR(191) NOT NULL,
    `u_usersname` VARCHAR(191) NOT NULL,
    `u_email` VARCHAR(191) NOT NULL,
    `u_password` VARCHAR(191) NOT NULL,
    `u_role_id` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_user_u_usersname_key`(`u_usersname`),
    UNIQUE INDEX `tbl_user_u_email_key`(`u_email`),
    PRIMARY KEY (`u_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_doctors` (
    `doctor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `specialization` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`doctor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_appointments` (
    `appointment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctor_id` INTEGER NOT NULL,
    `patient_name` VARCHAR(191) NOT NULL,
    `appointment_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`appointment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_solved_appointments` (
    `solved_id` INTEGER NOT NULL AUTO_INCREMENT,
    `appointment_id` INTEGER NOT NULL,
    `doctor_id` INTEGER NOT NULL,
    `patient_name` VARCHAR(191) NOT NULL,
    `appointment_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `solved_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`solved_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_heart_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patient_name` VARCHAR(191) NOT NULL,
    `heartbeat` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_users` ADD CONSTRAINT `tbl_users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_u_role_id_fkey` FOREIGN KEY (`u_role_id`) REFERENCES `tbl_roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_appointments` ADD CONSTRAINT `tbl_appointments_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `tbl_doctors`(`doctor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_solved_appointments` ADD CONSTRAINT `tbl_solved_appointments_appointment_id_fkey` FOREIGN KEY (`appointment_id`) REFERENCES `tbl_appointments`(`appointment_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_solved_appointments` ADD CONSTRAINT `tbl_solved_appointments_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `tbl_doctors`(`doctor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
