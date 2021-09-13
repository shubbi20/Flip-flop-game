let words=["delhi","uttrakhand","rajisthan","punjab","hariyana","himanchal","gujrat","uttar-pradesh"];
words=[...words, ...words];


let j=0;
let matches=0;
for(let i=1;i<=16;i++){
    let cardon =document.getElementById('gridbox').getElementsByClassName('container')[j];
    let front=document.createElement("div");
    front.classList.add('thefront');           

    let back=document.createElement("div");
    back.classList.add('theback');

    let rand =Math.floor(Math.random()*(16-i));
    
    back.innerHTML="<h3>"+words[rand]+"<h3>";
    words.splice(rand,1);

    let card=document.createElement("div");
    card.classList.add('thecard');

    card.appendChild(front);        //we have a div of class "thecard", it contains two div of classes "thefront" and "theback" 
    card.appendChild(back);         //div{container} -> card{thecard} -> front{thefront} + back{theback}
    cardon.appendChild(card);      //then we simply append a div of class "thecard" to a div of class "container"
    j++;
     
}


let cardon2 =document.getElementById('gridbox').getElementsByClassName('container');

let clickable;
let turns=30;
for(let card1 of cardon2){
    
     

    card1.addEventListener('click',()=>{
      if(clickable && turns!==0){
       
           if(!card1.firstChild.classList.contains("flipper")){ //checking if we are not clicking the already flipped card
                                                              
            turns--;
            document.querySelector("span").innerHTML=turns; 
            card1.firstChild.classList.add("flipper");    //flipping the 2nd card(then we compare it with first card)
               
         setTimeout(() => {
           if(card1.firstChild.lastChild.innerHTML !== clickable.firstChild.lastChild.innerHTML){    //checking,if both card does not equal,flip both of them
           card1.firstChild.classList.remove("flipper");
           clickable.firstChild.classList.remove("flipper");
           }
            else{                      // checking , if they are equal vanished them
           matches++;
           card1.style.visibility="hidden";
           clickable.style.visibility="hidden";
           }
         
            clickable=undefined;
          }, 500);
          
          }

        }
      else{                //1st turn(first card flipped-->1st we need to flip first card then we can compare it with other)
        turns--;
        document.querySelector("span").innerHTML=turns; 
        clickable=card1;
        card1.firstChild.classList.add('flipper');
        }

    });
}

setInterval(() => {
    if(turns <= 0){
         document.querySelector("h1").innerHTML="You Lose !!";
    }
    if(matches === 8){    
        document.querySelector("h1").innerHTML="You Won !!"
    }
}, 20);
