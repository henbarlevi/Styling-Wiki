

/**
 * element.style
 * contain the inline style values (properties values will not display here)
 */
var backdrop = document.querySelector('.backdrop');
console.dir(backdrop);
//backdrop.style // -  contain the inline style values (properties values will not display here)

var selectPlanButtons = document.querySelectorAll(".plan button");//get all buttons inside the .plan class element
var modal = document.querySelector('.modal');
var modalNoButton  = document.querySelector(".modal button");
console.dir(modalNoButton);

for (let i = 0; i < selectPlanButtons.length; i++) {
    const button = selectPlanButtons[i];
    button.addEventListener('click',()=>{
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        
    })
}

function closeModal(){
    modal.style.display = "none";
    backdrop.style.display = "none";
}

modalNoButton.addEventListener('click',closeModal);
backdrop.addEventListener('click',closeModal);


