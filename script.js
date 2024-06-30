let turn='X';

function changeTurn(){
    if (turn=='X'){
    return '0';
    }else if(turn=='0'){
    return 'X';
    }
}
function checkWin(){
    let boxtexts=document.querySelectorAll(".boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let win of wins){
        if(boxtexts[win[0]].innerText === boxtexts[win[1]].innerText &&
        boxtexts[win[0]].innerText === boxtexts[win[2]].innerText &&
        boxtexts[win[0]].innerText !== ''){
            // console.log('win');
            document.querySelector('.info').innerHTML='Win for '+boxtexts[win[0]].innerText+' </br> <b>Game Over!</b>';
            setTimeout(reset,2000);
        };
            
        
    }
}

// let array=Array.from(boxtext);
let box=document.querySelectorAll(".box");
let boxes=Array.from(box);
// console.log(boxes)
for(box of boxes){
    let boxtext=box.querySelector(".boxtext");
    box.addEventListener('click',()=>{
        
        if(boxtext.innerHTML==''){
            boxtext.innerText=turn;
            
            // console.log(turn);
            
            turn= changeTurn();
            document.querySelector('.info').innerHTML='Turn for '+turn;
            checkWin();
        }
    })
}
function reset(){
    document.querySelector('.info').innerHTML='Turn for X';
    for(box of boxes){
        let boxtext=box.querySelector(".boxtext");
        boxtext.innerHTML='';
        turn='X';
    }
}
let btn=document.querySelector('#reset');
btn.addEventListener('click',reset);