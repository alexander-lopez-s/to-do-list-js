const addMarkHandler = (element) => {
    const hasAClass = element.classList.contains('marked');
       if(hasAClass){
           element.classList.remove('marked');
       } else {
        element.classList.add('marked');
       }
}

export default addMarkHandler;