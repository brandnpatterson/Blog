<?php
  session_start();
  require 'config.php';
?>
<!DOCTYPE html>
<html lang="en-US">
  <?php require 'dist/components/head.php' ?>
  <body>
    <?php
      // header
      require 'dist/components/header.php';
      // nav
      require 'dist/components/nav.php';
    ?>
    <form action="login.php" method="POST">
      <h1>
        You are so logged in, <?php echo $_SESSION['username'] ?>
      </h1>
      <br>
      <input type="text" class="username" name="username" pattern="^[A-Za-z]+" placeholder="create a username" title="Only Letters Allowed" required>
      <br>
      <input type="password" name="password" pattern="^[A-Za-z0-9]+" placeholder="and password" title="Only Letters and Numbers Allowed" required>
      <br>
      <input class="login" type="submit" value="Login">
      <!-- success or fail message -->
      <?php if(!empty($message)): ?>
        <p>
          <?= $message ?>
        </p>
      <?php endif; ?>
    </form>
    <?php require 'dist/components/footer.php' ?>
  </body>
</html>
