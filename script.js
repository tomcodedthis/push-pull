let pushOn = true;      // Global default variables
let pullLegsOn = true;
let pullOn = false;
let legsOn = false;

let bodyweightOn = true;
let dumbellsOn = true;
let barbellOn = false;
let gymOn = false;

let setsNum = 3;

const inputBtns = document.querySelectorAll('.input-btns')      // Input buttons

const splitBtns = document.querySelectorAll('.split-btns');     // Split buttons
const pushBtn = document.getElementById('push-btn');
const pullBtn = document.getElementById('pull-btn');
const legsBtn = document.getElementById('legs-split-btn');
const pullLegsBtn = document.getElementById('pull+legs-btn');

pushBtn.classList.add('input-btns-select');    // Default input selection
pullLegsBtn.classList.add('input-btns-select');

splitBtns.forEach(btn => btn.addEventListener('click', selectSplit));     // Adds onClick events to split buttons
splitBtns.forEach(btn => btn.addEventListener('click', showSplits));

function selectSplit(e) {       // Highlights each button on click & sets variables
    
    if (e.target.id == 'push-btn' && pushOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pushOn = true;

    } else if (e.target.id == 'push-btn' && pushOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');
        pushOn = false;
    }

    if (e.target.id == 'pull-btn' && pullOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullLegsBtn.classList.remove('input-btns-select');

        pullOn = true;
        pullLegsOn = false;

    } else if (e.target.id == 'pull-btn' && pullOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        pullOn = false;
    }

    if (e.target.id == 'legs-split-btn' && legsOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullLegsBtn.classList.remove('input-btns-select');

        legsOn = true;
        pullLegsOn = false;

    } else if (e.target.id == 'legs-split-btn' && legsOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        legsOn = false;
    }

    if (e.target.id == 'pull+legs-btn' && pullLegsOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullBtn.classList.remove('input-btns-select');
        legsBtn.classList.remove('input-btns-select');

        pullLegsOn = true;
        pullOn = false;
        legsOn = false;

    } else if (e.target.id == 'pull+legs-btn' && pullLegsOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        pullLegsOn = false;
    }
};

const pushCont = document.getElementById('push-cont');      // Split cont's
const pullLegsCont = document.getElementById('pullLegs-cont');
const pullCont = document.getElementById('pull-cont');
const legsCont = document.getElementById('legsMain-cont');
const mainConts = document.querySelectorAll('.main-cont');

pullCont.style.display = 'none';
legsCont.style.display = 'none';

function showSplits() {     // Shows/hides splits

    if (pushOn) {

        pushCont.style.display = 'flex';

    } else {

        pushCont.style.display = 'none';

    }

    if (pullLegsOn) {

        pullLegsCont.style.display = 'flex';

    } else {

        pullLegsCont.style.display = 'none';
        
    }

    if (pullOn) {

        pullCont.style.display = 'flex';

    } else {

        pullCont.style.display = 'none';
        
    }

    if (legsOn) {

        legsCont.style.display = 'flex';

    } else {

        legsCont.style.display = 'none';
        
    }

    if (pushOn && !pullLegsOn && !pullOn && !legsOn || !pushOn && pullLegsOn && !pullOn && !legsOn ||
        !pushOn && !pullLegsOn && pullOn && !legsOn || !pushOn && !pullLegsOn && !pullOn && legsOn) {       // Centres conts if only on split is selected

        mainConts.forEach(cont => {

            const width = pushCont.offsetWidth;

            cont.style.gridColumn = '1 / 3';
            cont.style.width = '60%';
        })

    } else if (pushOn && pullOn && legsOn) {        // Centres bottom cont & resets other conts to default

        mainConts.forEach(cont => {

            cont.style.gridColumn = '';
            cont.style.width = '';
        })

        legsCont.style.gridColumn = '1 / 3';
        legsCont.style.width = `50%`;

    } else {        // Resets to default sizing

        mainConts.forEach(cont => {

            cont.style.gridColumn = '';
            cont.style.width = '';
        })
    }
}

const equipBtns = document.querySelectorAll('.equip-btns');     // Equiptment buttons
const bodyBtn = document.getElementById('body-btn');
const dumbBtn = document.getElementById('dumb-btn');
const barBtn = document.getElementById('bar-btn');
const gymBtn = document.getElementById('gym-btn');

bodyBtn.classList.add('input-btns-select');     // Default input selection
dumbBtn.classList.add('input-btns-select');

equipBtns.forEach(btn =>     // Adds onClick event to equipment buttons
    btn.addEventListener('click', e => {

        if (e.target.id == 'body-btn' && bodyweightOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select');
            bodyweightOn = true;

        } else if (e.target.id == 'body-btn' && bodyweightOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            bodyweightOn = false;
        }

        if (e.target.id == 'dumb-btn' && dumbellsOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select');
            dumbellsOn = true;

        } else if (e.target.id == 'dumb-btn' && dumbellsOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            dumbellsOn = false;
        }

        if (e.target.id == 'bar-btn' && barbellOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select')
            barbellOn = true;

        } else if (e.target.id == 'bar-btn' && barbellOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            barbellOn = false;
        }

        if (e.target.id == 'gym-btn' && gymOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select')
            gymOn = true;

        } else if (e.target.id == 'gym-btn' && gymOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            gymOn = false;
        }
    })
);
equipBtns.forEach(btn => btn.addEventListener('click', pushArrays));

const setsBtns = document.querySelectorAll('.sets-btns');       // Sets buttons
const threeSets = document.getElementById('3sets-btn');
const fourSets = document.getElementById('4sets-btn');
const fiveSets = document.getElementById('5sets-btn');
const sixSets = document.getElementById('6sets-btn');

threeSets.classList.add('input-btns-select');       // Default input selection

const excConts1 =  document.querySelectorAll('.conts-1');       // Extra sets conts
const excConts2 =  document.querySelectorAll('.conts-2');
const excConts3 =  document.querySelectorAll('.conts-3');
const newConts = document.querySelectorAll('.new-conts');

newConts.forEach(cont => cont.style.display = 'none');      // Hides extra sets on screen load

setsBtns.forEach(btn =>     // Adds onClick events to set buttons
    btn.addEventListener('click', e => {

        if (e.target.id == '3sets-btn' && setsNum !== 3) {     // Turns button on

            const otherBtns = [fourSets, fiveSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 3;

            excConts1.forEach(cont => cont.style.display = 'none');     // Hides new conts
            excConts2.forEach(cont => cont.style.display = 'none');
            excConts3.forEach(cont => cont.style.display = 'none');

        } else if (e.target.id == '4sets-btn' && setsNum !== 4) {       // Turns button off

            const otherBtns = [threeSets, fiveSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 4;

            excConts1.forEach(cont => cont.style.display = 'grid');     // Shows new cont

            excConts2.forEach(cont => cont.style.display = 'none');     // Hides new conts
            excConts3.forEach(cont => cont.style.display = 'none');

        } else if (e.target.id == '5sets-btn' && setsNum !== 5) {       // Turns button off

            const otherBtns = [threeSets, fourSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 5;

            excConts1.forEach(cont => cont.style.display = 'grid');     // Shows new cont
            excConts2.forEach(cont => cont.style.display = 'grid');

            excConts3.forEach(cont => cont.style.display = 'none');     // Hides new conts

        } else if (e.target.id == '6sets-btn' && setsNum !== 6) {       // Turns button off

            const otherBtns = [threeSets, fourSets, fiveSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 6;

            excConts1.forEach(cont => cont.style.display = 'grid');     // Shows new cont
            excConts2.forEach(cont => cont.style.display = 'grid');
            excConts3.forEach(cont => cont.style.display = 'grid');
        }
    })
);

// Excercies arrays

const excerciseData = {     // Holds all excercises & links

    shouldersExc: [

        shoulderBW = {
            exc: ['shouldBW1', 'shouldBW2', 'shouldBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        shoulderDB = {
            exc: ['shouldDB1', 'shouldDB2', 'shouldDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        shoulderBB = {
            exc: ['shoulderBB1', 'shoulderBB2', 'shoulderBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        shoulderFM = {
            exc: ['shoulderFM1', 'shoulderFM2', 'shoulderFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ],

    chestExc: [

        chestBW = {
            exc: ['chestBW1', 'chestBW2', 'chestBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        chestDB = {
            exc: ['chestDB1', 'chestDB2', 'chestDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        chestBB = {
            exc: ['chestBB1', 'chestBB2', 'chestBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        chestFM = {
            exc: ['chestFM1', 'chestFM2', 'chestFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ],

    tricepsExc: [

        tricepBW = {
            exc: ['tricepBW1', 'tricepBW2', 'tricepBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        tricepDB = {
            exc: ['tricepDB1', 'tricepDB2', 'tricepDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        tricepBB = {
            exc: ['tricepBB1', 'tricepBB2', 'tricepBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        tricepFM = {
            exc: ['tricepFM1', 'tricepFM2', 'tricepFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ],

    backExc: [

        backBW = {
            exc: ['backBW1', 'backBW2', 'backBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        backDB = {
            exc: ['backDB1', 'backDB2', 'backDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        backBB = {
            exc: ['backBB1', 'backBB2', 'backBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        backFM = {
            exc: ['backFM1', 'backFM2', 'backFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ],

    bicepExc: [

        bicepBW = {
            exc: ['bicepBW1', 'bicepBW2', 'bicepBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        bicepDB = {
            exc: ['bicepDB1', 'bicepDB2', 'bicepDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        bicepBB = {
            exc: ['bicepBB1', 'bicepBB2', 'bicepBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        bicepFM = {
            exc: ['bicepFM1', 'bicepFM2', 'bicepFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ],

    legExc: [

        legBW = {
            exc: ['legBW1', 'legBW2', 'legBW3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        legDB = {
            exc: ['legDB1', 'legDB2', 'legDB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        legBB = {
            exc: ['legBB1', 'legBB2', 'legBB3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        },
        legFM = {
            exc: ['legFM1', 'legFM2', 'legFM3'],
            link: ['https://www.w3schools.com/jsref/prop_anchor_href.asp', 'https://search.brave.com/', 'https://www.google.co.uk/']
        }
    ]
};

const bodyOnly = {        // New Objects/Arrays

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const dumbellsOnly = {

    excercises: [
        excerciseData.shouldersExc[1].exc, 
        excerciseData.chestExc[1].exc, 
        excerciseData.tricepsExc[1].exc, 
        excerciseData.backExc[1].exc, 
        excerciseData.bicepExc[1].exc, 
        excerciseData.legExc[1].exc
    ],

    links: [
        excerciseData.shouldersExc[1].link, 
        excerciseData.chestExc[1].link, 
        excerciseData.tricepsExc[1].link, 
        excerciseData.backExc[1].link, 
        excerciseData.bicepExc[1].link, 
        excerciseData.legExc[1].link
    ]
};
const barbellOnly = {

    excercises: [
        excerciseData.shouldersExc[2].exc, 
        excerciseData.chestExc[2].exc, 
        excerciseData.tricepsExc[2].exc, 
        excerciseData.backExc[2].exc, 
        excerciseData.bicepExc[2].exc, 
        excerciseData.legExc[2].exc
    ],

    links: [
        excerciseData.shouldersExc[2].link, 
        excerciseData.chestExc[2].link, 
        excerciseData.tricepsExc[2].link, 
        excerciseData.backExc[2].link, 
        excerciseData.bicepExc[2].link, 
        excerciseData.legExc[2].link
    ]
};
const gymOnly = {

    excercises: [
        excerciseData.shouldersExc[3].exc, 
        excerciseData.chestExc[3].exc, 
        excerciseData.tricepsExc[3].exc, 
        excerciseData.backExc[3].exc, 
        excerciseData.bicepExc[3].exc, 
        excerciseData.legExc[3].exc
    ],

    links: [
        excerciseData.shouldersExc[3].link, 
        excerciseData.chestExc[3].link, 
        excerciseData.tricepsExc[3].link, 
        excerciseData.backExc[3].link, 
        excerciseData.bicepExc[3].link, 
        excerciseData.legExc[3].link
    ]
};
const bodyDB = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const bodyBB = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const bodyGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const DBBB = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const DBGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const BBGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const bodyDBBB = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const bodyDBGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const bodyBBGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const DBBBGym = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};
const equipAll = {

    excercises: [
        [],
        [],
        [],
        [],
        [],
        []
    ],
    links: [
        [],
        [],
        [],
        [],
        [],
        []
    ]
};

const exces = [
    excerciseData.shouldersExc, 
    excerciseData.chestExc, 
    excerciseData.tricepsExc, 
    excerciseData.backExc, 
    excerciseData.bicepExc, 
    excerciseData.legExc
];

if (bodyweightOn && dumbellsOn && !barbellOn && !gymOn) {       // Sets default array to bodyDB

    let j = 0;      // Body
    let k = 1;      // Dumbells
    let obj = bodyDB;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body & db excercises into bodyDB object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) { 

        obj.excercises[a].push(exces[a][j].exc[i], exces[a][k].exc[i]);  
        obj.links[a].push(exces[a][j].link[i], exces[a][k].link[i]);   
        }       
    }
}

function pushArrays() {

    const body = 0;
    const db = 1;
    const bb = 2;
    const gym = 3;

if (bodyweightOn && !dumbellsOn && !barbellOn && !gymOn) {      // ONLY bodyweight

    let j = body;
    let obj = bodyOnly;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body excercises into bodyOnly object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]);
        obj.links[a].push(exces[a][j].link[i]);
        }       
    }

} else if (!bodyweightOn && dumbellsOn && !barbellOn && !gymOn) {      // ONLY dumbells

    let j = db;
    let obj = dumbellsOnly;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes db excercises into dbOnly object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]);
        obj.links[a].push(exces[a][j].link[i]);
        }       
    }

} else if (!bodyweightOn && !dumbellsOn && barbellOn && !gymOn) {      // ONLY barbell

    let j = bb;
    let obj = barbellOnly;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes bb excercises into barbellOnly object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]);
        obj.links[a].push(exces[a][j].link[i]);
        }       
    }
    
} else if (!bodyweightOn && !dumbellsOn && !barbellOn && gymOn) {      // ONLY machines

    let j = gym;
    let obj = gymOnly;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes machine excercises into gymOnly object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]);
        obj.links[a].push(exces[a][j].link[i]);
        }       
    }
} else if (bodyweightOn && dumbellsOn && !barbellOn && !gymOn){     // Body & DB

    let j = body;
    let k = db;
    let obj = bodyDB;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body & db excercises into bodyDB object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (bodyweightOn && !dumbellsOn && barbellOn && !gymOn){     // Body & BB

    let j = body;
    let k = bb;
    let obj = bodyBB;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body & bb excercises into bodyBB object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (bodyweightOn && !dumbellsOn && !barbellOn && gymOn){     // Body & Gym

    let j = body;
    let k = gym;
    let obj = bodyGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body & gym excercises into bodyGym object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (!bodyweightOn && dumbellsOn && barbellOn && !gymOn){     // DB & BB

    let j = db;
    let k = bb;
    let obj = DBBB;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes db & bb excercises into DBBB object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (!bodyweightOn && dumbellsOn && !barbellOn && gymOn){     // DB & Gym

    let j = db;
    let k = gym;
    let obj = DBGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes db & gym excercises into DBFM object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (!bodyweightOn && !dumbellsOn && barbellOn && gymOn){     // BB & Gym

    let j = bb;
    let k = gym;
    let obj = BBGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes bb & gym excercises into BBGym object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]);
        }
    }
} else if (bodyweightOn && dumbellsOn && barbellOn && !gymOn){     // Body, DB & BB

    let j = body;
    let k = db;
    let l = bb;
    let obj = bodyDBBB;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body, db & bb excercises into bodyDBBB object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]), obj.excercises[a].push(exces[a][l].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]), obj.links[a].push(exces[a][l].link[i]);
        }
    }
} else if (bodyweightOn && dumbellsOn && !barbellOn && gymOn){     // Body, DB & Gym

    let j = body;
    let k = db;
    let l = gym;
    let obj = bodyDBGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body, db & gym excercises into bodyDBGym object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]), obj.excercises[a].push(exces[a][l].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]), obj.links[a].push(exces[a][l].link[i]);
        }
    }
} else if (bodyweightOn && !dumbellsOn && barbellOn && gymOn){     // Body, BB & Gym

    let j = body;
    let k = bb;
    let l = gym;
    let obj = bodyBBGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body, bb & gym excercises into bodyBBGym object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]), obj.excercises[a].push(exces[a][l].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]), obj.links[a].push(exces[a][l].link[i]);
        }
    }
} else if (!bodyweightOn && dumbellsOn && barbellOn && gymOn){     // DB, BB & Gym

    let j = db;
    let k = bb;
    let l = gym;
    let obj = DBBBGym;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes db, bb & gym excercises into DBBBGym object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]), obj.excercises[a].push(exces[a][l].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]), obj.links[a].push(exces[a][l].link[i]);
        }
    }
} else if (bodyweightOn && dumbellsOn && barbellOn && gymOn){     // Body, DB, BB & Gym

    let j = body;
    let k = db;
    let l = bb;
    let m = gym;
    let obj = equipAll;       // Obj

    for (let a = 0; a < (obj.excercises.length); a++) {        // Pushes body, db, bb & gym excercises into equipAll object

        for (let i = 0; i < (excerciseData.shouldersExc[0].exc.length); i++) {      // Loops to no. of {shoulderExc: body[] }

        obj.excercises[a].push(exces[a][j].exc[i]), obj.excercises[a].push(exces[a][k].exc[i]), obj.excercises[a].push(exces[a][l].exc[i]), obj.excercises[a].push(exces[a][m].exc[i]);
        obj.links[a].push(exces[a][j].link[i]), obj.links[a].push(exces[a][k].link[i]), obj.links[a].push(exces[a][l].link[i]), obj.links[a].push(exces[a][m].link[i]);
        }
    }
}
};


// Random Buttons / Text Elements Events & Functions

const rndmBtns = document.querySelectorAll('.random-btn');      // Each excercise button
const allBtns = document.querySelectorAll('.all-btns');
const pushRndmBtns = document.querySelectorAll('.push-rndm-btn');
const pullLegsRndmBtns = document.querySelectorAll('.pullLegs-rndm-btn');
const pullRndmBtns = document.querySelectorAll('.pull-rndm-btn');
const legsRndmBtns = document.querySelectorAll('.legs-rndm-btn');

rndmBtns.forEach(btn => btn.addEventListener('click', pressRandom));

allBtns.forEach(btn => 
    btn.addEventListener('click', e => {

        if (e.target.id == 'push-all-btn') {

            pushRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'pullLegs-all-btn') {

            pullLegsRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'pull-all-btn') {

            pullRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'legs-all-btn') {

            legsRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'all-btn') {

            rndmBtns.forEach(btn => btn.click());

        }
    })
);

const previousSiblings = (elem) => {        // Points to excercise text div

    let siblings = [];

    while (elem = elem.previousElementSibling) {
        siblings.push(elem);
    }
    return siblings[1];
};

function pressRandom(e) {       // Add visual effect to choosing options (timing delay between options)

    const text = previousSiblings(e.target);

    setTimeout(() => {

        text.innerText = '';
        chooseExc(e);

            setTimeout(() => { 

                text.innerText = '';
            chooseExc(e);

                setTimeout(() => { 

                    text.innerText = '';
                    chooseExc(e);

                    setTimeout(() => { 

                        text.innerText = '';
                        chooseExc(e);

                    }, 200);
                }, 200);
            }, 200);
    }, 200);
};

function chooseExc(e) {     // Find a random property in arrays & assigns it to text element

    const choices = [];
    const links = [];
    const text = previousSiblings(e.target);
    const info = e.target.previousElementSibling;

    if (bodyweightOn && !dumbellsOn && !barbellOn && !gymOn) {      // ONLY bodyweight

        for (let i = 0; i < bodyOnly.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyOnly.excercises[i].length)]        // Generates the random index number

            const choice = bodyOnly.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyOnly.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && dumbellsOn && !barbellOn && !gymOn) {      // ONLY dumbells

        for (let i = 0; i < dumbellsOnly.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * dumbellsOnly.excercises[i].length)]        // Generates the random index number

            const choice = dumbellsOnly.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = dumbellsOnly.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && !dumbellsOn && barbellOn && !gymOn) {      // ONLY barbell

        for (let i = 0; i < barbellOnly.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * barbellOnly.excercises[i].length)]        // Generates the random index number

            const choice = barbellOnly.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = barbellOnly.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && !dumbellsOn && !barbellOn && gymOn) {      // ONLY machines

        for (let i = 0; i < gymOnly.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * gymOnly.excercises[i].length)]        // Generates the random index number

            const choice = gymOnly.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = gymOnly.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && dumbellsOn && !barbellOn && !gymOn){     // Body & DB

        for (let i = 0; i < bodyDB.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyDB.excercises[i].length)]        // Generates the random index number

            const choice = bodyDB.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyDB.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && !dumbellsOn && barbellOn && !gymOn){     // Body & BB

        for (let i = 0; i < bodyBB.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyBB.excercises[i].length)]        // Generates the random index number

            const choice = bodyBB.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyBB.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && !dumbellsOn && !barbellOn && gymOn){     // Body & Gym

        for (let i = 0; i < bodyGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyGym.excercises[i].length)]        // Generates the random index number

            const choice = bodyGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && dumbellsOn && barbellOn && !gymOn){     // DB & BB

        for (let i = 0; i < DBBB.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * DBBB.excercises[i].length)]        // Generates the random index number

            const choice = DBBB.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = DBBB.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && dumbellsOn && !barbellOn && gymOn){     // DB & Gym

        for (let i = 0; i < DBGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * DBGym.excercises[i].length)]        // Generates the random index number

            const choice = DBGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = DBGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && !dumbellsOn && barbellOn && gymOn){     // BB & Gym

        for (let i = 0; i < BBGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * BBGym.excercises[i].length)]        // Generates the random index number

            const choice = BBGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = BBGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && dumbellsOn && barbellOn && !gymOn){     // Body, DB & BB

        for (let i = 0; i < bodyDBBB.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyDBBB.excercises[i].length)]        // Generates the random index number

            const choice = bodyDBBB.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyDBBB.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && dumbellsOn && !barbellOn && gymOn){     // Body, DB & Gym

        for (let i = 0; i < bodyDBGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyDBGym.excercises[i].length)]        // Generates the random index number

            const choice = bodyDBGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyDBGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && !dumbellsOn && barbellOn && gymOn){     // Body, BB & Gym

        for (let i = 0; i < bodyBBGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * bodyBBGym.excercises[i].length)]        // Generates the random index number

            const choice = bodyBBGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = bodyBBGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (!bodyweightOn && dumbellsOn && barbellOn && gymOn){     // DB, BB & Gym

        for (let i = 0; i < DBBBGym.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * DBBBGym.excercises[i].length)]        // Generates the random index number

            const choice = DBBBGym.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = DBBBGym.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    } else if (bodyweightOn && dumbellsOn && barbellOn && gymOn){     // Body, DB, BB & Gym

        for (let i = 0; i < equipAll.excercises.length; i++) {       // Chooses choice & adds to choices empty array

            const num = [Math.floor(Math.random() * equipAll.excercises[i].length)]        // Generates the random index number

            const choice = equipAll.excercises[i][num];        // Pushes excercise of index to choices
            choices.push(choice);

            const link = equipAll.links[i][num];     // Pushes link of index to choices
            links.push(link);
        }
    }

    if (e.target.id == 'chest') {       // Adds text to button clicked

        text.innerText = choices[0];
        info.href = links[0];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    } else if (e.target.id == 'triceps') {

        text.innerText = choices[1];
        info.href = links[1];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    } else if (e.target.id == 'shoulders') {

        text.innerText = choices[2];
        info.href = links[2];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    } else if (e.target.id == 'back') {

        text.innerText = choices[3];
        info.href = links[3];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    } else if (e.target.id == 'biceps') {

        text.innerText = choices[4];
        info.href = links[4];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    } else if (e.target.id == 'legs') {

        text.innerText = choices[5];
        info.href = links[5];
        info.target = '_blank';

        if (!bodyweightOn && !dumbellsOn && !barbellOn && !gymOn){      // If no equipment is selected

            text.innerText = 'Equipment Needed';
        }

    }
};