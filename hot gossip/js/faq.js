function toggleAnswer(element) {
    element.classList.toggle("active");
    let answer = element.nextElementSibling;
    let sign = element.querySelector(".sign");
    
    // Toggle the display of the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
      sign.textContent = "+";
    } else {
      answer.style.display = "block";
      sign.textContent = "-";
    }
  }