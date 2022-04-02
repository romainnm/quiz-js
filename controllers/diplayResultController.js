import { quizResultJs, resultMsgJs } from "../utils/dom-elements.js";

function showResult(score) {
  quizResultJs.style.visibility = "visible";
  switch (score) {
    case 0:
      resultMsgJs.textContent = "You can do better, try again!";
      break;
    case 1:
      resultMsgJs.textContent = "You can do better, try again!";
      break;
    case 2:
      resultMsgJs.textContent = "We are halfway there!";
      break;
    case 3:
      resultMsgJs.textContent = "You did great, we are almost there!";
      break;
    case 4:
      resultMsgJs.textContent = "You nailed it woohooo!";
      break;
  }
}

export default showResult;
