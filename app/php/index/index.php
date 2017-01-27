<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-US">
  <?php require 'dist/components/head.php' ?>
  <body>
    <?php
      // header
      require 'dist/components/header.php';
      // nav
      require 'dist/components/nav.php';
      // jumbotron
      require 'dist/components/jumbotron.php';
      // aside
      require 'dist/components/aside.php'
    ?>
    <div id="content">
      <div class="container">
        <?php
          if(isset($_GET['page'])) {
            $page = $_GET['page'];
          } else {
            $page = '';
          }
          require 'switch.php';
        ?>
      </div>
    </div>
    <?php require 'dist/components/footer.php' ?>
  </body>
</html>
