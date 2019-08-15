window.onload = function(){

    document.getElementById("throw").addEventListener("click", throwDice)
    x = []; //Spelare 1
    y = []; //Spelare 2
    z = []; //Spelare 3

    function throwDice(){
        let i = 0;
        let k = document.getElementById("result");
        do {
            let a = Math.floor((Math.random() * 6) + 1);
            x.push(a);
            i++
        } while (i < 5);
        k.innerHTML = "Dina tärninga är: "+ x.toString()+"<br>";
    }

}

