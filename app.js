(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// typer animation
const textElement = document.getElementById('text');
let textType = "Web Developerr";
let index = 0;
let direction = 1;

function typing() {
  if (index <= textType.length && index >= 0) {
   textElement.textContent = textType.slice(0, index);
   index += direction
   if (index >= textType.length || index <= 0) {
     direction *= -1;
     index += direction;
   }    
setTimeout(typing, 100);
  }
}
typing();

//counting animation
let valueDispalays  = document.querySelectorAll(".large-text");
let interval = 4000;

valueDispalays.forEach((valueDisplay ) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute
  ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
