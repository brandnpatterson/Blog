<?php

  switch($page) {

    // show pages using the top navigation
    case "latest":
    require 'dist/includes/latest.php';
    break;
    case "about":
    require 'dist/includes/about.php';
    break;
    case "archive":
    require 'dist/includes/archive.php';
    break;

    // show post-body
    case "post1-body":
    require 'dist/includes/posts/post1/post-body.php';
    break;
    case "post2-body":
    require 'dist/includes/posts/post2/post-body.php';
    break;
    case "post3-body":
    require 'dist/includes/posts/post3/post-body.php';
    break;
    case "post4-body":
    require 'dist/includes/posts/post4/post-body.php';
    break;

    // show post-header
    case "post1-header":
    require 'dist/includes/posts/post1/post-header.php';
    require 'dist/includes/posts/post1/continue.php';
    break;
    case "post2-header":
    require 'dist/includes/posts/post2/post-header.php';
    require 'dist/includes/posts/post2/continue.php';
    break;
    case "post3-header":
    require 'dist/includes/posts/post3/post-header.php';
    require 'dist/includes/posts/post3/continue.php';
    break;
    case "post4-header":
    require 'dist/includes/posts/post4/post-header.php';
    require 'dist/includes/posts/post4/continue.php';
    break;

    // default home page is latest
    default:
    require 'dist/includes/latest.php';
    break;
  }

?>