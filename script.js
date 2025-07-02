const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", function () {
  const filter = searchBox.value.toLowerCase();
  const items = document.querySelectorAll("#universityList li");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
