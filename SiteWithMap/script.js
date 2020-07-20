

//explore site button hides overflow until clicked and takes you to top of next div
$('#explore').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".Content").offset().top 
  }, 500);
});

//===========================================================
//
//
//
//===========================================================

//toggling between french and english in write up

//preventing page reload when the language links are clicked
$('.langWrap a').click(function(event){
 event.preventDefault();
});

// //setting constants; where to find the parameters we want to change
const langEl = document.querySelector('.langWrap');
const link = document.querySelector('.langWrap').querySelectorAll('a');
// const QuestionEl = document.querySelector('#Question');
// const mainTitleEl = document.querySelector('.mainTitle')
// const taglineEl = document.querySelector('.tagline')
const par1El = document.querySelector('.par1')
const par2El = document.querySelector('.par2')
const par3El = document.querySelector('.par3')
const par4El = document.querySelector('.par4')
const captionEl = document.querySelector('.caption')
const th4El = document.querySelector('.th4')
const th6El = document.querySelector('.th6')
// //active class is added to the link that is clicked
link.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');
   

   const attr = el.getAttribute('language');

// //change the text content of html elements    
//    QuestionEl.textContent = data[attr].Question;
//    mainTitleEl.textContent = data[attr].mainTitle;
//    taglineEl.textContent = data[attr].tagline;
	   par1El.textContent = data[attr].par1;
	   par2El.textContent = data[attr].par2;
	   par3El.textContent = data[attr].par3;
	   par4El.textContent = data[attr].par4;
	   captionEl.textContent = data[attr].caption;
	   th4El.textContent = data[attr].th4;
	   th6El.textContent = data[attr].th6;

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {
   // "Question": "how will police change the way they encounter people experiencing homelessness during the pandemic?",
   // "mainTitle":"COVID-19 Policing & Homelessness",
   // "tagline":"A Rapid Response Research Initiative",
	   "par1":"Social institutions across Canada are changing how they operate, adjusting to the new reality of the pandemic. How is the responsibility to safeguard the lives of vulnerable people in public spaces changing police-homeless encounters?",
	   "par2":"Police officers are not social workers.",
	   "par3":"Yet, police are frequently called upon to respond to individuals, many from racialized populations, who are in distress and dire circumstances. Law enforcement has long been an accepted response to abject poverty and lack of affordable shelter. But criminalisation of people who are homeless is now very clearly in conflict with ensuring their health and safety.",
	   "par4":"The COVID-19 Policing and Homelessness Initiative is a rapid response research project based at the University of Toronto, Scarborough. Our goal is to promote and support a move away from the criminalisation of poverty, with solutions that serve the immediate and long-term needs of the homeless.",
	   "caption":"Coming Soon:",
	   "th4":"RESEARCH PAPER: LAW ENFORCEMENT AS AN OBSTACLE TO ALEVIATING HOMELESSNESS",
	   "th6":"BEST PRACTICE GUIDANCE FOR POLICING AGENTS ENCOUNTERING HOMELESS PEOPLE",

 },

 "french":
	  {
//    "Question": "Comment la police va-t-elle changer sa façon de rencontrer les personnes sans-abri pendant la pandémie?",
//    "mainTitle":"La Police et l’Itinérance durant COVID-19",
//    "tagline":"UNE INITIATIVE DE RECHERCHE POUR UNE RÉPONSE RAPIDE",
	   "par1":"",
	   "par2":"",
	   "par3":"",
	   "par4":"",
	   "caption":"",
	   "th4":"",
	   "th6":"Texte français à suivre.",

	  }
 }