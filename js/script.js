let elBtn = document.querySelector(".calculatorbtn");
let elInput = document.querySelector(".calculatorinput");
let elOptionone = document.querySelector(".calculatoroptionone");
let h11 = document.querySelector(".h11");




elBtn.addEventListener("click", (e) => {
  e.preventDefault()
  h11.innerHTML = (Number(elInput.value) / elOptionone.value);
})