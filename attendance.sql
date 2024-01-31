-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2024 at 05:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Name` varchar(12) DEFAULT NULL,
  `No.` int(11) DEFAULT NULL,
  `Date_Time` varchar(22) DEFAULT NULL,
  `Status` varchar(8) DEFAULT NULL,
  `Location ID` int(11) DEFAULT NULL,
  `ID Number` varchar(10) DEFAULT NULL,
  `Workcode` int(11) DEFAULT NULL,
  `VerifyCode` varchar(4) DEFAULT NULL,
  `CardNo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `Department`, `Name`, `No.`, `Date_Time`, `Status`, `Location ID`, `ID Number`, `Workcode`, `VerifyCode`, `CardNo`) VALUES
(1, 'OUR COMPANY', 'Andrew Auguis', 1, '02/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(2, 'OUR COMPANY', 'Andrew Auguis', 1, '02/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(3, 'OUR COMPANY', 'Andrew Auguis', 1, '02/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(4, 'OUR COMPANY', 'Andrew Auguis', 1, '02/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(5, 'OUR COMPANY', 'Andrew Auguis', 1, '01/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(6, 'OUR COMPANY', 'Andrew Auguis', 1, '01/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(7, 'OUR COMPANY', 'Andrew Auguis', 1, '01/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(8, 'OUR COMPANY', 'Andrew Auguis', 1, '01/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(9, 'OUR COMPANY', 'Andrew Auguis', 1, '03/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(10, 'OUR COMPANY', 'Andrew Auguis', 1, '03/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(11, 'OUR COMPANY', 'Andrew Auguis', 1, '03/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(12, 'OUR COMPANY', 'Andrew Auguis', 1, '03/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(13, 'OUR COMPANY', 'Andrew Auguis', 1, '04/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(14, 'OUR COMPANY', 'Andrew Auguis', 1, '04/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(15, 'OUR COMPANY', 'Andrew Auguis', 1, '04/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(16, 'OUR COMPANY', 'Andrew Auguis', 1, '04/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(17, 'OUR COMPANY', 'Andrew Auguis', 1, '05/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(18, 'OUR COMPANY', 'Andrew Auguis', 1, '05/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(19, 'OUR COMPANY', 'Andrew Auguis', 1, '05/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(20, 'OUR COMPANY', 'Andrew Auguis', 1, '05/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(21, 'OUR COMPANY', 'Andrew Auguis', 1, '06/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(22, 'OUR COMPANY', 'Andrew Auguis', 1, '06/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(23, 'OUR COMPANY', 'Andrew Auguis', 1, '06/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(24, 'OUR COMPANY', 'Andrew Auguis', 1, '06/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(25, 'OUR COMPANY', 'Andrew Auguis', 1, '07/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(26, 'OUR COMPANY', 'Andrew Auguis', 1, '07/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(27, 'OUR COMPANY', 'Andrew Auguis', 1, '07/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(28, 'OUR COMPANY', 'Andrew Auguis', 1, '07/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(29, 'OUR COMPANY', 'Andrew Auguis', 1, '08/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(30, 'OUR COMPANY', 'Andrew Auguis', 1, '08/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(31, 'OUR COMPANY', 'Andrew Auguis', 1, '08/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(32, 'OUR COMPANY', 'Andrew Auguis', 1, '08/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(33, 'OUR COMPANY', 'Andrew Auguis', 1, '09/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(34, 'OUR COMPANY', 'Andrew Auguis', 1, '09/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(35, 'OUR COMPANY', 'Andrew Auguis', 1, '09/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(36, 'OUR COMPANY', 'Andrew Auguis', 1, '09/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(37, 'OUR COMPANY', 'Andrew Auguis', 1, '10/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(38, 'OUR COMPANY', 'Andrew Auguis', 1, '10/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(39, 'OUR COMPANY', 'Andrew Auguis', 1, '10/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(40, 'OUR COMPANY', 'Andrew Auguis', 1, '10/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(41, 'OUR COMPANY', 'Andrew Auguis', 1, '11/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(42, 'OUR COMPANY', 'Andrew Auguis', 1, '11/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(43, 'OUR COMPANY', 'Andrew Auguis', 1, '11/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(44, 'OUR COMPANY', 'Andrew Auguis', 1, '11/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(45, 'OUR COMPANY', 'Andrew Auguis', 1, '12/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(46, 'OUR COMPANY', 'Andrew Auguis', 1, '12/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(47, 'OUR COMPANY', 'Andrew Auguis', 1, '12/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(48, 'OUR COMPANY', 'Andrew Auguis', 1, '12/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(49, 'OUR COMPANY', 'Andrew Auguis', 1, '13/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(50, 'OUR COMPANY', 'Andrew Auguis', 1, '13/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(51, 'OUR COMPANY', 'Andrew Auguis', 1, '13/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(52, 'OUR COMPANY', 'Andrew Auguis', 1, '13/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(53, 'OUR COMPANY', 'Andrew Auguis', 1, '14/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(54, 'OUR COMPANY', 'Andrew Auguis', 1, '14/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(55, 'OUR COMPANY', 'Andrew Auguis', 1, '14/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(56, 'OUR COMPANY', 'Andrew Auguis', 1, '14/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(57, 'OUR COMPANY', 'Andrew Auguis', 1, '15/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(58, 'OUR COMPANY', 'Andrew Auguis', 1, '15/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(59, 'OUR COMPANY', 'Andrew Auguis', 1, '15/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(60, 'OUR COMPANY', 'Andrew Auguis', 1, '15/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(61, 'OUR COMPANY', 'Andrew Auguis', 1, '16/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(62, 'OUR COMPANY', 'Andrew Auguis', 1, '16/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(63, 'OUR COMPANY', 'Andrew Auguis', 1, '16/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(64, 'OUR COMPANY', 'Andrew Auguis', 1, '16/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(65, 'OUR COMPANY', 'Andrew Auguis', 1, '16/01/2024 5:00:00 pm', 'Out', 102, '', 0, 'FACE', '');
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
