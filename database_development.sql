-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 08, 2022 at 08:10 AM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220207191056-create-user.js'),
('20220207212229-create-shorten-url.js');

-- --------------------------------------------------------

--
-- Table structure for table `shortenurls`
--

DROP TABLE IF EXISTS `shortenurls`;
CREATE TABLE IF NOT EXISTS `shortenurls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urlCode` varchar(255) DEFAULT NULL,
  `longUrl` varchar(255) DEFAULT NULL,
  `shortUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shortenurls`
--

INSERT INTO `shortenurls` (`id`, `urlCode`, `longUrl`, `shortUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'W8PFbSmxH', 'http://localhost:3000/login', 'http://localhost:3000/W8PFbSmxH', '2022-02-07 22:19:03', '2022-02-07 22:19:03'),
(2, 'Rty0wK2zI', 'http://localhost:3000/user/login', 'http://localhost:3000/Rty0wK2zI', '2022-02-07 22:25:02', '2022-02-07 22:25:02'),
(3, 'bKR2Dp1QU', 'http://localhost:3000/shortenurl/', 'http://localhost:3000/bKR2Dp1QU', '2022-02-08 04:07:28', '2022-02-08 04:07:28'),
(4, 'eFoBUD3uP', 'http://localhost:3000/shwortenurl/', 'http://localhost:3000/eFoBUD3uP', '2022-02-08 04:07:55', '2022-02-08 04:07:55'),
(5, 'LXcyt37i4', 'http://localhost:3000/users/login', 'http://localhost:3000/LXcyt37i4', '2022-02-08 06:25:12', '2022-02-08 06:25:12'),
(6, '0AuG6HZzb', 'https://ap-south-1.signin.aws/platform/login?workflowStateHandle=47039b54-3ef6-4ac0-a79e-cbe3741b4804', 'http://localhost:3000/0AuG6HZzb', '2022-02-08 06:27:35', '2022-02-08 06:27:35'),
(7, 'UG7HuWBJa', 'https://www.google.com/search?q=jade+template+registration+form+with+bootstrap&rlz=1C1CHBF_enIN914IN914&oq=jade+template+registration+form+with+bootstrap&aqs=chrome.0.69i59.12680j0j4&sourceid=chrome&ie=UTF-8', 'http://localhost:3000/UG7HuWBJa', '2022-02-08 06:34:38', '2022-02-08 06:34:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'muthu', 'sundar', 'muthusunda@gmail.com', '$2b$10$ihJFSz2MoFf1AVtJx16dVuWRXv8U8HkG/yRA9z5Sjf.ceGpUPsRYW', '2022-02-08 07:20:43', '2022-02-08 07:20:43'),
(2, 'muthu', 'sundar', 'muthusundar@gmail.com', '$2b$10$VETKg1wzewIxQuoJ0eoxkeQodziN9vSMKPmPmIB9GY8cF6EOs7H0K', '2022-02-08 07:31:57', '2022-02-08 07:31:57'),
(3, 'Muthusundar', 's', 'muthusunda12@gmail.com', '$2b$10$LVB1dSfZ5Fn2ROWlhPaWz.GrIGQlIS1zp2TX1Wv2cf5VdNKDVYtte', '2022-02-08 07:32:55', '2022-02-08 07:32:55'),
(4, 'Muthu', 'Sundar', 'muthusunda@gmail.com', NULL, '2022-02-08 08:09:24', '2022-02-08 08:09:24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
