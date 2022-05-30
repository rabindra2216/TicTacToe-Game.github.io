console.log("Welcome to Tic Tac Toe");
let gameover=new Audio("gameover.mp3");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let turn="X";
let count=0;
let isgameover=false;
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
const checkWin=()=>
{
    let boxtext=document.getElementsByClassName("item");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]];
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!=="")
        {

            turn=changeTurn();
            
         document.querySelector(".info").innerText= turn+" "+"Won";
         isgameover=true;
         document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
         gameover.play();
         
        }
    })

}
let boxes=document.getElementsByClassName("gamebox");
Array.from(boxes).forEach(element =>
{
    // music.play();
    let boxtext=element.querySelector(".item");
    element.addEventListener('click',(e)=>
    {
        if(boxtext.innerText=='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            count+=1;
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+" "+turn;

            }
            if(count==9)
            {
                document.getElementsByClassName("info")[0].innerText="Match Dwaw";
            }
        }

    })

})
document.getElementById("btn").addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName("item");
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
        turn="X";
        document.getElementsByClassName("info")[0].innerText="Turn for "+" "+turn;
        window.location.reload();

    })
    
})
document.getElementById("btn-start").addEventListener('click',()=>{
    music.play();
})
document.getElementById("btn-stop").addEventListener('click',()=>{
    music.pause();
})