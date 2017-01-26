<form name="signup" action="" method="post">
  <h1>
    Sign Up
  </h1>
  <h3>
    Username:
  </h3>
  <input type="text" name="username" pattern="^[A-Za-z]+" title="Only Letters Allowed" required>
  <h3>
    Password:
  </h3>
  <input type="password" name="password" pattern="^[A-Za-z0-9]+" title="Only Letters and Numbers Allowed" class="password" required>
  <br>
  <input class="signup" name="signup" type="submit" value="Sign Up">
</form>
