const count = document.getElementById('memberCount');
let members = 18247;
setInterval(() => {
  members += Math.random() > .55 ? 2 : 1;
  count.textContent = members.toLocaleString('en-IN');
}, 2800);
document.getElementById('year').textContent = new Date().getFullYear();
