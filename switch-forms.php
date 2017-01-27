<?php
  switch ($form) {
    // show forms
    case 'login':
    require 'dist/forms/login.php';
      break;
    case 'signup':
    require 'dist/forms/signup.php';
      break;
    default:
    require 'dist/forms/login.php';
      break;
  }
?>