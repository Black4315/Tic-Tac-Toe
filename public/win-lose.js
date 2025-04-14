let timeoutChgDr = 3000
let winnerE = document.querySelector('.winner')
let winnerxo = document.querySelector('.winner .simp-win')
let winnerN = document.querySelector('.winner #winnerN')
let winnerclbr = document.querySelector('.winner .confetti')
let roundN = document.querySelector('.winner #roundN')
let userxPt =document.querySelector('.xo-title-887989 .photo-progress.user-x')
let useroPt =document.querySelector('.xo-title-887989 .photo-progress.user-o')
let userx =document.querySelector('.xo-title-887989 .x-user .user-name #user-name')
let usero =document.querySelector('.xo-title-887989 .o-user .user-name #user-name')
let exitBtn = document.querySelector('.winner .exit-page button')
 
function changPosxoWin(winel) { 
 document.querySelector('.Allpoints').style.zIndex='-1'
    let squarWinel = document.getElementById('squar' + winel)
    winnerE.classList.add('winner-show')
    headr.classList.add('none2')
    if (JSON.parse(localStorage.gameName) === "cpuPlayer-form") {
        if (roundOver) {
            if (squarWinel.innerHTML == human.sym) {
                sfx.winner.play()
            }
            else {
                sfx.lose.play()
            }
        }
        else {
            if (squarWinel.innerHTML == human.sym) {
                sfx.smallwin.play()
            }
            else {
                sfx.lose.play()
            }

        }

    }
    if (squarWinel.innerHTML == x) {
        prgCx.classList.remove('in-active')
        document.body.style.cssText = '--winner-color:var( --primary-color-2 );'
        winnerxo.innerHTML = userxPt.outerHTML
        winnerN.innerHTML = userx.innerHTML
    }
    else {
        prgCo.classList.remove('in-active')
        winnerxo.innerHTML = useroPt.outerHTML
        document.body.style.cssText = '--winner-color:var( --primary-color);'
        winnerN.innerHTML = usero.innerHTML


    }
    if (roundOver) {
        let s = 8
        winnerxo.firstChild.classList.add('cup')
        winnerclbr.classList.remove('none')
        roundN.remove()
        document.querySelector('.winner #is-win p').childNodes[1].textContent = ' won the game'
        document.querySelector('.winner .play-again').remove()
        setInterval(() => {
            
            exitBtn.textContent = `Exit page (${s})`
            if (s <= 0) {
                clearInterval()
                exitBtn.click()
            }
            else s = s - 1

        }, 1000);
        if (squarWinel.innerHTML == x) {
            his.name = userx.innerHTML
            his.photo = userxPt.innerHTML 
            his.scoreW = xPoints.innerHTML 
            his.scoreL = oPoints.innerHTML 
            his.xo = xI
            his.loseN = usero.innerHTML
            his.losei = oI
            his.gameName = JSON.parse(localStorage.gameName) 
            
        }
        else {
            his.name = usero.innerHTML
            his.photo = useroPt.innerHTML 
            his.scoreL = xPoints.innerHTML 
            his.scoreW = oPoints.innerHTML
            his.xo = oI
            his.loseN = userx.innerHTML
            his.losei = xI
            his.gameName = JSON.parse(localStorage.gameName)
        }
        history.push(his)
        localStorage.history = JSON.stringify(history)
    
        if (JSON.parse(localStorage.gameName) !== "cpuPlayer-form") sfx.winner.play()
    }else{ if (JSON.parse(localStorage.gameName) !== "cpuPlayer-form") sfx.smallwin.play() }
    
    roundN.innerHTML = JSON.parse(localStorage.round)
    localStorage.setItem('round', JSON.parse(localStorage.round) + 1)
    showNameByinner()
}

function playerBrd() {
    let playerBrd = document.querySelector('.plyer-brd-table tbody')
    ,clearBtn = document.querySelector('.his-board .plyer-brd-btns .clear button')
    , plOrCpu 
    , winColor
    ,loseColor
    if(localStorage.history != 'null' && localStorage.history != undefined && localStorage.history != '[]'){
        for (let i = 0; i < JSON.parse(localStorage.history).length; i++) {
            JSON.parse(localStorage.history)[i].gameName == '2player-form'? plOrCpu =`<i class="fa-solid fa-user"></i>`: plOrCpu = `<i class="fa-solid fa-robot"></i>`
           if (JSON.parse(localStorage.history)[i].xo == oI) {
            winColor= `var(--primary-color)`; loseColor = `var(--primary-color-2)`
        }else{
            winColor= `var(--primary-color-2)`
            loseColor = `var(--primary-color)`
        }
      if(playerBrd!=null) {playerBrd.innerHTML = `
        <tr class="player-board history-element"onmouseleave="this.querySelector('button').remove()" onmouseenter="infoEl(${i},this)" style="position:relative;" >
        <td class="num"><p style="margin-right:10px ;color: #8298a3;" id="plyer-brd-num">${'-'} </p></td>
        <td class="photo"><div class="photo-progress cup">${JSON.parse(localStorage.history)[i].photo}</div></td>
        <td class="player-name"><span class="name">${JSON.parse(localStorage.history)[i].name}</span> </td>
        <td class="player-i"> ${JSON.parse(localStorage.history)[i].xo}</td>
        <td class="player-name"><span class="name"> / ${JSON.parse(localStorage.history)[i].loseN}</span> </td>
        <td class="player-i"> ${JSON.parse(localStorage.history)[i].losei}</td>
        <td class="game-type">
        <div class="text"><i class="fa-solid fa-user"></i><span style="margin: 0 4px;"> vs </span>${plOrCpu}</div>
        </td>
        <td class="score-Winner"><span style ="color:${winColor};" class="sc-win">${JSON.parse(localStorage.history)[i].scoreW}</span> <span span style="margin: 0 4px;">-</span> <span style ="color:${loseColor};" class="sc-lose">${JSON.parse(localStorage.history)[i].scoreL}</span></td>
        </tr>
        `+playerBrd.innerHTML
            
        clearBtn.onclick = ()=> cleardata(i)
        }
    }
    }
    else{
      playerBrd.parentElement.innerHTML = '<p style="padding:20px 0;text-align:center;">No Game '
      clearBtn.remove()
    }
  
}
function deletEl(i,t) {
    history.splice(i,1)
    localStorage.history = JSON.stringify(history)
    t.remove()
}
function cleardata(i) {
    history.splice(0)
    localStorage.history = JSON.stringify(history)
    playerBrd()
}  function infoEl(i,e) {
        var style = document.createElement('style');
        style.innerText = `
        table tr button::after {content:"";display:block;height:20px;width:20px;background: var(--primary-color);clip-path: polygon(50% 100%, 0 0, 100% 0);position: absolute;left: 22px;}`        
        document.body.appendChild(style)
        let y = document.createElement('button');y.innerHTML='Delete'
        y.style.cssText = 
        `background: var(--primary-color);
        width: 67px;
        text-align: center;
        position: absolute;
        border-color: var(--primary-color);
        color: var(--text-color);
        right: 109px;
        top: -39px;font-family:'Dear Sans';box-shadow: inset 0 -3.25em 0 0 var(--primary-color);`
        e.appendChild(y)
        y.onclick = ()=>{deletEl(i,e);playerBrd()}
    }
playerBrd()

function Draw() {
    mood = 'draw'
    headr.classList.add('none2')
    let draw = document.querySelector('.draw')
    let drawxo = document.querySelector('.draw .simp-draw')
    draw.classList.add('draw-show')
    drawxo.innerHTML = '<i class="fa-solid fa-x x-child"></i> <i class="fa-solid fa-o o-child"></i>'
    if (mood === 'draw') {
        drawCount += 1
        sessionStorage.setItem('draw', drawCount)
    }
    setTimeout(function () {
        //rePlay()
        draw.classList.remove('draw-show')
        drawxo.innerHTML = ''
        rP() 
        document.querySelector('.Allpoints').style.zIndex='1'
    }, timeoutChgDr)
    document.querySelector('.Allpoints').style.zIndex='-1'

}



function winAnim(sq1, sq2, sq3) {
    let ASq = document.querySelector('.xo-squars-887989')
    if (mood == 'end') {
        ASq.classList.add('end')
        sqWn = [sq1, sq2, sq3]
        sqWn.forEach(e => { e.classList.add('win') });
        setTimeout(() => { sfx.winAni.play(); }, 500);

    } else {
        sq = document.querySelectorAll('.squar-887989')
        sq.forEach(e => { e.classList.remove('win') });
        ASq.classList.remove('end')

    }



}
