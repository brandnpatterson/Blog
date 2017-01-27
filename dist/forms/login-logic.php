<?php
  session_start();
  require 'config.php';

  if (!empty($_POST['username']) && !empty($_POST['password'])):
    $records = $conn->prepare('SELECT username,password,id FROM users WHERE username = :username');
    $records->bindParam(':username', $_POST['username']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);
    $message = '';

    if (count($results) > 0) {
      $_SESSION['username'] = $results['username'];
      header('Location: /surge blog');
    } else {
      $message = 'Sorry, those credentials do not match. Please try again.';
    }
  endif;
?>