<nav class="container">
  <a href="index.php?page=latest">
    Latest
  </a>
  <a href="index.php?page=archive">
    Archive
  </a>
  <a href="index.php?page=about">
    About Me
  </a>
  <?php if(isset($_SESSION['username'])): ?>
    <a href="account.php" class="signup-nav username-session"><?php echo $_SESSION['username']; ?></a>
    <a class="login-nav" href="logout.php">
      Logout |
    </a>
  <?php else: ?>
    <a class="signup-nav" href="signup.php">
      Sign Up
    </a>
    <a class="login-nav" href="login.php">
      Login
    </a>
  <?php endif; ?>
</nav>
