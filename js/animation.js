console.log("Printed");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector(".brand-name a > span:first-child").style =
      "font-size : 24px";
    document.querySelector(".brand-name a > span:last-child").style =
      "font-size : 14px";
  } else {
    document.querySelector(".brand-name a > span:first-child").style =
      "font-size : 34px";
    document.querySelector(".brand-name a > span:last-child").style =
      "font-size : 21px";
  }
}
