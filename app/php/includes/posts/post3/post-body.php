<?php require 'post-header.php' ?>
<div class="post post-body">
  <p>
    I soon discovered that using the Instagram API is not as easy as calling and using data like you would via github's API, for example. Luckily, I found out about a library called
    <a href="http://www.instafeedjs.com" target="_blank">
      Instafeedjs
    </a>
    , which is described on their website as follows:
  </p>
  <img src="dist/images/instafeed.png"/>
  <p>
    As much as this is true, there are still a few steps to take in order for anything to be called from Instagram to your website.
  </p>
  <!-- Installation-->
  <h2>
    1. Installation
  </h2>
  <p>
    First of all, the library needs to be installed! If you aren’t using a package manager, simply clicking download on their website and including the file in your project will allow you access to the Instafeedjs library. Now, this isn’t a tutorial on NPM, package managers or using the terminal/command line, but I would highly recommend it because they allow you to install many things into your projects quickly and easily. If you’re interested, here’s a quick tutorial on Node’s NPM by
    <a href="https://www.youtube.com/watch?v=pU9Q6oiQNd0" target="_blank">
      learncode.academy
    </a>
    .
  </p>
  <!-- Developer-->
  <h2>
    2. Instagram
  </h2>
  <p>
    After installation, head on over to
    <a href="http://www.instagram.com/developer" target="_blank">
      Instagram/developer
    </a> and log in. After logging in, you’ll see the “Register Your Application” button. Click that, continue filling out the required information, and then register your application.
  </p>
  <!-- Client ID-->
  <h2>
    3. Client ID
  </h2>
  <p>
    If you follow along on <a href="http://www.instafeedjs.com" target="_blank">Instafeedjs.com</a>, you’ll notice a few examples of code that are a great help in getting started. You’ll also notice a Requirements section. One of the first things noted is your Client ID.
  </p>
  <img src="dist/images/requirements.png"/>
  <p>
    The first place I found on Google search to find my Instagram client ID (not username) is a website called
    <a href="https://smashballoon.com/instagram-feed/" target="_blank">
      Smash Balloon
    </a>
    . Here you can go to “Try the Demo” and simply type your username in and it returns a series of numbers, which is your Instagram client ID.
  </p>
  <p>
    Instafeedjs doesn’t mention this as explicitly in their first examples, but in order to populate your website with your 20 latest pictures, you must use an authentication key. Now, Instafeedjs does allow for a variety of other things such as showing only images with specific hash tags, which is such a great feature. This tutorial does not cover that in detail, but I recommend using these resources and especially the instafeedjs.com to further research your ideal set up of image population if you’re interested.
  </p>
  <!-- Authentication-->
  <h2>
    4. Authentication
  </h2>
  <p>
    Like I mentioned, the last bit of info you need to get your feed running on your website is to authenticate your request. The website I found most useful for this is
    <a href="http://instagram.pixelunion.net/" target="_blank">
      Pixel Union
    </a>
    . Simply click the “Generate Access Token” button and you will be prompted with entering your username and password. (Check out the FAQs at the bottom of their website for more info about security and what Pixel Union has access to when they generate your access token.) After this, you will receive the access token and can use it in your website’s JavaScript code.
  </p>
  <!-- Write the code-->
  <h2>
    5. Write the code
  </h2>
  <p>
    You may have already written out your JavaScript code (at least I had in trouble shooting). If you haven’t, here is an example of the code that is found on Instafeed’s documentation concerning showing your last 20 pictures:
  </p>
  <img src="dist/images/instafeed-code.png"/>
  <!-- Create the output div-->
  <h2>
    6. Create the output div
  </h2>
  <p>
    By default, and if everything is set up correctly at this point, Instafeedjs will populate a div you create with the ID of Instafeed in your code with the last 20 posts that are associated with your account. Like I mentioned before, If you want to change anything, check out the documentation. I’ve found it to be very helpful. For me, this default action works for what I am trying to do.
  </p>
  <h3>
    That’s it! By now you should have your last 20 pictures populating your website!! I hope this tutorial was informative and helpful. If you have any questions, please let me know.</h3>
  <p>
    If you're curious about the demo website I created, you can find my Instagram feed on the Gallery tab here:
    <a href="http://jaime-quach.surge.sh/gallery.html" target="_blank">
      jaime-quach.surge.sh
    </a>
    .
  </p>
  <a href="#latest" class="go-back">
    Go Back
  </a>
</div>
