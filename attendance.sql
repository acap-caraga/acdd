-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Feb 02, 2024 at 02:17 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biometrics`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `No.` int(11) DEFAULT NULL,
  `Date_Time` varchar(22) DEFAULT NULL,
  `Status` varchar(8) DEFAULT NULL,
  `Location ID` int(11) DEFAULT NULL,
  `ID Number` varchar(10) DEFAULT NULL,
  `Workcode` int(11) DEFAULT NULL,
  `VerifyCode` varchar(4) DEFAULT NULL,
  `CardNo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `Department`, `Name`, `No.`, `Date_Time`, `Status`, `Location ID`, `ID Number`, `Workcode`, `VerifyCode`, `CardNo`) VALUES
(1, 'OUR COMPANY', 'Andrew Auguis', 1, '01/02/2024 8:01:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(2, 'OUR COMPANY', 'Andrew Auguis', 1, '01/02/2024 11:57:00 am', 'Out Back', 102, '', 0, 'FACE', ''),
(3, 'OUR COMPANY', 'Andrew Auguis', 1, '01/02/2024 12:29:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(4, 'OUR COMPANY', 'Andrew Auguis', 1, '01/02/2024 2:19:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(5, 'OUR COMPANY', 'Andrew Auguis', 1, '03/02/2024 9:00:00 am', 'C/In', 102, '', 0, 'FACE', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
