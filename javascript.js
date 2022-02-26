const tab_items = document.querySelectorAll(".tab_item");
const tab_content_items = document.querySelectorAll(".tab_content_item");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tab_content_item = document.querySelector(`#${this.id}-content`);
  tab_content_item.classList.add("show");
}

function removeBorder() {
  tab_items.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tab_content_items.forEach((item) => {
    item.classList.remove("show");
  });
}

tab_items.forEach((item) => {
  item.addEventListener("click", selectItem);
});
