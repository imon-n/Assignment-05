function handleTaskTrack(comp_btn, titleBox) {
  document.getElementById(comp_btn).disabled = true;

  task_num = parseInt(document.getElementById("task-ass-num").innerText);
  document.getElementById("task-ass-num").innerText = task_num - 1;

  if (task_num === 1) {
    alert("Board Update Successfully");
    alert("Congrates!! You have completed all the current task");
  }
  else{
    alert("Board Update Successfully");
  }

  complete_num = parseInt(document.getElementById("complete-num").innerText);
  document.getElementById("complete-num").innerText = complete_num + 1;

  let history = document.getElementById("history");
  let p = document.createElement("p");
  p.classList.add("history-p","m-4", "p-3", "rounded-md", "bg-[#F4F7FF]");
  p.innerHTML = `You have Complete The Task <span class="font-bold">${document.getElementById(titleBox).innerText}</span> at ${new Date().toLocaleTimeString()}`;
  history.appendChild(p);
}

document.getElementById("com-1").addEventListener("click", function () {
    handleTaskTrack("com-1", "title-box-1");
});
document.getElementById("com-2").addEventListener("click", function () {
    handleTaskTrack("com-2", "title-box-2");
});
document.getElementById("com-3").addEventListener("click", function () {
    handleTaskTrack("com-3", "title-box-3");
});
document.getElementById("com-4").addEventListener("click", function () {
    handleTaskTrack("com-4", "title-box-4");
});
document.getElementById("com-5").addEventListener("click", function () {
    handleTaskTrack("com-5", "title-box-5");
});
document.getElementById("com-6").addEventListener("click", function () {
    handleTaskTrack("com-6", "title-box-6");
});