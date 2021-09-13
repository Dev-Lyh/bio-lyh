const btnToggle = document.getElementById("toggle-btn")
const modeTxt = document.getElementById("mode")

modeTxt.textContent = "Dark Mode"
modeTxt.style.color = "White"

btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("light")
  if (document.body.classList.contains("light")) {
    modeTxt.textContent = "Light Mode"
    modeTxt.style.color = "#464646"
  } else {
    modeTxt.textContent = "Dark Mode"
    modeTxt.style.color = "#f6f6f6"
  }
})
