
<!-- require post-header any time the post-body is viewed -->
<?php require 'dist/includes/posts/post4/post-header.php' ?>

<div class="post post-body">
  <h2>
    1. index.php - write to check if the "page" value is set
  </h2>
  <img src="dist/images/if-statement.png" alt="if statement">
  <p>
    Inside of your index.php file, find the div where you want your content to populate. I gave my div the ID of "content" to make it simple. Inside the PHP tags, you'll notice an if statement that is querying whether "page" exists and is not null.
    <a href="https://secure.php.net/manual/en/function.isset.php" target="_blank">
      Here
    </a>
    is more detail about the isset() function. You’ll see that inside of this function, you write a GET request for “page”. This will be used later in the navigation.
  </p>
  <p>
    The request will be unsuccessful at this point, but we will write the nav with this in it next. After it's all written, and when the "get" request is successful, it will set the $page variable to whatever the "page" query is equal to. This is written with a question mark, the word page, and then an equals sign followed by your content name.
  </p>
  <p>
    (For example, on the latest post, the href of the "Continue Reading" link is as follows: href="?page=post4-body".)
  </p>
  <h2>
    2. nav.php - set the "page" value to unique names for each anchor
  </h2>
  <img src="dist/images/php-nav.png" alt="php navigation">
  <p>
    On the nav.php file, notice that each anchor has "page" equal to something unique. This should describe the content, but it is not including (requiring) them quite yet. That is the next step in the switch statement.
  </p>
  <h2>
    3. case.php - write the switch statement
  </h2>
  <img src="dist/images/switch-statement.png" alt="switch statement">
  <p>
    Above is the logic that handles what should be required into the index.php file depending on what the specific "page" value is. Again, this specific "page" value is decided in the nav.php file in each href attribute. You can write the actual switch statement anywhere, but I've decided to keep it in my components folder like any other part of the website.
  </p>
  <p>
    Notice that in each “case” that a different file is required into the index.php file. On the first image above, you’ll see that the require statement is the result of the switch statement. That result is dependent on what the anchor’s “page” is equal to. Like I said, this can should be written in the href of each anchor. I didn’t go into detail about the complete file structure of this project, but if you are interested, here is a link to the complete
    <a href="https://github.com/brandnpatterson/brandnpatterson.surge.sh">Github repo.</a>
  </p>
  <h2>
    It's really that simple! I hope this tutorial helped you understand switch statements in PHP and how to use them for navigation.
  </h2>
  <!-- each post uses the same back navigation -->
  <?php require 'dist/includes/posts/back.php' ?>

  <!-- go to the next blog post -->
  <a class="next" href="?page=post3-body">
    Next >>
  </a>
</div>
