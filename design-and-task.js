
//design and tasks
////////////////////////////////////////////design
function progresCir(){
   let squar = document.querySelectorAll('.xo-squars-887989 .squar-887989')
   squar.forEach(e => {
        if (prgCo != null && prgCx !=null) {
        if (turn == 'x' ) {
        prgCo.classList.add('in-active')
        prgCx.classList.remove('in-active')
        // e.style.borderColor = 'var(--primary-color-2)'
    }
    else if (turn == 'o') {
        prgCx.classList.add('in-active')
        prgCo.classList.remove('in-active')      
        // e.style.borderColor = 'var(--primary-color)'

    }

    }
    });
    
}

function detectUserCpu() {
    if (JSON.parse(localStorage.playersR1)[0] == x || players[0] == x) {
        human = { photo: photoPtoN1, user: userN1 ,sym:JSON.parse(localStorage.playersR1)[0]}
        robot = { photo: photoPtoN2, user: userN2 ,sym:JSON.parse(localStorage.playersR1)[1]}
        photoPtoN1.classList.add('human')
        photoPtoN2.classList.add('cpu')
        userN1.setAttribute('forW', 'human')
        userN2.setAttribute('forW', 'cpu')
        userN1.innerHTML = localStorage.nickNamePCpu
        userN2.innerHTML =JSON.parse(localStorage.diff) 

    }
    else if (JSON.parse(localStorage.playersR1)[0] == o || players[0] == o) {
        human = { photo: photoPtoN1, user: userN1 ,sym:JSON.parse(localStorage.playersR1)[0]}
        robot = { photo: photoPtoN2, user: userN2 ,sym:JSON.parse(localStorage.playersR1)[1]}
        photoPtoN1.classList.add('cpu')
        photoPtoN2.classList.add('human')
        userN1.setAttribute('forW', 'cpu')
        userN2.setAttribute('forW', 'human')
        userN1.innerHTML =JSON.parse(localStorage.diff) 
        userN2.innerHTML =  localStorage.nickNamePCpu
       }
  
}
function distribphoto() {
    allPhotoN.forEach(e => {
       let img = e.querySelector('img') 
       if (e.classList.contains('cpu') ) {
            img.src =  JSON.parse(localStorage.diff) =='Hector'?'./user-photo/insane.png' :JSON.parse(localStorage.diff) =='Marvin'?'./user-photo/marvin.png':JSON.parse(localStorage.diff) =='Vector'?'./user-photo/vector.png':'./user-photo/kronos.png'
            img.style.cssText = JSON.parse(localStorage.diff) =='Vector'?`width: 110%;`:''
        }else if(e.classList.contains('human')){
            if(localStorage.photoHuUser == undefined){
             loadFileJson('main.json', img, null,'photo','photo')
         }
         else{
            img.src = localStorage.photoHuUser
         }
        }
        else if(e.classList.contains('human2')){
            if(localStorage.photoHuUser2 == undefined){
             loadFileJson('main.json', img, null,'photo','photo2')
         }
         else{
            img.src = localStorage.photoHuUser2
         }
        }
        
        
    });
}



/////////////////////////////////////////////////////////////////////////////////////////////////////fistpage
    //////////////////////
    function afClBtnC(e) {
        let a = e.id
        let n = document.querySelector('.after-click-btn .cpu-players')
        let n2 = document.querySelector('.after-click-btn .two-players')

        opMenu( document.querySelector('.cdk-overlay-container .cdk-overlay'))
        if (a == 'cpu-P') {
            n.parentElement.parentElement.classList.remove('hidden')
            n.classList.remove('none2')

        }
        else {
            n.parentElement.parentElement.classList.remove('hidden')
             n2.classList.remove('none2')
        }

    }
    function afClBtnCCl(){
        let n = document.querySelector('.cdk-overlay-container'),
        chN =[ n.childNodes[3].querySelector('.cpu-players') , n.childNodes[3].querySelector('.two-players')]
       
        n.classList.add('hidden')
        chN[0].classList.add('none2'); 
        chN[1].classList.add('none2'); 
        clMenu(document.querySelector('.cdk-overlay-container .cdk-overlay'))

    }
    function opMenu(e){
        e.classList.add('active')
        document.body.style.overflow = 'hidden'
    }
    function clMenu(e){
        e.classList.remove('active')
        document.body.style.overflow = ''

    }
    //////////////////////

    function NavPTLoop() {
           let navP = document.querySelectorAll('.Tpoint .choose-ele-nav')
           if ( navP[0]!=undefined) {
            for (let i = 4; i > 0; i-=1) {
            navP[0].innerHTML = `<div class="nav-el " id="${i}p"><div class="nav-ele-name"><p>${i} for 🏆</p></div></div>`  + navP[0].innerHTML
            navP[1].innerHTML = `<div class="nav-el " id="${i}p"><div class="nav-ele-name"><p>${i} for 🏆</p></div></div>`  + navP[1].innerHTML
            }
            document.querySelectorAll('.Tpoint .nav-el').forEach((e)=>{e.id =='3p'?e.classList.add('choosed'):''})
           }   
    }
    NavPTLoop() 
   
    //////////////////////

    function navActiv(a) {
      
        let p = a.parentElement.querySelector('.choose-ele-nav')
            , bDNEl = a.parentElement.querySelectorAll('.choose-ele nav .nav-el')
            , bType = a.querySelector('#answer-input')
            , bDEl = a.querySelector('.nav-el')
            , cdk2 = a.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.cdk-overlay')
           
          
        
        let fP = (type) => {
            p.classList[type]('active')
            a.classList[type]('active')
        }
        fP('toggle')
        cdk2.onclick = ()=>{fP('remove');cdk2.classList.toggle('active')}
        cdk2.classList.toggle('active')

        bDNEl.forEach(e => {
            e.onclick = () => {
                let p = e.querySelector('.nav-ele-name p span')
                let y = bDEl.querySelector('.nav-ele-name p')
                bType.value = e.id
                bDEl.innerHTML = e.innerHTML + bType.outerHTML
                bDEl.id = e.id
                for (let i = 0; i < bDNEl.length; i++) {bDNEl[i].classList.remove('choosed')}
                e.classList.add('choosed')
                fP('remove')
                cdk2.classList.toggle('active')

            }
        });

    }
/////////////////////////////////////////////////////////////////////////////////////////////////////fistpage

function removeE(e,clName) {
    let ele = e.querySelector(`.${clName}`)
    ele != null?ele.remove():''
}
function screenMessage(mess) {
   let cdk = document.querySelector('.cdk-overlay-container2')
   cdk.classList.remove('hidden')
   cdk.innerHTML = ` 
   <div class="cdk-overlay active"></div><div class="sreen-message">
   <div class="message"><h1 id="message">${mess}</h1></div></div>`
   setTimeout(() => {cdk.querySelector('.sreen-message #message')!= null?cdk.querySelector('.sreen-message #message').classList.add('messageOf'):''}, 1200);
   setTimeout(() => {cdk.classList.add('hidden');removeE(cdk,'sreen-message');removeE(cdk,'cdk-overlay')}, timeoutPlay);
}
function mediaQ() {
    let p =  document.querySelector('.Allpoints')
    if (media.matches) {
        if(box[0] != undefined){box[0].classList.add('none');box[1].classList.add('none')}
       p!=null? document.body.appendChild(p):''
       
    }else{
        if(box[0] != undefined){box[0].classList.remove('none');box[1].classList.remove('none')}
        p!=null? document.querySelector('.xo-game-887989').appendChild(p):""
    }
    
}
mediaQ()
window.addEventListener('resize', mediaQ)
////////////////////////////////////////////design




////////////////////////////////////////////task

/////////////////////////////////////////
sideTask.forEach(element => {if(element.getAttribute('sideTasks') == 'describe-bar') element.onmouseenter = () =>  {
  let wNU =window.navigator.userAgent
    if(wNU.includes('Android')!==true && wNU.includes('OS')!==true){
        showNameHov(element)

    }
} ;element.onmouseleave = () => {hideNameHov()};});
function showNameHov(that) {
    let cdk = document.querySelector('.cdk-overlay-container2')
    ,  nameAppDiv = document.createElement('div')
    ,  resultH =  that.getBoundingClientRect().height 
    ,  resultW 
    let style = document.createElement('style');
    document.head.appendChild(style)
    nameAppDiv.classList.toggle('show-name')
    cdk.appendChild(nameAppDiv)
    cdk.classList.remove('hidden')
    cdk.style.height= '0'
    if (media.matches) {
        if(that.getAttribute('dire') == 'ltr'){
            resultW = 53 - that.getBoundingClientRect().width 
        }else{
            resultW = 90 - that.getBoundingClientRect().width 
        }
    }
    else{
         if(that.getAttribute('dire') == 'ltr'){
        resultW = 83 - that.getBoundingClientRect().width 
    }else{
        resultW = 67 - that.getBoundingClientRect().width 
    }
    }
    style.innerText = `.show-name::after {content:"${that.getAttribute('name')}"; left:${that.getBoundingClientRect().x - resultW }px; top:${that.getBoundingClientRect().y + resultH}px;`
}
 function hideNameHov() {let cdk = document.querySelector('.cdk-overlay-container2'); removeE(cdk,'show-name') ; } 

/////////////////////////////////////////
function exitPage(){
    localClear('nickNameP1', 'nickNameP2', 'nickNamePCpu', historyN,)
    window.location.href = './index.html'
    playerBrd()

}


/////////////////////////////////////////

/////////////////////////////////////////
function loadFileJson(fileName,tg,role,id,f0r) {
         let xhttps ,
        file = fileName ;
        if (file) {
            xhttps = new XMLHttpRequest();
            xhttps.onreadystatechange = () =>{
                if (xhttps.readyState == 4) {
                    if(xhttps.status == 200){
                        JSON.parse(xhttps.responseText).forEach((ele) =>{
                            if(ele.id == id){
                                ele.content.forEach((elem) =>{
                                    if (f0r == 'cdk') {
                                        if(elem.role == role){
                                            tg.innerHTML = elem.content;tg.classList.remove('hidden');tg.style.height= '100%'
                                    }
                                    } 
                            })
                             if(f0r == 'photo'){
                                let result =ele.content[Math.floor(Math.random() * ele.content.length  )]
                             tg.src = result
                             localStorage.setItem('photoHuUser',result)
                              
                                }

                        }
                        if(f0r == 'photo2'){
                            let result =ele.content[Math.floor(Math.random() * ele.content.length  )]
                         tg.src = result
                         localStorage.setItem('photoHuUser2',result)
                          
                            }

                    
                        })  
                }                 
                }
            }
            xhttps.open('GET' , `./${fileName}` ,true)
            xhttps.send();
            return;

        }
}
/////////////////////////////////////////

/////////////////////////////////////////

titleAtt.forEach(element => {if(element.getAttribute('etitle') == 'cdk-menu') element.onclick = () =>  {$.ajax({ url:activeCdkMenu(element),success:() => {AcBtnKey();cdkIputInf(); } })      }});

function activeCdkMenu(a) {
    let e = a.getAttribute('role')
    if (e == 'exit-page') {
        loadFileJson('main.json', cdk, 'exit-page','cdk','cdk')
    }

    else if (e == 'get-name--AI-game') {
        loadFileJson('main.json', cdk, 'get-name--AI-game','cdk','cdk')

    }
    else if (e == 'get-name--2p-game') {
        loadFileJson('main.json', cdk, 'get-name--2p-game','cdk','cdk')
       
    }
    
}
function closeCdkMenu(){
   let cdk = document.querySelector('.cdk-overlay-container2')
   //removeE(cdk,'cdk-overlay-menu')
    cdk.innerHTML=''
    cdk.classList.add('hidden')
}
let y =0
setInterval(() => {
    if (document.querySelector('.cdk-overlay-container2 form')!=null) {
        y=y+1
        if (y>=10) {
            clearInterval()
        }
        else{
            AcBtnKey();cdkIputInf();
        }
    }
 }, 100);

/////////////////////////////////////////


function inAcBtn(ex,ef,efr){
  let  e = document.querySelector(ex)
  if(efr != '') e.classList.remove(efr)
   if(ef != '') e.classList.add(ef)
}

 function AcBtnKey(){
     let cdkformInput = document.querySelectorAll('.cdk-overlay-container2 .cdk-overlay-menu form input')
     cdkformInput.forEach(e => {
        let id=e.id
        if (localStorage.getItem(`${id}`) != undefined && localStorage.getItem(`${id}`)!=''&& localStorage.getItem(`${id}`)!='null' ) {e.value = localStorage.getItem(`${id}`) ;inAcBtn('.cdk-overlay-container2 .cdk-overlay-menu form #sub-btn', '', 'n-active') } 
      function check(params) {
        if (params) {
                    inAcBtn('.cdk-overlay-container2 .cdk-overlay-menu form #sub-btn', '', 'n-active')
                }
                else {
                    inAcBtn('.cdk-overlay-container2 .cdk-overlay-menu form #sub-btn', 'n-active', '')
                }
      }  
    
         e.onkeyup = () => {
            cdkformInput.length > 1? check(cdkformInput[0].value !=''&&cdkformInput[1].value !=''):check(e.value !='')
           
         }
       

});
}

/////////////////////////////////////////
function cdkIputInf() {
    let form = document.querySelectorAll(".cdk-overlay-container2 .cdk-overlay-menu form")
        , e
    form.forEach(form => {
        form.addEventListener('submit', (th) => {
            var formData = new FormData(form);
            for (const [i, p] of formData) {
                localStorage.setItem(i, p)
                th.preventDefault()
                if (form.classList.contains('name-2p-Md')) {
                    e = '.first-page .x-o--icons--buttons  .new-game-buttons #Hp-P'
                }
                else if (form.classList.contains('name-ai-Md')) {
                    e = '.first-page .x-o--icons--buttons  .new-game-buttons #cpu-P'
                }
                let nav = document.querySelector(e)
                if (p!='') {
                    form.style.opacity = '0'
                form.style.transition = '0.3s'
                    setTimeout(() => {
                    closeCdkMenu()
                    afClBtnC(nav)
                }, 500);
                
            }
        }
        })
    });

} 

function vol(e) {
    let vol = e.id
    e.classList.toggle('none2')
    for (let i = 0; i < voll.children.length; i++) {
       if( voll.children[i].id !=vol){voll.children[i].classList.toggle('none2');sessionStorage.setItem('vol', voll.children[i].id)}
    }
    volLo()
}

function volLo() {
    for (const key in sfx) {
    if(sessionStorage.vol == 'vUp'||sessionStorage.vol==undefined){
        sessionStorage.vol = 'vUp'
        voll.children[0].classList.remove('none2')
        voll.children[1].classList.add('none2')
        sfx[key].mute(false)
    }
    else{
        voll.children[1].classList.remove('none2')
        voll.children[0].classList.add('none2')
        sfx[key].mute(true)
    }
    }

}
volLo()
function showNameByinner() {
    let ele = document.querySelectorAll('span')
    ele.forEach(e=>{e.setAttribute('name',e.innerHTML)})

    
}




function enterFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();     // Firefox
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();  // Safari
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();      // IE/Edge
    }
};

////////////////////////////////////////////task


/////////////////////////////////////////


//design and tasks