import displayDatesHandler from "../handlers/displayDatesHandler.js";

const displayDatesListener = () => {
    window.addEventListener('load', displayDatesHandler);
}

export default displayDatesListener;