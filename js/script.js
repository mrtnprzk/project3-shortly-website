//Hamburger
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});

//Error
const input = document.getElementById("link-input");
const form = document.getElementById("link-form");
const error = document.getElementById("err-msg");

  // Validate a URL
  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (input.value === "") {
      error.innerHTML = "Please shorter a link inside";
      input.classList.add("border-red");
    } else if (!validURL(input.value)) {
      error.innerHTML = "Please enter a valid URL";
      input.classList.add("border-red");
    } else {
      error.innerHTML = "";
      input.classList.remove("border-red");
      input.value = "";
      alert("Success")
    }
  })