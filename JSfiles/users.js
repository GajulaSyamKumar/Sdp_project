function approve(btn) {
  btn.parentElement.previousElementSibling.innerText = "Approved";
}

function removeUser(btn) {
  btn.parentElement.parentElement.style.display = "none";
}
