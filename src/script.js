"strict";

const collapsible = document.getElementsByClassName("show-tyoes");

// TODO: after btn click, save the state in localStorage in order to keep types hiddden/shown when the user visits the page next time

function onBtnClick() {
  /*this.classList.toggle("active");*/
  const typeBlocks = document.querySelectorAll(".typeface-examples-table");

  for (let i = 0; i < Object.keys(typeBlocks).length; i++) {
    const block = typeBlocks[i];

    if (block.style.display === "grid") {
      block.style.display = "none";
    } else {
      block.style.display = "grid"
    }
  }
}

for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", onBtnClick)
}

onBtnClick(); // collapse by default