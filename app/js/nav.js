!(() => {

  const        home = document.getElementById("home")
  const     navHome = document.getElementById("nav-home")
  const       page1 = document.getElementById("page-1")
  const       page2 = document.getElementById("page-2")
  const       pageLink1 = document.getElementById("page-link-1")
  const       pageLink2 = document.getElementById("page-link-2")

  // Hide by default
  page1.className = "hidden"
  page2.className = "hidden"

  navHome.onclick = () => {
    home.className = "visible"
    page2.className = "hidden"
    page1.className = "hidden"
  }

  pageLink1.onclick = () => {
    home.className = "hidden"
    page2.className = "hidden"
    page1.className = "visible"
  }

  pageLink2.onclick = () => {
    home.className = "hidden"
    page1.className = "hidden"
    page2.className = "visible"
  }

})()
