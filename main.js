window.onload = function(){

    document.getElementById("throw").addEventListener("click", throwDice);
    document.getElementById("total-uppe").addEventListener("click", sumUp);
    //document.getElementById("namn5").addEventListener("click", getValue);
    y = [];//Chosen dices
    players = [];
    let timethrowed = 0;
    let classlength = 0;
    let turn = 0;

    /*function getValue(){
        let k = document.getElementById("namn1").value;
        console.log(k);
    }*/

    document.getElementById("start").addEventListener("click", newGame);

    function newGame(){
        y = [];//Chosen dices
        players = [];
        clearResult();
        let a = prompt("Hur många spelare?")
        if (a === null){
            return;
        }
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("throw").style.display = "block";
        let i = 1;
        if (a > 5){
            alert("Högst antal spelare är 5!")
            newGame();
            return;
        }else
        do {
            let p = prompt("Namn på spelare: " + i);
            if (p === null){
                newGame();
                return;
            }
            players.push(p);
            a--
            i++
        } while (a > 0);
        let pl = players.length;
        let b = 1;
        let h = 0;
        do {
            document.getElementById("namn"+b).value = players[h];
                pl--
                b++
                h++
            } while (pl > 0)
        whosTurn(turn);
    }

    function sumUp(){
        let a = parseInt(document.getElementById("namn1-nr1").value) 
                + parseInt(document.getElementById("namn1-nr2").value) 
                + parseInt(document.getElementById("namn1-nr3").value) 
                + parseInt(document.getElementById("namn1-nr4").value)
                + parseInt(document.getElementById("namn1-nr5").value)
                + parseInt(document.getElementById("namn1-nr6").value)
        
        let b = parseInt(document.getElementById("namn2-nr1").value) 
                + parseInt(document.getElementById("namn2-nr2").value) 
                + parseInt(document.getElementById("namn2-nr3").value) 
                + parseInt(document.getElementById("namn2-nr4").value)
                + parseInt(document.getElementById("namn2-nr5").value)
                + parseInt(document.getElementById("namn2-nr6").value)

        let c = parseInt(document.getElementById("namn3-nr1").value) 
                + parseInt(document.getElementById("namn3-nr2").value) 
                + parseInt(document.getElementById("namn3-nr3").value) 
                + parseInt(document.getElementById("namn3-nr4").value)
                + parseInt(document.getElementById("namn3-nr5").value)
                + parseInt(document.getElementById("namn3-nr6").value)

        let d = parseInt(document.getElementById("namn4-nr1").value) 
                + parseInt(document.getElementById("namn4-nr2").value) 
                + parseInt(document.getElementById("namn4-nr3").value) 
                + parseInt(document.getElementById("namn4-nr4").value)
                + parseInt(document.getElementById("namn4-nr5").value)
                + parseInt(document.getElementById("namn4-nr6").value)

        let e = parseInt(document.getElementById("namn5-nr1").value) 
                + parseInt(document.getElementById("namn5-nr2").value) 
                + parseInt(document.getElementById("namn5-nr3").value) 
                + parseInt(document.getElementById("namn5-nr4").value)
                + parseInt(document.getElementById("namn5-nr5").value)
                + parseInt(document.getElementById("namn5-nr6").value)
         
        
        document.getElementById("namn1-totuppe").value = a;
        document.getElementById("namn2-totuppe").value = b;
        document.getElementById("namn3-totuppe").value = c;
        document.getElementById("namn4-totuppe").value = d;
        document.getElementById("namn5-totuppe").value = e;
    }

    function yatzyCheck(){
        let a = parseFloat(document.getElementById("dice1").innerHTML);
        let b = parseFloat(document.getElementById("dice2").innerHTML);
        let c = parseFloat(document.getElementById("dice3").innerHTML);
        let d = parseFloat(document.getElementById("dice4").innerHTML);
        let e = parseFloat(document.getElementById("dice5").innerHTML);
        let k = (a === b &&
                a === c &&
                a === d &&
                a === e);
        console.log(k);
        let f = document.getElementById("yatzy");
        console.log(a+b+c+d+e);
        if (k == true){
            console.log("YATZY!!");
            f.innerHTML = "YATZY!!";
        }
        
    }

    function clearResult(){
        document.getElementById("result").innerHTML = "<p id='throwed'></p>";
    }

    function whosTurn(a){
        document.getElementById("whosturn").innerHTML = "Det är spelares: " + players[a]
    }

    function throwDice(){
        y = [];
        getActive();
        document.getElementById("next").style.display = "block";
        document.getElementById("next").addEventListener("click", nextPlayer)
        if (classlength < 1 && timethrowed < 3){
            clearResult();
            let i = 0;
            let dicenum = 1; 
            let k = document.getElementById("result");
            timethrowed++
            document.getElementById("throwed").innerHTML = "Antal kast: " +timethrowed;
            do {
                let dicename = "dice" + dicenum;
                let b = k.innerHTML;
                let a = Math.floor((Math.random() * 6) + 1);
                k.innerHTML = b + "<div id="+dicename+">"+ a + "</div>"
                i++
                dicenum++
            } while (i < 5)
            clickDice();
        }
        else if (classlength > 0 && timethrowed < 3){
            clearResult();
            timethrowed++
            let dicenum = 1;
            let i = 0;
            let k = document.getElementById("result");
            document.getElementById("throwed").innerHTML = "Antal kast: " +timethrowed;
            let cl = classlength;
            do {
                let dicename = "dice" + dicenum;
                let b = k.innerHTML;
                k.innerHTML = b +  "<div id="+dicename+" class='active'>"+ y[i] + "</div>";
                i++
                dicenum++
            } while (classlength > i)
            if (cl != 5){
                do {
                        let dicename = "dice" + dicenum;
                        let a = Math.floor((Math.random() * 6) + 1);
                        let b = k.innerHTML;
                        k.innerHTML = b + "<div id="+dicename+">"+ a + "</div>"
                        cl++
                        dicenum++
                }while (cl < 5)
            clickDice();
            }
            
        }else {
            if (timethrowed = 3){
                alert("Åh nej - Du har inga fler kast!");
            }
        }
    
    }

    function getActive(){
        classlength = parseInt(document.getElementsByClassName("active").length);
        let a = 0;
        let b = document.getElementsByClassName("active")
        if (classlength < 1){
            return; 
        }else
            do {
                c = b[a].id
                d = document.getElementById(c).innerHTML;
                y.push(d);
                a++
            } while (classlength > a);

    }

    function toggleActive(){
        this.classList.toggle("active")
    }

    function nextPlayer(){
        y = [];
        timethrowed = 0;
        let b = players.length;
        if (turn < b - 1){
            turn++
            whosTurn(turn);
            clearResult();
        }else
        turn = 0;
        whosTurn(turn);
        clearResult();
    }

    function clickDice(){
        yatzyCheck();
        document.getElementById("dice1").addEventListener("click", toggleActive)
        document.getElementById("dice2").addEventListener("click", toggleActive)
        document.getElementById("dice3").addEventListener("click", toggleActive)
        document.getElementById("dice4").addEventListener("click", toggleActive)
        document.getElementById("dice5").addEventListener("click", toggleActive)
    }

}

