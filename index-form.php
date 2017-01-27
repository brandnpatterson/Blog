<!DOCTYPE html><html lang="en-US"> <?php require 'dist/components/head.php' ?> <body> <?php
      // header
      require 'dist/components/header.php';
      // nav
      require 'dist/components/nav.php';
      // login-form
    ?> <div class="container"> <?php
        if(isset($_GET['form'])) {
          $form = $_GET['form'];
        } else {
          $form = '';
        }
        require 'switch-forms.php';
      ?> </div> <?php require 'dist/components/footer.php' ?> </body></html>