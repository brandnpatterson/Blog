  <?php include 'post-header.php' ?>
  <div class="post post-body">
    <p>
      Initially this blog was constructed with a "latest.pug" file which was included via pug, then I switched it over to php in order to host a database in the future with MySQL. So now I'm up and running with PHP and including that newly named "latest.php" and it works great, but I need to have only a preview of the information on the latest page that is imported into the index page.
    </p>
    <p>
      In order to do this I've structured my files into a post system that is similar to Wordpress. Each post has a header and a body. On the "latest" page, only the page header is visible, which is exactly what I want. On the page body, the header is imported there before the body content, so all the content looks like it belongs there.
    </p>
    <p>
      The header currently has a "Continue Reading" link, but I have yet to make it dissapear when clicked. The post body provides a back link, which works naturally.
    </p>
    <div class="divider"></div>
    <p>
      This file structure feels scalable for what I'm doing and I'm looking forward to making it even better as I move forward with it. My next steps are to make the "Continue Reading" link dissapear on selection.
    </p>
    <a class="go-back" href="#latest">
      Go Back
    </a>
  </div>
