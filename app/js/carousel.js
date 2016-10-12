/*  Basic carousel structure Forked from:
    @author		Jeremy England
    @company	SimplyCoded
    https://gist.github.com/simply-coded/5745cca64d4d7e8707ea002e1290b5b8
*/

const  next = document.getElementById("right-arrow")
const  prev = document.getElementById("left-arrow")
const  nav = document.getElementById("nav")

let navTo = nav.children

// Carousel Object
function Carousel() {
  this.slides = document.getElementById("carousel").children // Put all objects with the class of .carousel into an array called 'slides'
  this.total = this.slides.length - 1 // Even though we have 3, it's going to be 0, 1, 2. In arrays, you start at 0
  this.current = 0

  // start on slide 1
  this.slide(this.current)
}

//    Next    //
Carousel.prototype.next = function () {
  (this.current == this.total) ? this.current = 0 : this.current += 1

  this.slide(this.current)
}

//    Previous    //
Carousel.prototype.prev = function () {
  (this.current === 0) ? this.current = this.total : this.current -= 1

  this.slide(this.current)
}

//    Reset    //
Carousel.prototype.reset = function (a) {
  this.current = a
}

//    Select    //
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

next.onclick = () => {
  move.next()
}

prev.onclick = () => {
  move.prev()
}

navTo[0].onclick = () => {
  move.slide(0)
  move.reset(0)
}

navTo[1].onclick = () => {
  move.slide(1)
  move.reset(1)
}

navTo[2].onclick = () => {
  move.slide(2)
  move.reset(2)
}

navTo[3].onclick = () => {
  move.slide(3)
  move.reset(3)
}
