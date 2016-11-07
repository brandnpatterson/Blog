// !(() => {
//
//   /*    Carousel Object    */
//   function Carousel() {
//     this.pages = document.getElementsByClassName('page')
//     this.total = this.pages.length - 1
//     this.current = 0
//     this.page(this.current)
//   }
//
//   /*    Next    */
//   Carousel.prototype.next = function () {
//     (this.current == this.total) ? this.current = 0 : this.current += 1
//     this.page(this.current)
//   }
//
//   var next = document.getElementById('right-arrow')
//   // Next onclick function
//   next.onclick = () => {
//     move.slide(4)
//     move.reset(4)
//   }
//
//   /*    Previous    */
//   Carousel.prototype.prev = function () {
//     (this.current == 0) ? this.current = this.total : this.current -= 1
//     this.page(this.current)
//   }
//
//   /*    Reset    */
//   Carousel.prototype.reset = function () {
//     this.current = 0
//   }
//
//   /*    Select    */
//   Carousel.prototype.page = function (j) {
//     for (let i = 0; i <= this.total; i++) {
//       // If the page you want to move to equals the current page, display that page. All others are not displayed
//       if (i === j) {
//         this.pages[i].style.display = 'block'
//       } else {
//         this.pages[i].style.display = 'none'
//       }
//     }
//   }
//
//   let move = new Carousel()
//
//
//   $('#right-arrow').click(function(){
//     Carousel.page += 1
//   })
// })()
