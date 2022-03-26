-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.11-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for vehicle_manger
CREATE DATABASE IF NOT EXISTS `vehicle_manger` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `vehicle_manger`;

-- Dumping structure for table vehicle_manger.addvertisement
CREATE TABLE IF NOT EXISTS `addvertisement` (
    `addID` int(11) NOT NULL AUTO_INCREMENT,
    `addDate` datetime DEFAULT CURRENT_TIMESTAMP,
    `vehicleType` varchar(50) DEFAULT NULL,
    `model` varchar(50) DEFAULT NULL,
    `YOM` year(4) DEFAULT NULL,
    `transmission` varchar(50) DEFAULT NULL,
    `engine_cap` varchar(50) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `brand` varchar(255) DEFAULT NULL,
    `edition` varchar(255) DEFAULT NULL,
    `condition` varchar(50) DEFAULT NULL,
    `fuelType` varchar(50) DEFAULT NULL,
    `mileage` varchar(50) DEFAULT NULL,
    `imageURL` varchar(255) DEFAULT NULL,
    `sellerName` varchar(255) DEFAULT NULL,
    `price` decimal(20,2) DEFAULT NULL,
    `contactNo` varchar(20) DEFAULT NULL,
    PRIMARY KEY (`addID`)
    ) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.addvertisement: ~2 rows (approximately)
/*!40000 ALTER TABLE `addvertisement` DISABLE KEYS */;
REPLACE INTO `addvertisement` (`addID`, `addDate`, `vehicleType`, `model`, `YOM`, `transmission`, `engine_cap`, `description`, `brand`, `edition`, `condition`, `fuelType`, `mileage`, `imageURL`, `sellerName`, `price`, `contactNo`) VALUES
	(2, '2022-03-26 12:55:01', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(3, '2022-03-26 12:55:04', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(4, '2022-03-26 12:55:29', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(5, '2022-03-26 12:55:30', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(6, '2022-03-26 12:55:30', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(7, '2022-03-26 12:55:31', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(8, '2022-03-26 12:55:32', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(9, '2022-03-26 12:55:42', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(10, '2022-03-26 12:55:43', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(11, '2022-03-26 12:55:43', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(12, '2022-03-26 12:55:43', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(13, '2022-03-26 12:55:46', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(14, '2022-03-26 12:55:52', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(15, '2022-03-26 12:55:52', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(16, '2022-03-26 12:55:53', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(17, '2022-03-26 12:55:53', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(18, '2022-03-26 12:55:54', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(19, '2022-03-26 12:55:54', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(20, '2022-03-26 12:55:55', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(21, '2022-03-26 12:55:56', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(22, '2022-03-26 12:55:56', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(23, '2022-03-26 12:55:57', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(24, '2022-03-26 12:55:57', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(25, '2022-03-26 12:55:58', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(26, '2022-03-26 12:55:58', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(27, '2022-03-26 12:55:59', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(28, '2022-03-26 12:55:59', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256'),
	(29, '2022-03-26 12:56:00', 'CAR', 'PRIUS', '2022', '1500', '1000', 'Superb ', 'TOYOTA', '2022', '85%', 'PETROL', '26000KM', NULL, 'Shanka', 750000.00, '075465256');
/*!40000 ALTER TABLE `addvertisement` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.appointment
CREATE TABLE IF NOT EXISTS `appointment` (
    `appID` int(11) NOT NULL AUTO_INCREMENT,
    `userID` varchar(50) NOT NULL,
    `date` datetime DEFAULT NULL,
    `time` datetime DEFAULT NULL,
    `vehicleID` int(11) DEFAULT NULL,
    `status` varchar(50) DEFAULT NULL,
    `feedbackID` int(11) DEFAULT NULL,
    `service_ID` varchar(50) DEFAULT NULL,
    `price` decimal(10,2) DEFAULT NULL,
    `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`appID`),
    KEY `vehicleID` (`vehicleID`),
    KEY `feedbackID` (`feedbackID`),
    KEY `service_ID` (`service_ID`),
    CONSTRAINT `feedbackID` FOREIGN KEY (`feedbackID`) REFERENCES `feedback` (`feedbackID`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `service_ID` FOREIGN KEY (`service_ID`) REFERENCES `services` (`serviceID`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `vehicleID` FOREIGN KEY (`vehicleID`) REFERENCES `vehicle` (`vehicleID`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.appointment: ~1 rows (approximately)
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
REPLACE INTO `appointment` (`appID`, `userID`, `date`, `time`, `vehicleID`, `status`, `feedbackID`, `service_ID`, `price`, `addTime`) VALUES
	(5, '23', '2018-03-29 13:34:00', '2018-03-29 13:34:00', 1, 'PENDING', NULL, 'S002', 78000.00, '2022-03-19 12:43:11');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.employee
CREATE TABLE IF NOT EXISTS `employee` (
    `emp_id` varchar(50) NOT NULL,
    `emp_name` varchar(255) NOT NULL,
    `emp_nic` varchar(20) NOT NULL,
    `emp_mobile` varchar(20) NOT NULL,
    `emp_pwd` varchar(20) NOT NULL,
    `emp_type` varchar(20) NOT NULL,
    `emp_status` varchar(20) NOT NULL,
    PRIMARY KEY (`emp_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.employee: ~2 rows (approximately)
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
REPLACE INTO `employee` (`emp_id`, `emp_name`, `emp_nic`, `emp_mobile`, `emp_pwd`, `emp_type`, `emp_status`) VALUES
	('E002', 'Dhanushka', '953564327V', '0754934066', '1234', 'WORKER', 'ACTIVE'),
	('E003', 'Asanka', '695656522V', '0755568356', '1234', 'WORKER', 'ACTIVE');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
    `feedbackID` int(11) NOT NULL AUTO_INCREMENT,
    `rate` int(11) DEFAULT '0',
    PRIMARY KEY (`feedbackID`)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.feedback: ~4 rows (approximately)
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
REPLACE INTO `feedback` (`feedbackID`, `rate`) VALUES
	(1, 1),
	(2, 2),
	(3, 3),
	(4, 4),
	(5, 5);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.payment
CREATE TABLE IF NOT EXISTS `payment` (
    `paymentID` int(11) NOT NULL AUTO_INCREMENT,
    `date` datetime DEFAULT NULL,
    `appID` int(11) DEFAULT NULL,
    `type` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`paymentID`),
    KEY `appIDa` (`appID`),
    CONSTRAINT `appIDa` FOREIGN KEY (`appID`) REFERENCES `appointment` (`appID`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.payment: ~0 rows (approximately)
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.services
CREATE TABLE IF NOT EXISTS `services` (
    `serviceID` varchar(50) NOT NULL,
    `serviceType` varchar(50) DEFAULT NULL,
    `price` decimal(10,2) DEFAULT NULL,
    PRIMARY KEY (`serviceID`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.services: ~2 rows (approximately)
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
REPLACE INTO `services` (`serviceID`, `serviceType`, `price`) VALUES
	('S002', 'AAAA', 50000.00),
	('S003', 'SSSSS', 45000.00);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.sessiontable
CREATE TABLE IF NOT EXISTS `sessiontable` (
    `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    `expires` int(11) unsigned NOT NULL,
    `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
    PRIMARY KEY (`session_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.sessiontable: ~0 rows (approximately)
/*!40000 ALTER TABLE `sessiontable` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessiontable` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.users
CREATE TABLE IF NOT EXISTS `users` (
    `userID` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `userType` varchar(20) NOT NULL,
    `firstName` varchar(255) DEFAULT NULL,
    `lastName` varchar(255) DEFAULT NULL,
    `contact` varchar(10) DEFAULT NULL,
    `nic` varchar(10) DEFAULT NULL,
    PRIMARY KEY (`userID`)
    ) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`userID`, `email`, `password`, `userType`, `firstName`, `lastName`, `contact`, `nic`) VALUES
	(23, 'danushkasasanka@gmail.com', '$2a$12$m7DAC8aA7eXLMyMD45deKOspsVokiQtFM8LjvDNe60t49T1dNmdLK', 'CUSTOMER', NULL, NULL, NULL, NULL),
	(24, 'Dhanu@gmai.com', '$2a$12$1ZJLE0uXYx6XklP0SmR5Iu.AnbnrEgCnlM6qLPV2KZe9NWAeoe2xK', 'CUSTOMER', 'Dulip', 'Wejeweera', '075484521', '09165345V'),
	(25, 'Dhanu1@gmai.com', '$2a$12$fo/MEwAFIhT.KovqRoHX/uvzMXV2HKsVMndnu5gywKSTxZouxB3B6', 'CUSTOMER', 'Dulip', 'Wejeweera', '075484521', '09165345V'),
	(26, 'Dhanu21@gmai.com', '$2a$12$kji3s0O5FOv5oyrxYsbcdOCzbrETTb.6R0HrMzPRxAbnU9zIUMFQu', 'CUSTOMER', 'Dulip', 'Wejeweera', '075484521', '09165345V');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table vehicle_manger.vehicle
CREATE TABLE IF NOT EXISTS `vehicle` (
    `vehicleID` int(11) NOT NULL AUTO_INCREMENT,
    `vehicleType` varchar(50) DEFAULT NULL,
    `regNo` varchar(50) DEFAULT NULL,
    `customerID` int(11) DEFAULT NULL,
    PRIMARY KEY (`vehicleID`),
    KEY `customerID` (`customerID`),
    CONSTRAINT `customerID` FOREIGN KEY (`customerID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table vehicle_manger.vehicle: ~3 rows (approximately)
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
REPLACE INTO `vehicle` (`vehicleID`, `vehicleType`, `regNo`, `customerID`) VALUES
	(1, 'CAR', 'PA 2856', 23),
	(2, 'CAR', 'PA 2856', 23),
	(3, 'AAA', 'PA 2856', 23);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
