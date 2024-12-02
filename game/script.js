const choices=['rock', 'paper','sciessors'];
const playerchoicetext=document.getElementById('player-choice');
const computerchoicetext=document.getElementById('computer-choice');
const resulttext=document.getElementById('game-result');

document.querySelectorAll('.choices').forEach(button =>{
    button.addEventListener('click',()=>{
        const playerchoice=button.id;
        const computerchoice=getcomputerchoice();
        const result=getresult(playerchoice,computerchoice);

        displaychoices(playerchoice,computerchoice);
        displayresult(result);
    });
});

function getcomputerchoice(){
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getresult(player,computer){
    if(player,computer){
        return 'it is tie!';
    }
    else if(
        (player=='rock'&&computer=='sciessors')||
        (player=='sciessors'&& computer=='paper')||
        (player=='paper'&& computer=='rock')
    ){
        return 'you win!';
    }
    else{
        return 'you loose!';
    }
}
function displaychoices(result){
    
}