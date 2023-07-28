import dom from "../dom.js";
import { dates } from "../data.js";
import displayDates from "../components/displayDates.js"
import createDates from "../utils/createDates.js"

const displayDatesHandler = () => {
    createDates();
    const setOfDates = displayDates(dates)

    dom.userContainer.insertAdjacentElement("afterend", setOfDates);
}

export default displayDatesHandler;