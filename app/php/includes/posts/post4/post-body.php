
<!-- require post-header any time the post-body is viewed -->
<?php require 'dist/includes/posts/post4/post-header.php' ?>

<div class="post post-body">
  <h2>
    index.php
  </h2>
  <img src="dist/images/if-statement.png" alt="if statement">
  <p>
    Inside of your index.php file, find the div where you want your content to populate. I gave my div the ID of "content" to make it simple. Inside the PHP tags, you'll notice an if statement that is querying whether "page" exists and is not null.
    <a href="https://secure.php.net/manual/en/function.isset.php" target="_blank">
      Here
    </a>
    is more detail about the isset function. You'll see that inside of this function, you use PHP to search for "page" by using a "get" API request.
  </p>
  <p>
    If the "get" request is successful, it will set the $page variable to whatever the "page" query is equal to, which you write in each href attribute of the nav anchor tags. This is written with a question mark, the word page, and then an equals sign followed by your content name.
  </p>
  <p>
    (For example, on the latest post, the href of the "Continue Reading" link is as follows: href="?page=post4-body".)
  </p>
  <div class="divider"></div>
  <h2>
    nav.php
  </h2>
  <img src="dist/images/php-nav.png" alt="php navigation">
  <p>
    On the nav.php file, notice that each anchor has "page" equal to something unique. This should describe the content, but it is not including (requiring) them quite yet. That is the next step in the switch statement.
  </p>
  <div class="divider"></div>
  <h2>
    case.php
  </h2>
  <img src="dist/images/switch-statement.png" alt="switch statement">
  <p>
    Above is the logic that handles what should be required into the index.php file depending on what the specific "page" value is. Again, this specific "page" value is decided in the nav.php file in each href attribute. You can write the actual switch statement anywhere, but I've decided to keep it in my components folder like any other part of the website.
  </p>
  <p>
    Notice that in each "case" that a different file is required into the index.php file. On the first image, you'll see that the require statement produces whichever case is the result of this switch statement depending on each href any of the nav elements with the query "page" have.
  </p>
  <h2>
    It's really that simple! I didn't go into detail about the complete file structure of this project, but if you are interested, here is a link to the
    <a href="https://github.com/brandnpatterson/brandnpatterson.surge.sh">Github repo.</a>
  </h2>
  <h2>
    - Brandon
  </h2>
  <!-- each post uses the same back navigation -->
  <?php require 'dist/includes/posts/back.php' ?>

  <!-- go to the next blog post -->
  <a class="next" href="?page=post3-body">
    Next >>
  </a>
</div>
