/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云服务器MySQL
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : 106.14.174.206:3306
 Source Schema         : graduation

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 16/04/2022 09:10:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for lession
-- ----------------------------
DROP TABLE IF EXISTS `lession`;
CREATE TABLE `lession` (
  `lession_name` varchar(255) NOT NULL,
  `lession_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`lession_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lession
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for lession_student
-- ----------------------------
DROP TABLE IF EXISTS `lession_student`;
CREATE TABLE `lession_student` (
  `lession_student_id` int NOT NULL AUTO_INCREMENT,
  `out_lession_id` varchar(255) NOT NULL,
  `out_student_id` varchar(255) NOT NULL,
  PRIMARY KEY (`lession_student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lession_student
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `student_name` varchar(255) NOT NULL,
  `student_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
