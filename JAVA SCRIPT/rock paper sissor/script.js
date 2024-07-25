const choise=document.querySelectorAll(".choise");
let userScore=0;
let compScore=0;

const compChoise=()=>{
    let comp=["rock","paper","sissor"];
    const compCh=Math.floor(Math.random()*3);
    return comp[compCh];
}

const showWinner=(userWin)=>{
    if(userWin==true){
        document.querySelector('.msg').innerText="You Won !!!";
        document.querySelector('.msg').style.backgroundColor="green";
        userScore=userScore+1;
        document.querySelector("#sc").innerText=`${userScore}`;
    }
    else{
        document.querySelector('.msg').innerText="Oppnent Won !!!";
        document.querySelector('.msg').style.backgroundColor="red";
        compScore+=1;
        document.querySelector("#sc1").innerText=compScore;
    }
}
 
const playGame=(userChoise)=>{
    const ComChoise=compChoise();
    if(ComChoise===userChoise){
        document.querySelector('.msg').innerText="Draw";
    }
    else{
        let userWin=true;
        if(userChoise==="rock"){
            userWin=ComChoise==="paper"? false:true;
        }
        else if(userChoise==="paper"){
            userWin=ComChoise==="sissor"?false:true;
        }
        else{
            userWin=ComChoise==="rock"?false:true;
        }
        showWinner(userWin);
    }
}



choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userChoise=choise.getAttribute("id");
        playGame(userChoise);
    });
});


