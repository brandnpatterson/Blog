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
    $message = '';

    if ( $stmt->execute() ) {
      header('Location: /surge blog/success.php');
    } else {
      $message = 'Sorry, there must have been an issue creating your account';
    }
  endif;
?> <!DOCTYPE html><html lang="en-US"> <?php require 'dist/components/head.php' ?> <body> <?php require 'dist/components/header.php'; ?> <form action="signup.php" method="POST"><h1>Sign Up</h1><span>or <a href="login.php">login here</a></span><br><input type="text" class="username" name="username" pattern="^[A-Za-z]+" placeholder="create a username" title="Only Letters Allowed" required><br><input type="password" name="password" pattern="^[A-Za-z0-9]+" placeholder="and password" title="Only Letters and Numbers Allowed" required><br><input type="password" class="confirm-password" name="confirm_password" pattern="^[A-Za-z0-9]+" placeholder="confirm password" title="Only Letters and Numbers Allowed" required><br><input class="signup" name="signup" type="submit" value="Sign Up"> <?php if(!empty($message)): ?> <p> <?= $message ?> </p> <?php endif; ?> </form> <?php require 'dist/components/footer.php' ?> </body></html>