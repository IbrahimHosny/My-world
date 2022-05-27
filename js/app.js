// ######### (Our-skills Animation) #######
let ourSkills = document.querySelector('.our-skills') ;
let skillsHeight = ourSkills.offsetTop;
// ############# (Html) ###########

let htmlSpan = document.getElementById('html-progress');
let htmlProgress = document.getElementById('html').innerText;

// ############# (css) ###########

let cssSpan = document.getElementById('css-progress');
let cssProgress = document.getElementById('css').innerText;

// ############# (js) ###########

let jsSpan = document.getElementById('js-progress');
let jsProgress = document.getElementById('js').innerText;

// ############# (react) ###########

let reactSpan = document.getElementById('react-progress');
let reactProgress = document.getElementById('react').innerText;
// ############# (node) ###########

let nodeSpan = document.getElementById('node-progress');
let nodeProgress = document.getElementById('node').innerText;

// ################ ((Our-skills Animation) Event) #################

window.addEventListener('scroll' , () => {
    if (window.scrollY >= skillsHeight-40) {
        htmlSpan.className = 'skill-progress';
        htmlSpan.style = `
        width:${htmlProgress} ;
        `;
        // ## css
        cssSpan.className = 'skill-progress';
        cssSpan.style = `
        width:${cssProgress} ;
        `;
        // ### js
        jsSpan.className = 'skill-progress';
        jsSpan.style = `
        width:${jsProgress} ;
        `;
        // ##### react
        reactSpan.className = 'skill-progress';
        reactSpan.style = `
        width:${reactProgress} ;
        `;
        // #### node
        nodeSpan.className = 'skill-progress';
        nodeSpan.style = `
        width:${nodeProgress} ;
        `;
    }
    else {
        htmlSpan.style = `
        width:0;
        `;
        cssSpan.style = `
        width:0;
        `;
        jsSpan.style = `
        width:0;
        `;
        reactSpan.style = `
        width:0;
        `;
        nodeSpan.style = `
        width:0;
        `;
    };

})

// ############## END (Our-skills Animation) ###############
// ########## (Awesome-stats Animation) ############ 
let clientsCount = document.getElementById('clients-count');
let projectsCount = document.getElementById('projects-count');
let countriesCount = document.getElementById('countries-count');
let awesomeHeight = document.querySelector('.awesome-stats').offsetTop;
let spanCounter = document.querySelectorAll('.stats-counter');
let start = false;


window.addEventListener('scroll' , () => {
    if (window.scrollY >= awesomeHeight-50) {
        if(!start) {
            spanCounter.forEach( el => scrollCount(el));
        }
        start = true;
    }
    else {

        start = false;
        spanCounter.forEach( el => {
            el.textContent = '0';
        });
    }
})

// spanCounter.forEach((el) => scrollCount(el));
function scrollCount(ele) {
    let Goal = ele.dataset.goal;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == Goal) {
            clearInterval(counter);
        }
    }, 3000/Goal)
    // console.log(Goal.goal);
}


// ################# (Event-countDown) ###############
let eventCountdown = new Date ('Dec 31, 2022 23:59:59').getTime();

let eventCounter = setInterval(() => {
    let dateNow = new Date().getTime();
    let timeDiffrence = eventCountdown - dateNow;
    let days = Math.floor(timeDiffrence / (1000*60*60*24));
    let hours = Math.floor((timeDiffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiffrence % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiffrence % (1000 * 60)) / (1000));
    // ###### (seconds) #########
    let secondsCounter = document.getElementById('seconds-count');
    secondsCounter.textContent = seconds;
    // ######## (minutes) ###########
    let minutesCounter = document.getElementById('minutes-count');
    minutesCounter.textContent = minutes;
    // ######## (hours) ##########
    let hoursCounter = document.getElementById('hours-count');
    hoursCounter.textContent = hours;
    // ########## (days) ##########
    let daysCounter = document.getElementById('days-count');
    daysCounter.textContent = days;
},1000)


