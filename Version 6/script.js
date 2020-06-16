

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
// $('.langWrap a').click(function(event){
//  event.preventDefault();
//  $('body').removeClass('hidden');
// });

// //setting constants; where to find the parameters we want to change
// const langEl = document.querySelector('.langWrap');
// const link = document.querySelector('.langWrap').querySelectorAll('a');
// const QuestionEl = document.querySelector('#Question');
// const mainTitleEl = document.querySelector('.mainTitle')
// const taglineEl = document.querySelector('.tagline')
// const par1El = document.querySelector('.par1')
// const par2El = document.querySelector('.par2')
// const par3El = document.querySelector('.par3')
// const par4El = document.querySelector('.par4')
// const captionEl = document.querySelector('.caption')
// const th1El = document.querySelector('.th1')
// const th2El = document.querySelector('.th2')
// const th3El = document.querySelector('.th3')
// const th4El = document.querySelector('.th4')
// const th5El = document.querySelector('.th5')
// const th6El = document.querySelector('.th6')

// //active class is added to the link that is clicked
// link.forEach(el => {
//  el.addEventListener('click', () => {
//    langEl.querySelector('.active').classList.remove('active');
//    el.classList.add('active');
   

//    const attr = el.getAttribute('language');

// //change the text content of html elements    
//    QuestionEl.textContent = data[attr].Question;
//    mainTitleEl.textContent = data[attr].mainTitle;
//    taglineEl.textContent = data[attr].tagline;
//    par1El.textContent = data[attr].par1;
//    par2El.textContent = data[attr].par2;
//    par3El.textContent = data[attr].par3;
//    par4El.textContent = data[attr].par4;
//    captionEl.textContent = data[attr].caption;
//    th2El.textContent = data[attr].th2;
//    th4El.textContent = data[attr].th4;
//    th6El.textContent = data[attr].th6;

//  });
// });

// //variable content of html elements to change language
// var data = {
//  "english":
//  {
//    "Question": "how will police change the way they encounter people experiencing homelessness during the pandemic?",
//    "mainTitle":"COVID-19 Policing & Homelessness",
//    "tagline":"A Rapid Response Research Initiative",
//    "par1":"Social institutions across Canada are adjusting to the new reality of the pandemic, changing how they operate to fight the coronavirus. This is particularly true when it comes to the challenge of safeguarding the lives of vulnerable people. How is this public responsibility being accomplished by the police who encounter homeless people in public spaces?",
//    "par2":"Police officers are not social workers.",
//    "par3":"Yet, they are frequently called upon, when social services are insufficient or non-existent, to respond to individuals who are in distress and surviving in dire circumstances. The result is that law enforcement and police attention is viewed as a legitimate response to abject poverty and a lack of affordable shelter. These circumstances are exacerbated by the fact that many homeless people come from minority populations who continue to be subject to widespread discrimination and racism.",
//    "par4":"The Covid-19 Policing and Homelessness Initiative is a rapid response research project based at the University of Toronto. Our goal is to facilitate a move away from the criminalisation of vulnerable people in public spaces, and to promote solutions that serve the immediate and long-term needs of the homeless.",
//    "caption":"Coming Soon:",
//    "th2":"MAPPING THE NEO-VAGRANCY LAWS IN CANADA",
//    "th4":"WHITE PAPER NO. 1: LAW ENFORCEMENT AS AN OBSTACLE TO SOCIAL CARE",
//    "th6":"BEST PRACTICE GUIDANCE FOR POLICING AGENTS ENCOUNTERING HOMELESS PEOPLE",

//  },

//  "french":
//  {
//    "Question": "Comment la police va-t-elle changer sa façon de rencontrer les personnes sans-abri pendant la pandémie?",
//    "mainTitle":"La Police et l’Itinérance durant COVID-19",
//    "tagline":"UNE INITIATIVE DE RECHERCHE POUR UNE RÉPONSE RAPIDE",
//    "par1":"Partout au Canada, les institutions sociales s'adaptent à la nouvelle réalité de la pandémie, changeant leur fonctionnement pour lutter contre le coronavirus. Cela est particulièrement vrai en ce qui concerne le défi de protéger la vie des personnes vulnérables. Comment cette responsabilité publique est-elle assumée par la police qui rencontre des sans-abri dans les espaces publics?",
//    "par2":"Les policiers ne sont pas des travailleurs sociaux.",
//    "par3":"Pourtant, elles sont fréquemment sollicitées, lorsque les services sociaux sont insuffisants ou inexistants, pour répondre aux personnes en détresse et survivant dans des circonstances désastreuses. Le résultat est que l'application de la loi et l'attention de la police sont considérées comme une réponse légitime à la pauvreté abjecte et au manque d'abris abordables. Ces circonstances sont exacerbées par le fait que de nombreux sans-abri appartiennent à des populations minoritaires qui continuent de faire l'objet d'une discrimination et d'un racisme généralisés.",
//    "par4":"La Covid-19 Policing and Homelessness Initiative est un projet de recherche à réponse rapide basé à l'Université de Toronto. Notre objectif est de faciliter l'abandon de la criminalisation des personnes vulnérables dans les espaces publics et de promouvoir des solutions qui répondent aux besoins immédiats et à long terme des sans-abri.",
//    "caption":"Bientôt disponible:",
//    "th2":"CARTOGRAPHIER LES LOIS SUR LA NÉO-VAGANCE AU CANADA",
//    "th4":"LIVRE BLANC NO. 1: L'APPLICATION DE LA LOI COMME OBSTACLE AUX SOINS SOCIAUX",
//    "th6":"MEILLEURES DIRECTIVES DE PRATIQUE POUR LES AGENTS DE POLICE RENCONTRANT DES PERSONNES SANS ABRI",

//  }
// }

//===========================================================
//
//
//
//===========================================================









