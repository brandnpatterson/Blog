<div class="container header">
  <h1>@</h1>
  <h2>brandnpatterson</h2>
</div>
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
    <a class="login-nav" href="logout.php">
      Logout
    </a>
    <a href="account.php" class="signup-nav username-session"><?php echo $_SESSION['username']; ?></a>
  <?php else: ?>
    <a class="login-nav" href="login.php">
      Login
    </a>
    <a class="signup-nav" href="signup.php">
      Sign Up
    </a>
  <?php endif; ?>
</nav>
