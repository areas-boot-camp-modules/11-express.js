function keyupAction() {
  document.querySelector("#key").innerHTML = "";
  document.querySelector("#code").innerHTML = "";
  document.querySelector("#status").innerHTML = "KEYUP Event";
};

function keydownAction(event) {
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
};

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
