let hideCards = () =>{
    let ul = document.querySelector('ul').children
    let ulArr = Array.from(ul);
    ulArr.forEach((li) =>{
        
        li.style.display = "none";
    
    })
    }
    
    let showCards = (myarray) =>{ 
        console.log(myarray)  
        myarray.forEach((li) =>{   
            li.parentNode.style.display = "block";    
        })
        }

        export {hideCards,showCards}