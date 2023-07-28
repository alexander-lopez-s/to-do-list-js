import getTask from "../components/getTask.js"
import dom from "../dom.js";


   dom.addButton.addEventListener('click', () => {
       const createList = getTask ();
       dom.tasksContainer.append(createList)
       dom.inputField.value = '';
       if(dom.addButton.innerText === 'Save'){
        dom.addButton.innerText = 'Add';
    }
   } 
   )