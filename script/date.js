const date = new Date().toDateString().split(" ");
document.getElementById(
  "date"
).innerHTML = `${date[0]}<br> <span class="font-semibold">${date[1]} ${date[2]} ${date[3]}</span>`;
