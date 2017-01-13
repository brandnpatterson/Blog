<html lang="en-US">
  <?php include 'dist/includes/components/head.php' ?>
  <body>
    <div class="container header">
      <h1>@</h1>
      <h2>brandnpatterson</h2>
    </div><!-- end container-header -->

    <nav class="container">
      <a href="#latest">
        Latest
      </a>
      <a href="#archive">
        Archive
      </a>
      <a href="#about">
        About Me
      </a>
      <!-- if not logged in, show sign-up, if logged in, show log-in -->
      <?php include 'dist/includes/components/nav/sign-up.php' ?>
      <?php include 'dist/includes/components/nav/log-in.php' ?>
    </nav><!-- end container-nav -->

    <!-- jumbotron -->
    <?php include 'dist/includes/components/jumbotron.php' ?>

    <!-- content -->
    <?php include 'dist/includes/content.php' ?>

    <!-- footer -->
    <?php include 'dist/includes/components/footer.php' ?>

    <script src="dist/js/bundle.js"></script>
  </body>
</html>
