let transformPixel = 0;
let slipAmount = document.querySelector(".person-info").offsetWidth + 100;
console.log(slipAmount);
let personCount = document.querySelectorAll(".person-info").length - 1;

document.getElementById("next")
  .addEventListener("click", function() {
    if (transformPixel !== -(personCount * slipAmount)) {
      transformPixel -= slipAmount;
    } else {
      transformPixel = 0;
    }
    document.querySelector(".person-info-content").style.transform = `translateX(${transformPixel}px)`;
  });

document.getElementById("prev")
  .addEventListener("click", function() {
    if (transformPixel !== 0) {
      transformPixel += slipAmount;
    } else {
      transformPixel = -(personCount * slipAmount);
    }
    document.querySelector(".person-info-content").style.transform = `translateX(${transformPixel}px)`;
  });