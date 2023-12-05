
let BM = false
,b = false
,bd=false

function BestMove(n,m,ins) {
    let sy
    JSON.parse(localStorage.playersR1)[0] == o ? sy = 'o' : sy = 'x'
    let cpuSym = localStorage.playersR1!=undefined? JSON.parse(localStorage.playersR1)[1]:''
    let humsym = localStorage.playersR1!=undefined? JSON.parse(localStorage.playersR1)[0]:''
    if(m == 0){
           //insane
           if (ins) {
            for (let i = 0; i < allsquars.length; i++) {
                for (let u = 0; u < 3; u++) {
                    if (localStorage.t == sy && allsquars[i][u].innerHTML == humsym && allsquars[i][u] == allsquars[i][1]) {
                        let k = [allsquars[4][1],allsquars[i][u - 1],allsquars[4][1]]
                        if (allsquars[4][1].innerHTML == '') BM =allsquars[4][1]
                    }
                }
            }
            function trickI(h, h2, v1,f, f2) {
                if (localStorage.t != sy&&h.innerHTML == cpuSym && h2.innerHTML == humsym && f.innerHTML == '') {
                   BM = v1.innerHTML == '' ? v1 : false; 
                }
            }
            trickI(allsquars[0][0], allsquars[0][2], allsquars[3][1],allsquars[4][1])
            trickI(allsquars[0][0], allsquars[3][2], allsquars[0][1],allsquars[4][1])
            trickI(allsquars[0][2], allsquars[0][0], allsquars[5][1],allsquars[4][1])
            trickI(allsquars[0][2], allsquars[5][2], allsquars[0][1],allsquars[4][1])
            trickI(allsquars[3][2], allsquars[0][0], allsquars[4][2],allsquars[4][1])
            trickI(allsquars[3][2], allsquars[5][2], allsquars[3][1],allsquars[4][1])
            trick(allsquars[0][0], allsquars[0][1], allsquars[0][2], allsquars[3][2], allsquars[4][1], allsquars[3][1],[ allsquars[5][2],allsquars[5][1], allsquars[4][2]])
            trick(allsquars[0][2], allsquars[0][1], allsquars[0][0], allsquars[5][2],allsquars[4][1], allsquars[5][1],[ allsquars[3][2],allsquars[3][1], allsquars[4][2]])
            trick(allsquars[3][2], allsquars[4][2], allsquars[5][2], allsquars[0][0], allsquars[4][1], allsquars[3][0],[ allsquars[0][2],allsquars[0][1], allsquars[5][1]])
        }
        //insane
        //defense
            if (localStorage.t == sy &&allsquars[4][1].innerHTML==humsym ) {
                let d = [allsquars[0][0],allsquars[0][2]]
                if(d[Math.floor(Math.random()*2)].innerHTML=='') BM =d[Math.floor(Math.random()*2)]
            }
           
            if (localStorage.t == sy && allsquars[0][0].innerHTML == humsym
                || localStorage.t == sy && allsquars[0][2].innerHTML == humsym
                || localStorage.t == sy && allsquars[3][2].innerHTML == humsym
                || localStorage.t == sy && allsquars[5][2].innerHTML == humsym
            ) { if (allsquars[4][1].innerHTML == '') { BM = allsquars[4][1]; bd = true } }
            if (bd == true && allsquars[3][1].innerHTML==''&& allsquars[0][0].innerHTML == allsquars[5][2].innerHTML && allsquars[5][2].innerHTML == humsym ||bd == true && allsquars[3][2].innerHTML == allsquars[0][2].innerHTML && allsquars[0][2].innerHTML == humsym) { BM = allsquars[3][1];bd=false; }
            //defense
           
            function trick(h, v1, v2, c, f, f2, ...h2) {
               for (let i = 0; i < h2[0].length; i++) {
                if(h2[0][i].innerHTML!=""){
                if (h.innerHTML == cpuSym && h2[0][i].innerHTML == humsym && c.innerHTML == '' && f.innerHTML == '' && f2.innerHTML == '') {                
                    if (v2.innerHTML == cpuSym && v1.innerHTML == humsym) { BM = c.innerHTML == '' ? c : false; }
                    else { BM = v2.innerHTML == '' ? v2 : false;}
                } 
                }
            } 
        }
            trick(allsquars[0][0], allsquars[3][1], allsquars[3][2], allsquars[4][1], allsquars[5][0], allsquars[5][2], [allsquars[0][1]])
            trick(allsquars[0][2], allsquars[5][1], allsquars[5][2], allsquars[4][1], allsquars[3][0], allsquars[3][2], [allsquars[0][1]])
            trick(allsquars[3][2], allsquars[3][1], allsquars[0][0], allsquars[4][1], allsquars[5][0], allsquars[5][2], [allsquars[4][2]])
            trick(allsquars[0][0], allsquars[5][2], allsquars[4][1], allsquars[0][2], allsquars[0][1], allsquars[3][2], [allsquars[3][1]])
            trick(allsquars[0][2], allsquars[3][2], allsquars[4][1], allsquars[0][0], allsquars[0][1], allsquars[5][2], [allsquars[5][1]])
            trick(allsquars[3][2], allsquars[0][2], allsquars[4][1], allsquars[5][2], allsquars[0][0], allsquars[4][2], [allsquars[3][1]])
        }
     
        function findbestM(s) {
            let m,y
            for (let i = 0; i < allsquars.length; i++) {
                for (let u = 0; u < 3; u++) {
                    if (
                        allsquars[i][0].innerHTML == allsquars[i][1].innerHTML && allsquars[i][1].innerHTML == s
                        && allsquars[i][2].innerHTML == ''
                        || allsquars[i][0].innerHTML == allsquars[i][2].innerHTML && allsquars[i][2].innerHTML == s
                        && allsquars[i][1].innerHTML == ''
                        || allsquars[i][1].innerHTML == allsquars[i][2].innerHTML && allsquars[i][1].innerHTML == s
                        && allsquars[i][0].innerHTML == '') {
                            if (allsquars[i][u].innerHTML == '') {s!=humsym?b=allsquars[i][u]:BM =allsquars[i][u]; return(true) }
                        }
                    }
                }
            }
        if(n!=null&&n!=3)findbestM(humsym)
        findbestM(cpuSym)


}
 function gc(d){
    mood = 'start'
    let medBot = Math.floor(Math.random() * 15);
    let elment = document.getElementById(d)
    if (turn == localStorage.p1 && elment.innerHTML == '') {
        elment.innerHTML = JSON.parse(localStorage.playersR1)[0] 
        turn = localStorage.p2
        elment.innerHTML == o ? sfx.tapo.play(): sfx.tapx.play()  
    } 
    JSON.parse(localStorage.diff) =='Hector'?BestMove(0,0,true) :JSON.parse(localStorage.diff) =='Marvin'?BestMove(0,0,false):JSON.parse(localStorage.diff) =='Vector'?BestMove(0,1,false):BestMove(null,null,false)
    if (turn == localStorage.p2) MxAl()
    progresCir()
    winner()  
}

if(localStorage.gameName!="2player-form")sessionStorage.setItem('c', JSON.stringify(localStorage.diff =='"Hector"'||localStorage.diff =='"Marvin"'? P1:P));
function s(){
    sessionStorage.setItem('c',JSON.stringify(JSON.parse(sessionStorage.c).sort(()=> .5 - Math.random()) ))
}
s()

function MxAl(j,u,k){ 
    let cpuSym = localStorage.playersR1!=undefined? JSON.parse(localStorage.playersR1)[1]:''
    let humsym = localStorage.playersR1!=undefined? JSON.parse(localStorage.playersR1)[0]:''
    setTimeout(() => {
        if (h == true) {
            function r(min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            }

            let  sq = [], k = 'j';
            j = P[r(0, P.length)]
            for (i = 0; i < 8; i++) {
                for (q = 0; q < 3; q++) {
                    c = P; c2 = c[i]
                    sq[c2[q]] = document.getElementById(`squar${JSON.parse(sessionStorage.c)[i][q]}`)
                    c2[q] = sq[c2[q]]
                }
            }
            u = c.entries()
            for (i = 0; i < 8; i++) {
                for (q = 0; q < 3; q++) {
                    k = c[i][q].innerHTML == '' ? true : false
                  
                 
                    if (k) {
                        let e, r;
                        for ([e, r] of u) {
                            if (turn == localStorage.p2 && g == 'c') {
                                mood = 'start'
                                if(BM!=false||b!=false){ b!=false?b.innerHTML==''? b.innerHTML=cpuSym:'':BM.innerHTML==''? BM.innerHTML=cpuSym:''}else c[i][q].innerHTML = cpuSym
                                turn = localStorage.p1
                                winner()
                                c[i][q].innerHTML == o||b.innerHTML== o||BM.innerHTML== o ? sfx.tapo.play() : sfx.tapx.play()
                                BM = false
                                b = false
                            }
                        }
                    }
                }
            }
            progresCir()
        }
        else if (h == false) {
            ////////////////////hard mmoode
        }
        // let play = setTimeout(MxAl,timeoutPlay) 
    }, timeoutPlay)
}
//artificial intelligence 
