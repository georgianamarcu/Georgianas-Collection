import {hideCards, showCards} from "./display:hide-cards.js"

let filterCards  = () =>{

    let checkboxes = document.querySelectorAll("input");
    let checkbox = Array.from(checkboxes);
    
    
    for ( let i = 0; i < checkbox.length; i++){
    
    checkbox[i].addEventListener('change', e => {
    
        if(e.target.checked === true){
    
            if (checkbox[i].value === "adventure"){
              
             hideCards();
             let adventure = document.querySelectorAll('a.Adventure')
             showCards(adventure);
    
            }else if (checkbox[i].value === "drama"){
               
            hideCards();
            let drama = document.querySelectorAll('a.Drama')
            showCards(drama);
      
            }else if (checkbox[i].value === "fantasy"){
             
            hideCards();
            let fantasy = document.querySelectorAll('a.Fantasy')
            showCards(fantasy);
    
            }else if (checkbox[i].value === "romance"){
               
            hideCards();
            let romance = document.querySelectorAll('a.Romance')
            showCards(romance);
    
            }else if (checkbox[i].value === "supernatural"){
    
            hideCards();
            let supernatural = document.querySelectorAll('a.Supernatural')
            showCards(supernatural);
    
            }
            
            }
        else if (e.target.checked != true){
    
            let myCollection = document.querySelectorAll('a.card')
            showCards(myCollection);
             
                  }
    
            });
        }
}

export default filterCards