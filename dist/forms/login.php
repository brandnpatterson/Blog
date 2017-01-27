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
?> <form action="dist/forms/login-logic.php" method="POST"><h1>Login</h1><span>or <a href="signup.php">sign up here</a></span><br><input type="text" class="username" name="username" pattern="^[A-Za-z]+" placeholder="create a username" title="Only Letters Allowed" required><br><input type="password" name="password" pattern="^[A-Za-z0-9]+" placeholder="and password" title="Only Letters and Numbers Allowed" required><br><input class="login" type="submit" value="Login"> <?php if(!empty($message)): ?> <p> <?= $message ?> </p> <?php endif; ?> </form>