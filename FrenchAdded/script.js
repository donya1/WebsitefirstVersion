

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
const QuestionEl = document.querySelector('#Question');
const Question2El = document.querySelector('#Question2');
const exploreEl = document.querySelector('#explore');
const mainTitleEl = document.querySelector('.mainTitle')
const taglineEl = document.querySelector('.tagline')
const mapEl = document.querySelector('.MapLink')
const par1El = document.querySelector('.par1')
const par2El = document.querySelector('.par2')
const par3El = document.querySelector('.par3')
const par4El = document.querySelector('.par4')

// //active class is added to the link that is clicked
link.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');
   

   const attr = el.getAttribute('language');

// //change the text content of html elements    
   	   QuestionEl.textContent = data[attr].Question;
   	   Question2El.textContent = data[attr].Question2;
   	   exploreEl.textContent = data[attr].explore
   	   mainTitleEl.textContent = data[attr].mainTitle;
   	   taglineEl.textContent = data[attr].tagline;
   	   mapEl.textContent = data[attr].MapLink
	   par1El.textContent = data[attr].par1;
	   par2El.textContent = data[attr].par2;
	   par3El.textContent = data[attr].par3;
	   par4El.textContent = data[attr].par4;

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {
       "Question": "policing homelessness in the pandemic",
       "Question2":"what has changed?",
       "explore":"EXPLORE",
       "mainTitle":"COVID-19 Policing & Homelessness",
       "tagline":"A Rapid Response Research Initiative",
       "MapLink":"JUST RELEASED: Mapping Neo-Vagrancy Offences In Canada",
	   "par1":"Social institutions across Canada are changing how they operate, adjusting to the new reality of the pandemic. How is the responsibility to safeguard the lives of vulnerable people in public spaces changing police-homeless encounters?",
	   "par2":"Police officers are not social workers.",
	   "par3":"Yet, police are frequently called upon to respond to individuals, many from racialized populations, who are in distress and dire circumstances. Law enforcement has long been an accepted response to abject poverty and lack of affordable shelter. But criminalisation of people who are homeless is now very clearly in conflict with ensuring their health and safety.",
	   "par4":"The COVID-19 Policing and Homelessness Initiative is a rapid response research project based at the University of Toronto, Scarborough. Our goal is to promote and support a move away from the criminalisation of poverty, with solutions that serve the immediate and long-term needs of the homeless.",

 },

 "french":
	  {
       "Question":"le contrôle des sans-abri durant la pandémie",
       "Question2":"quel changement?",
       "explore":"EXPLOREZ",
       "mainTitle":"La Police et les Sans-abri pendant la COVID-19",
   	   "tagline":"Une initiative de recherche pour une réponse rapide",
   	   "MapLink":"PUBLICATION RÉCENTE : Cartographie des infractions relatives au néo-vagabondage au Canada",
	   "par1":"Pour s'adapter à la nouvelle réalité imposée par la pandémie, les institutions sociales sont contraintes, à travers tout le Canada, de revoir leur mode de fonctionnement. Comment la responsabilité de protéger la vie des personnes vulnérables dans les espaces publics modifie-t-elle les rapports entre la police et les sans-abri?",
	   "par2":"Les policiers ne sont pas des travailleurs sociaux.",
	   "par3":"Pourtant, la police est souvent appelée à intervenir auprès de personnes, dont beaucoup appartiennent à des populations racialisées, qui se trouvent en situation de détresse et connaissent des circonstances désastreuses. On a longtemps sollicité les forces de l'ordre pour répondre à la pauvreté absolue et au manque de logements abordables. Mais la criminalisation des personnes sans domicile fixe entre aujourd'hui, plus clairement encore, en conflit avec la garantie de leur santé et de leur sécurité.",
	   "par4":"L'initiative COVID-19 sur la police et les sans-abri est un projet de recherche de réponse rapide basé à l'Université de Toronto (Scarborough). Notre objectif est de promouvoir et de soutenir l'abandon de la criminalisation de la pauvreté, en proposant des solutions qui puissent répondre aux besoins immédiats et à long terme des sans-abri.",

	  }
 }