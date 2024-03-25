const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

// JavaScript: Add .collapsed class to #sidebar when the window width is 968px
function checkWidthAndCollapse() {
  const sidebar = document.querySelector("#sidebar");
  if (window.innerWidth < 768) {
    sidebar.classList.add("collapsed");
  } else {
    sidebar.classList.remove("collapsed");
  }
}

// Run the function on window resize and on document load
window.addEventListener("resize", checkWidthAndCollapse);
document.addEventListener("DOMContentLoaded", checkWidthAndCollapse);
