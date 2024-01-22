var player1="Player1";
var player2="Player2";
function editName(){
    player1=prompt("Change player1 Name");
    player2=prompt("Change player2 Name");
    if(player1.length<1||player2.length<1){
        alert("Enter Valid Name");
        return;
    }
    document.querySelector("p.player1").innerHTML=player1;
    document.querySelector("p.player2").innerHTML=player2;

}
function flipCoin(){
    var coinname=document.querySelector(".img");
    coinname.setAttribute("src","coin_flip.gif");
    var result=document.querySelector("h1");
    setTimeout(() => {
        var random1=Math.floor(Math.random()*6)+1;
        var random2=Math.floor(Math.random()*6)+1;
        if(random1===random2){
            result.innerHTML="🥇"+player1+ " Win ";
        }
        else if(random2<random1){
            coinname.setAttribute("src","toss.png");
            result.innerHTML="🥇"+player1+" Win ";
        }
        else{
            result.innerHTML="🥇"+player2+" Win ";
            coinname.setAttribute("src","toss2.png");

        }
        
    }, 1000);
}