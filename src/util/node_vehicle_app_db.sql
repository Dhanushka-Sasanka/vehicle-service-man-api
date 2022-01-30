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
  `addID` int(11) NOT NULL,
  `addDate` datetime DEFAULT NULL,
  `vehicleType` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `YOM` datetime DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.appointment
CREATE TABLE IF NOT EXISTS `appointment` (
  `appID` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `vehicleID` int(11) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `feedbackID` int(11) DEFAULT NULL,
  PRIMARY KEY (`appID`),
  KEY `vehicleID` (`vehicleID`),
  KEY `feedbackID` (`feedbackID`),
  CONSTRAINT `feedbackID` FOREIGN KEY (`feedbackID`) REFERENCES `feedback` (`feedbackID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehicleID` FOREIGN KEY (`vehicleID`) REFERENCES `vehicle` (`vehicleID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `feedbackID` int(11) NOT NULL AUTO_INCREMENT,
  `rate` int(11) DEFAULT '0',
  PRIMARY KEY (`feedbackID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.servicedetail
CREATE TABLE IF NOT EXISTS `servicedetail` (
  `appID` int(11) DEFAULT NULL,
  `serviceID` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  KEY `appID` (`appID`),
  KEY `serviceID` (`serviceID`),
  CONSTRAINT `appID` FOREIGN KEY (`appID`) REFERENCES `appointment` (`appID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `serviceID` FOREIGN KEY (`serviceID`) REFERENCES `services` (`serviceID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.services
CREATE TABLE IF NOT EXISTS `services` (
  `serviceID` varchar(50) NOT NULL,
  `serviceType` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`serviceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.sessiontable
CREATE TABLE IF NOT EXISTS `sessiontable` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table vehicle_manger.vehicle
CREATE TABLE IF NOT EXISTS `vehicle` (
  `vehicleID` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleType` varchar(50) DEFAULT NULL,
  `regNo` varchar(50) DEFAULT NULL,
  `customerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`vehicleID`),
  KEY `customerID` (`customerID`),
  CONSTRAINT `customerID` FOREIGN KEY (`customerID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
