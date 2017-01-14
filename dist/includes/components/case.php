<?php

  switch($page) {
    case "latest":
    require 'dist/includes/latest.php';
    break;
    case "about":
    require 'dist/includes/about.php';
    break;
    case "archive":
    require 'dist/includes/archive.php';
    break;
    default:
    require 'dist/includes/latest.php';
    break;
  }

 ?>