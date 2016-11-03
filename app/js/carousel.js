/*  Carousel Idea Forked from:
    @author		Jeremy England
    @company	SimplyCoded
    https://gist.github.com/simply-coded/5745cca64d4d7e8707ea002e1290b5b8
*/

!(() => {

  const
    about      = document.getElementById("slide-about"),
    archive    = document.getElementById("slide-archive")
    nav        = document.getElementById("nav"),
    navTo      = nav.children,
    next       = document.getElementById("right-arrow"),
    prev       = document.getElementById("left-arrow"),
    home       = document.getElementById("slide-home"),
    submission = document.getElementsByClassName("submission"),
    submit     = document.getElementById("slide-submit")


  /*    Top Navbar onclick functions  */
  navTo[0].onclick = () => {        // Home
    move.slide(0)
    prev.style.display = "none"
  }

  navTo[1].onclick = () => {       // About
    move.slide(1)
    move.reset(1)
  }

  navTo[2].onclick = () => {       // Archive
    move.slide(2)
    move.reset(2)
  }

  navTo[3].onclick = () => {       // Submit
    move.slide(3)
    move.reset(3)
  }


  /*    Submission onclick functions  */
  submission[0].onclick = () => {      // Donald
    move.slide(4)
    move.reset(4)
  }

  submission[1].onclick = () => {      // Slippers
    move.slide(5)
    move.reset(5)
  }

  submission[2].onclick = () => {      // Iconic
    move.slide(6)
    move.reset(6)
  }


  // Next onclick function
  next.onclick = () => {
    if (home.style.display == "block" || about.style.display == "block" || archive.style.display == "block" || submit.style.display == "block" ){
      move.slide(4)
      move.reset(4)
    } else {
      move.next()
    }
    prev.style.display = "block"
  }


  // Prev onclick function
  prev.onclick = () => {
    move.slide(0)
    prev.style.display = "none"
  }

  // on homepage, make back button never appear
  prev.style.display = "none"

  if (home.style.display == "none") {
    prev.style.display = "block"
  }


  /*    Carousel Object    */
  function Carousel() {
    this.slides = document.getElementById("carousel").children // Put all objects with the class of .carousel into an array called 'slides'
    this.total = this.slides.length - 1
    this.current = 0

    // start on slide 1
    this.slide(this.current)
  }


  /*    Next    */
  Carousel.prototype.next = function () {
    (this.current == this.total) ? this.current = 0 : this.current += 1

    this.slide(this.current)
  }


  /*    Previous    */
  Carousel.prototype.prev = function () {
    (this.current == 0) ? this.current = this.total : this.current -= 1

    this.slide(this.current)
  }


  /*    Reset    */
  Carousel.prototype.reset = function (a) {
    this.current = a
  }


  /*    Select    */
  Carousel.prototype.slide = function (j) {
    for (let i = 0; i <= this.total; i++) {
      // If the slide you want to move to equals the current slide, display that slide. All others are not displayed
      if (i === j) {
        this.slides[i].style.display = "block"
      } else {
        this.slides[i].style.display = "none"
      }
    }
  }

  let move = new Carousel()
})()
