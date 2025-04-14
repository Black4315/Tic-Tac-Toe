

//localStorage
function detectTurn(){
    turn =  localStorage.t == undefined || localStorage.t == 'x'? 'x': localStorage.t

}
detectTurn()
localStorage.round != undefined ? '': localStorage.setItem('round',1);localStorage.setItem('t','x');
let pointCountx = localStorage.XPoint !== undefined ? localStorage.XPoint : 0
let pointCounto = localStorage.OPoint !== undefined ? localStorage.OPoint : 0



xPoints.innerHTML = pointCountx
oPoints.innerHTML = pointCounto






////////////////////////////////////////////////////////////
function getformLocalSt() {
    if (localStorage.length >= 1) {

        let points = JSON.parse(localStorage.tP),
            boardT = JSON.parse(localStorage.bt),
            gameT = JSON.parse(localStorage.gameName)
            
        detectTp(points)
        if (JSON.parse(localStorage.gameName) == "cpuPlayer-form") {
            cpuGame()
            detectUserCpu() 
          
        }
        else if (JSON.parse(localStorage.gameName) == "2player-form") {
            HumGame()
        }
        distribphoto()

    }

}

 function detectTp(points){
    let result = +points.slice(-0, -1);
    targetPoint = result
 }

 ////////////////////////////////////////
 function firstP(fst){
    if (fst) {
        if (fst == 'i-st') {
            turn = 'x'
            players[0] = x
            detectPlayers()
            localStorage.setItem('playersR1',JSON.stringify(players))    
            p1P2()
         
                  
        } else if (fst == 'opp-st') {
            turn = 'x'
            players[0] = o
            detectPlayers()
            localStorage.setItem('playersR1',JSON.stringify(players))          
            p1P2()
           
        } else if (fst == 'random') {
            turn = 'x'
            players[randP] = x
            detectPlayers()
            localStorage.setItem('playersR1',JSON.stringify(players))             
            p1P2()
        }
    }
}

function p1P2(){
    if (players[0] == x) {
        localStorage.setItem('p1' , 'x')
        localStorage.setItem('p2' , 'o')
    } else if(players[0] == o){
        localStorage.setItem('p1' , 'o')
        localStorage.setItem('p2' , 'x')
    }
   
 }
 
 function detectPlayers(){
    if (players[0] == x) {
        players[1] = o
    } else if(players[0] == o){
        players[1] = x
        
    }
    else if(players[1] == o){
        players[0] = x
    }
    else if(players[1] == x){
        players[0] = o

    }
    return  players[1]
 }
 ////////////////////////////////////////
 function cpuGame(){
    let  fistP = localStorage.fst != undefined?  JSON.parse( localStorage.fst):'' 
    if (fistP) {
        firstP(fistP)
        $.ajax({
            url: firstP(fistP),
            success:function(){
           localStorage.removeItem('fst') ;
         }
         })
    }

 }
 function HumGame(){
    g = 'h'
    photoPtoN1.classList.add('human')
    photoPtoN2.classList.add('human2')
    userN1.innerHTML = localStorage.nickNameP1
    userN2.innerHTML = localStorage.nickNameP2

 }

////////////////////////////////////////////////////////////
//localStorage







//moods
function moodstart() {
    if (turn == 'x' && mood == '') {
        screenMessage(`${xI} Turn`)
    }
    else if (turn == 'o' && mood == '') {
        screenMessage(`${oI} Turn`)
    }

}
moodstart()
//turn
function moodend() {
    if (mood === 'end') {

    }
}
function mooddraw() {
    if (mood === 'draw') {
        drawCount += 1
        localStorage.setItem('draw', drawCount)
       
    }
}
//moods

//restart
function restart() {
    rePlay()
    localStorage.OPoint = 0
    localStorage.XPoint = 0
    xPoints.innerHTML = 0
    oPoints.innerHTML = 0
    localStorage.t = 'x'
    turn = 'x'
    oPoints.innerHTML ='0'
    xPoints.innerHTML ='0'
   
    
}
//restart

//replay
function rePlay() {
    mood = '';
    detectTurn()
    moodstart()
    squars.forEach(el => {
        el.innerHTML = ''
        el.style.backgroundColor = ''
    });
    winAnim()
    s()
    MxAl()
    progresCir()
    document.querySelector('.xo-squars-887989').style.cssText = ''
    BM = false
    b = false
    headr.classList.remove('none2')
}
function rP() {
    changeTurnEndGame()
    a = []
    rePlay()
}
//replay





function game(id) {
    mood = 'start'
    let elment = document.getElementById(id)
    if (turn == 'x' && elment.innerHTML == '') {
        elment.innerHTML = x
        turn = 'o'
        sfx.tapx.play()

    }
    else if (turn == 'o' && elment.innerHTML == '') {
        elment.innerHTML = o
        turn = 'x'
        sfx.tapo.play()

    }
    winner()
    progresCir()
    //linePos()
}


//winner
function winner() {

    for (let i = 1; i < 10; i++) {

        squars[i] = document.getElementById('squar' + i)

    }

    if (squars[1].innerHTML == squars[2].innerHTML && squars[2].innerHTML == squars[3].innerHTML && squars[1].innerHTML != '') {
        end(1, 2, 3, 2, 'horozintal', 1)
    }
    if (squars[4].innerHTML == squars[5].innerHTML && squars[5].innerHTML == squars[6].innerHTML && squars[6].innerHTML != '') {
        end(4, 5, 6, 5, 'horozintal', 4)
    }
    if (squars[7].innerHTML == squars[8].innerHTML && squars[8].innerHTML == squars[9].innerHTML && squars[9].innerHTML != '') {
        end(7, 8, 9, 8, 'horozintal', 7)
    }
    if (squars[1].innerHTML == squars[4].innerHTML && squars[4].innerHTML == squars[7].innerHTML && squars[1].innerHTML != '') {
        end(1, 4, 7, 4, 'virtical', 1)
    }
    if (squars[2].innerHTML == squars[5].innerHTML && squars[5].innerHTML == squars[8].innerHTML && squars[2].innerHTML != '') {
        end(2, 5, 8, 5, 'virtical', 2)
    }
    if (squars[3].innerHTML == squars[6].innerHTML && squars[6].innerHTML == squars[9].innerHTML && squars[9].innerHTML != '') {
        end(3, 6, 9, 6, 'virtical', 3)
    }
    if (squars[1].innerHTML == squars[5].innerHTML && squars[5].innerHTML == squars[9].innerHTML && squars[9].innerHTML != '') {
        end(1, 5, 9, 5, 'diagonal1', 1)
    }
    if (squars[3].innerHTML == squars[5].innerHTML && squars[5].innerHTML == squars[7].innerHTML && squars[7].innerHTML != '') {
        end(3, 5, 7, 5, 'diagonal2', 3)
    }
        if (mood != 'end') {
            if (squars[1].innerHTML != '' && squars[1].innerHTML != '' && squars[2].innerHTML != '' && squars[3].innerHTML != '' && squars[4].innerHTML != ''&& squars[5].innerHTML != '' && squars[6].innerHTML != '' && squars[7].innerHTML != '' && squars[8].innerHTML != '' && squars[9].innerHTML != '') {
                    mood = 'draw';
            }
        }
    
    mood == 'draw' ? Draw() : ''
}
//winner

//end
function end(el1, el2, el3, winel, winnerLinetype, xoEleWinner) {
    mood = 'end'

    let squarEl1 = document.getElementById('squar' + el1)
    let squarEl2 = document.getElementById('squar' + el2)
    let squarEl3 = document.getElementById('squar' + el3)

    squarEl1.style.backgroundColor = '#011334';
    squarEl2.style.backgroundColor = '#011334';
    squarEl3.style.backgroundColor = '#011334';

    turn = ''


    let xPoints = document.getElementById('x-points')
    let oPoints = document.getElementById('o-points')
    if (squarEl1.innerHTML == x) {
        let resultx = xPoints.innerHTML = +xPoints.innerHTML + 1
        localStorage.setItem('XPoint', resultx)
   

    }
    else if (squarEl1.innerHTML == o) {
        let resulto = oPoints.innerHTML = +oPoints.innerHTML + 1
        localStorage.setItem('OPoint', resulto)
        
    }

    if (JSON.parse(localStorage.tP) != 'unlimitp') {
    if (localStorage.XPoint >= targetPoint) {
        pointCountx = 0
        localStorage.XPoint = 0
        pointCounto = 0
        localStorage.OPoint = 0
        roundOver =true
        

    }
    else if (localStorage.OPoint >= targetPoint) {
        pointCounto = 0
        localStorage.OPoint = 0
        pointCountx = 0
        localStorage.XPoint = 0
        roundOver =true

    }}
    
    winAnim(squarEl1,squarEl2,squarEl3)
    moodend()
    setTimeout(() => {
     changPosxoWin(winel)
    }, 1500);

    document.querySelector('.xo-squars-887989').style.cssText = 'pointer-events: none;'
    prgCo.classList.add('in-active')
    prgCx.classList.add('in-active')
    
}
//end



function changeTurnEndGame() {
    if (localStorage.t == 'x' ||localStorage.t == undefined ) { 
        localStorage.setItem('t', 'o') 
     }else if(localStorage.t == 'o'){
        localStorage.setItem('t', 'x')

     }
    } 
   


 //////////////////////////call
getformLocalSt()
onload = setTimeout(MxAl, timeoutPlayStart); 
progresCir()
document.getElementById('Allpoints').innerHTML = JSON.parse(localStorage.getItem('tP')) !='unlimitp'? `${JSON.parse(localStorage.getItem('tP')).slice(0, 1)} for 🏆`: 'Unlimited'
showNameByinner()
