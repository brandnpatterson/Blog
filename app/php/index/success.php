<?php
  session_start();
  require 'config.php';
?>
<!DOCTYPE html>
<html lang="en-US">
  <?php require 'dist/components/head.php' ?>
  <body>
    <?php require 'dist/components/header.php'; ?>
    <form action="signup.php" method="POST">
      <h1>
        New account created successfully!
      </h1>
      <span>
        <a href="login.php">
          Login here
        </a>
      </span>
      <br>
    </form>
    <?php require 'dist/components/footer.php' ?>
  </body>
</html>
