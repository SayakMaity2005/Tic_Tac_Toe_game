let btns = document.querySelectorAll(".button");

let player = "X";
let count = 0;
let win = false;
let x_style = document.querySelector("#x").style;
let o_style = document.querySelector("#o").style;

let winningPtrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () => {
    for(let ptrn of winningPtrn) {
        let pos1 = btns[ptrn[0]].innerText;
        let pos2 = btns[ptrn[1]].innerText;
        let pos3 = btns[ptrn[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log(`${pos1} is winner`);
                for(let i=0; i<3; i++)
                    btns[ptrn[i]].style.backgroundColor = "#59d7c2";
                win = true;
                document.querySelector("#resultbox").innerText = `${pos1} has won the Match !!`;
            }
        }
    }
    return win;
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.boxShadow = "2px 2px 2px #44444499";
        btn.style.backgroundColor = "#fcfcfc";
        if(player === "X") {
            btn.innerText = "X";
            o_style.fontSize = "5vmin";
            o_style.color = "#55238e";
            o_style.textDecoration = "underline";
            x_style.fontSize = "4vmin";
            x_style.color = "#000000";
            x_style.textDecoration = "none";
            player = "O";
        }
        else {
            btn.innerText = "O";
            x_style.fontSize = "5vmin";
            x_style.color = "#55238e";
            x_style.textDecoration = "underline";
            o_style.fontSize = "4vmin";
            o_style.color = "#000000";
            o_style.textDecoration = "none";
            player = "X";
        }
        btn.disabled = true;
        if(checkWinner()) {
            for(let btn of btns) {
                btn.disabled = true;
            }
        }
        count++;
        if(count === 9 && !win) {
            console.log("Match Drawn !!");
            document.querySelector("#resultbox").innerText = "Match Drawn !!";
            for(let btn of btns) {
                btn.style.backgroundColor = "#b7f068";
            }
        }
    })
})

let rstBtn = document.querySelector("#rstbtn");

rstBtn.addEventListener("click", () => {
    rstBtn.style.boxShadow = "0px 0px 2px #132f3bda";
    rstBtn.style.top = "2px";
    rstBtn.style.left = "2px";
    document.querySelector("#resultbox").innerText = "";
    for(let btn of btns) {
        win = false;
        count = 0;
        btn.disabled = false;
        btn.innerText = "";
        btn.style.backgroundColor = "#efefef";
        btn.style.boxShadow = "5px 5px 5px #44444499";
    }
    setTimeout( () => {
        rstBtn.style.boxShadow = "2px 2px 2px #132f3bda";
        rstBtn.style.top = "0px";
        rstBtn.style.left = "0px";
    }, "70");
})

