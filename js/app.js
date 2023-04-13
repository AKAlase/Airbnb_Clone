let toggelebtn = document.getElementById("toggle-btn");
console.log(toggelebtn);
let content = document.getElementById("dropdownMenu");
console.log(content);
let body = document.getElementById("body");
let test;
let test1;
toggelebtn.onclick = function (e) {
  e.preventDefault();
  document.body.setAttribute("class", "");
  test = toggelebtn.classList.toggle("active");
  console.log(test);
  if (test === true) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
};

body.onclick = function (e) {
  e.preventDefault();
  test1 = body.classList.toggle("active");
  console.log(test1, test);
  if (test !== test1) {
    content.style.display = "none";
  } else {
    // content.style.display = "none";
  }
};

// #_navbar_section - 2

let addguest = document.getElementById("add-guest");

let content1 = document.getElementById("_navbar_section-2");
let content2 = document.getElementById("section_container-3");

addguest.addEventListener("click", () => {
  let test1 = addguest.classList.toggle("active");
  if (test1 === true) {
    content1.style.display = "block";
    content2.style.display = "block";
    // content2.style.zIndex = "1";
  }
});

// body.addEventListener("click")
