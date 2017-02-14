<?php
  session_start();
  require 'config.php';
?> <!DOCTYPE html><html lang="en-US"> <?php require 'dist/components/head.php' ?> <body> <?php
      require 'dist/components/header.php';
      require 'dist/components/jumbotron.php';
      require 'dist/components/aside.php'
    ?> <div id="content"><div class="container"> <?php
          if(isset($_GET['page'])) {
            $page = $_GET['page'];
          } else {
            $page = '';
          }
          require 'switch.php';
        ?> </div></div> <?php require 'dist/components/footer.php' ?> </body></html>