gameSeq= [];
userSeq=[];
let level= 0;
indexNum= ["yellow", "red", "blue", "green"];
started= false;
h2= document.querySelector("h2");
document.addEventListener("keypress", function(){
if(started==false){

   console.log("game started");
   started= true;
   levelUp();
}
})



function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function (){
      btn.classList.remove("flash"); 
   }, 250);   

}



function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function (){
      btn.classList.remove("userFlash"); 
   }, 250);
}

function levelUp(){
   userSeq= [];
   level++;
   h2.innerText= (`Level ${level}`);
   randIndex= Math.floor(Math.random()*3);
   randColor= indexNum[randIndex];
   randBtn= document.querySelector(`.${randColor}`);

   gameSeq.push(randColor);
   console.log(gameSeq);



   

   btnFlash(randBtn);
   }




   function checkAns(indx){
      console.log(`current Level ${level}`);
      // let indx= level - 1;

      if(userSeq[indx]=== gameSeq[indx]){

      if(userSeq.length== gameSeq.length){
         setTimeout (levelUp, 1000) ;

      }
         



      }

      else{
         h2.innerHTML= `Game Over!!! <b> Your score was ${level} <br> press any key to satrt`
         document.querySelector("body").style.backgroundColor= "red";
         setTimeout(function () {
         document.querySelector("body").style.backgroundColor= "white";

         }, 150);
         
         

         reset();
      }
   }

     
   

  function  btnPress(){
   console.log(this);
   btn= this;
   
   userColor= btn.getAttribute("id");
   
   userFlash(btn);
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length - 1);
   console.log(userSeq.length - 1);





  }

 
  allBtns= document.querySelectorAll(".btn");
  for(btn of allBtns){
   btn.addEventListener("click", btnPress);
   

  }


  function reset(){
   started= false;
     userSeq= [];
     gameSeq= [];
     level= 0;
   }


