function roll(){
    var rolled1 = Math.floor(Math.random()*6) + 1;
    var rolled2 = Math.floor(Math.random()*6) + 1;
    // var suffix1 = rolled1;
    // var suffix2 = rolled2;
    document.querySelector(".img1").setAttribute("src",`images/dice${rolled1}.png`);
    document.querySelector(".img2").setAttribute("src",`images/dice${rolled2}.png`);
    console.log(rolled1);
    console.log(rolled2);

    // document.querySelector("#heading").textContent = "Player 1";
    if( rolled1 === rolled2 ){
        return document.querySelector("#heading").textContent = "Draw Match! No one wins!";
    }
    else if(rolled1 > rolled2){
        return document.querySelector("#heading").textContent = "Player 1 wins!";
    }
    else{
        return document.querySelector("#heading").textContent = "Player 2 wins!";
    }
    
}
