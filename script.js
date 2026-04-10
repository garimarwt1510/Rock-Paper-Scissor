
let userscore=1;
let compscore=1;
let msgBox=document.querySelector("#msg");
let container= document.querySelectorAll(".one");
let scoree=document.querySelector("#score");
let scoreC=document.querySelector("#scoreC");
let choose=document.querySelector("#choose");
let rock=document.querySelector("#r");
let paper=document.querySelector("#p");
let scissor=document.querySelector("#s");

 //computer choice
function computer(){
let arr=["Rock","Paper", "Scissor"];
const random = Math.floor(Math.random() * 3);
 return arr[random];
}

//result
const result=(userwin,userchoice,compchoice)=>{

    if(userwin==true){
        msgBox.innerText='User is Wins 🥳 ';
        msgBox.style.backgroundColor="green";
        msgBox.style.color="white";
        console.log("you win");
        choose.innerText=`User: ${userchoice}
         Computer: ${compchoice}`;
        //score
        let userr=userscore++;
        scoree.innerText=userr;
        console.log("UserScore",userr);

    }
    else{
        msgBox.innerText="User is lose 🙁 "
        msgBox.style.backgroundColor="red";
        msgBox.style.color="white";
        console.log("You lose");
        choose.innerText=`User: ${userchoice} 
         Computer: ${compchoice}`;

        //score
        let comp=compscore++;
        scoreC.innerText=comp;
        console.log("CompScore",comp);
     
    }
}



//game code
const playGame=(userchoice)=>{
    console.log("User: ", userchoice);
    const compchoice=computer();
    console.log("Computer: ",compchoice);


    if(userchoice==compchoice){
        msgBox.innerText="Game is Draw ";
        msgBox.style.backgroundColor="yellow"; 
    msgBox.style.color="#012a38";
        console.log("Game is draw");
        choose.innerText=`User: ${userchoice} 
        Computer: ${compchoice}`;
    }
    else{
        let userwin=true;  //we can use ternary operator
        if(userchoice=="Rock"){
            if(compchoice=="Scissor"){
                userwin=true;
               
            }
            else{
                userwin=false;
              
            }
        }
        else if(userchoice=="Paper"){
            if(compchoice=="Rock"){
                userwin=true;
            }
            else{
                userwin=false;
            }
        }
        else{
            if(compchoice=="Paper"){
                userwin=true;
            }
            else{
                userwin=false;s
            }
        }
        result(userwin, userchoice,compchoice);
    
    }
    
}

//to access user value 
container.forEach((one)=>{
one.addEventListener("click" ,()=>{
    const userchoice=one.getAttribute("id");
   playGame(userchoice);

    })
})

