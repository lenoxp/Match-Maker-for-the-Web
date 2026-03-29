// ✅ CONSTANTS (Requirement 4)
const IDEAL_ANSWERS = [4, 5, 2, 5, 3];

const TRUE_LOVE = 90;
const FRIEND = 70;

// ✅ VALIDATE FUNCTION (Requirement 4)
function validate(value) {
  if (value === "" || isNaN(value)) {
    return "Please enter a number.";
  }
  if (value < 1 || value > 5) {
    return "Answer must be between 1 and 5.";
  }
  return "";
}

document.getElementById("matchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  let totalDifference = 0;
  let resultsText = "";

  for (let i = 0; i < inputs.length; i++) {
    let value = inputs[i].value;

    let error = validate(value);
    if (error !== "") {
      alert("Question " + (i + 1) + ": " + error);
      return;
    }

    value = Number(value);

    let difference = Math.abs(value - IDEAL_ANSWERS[i]);
    totalDifference += difference;

    resultsText += `Question ${i + 1} difference: ${difference} <br>`;
  }

  // Calculate compatibility
  let score = 100 - (totalDifference * 4);

  let message = "";

  if (score >= TRUE_LOVE) {
    message = "💖 True Love! We are a perfect match!";
  } else if (score >= FRIEND) {
    message = "😊 We could be great friends!";
  } else {
    message = "🏃 Run away!!!";
  }

  document.getElementById("result").innerHTML = `
    ${resultsText}
    <br><br>
    Compatibility Score: ${score}%
    <br>
    ${message}
  `;
});
