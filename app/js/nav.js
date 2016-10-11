// Basic Navigation
const       home = document.getElementById("home")
const    navHome = document.getElementById("nav-home")
const      page1 = document.getElementById("page-1")
const      page2 = document.getElementById("page-2")
const  pageLink1 = document.getElementById("page-link-1")
const  pageLink2 = document.getElementById("page-link-2")


navHome.onclick = () => {
  home.style.display = "block"
  page2.style.display = "none"
  page1.style.display = "none"
}

pageLink1.onclick = () => {
  home.style.display = "none"
  page2.style.display = "none"
  page1.style.display = "block"
}

pageLink2.onclick = () => {
  home.style.display = "none"
  page1.style.display = "none"
  page2.style.display = "block"
}
