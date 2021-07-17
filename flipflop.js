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

    card.appendChild(front);
    card.appendChild(back);
    cardon.appendChild(card);
    j++;
     
}


let cardon2 =document.getElementById('gridbox').getElementsByClassName('container');

let clickable;
let turns=30;
for(let card1 of cardon2){
    
     

    card1.addEventListener('click',()=>{
      if(clickable){
        turns--;
        document.querySelector("span").innerHTML=turns; 
        card1.firstChild.classList.add("flipper");

         setTimeout(() => {
           if(card1.firstChild.lastChild.innerHTML !== clickable.firstChild.lastChild.innerHTML){
           card1.firstChild.classList.remove("flipper");
           clickable.firstChild.classList.remove("flipper");
           }else{
           matches++;
           card1.style.visibility="hidden";
           clickable.style.visibility="hidden";
           }
         
            clickable=undefined;
          }, 500);

        }
      else{
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