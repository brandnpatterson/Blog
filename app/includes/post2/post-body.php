  <?php include 'post-header.php' ?>
  <div class="post post-body">
    <p>
      Initially this blog was constructed with a "latest.pug" file which was included via pug, then I switched it over to php in order to host a database in the future with MySQL. So now I'm up and running with PHP and including that newly named "latest.php" and it works great, but I need to have only a preview of the information on the latest page that is imported into the index page.
    </p>
    <p>
      In order to do this I've structured my files into a post system that is similar to Wordpress. Each post has a header and a body. On the "latest" page, only the page header is visible, which is exactly what I want. On the page body, the header is imported there before the body content, so all the content looks like it belongs there.
    </p>
    <p>
      Following the header, there is "continue.php" for each pos, which allows the Continue Reading link to be only included in the post header and not the post body. I was unable to use jQuery to simply hide or show the divs because they were dynamically included. I can imagine that there is a possible solution, but allowing the php file to be seperately included into the header allows exactly what I need.
    </p>
    <div class="divider"></div>
    <p>
      This file structure feels scalable for what I'm doing and I'm looking forward to making it even better as I move forward with it.
    </p>
    <a class="go-back" href="#latest">
      Go Back
    </a>
  </div>
