<?php
  session_start();
  require 'config.php';
?> <!DOCTYPE html><html lang="en-US"> <?php require 'dist/components/head.php' ?> <body> <?php
      require 'dist/components/header.php';
    ?> <div class="center"><h1>You are so logged in, <?php echo $_SESSION['username'] ?> </h1></div> <?php require 'dist/components/footer.php' ?> </body></html>