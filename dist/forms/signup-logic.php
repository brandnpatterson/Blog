<?php
  session_start();
  require 'config.php';

  if (!empty($_POST['username']) && !empty($_POST['password'])):
    // Enter the new user in the database
    $sql  = 'INSERT INTO users (username, password) VALUES (:username, :password)';
    $stmt = $conn->prepare($sql);
    // bind parameters to the database row through POST
    $stmt->bindParam(':username', $_POST['username']);
    $stmt->bindParam(':password', password_hash($_POST['password'], PASSWORD_BCRYPT));

    if ( $stmt->execute() ) {
      $message = 'New account created successfully!';
    } else {
      $message = 'Sorry, there must have been an issue creating your account';
    }
  endif;
?>