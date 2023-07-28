import dom from "../dom.js"


const deleteItem = () => {
    const parentDiv = this.closest(".list-item");

    parentDiv.innerHTML = "";
  }
