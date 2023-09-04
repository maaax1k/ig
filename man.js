var man = document.getElementById('man')
var bd = document.getElementById('body')
bd.addEventListener('click', walk)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function stand_toggle(){
    man.classList.toggle('stand_left')
}

function run0(){
    man.classList.add('run_right1')
}
function run1(){
    stand_toggle();
    man.classList.remove('stand1')
    man.classList.remove('run_right1')
    man.classList.add('run_left1')
}
function run2(){
    man.classList.remove('stand2')
    man.classList.remove('run_left1')
    man.classList.add('run_right2')
}
function run3(){
    stand_toggle();
    man.classList.remove('stand3')
    man.classList.remove('run_right2')
    man.classList.add('run_left2')
}
function res(){
    man.classList.remove('run_left2')
    stand_toggle();
}

function stand1(){
    man.classList.add('stand1')
}
function stand2(){
    man.classList.add('stand2')
}
function stand3(){
    man.classList.add('stand3')
}

function walk(){
    bd.removeEventListener('click', walk)
    console.log("GO")
    sleep(5000).then(() => { run0(); console.log("STAND1") });
    sleep(12000-1000).then(() => { stand1(); console.log("STAND11") });
    sleep(15000).then(() => { run1(); console.log("STAND2") });
    sleep(18500-1000).then(() => { stand2(); console.log("STAND12") });
    sleep(23500).then(() => { run2(); console.log("STAND3") });
    sleep(30500-1000).then(() => { stand3(); console.log("STAND13") });
    sleep(32500).then(() => { run3(); console.log("STAND4") });
    sleep(43000).then(() => { res(); console.log("STAND5");});
    sleep(43100).then(() => { bd.addEventListener('click', walk)});
}



