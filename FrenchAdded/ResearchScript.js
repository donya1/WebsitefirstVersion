$('.lang a').click(function(event){
 event.preventDefault();
});

const langEl = document.querySelector('.lang');
const langLink = document.querySelector('.lang').querySelectorAll('a');
const titEl = document.querySelector('.Title')
const subEl = document.querySelector('.subtitle1')
const par1El = document.querySelector('.par1')
const par2El = document.querySelector('.par2')
const sub2El = document.querySelector('.subtitle2')


langLink.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');

   

   const attr = el.getAttribute('language');

// //change the text content of html elements    
	   titEl.textContent = data[attr].Title;
	   subEl.textContent = data[attr].subtitle1;
	   par1El.textContent = data[attr].par1;
	   par2El.textContent = data[attr].par2;
	   sub2El.textContent = data[attr].subtitle2;


	});
});

var data = {
 "english":
	 {
   	   "Title":"Research Initiatives",
   	   "subtitle1":"Watch this space for updates on what we are planning.",
   	   "par1":"The COVID-19 Policing and Homelessness Initiative is funded by a grant from the Toronto COVID-19 Action Fund at the University of Toronto.  The project is housed in the Sociology department at the University of Toronto Scarborough.",
   	   "par2":"Over the next eight months we will be conducting research across Canada to provide ‘near time’ empirical evidence about how people experiencing homelessness are being policed during the pandemic.",
   	   "subtitle2":"JUST RELEASED: Mapping Neo-Vagrancy Offences In Canada",
   	},

 "french":
	  {
	   "Title":"Initiative de Recherche",
	   "subtitle1":"Visitez cet espace pour obtenir des informations sur ce qui est prévu.",
	   "par1":"L'initiative COVID-19 sur la police et les sans-abri est financée par une subvention du Fonds d'action COVID-19 de l'Université de Toronto. Le projet est hébergé dans le département de sociologie de l'Université de Toronto (Scarborough).",
	   "par2":"Au cours des huit prochains mois, nous entreprendrons des recherches à travers tout le Canada pour fournir des preuves empiriques « à court terme » sur la manière dont les contrôles de police sont effectués auprès des personnes sans-abri durant la pandémie.",
	   "subtitle2":"PUBLICATION RÉCENTE : Cartographie des infractions relatives au néo-vagabondage au Canada",
	}
}


