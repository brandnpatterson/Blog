<?php
  $server   = 'localhost';
  $username = 'root';
  $password = 'root';
  $database = 'surge_blog';

  // connect with the database
  try {
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
  } catch(PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
  }
?>
