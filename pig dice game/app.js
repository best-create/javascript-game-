/* games rules

-the game have 2 players
-in each turn a player rolls a dice as many time he wishs each reuslt added to his round score
-but if the player roll a 1 all his round score get lost after that its next players turn 
-player get to choose to hold  which means that his round score gets to added to his global score after that its next player turn 
- the first player reach 100 point wins the game
*/

//event: notification that are send to notify code that somthing happend on the page
//exmaple clicking button , scrolling down resizing window or pressing key
//event listenerL function that performs  an action  based on a certain event it wait for specific events to happen 

//callback function is to pass a function into other function as argument withour parentheis operator

// anonymous function is simply function that doesnt have name can;t be reuse

// state variable tells condition of system which is definition
var score, roundscore, activePlayer, gamePlaying;
 

 
 init();


//document.querySelector('#current-' +  activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice + '</em>';
 
//var x = document.querySelector('#score-1').textContent;
//console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    
    //1. random number
    var dice =Math.floor(Math.random()*6) + 1;
    //2.display result
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+ dice +'.png';

    //3.update the round score only if the rolled number was not 1
    if(dice !== 1){
        //add score
        roundscore += dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundscore;

    }else{
        //nextplayer
      nextPlayer();
    }

    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function()
{
  if(gamePlaying){
     //1.add current score to  player globale score
  score[activePlayer]+=roundscore;
  
  //aother way to writes it is score[activePlayer]=score[activePlayer]+roundscore; 
  //2.update UI
  document.querySelector('#score-'+activePlayer).textContent= score[activePlayer];

  //3.check player won the game ?
  if(score[activePlayer]>=20){
     document.querySelector('#name-'+activePlayer).textContent='winner!';
     document.querySelector('.dice').style.display='none';
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     console.log('player '+activePlayer +'wins the game');
    
     gamePlaying=false;
  } else{
    nextPlayer();

  }
}

  
} );

function nextPlayer(){
       activePlayer ===0? activePlayer=1: activePlayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0';
        //moving and adding class
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){

score=[0,0];
activePlayer=0;
roundscore=0;
gamePlaying=true;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';




document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');


} 
