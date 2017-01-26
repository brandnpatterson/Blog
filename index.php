<!DOCTYPE html><html lang="en-US"> <?php require "dist/includes/components/head.php" ?> <body> <?php require "dist/includes/components/header.php" ?>  <?php require "dist/includes/components/nav.php" ?>  <?php require "dist/includes/components/jumbotron.php" ?> <div class="container"><div id="content"> <?php

          if(isset($_GET['page'])) {
            $page = $_GET['page'];
          } else {
            $page = "";
          }
          require 'dist/includes/components/case.php';

        ?> </div> <?php require "dist/includes/components/aside.php" ?> </div> <?php require "dist/includes/components/footer.php" ?> </body></html>