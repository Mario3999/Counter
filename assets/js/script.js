document.addEventListener("DOMContentLoaded", function(){

    let input = document.querySelector('input[type=number]');

    input.value = 0;

    let counterButton = document.getElementsByClassName('counterbutton');

    for(let i = 0; i < counterButton.length; i++){
        
        counterButton[i].addEventListener('mousedown', function(){

            counterButton[i].style.top = '2px';
            counterButton[i].style.border = 'inset';
            
        }); 
        
        counterButton[i].addEventListener('mouseup', function(){

            counterButton[i].style.border = 'outset';
            
            if(counterButton[i].id === 'minus'){
                input.value = (parseInt(input.value)-1);
                counterButton[i].style.top = '0px';
            }
            else if (counterButton[i].id === 'plus'){
                input.value = (parseInt(input.value)+1);
                counterButton[i].style.top = '0px';
            }
            else{
                input.value = 0;
                counterButton[i].style.top = '0px';
            }

        });

        counterButton[i].addEventListener('mouseover', function(){
            
            counterButton[i].style.border = 'outset';
            
            if(counterButton[i].id === 'minus'){
                counterButton[i].style.backgroundColor = "rgb(0, 93, 255)";
            }
            else if (counterButton[i].id === 'plus'){
                counterButton[i].style.backgroundColor = "rgb(0, 100, 0)";
            }
            else{
                counterButton[i].style.backgroundColor = "rgb(200, 0, 0)";
            }

        });
        
        counterButton[i].addEventListener('mouseleave', function(){

            counterButton[i].style.top = '0px';
            counterButton[i].style.border = 'none';

            if(counterButton[i].id === 'minus'){
                counterButton[i].style.backgroundColor = "rgb(0, 119, 255)";
            }
            else if(counterButton[i].id === 'plus'){
                counterButton[i].style.backgroundColor = "rgb(0, 128, 0)";
            }
            else{
                counterButton[i].style.backgroundColor = "rgb(255, 0, 0)";
            }

        });


    }
    
    
});