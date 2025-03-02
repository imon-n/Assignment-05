document.getElementById("clear-btn").addEventListener("click", function () {
  let history = document.getElementsByClassName("history-p");

  // history[0].remove();
  // history[0].remove();
  // history[0].remove();
  // history[0].remove();
  // history[0].remove();
  // history[0].remove();

  while (history.length > 0) {
    history[0].remove();
  }
});
