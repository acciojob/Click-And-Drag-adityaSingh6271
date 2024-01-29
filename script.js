const itemsContainer = document.getElementById("itemsContainer");

let isMouseDown = false;
let startX, scrollLeft;

itemsContainer.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
});

itemsContainer.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

itemsContainer.addEventListener("mouseup", () => {
  isMouseDown = false;
});

itemsContainer.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - itemsContainer.offsetLeft;
  const walk = (x - startX) * 2; // You can adjust the multiplier to control the scrolling speed
  itemsContainer.scrollLeft = scrollLeft - walk;
});