const themeBtn = document.querySelector("#theme-switcher");

const DARK = "dark";
const LIGHT = "light";
const mainEl = document.querySelector("body");

function selectTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === DARK) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    mainEl.classList.add("open");
    themeBtn.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    mainEl.classList.remove("open");
  }
}

themeBtn.addEventListener("change", () => {
  if (themeBtn.checked) {
    localStorage.setItem("theme", DARK);
  } else {
    localStorage.setItem("theme", LIGHT);
  }
  selectTheme();
});

export { selectTheme };
