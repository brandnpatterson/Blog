<!DOCTYPE html>
<html lang="en-US">
  <?php require "dist/includes/components/head.php" ?>
  <body>

    <!-- header -->
    <?php require "dist/includes/components/header.php" ?>

    <!-- nav -->
    <?php require "dist/includes/components/nav.php" ?>

    <!-- jumbotron -->
    <?php require "dist/includes/components/jumbotron.php" ?>

    <div class="container">

      <!-- content -->
      <div id="content">
        <?php

          if(isset($_GET['page'])) {
            $page = $_GET['page'];
          } else {
            $page = "";
          }
          require 'dist/includes/components/case.php';

        ?>
      </div>

      <!-- aside -->
      <?php require "dist/includes/components/aside.php" ?>
    </div>

    <!-- footer -->
    <?php require "dist/includes/components/footer.php" ?>
  </body>
</html>
