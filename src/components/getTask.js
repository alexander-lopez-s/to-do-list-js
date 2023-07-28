import dom from "../dom.js";
import addMarkHandler from "../handlers/addMarkHandler.js";

const getTask = () => {

    const taskContainer = document.createElement('div');
          taskContainer.className = 'list-item';
          taskContainer.id = 'list-item';

    // Create the text node
    const p = document.createElement('p');
    p.innerText = dom.inputField.value;

   // create the check mark
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkmarkInput";
    checkboxInput.className = "checkmarkInput";

    checkboxInput.addEventListener('change', () => {
        addMarkHandler(p);
    })

    // Delete button 

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.className = 'delete-btn'
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        const parentDiv = event.target.closest(".list-item");
            parentDiv.remove();
    });

     
    // Edit button
    const modifyButton = document.createElement('button');
    modifyButton.id = 'modify';
    modifyButton.className = 'modify-btn'
    modifyButton.textContent = 'Modify';


    modifyButton.addEventListener('click', () => {
    const parentDiv = event.target.closest(".list-item");
    const paragraphElement = parentDiv.querySelector("p");
    dom.inputField.focus(); 
    dom.addButton.innerText = "Save";
    parentDiv.remove();
    dom.inputField.value = paragraphElement.innerText;  
    });


    taskContainer.append(checkboxInput, p, deleteButton, modifyButton)
    return taskContainer;
}

export default getTask;