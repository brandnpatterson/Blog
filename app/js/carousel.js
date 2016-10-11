// Arrow Navigation
const next = document.getElementById("right-arrow")
const prev = document.getElementById("left-arrow")

// Carousel Object
function Carousel() {
  this.slides = document.getElementById("carousel").children // Put all objects with the class of .carousel into an array called 'slides'
  this.total = this.slides.length - 1 // Even though we have 3, it's going to be 0, 1, 2. In arrays, you start at 0
  this.current = 0 // Stores where current slide is

  // start on slide 1
  this.slide(this.current)
}

// Next
Carousel.prototype.next = function () {
  (this.current == this.total) ? this.current = 0 : this.current += 1

  this.slide(this.current)
}

// Previous
Carousel.prototype.prev = function () {
  (this.current === 0) ? this.current = this.total : this.current -= 1

  this.slide(this.current)
}

// Select
Carousel.prototype.slide = function (index) {
  for (var i = 0; i <= this.total; i++) {
    if (i === index) {
      this.slides[i].style.display = "block"
    } else {
      this.slides[i].style.display = "none"
    }
  }
}

let numbers = new Carousel()

next.onclick = () => {
  numbers.next()
}

prev.onclick = () => {
  numbers.prev()
}
