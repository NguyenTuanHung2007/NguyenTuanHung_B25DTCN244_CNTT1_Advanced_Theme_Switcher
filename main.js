const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-toggle i");

const updateIcon = () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    themeIcon.classList.replace("bx-moon", "bx-sun");
  } else {
    themeIcon.classList.replace("bx-sun", "bx-moon");
  }
};

updateIcon();

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  const isDark = document.documentElement.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateIcon();
});
