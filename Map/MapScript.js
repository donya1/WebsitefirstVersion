$('.lang a').click(function(event){
 event.preventDefault();
});


const langEl = document.querySelector('.lang');
const langLink = document.querySelector('.lang').querySelectorAll('a');
const titEl = document.querySelector('.title')
const sub1El = document.querySelector('#sub1')
const par1El = document.querySelector('#par1')
const par2El = document.querySelector('#par2')
const par3El = document.querySelector('#par3')
const par4El = document.querySelector('#par4')
const par5El = document.querySelector('#par5')
const par6El = document.querySelector('#par6')
const sub2El = document.querySelector('#sub2')
const par7El = document.querySelector('#par7')
const par8El = document.querySelector('#par8')
const sub3El = document.querySelector('#sub3')
const par9El = document.querySelector('#par9')
const par10El = document.querySelector('#par10')
const sub4El = document.querySelector('#sub4')
const par11El = document.querySelector('#par11')
const sub5El = document.querySelector('#sub5')
const par12El = document.querySelector('#par12')
const sub6El = document.querySelector('#sub6')
const par13El = document.querySelector('#par13')
const par14El = document.querySelector('#par14')
const sub7El = document.querySelector('#sub7')
const par15El = document.querySelector('#par15')
const sub8El = document.querySelector('#sub8')
const par16El = document.querySelector('#par16')
const par17El = document.querySelector('#par17')
const sub9El = document.querySelector('#sub9')
const par18El = document.querySelector('#par18')
const par19El = document.querySelector('#par19')
const par20El = document.querySelector('#par20')
const autEl = document.querySelector('.authors')
const datEl = document.querySelector('.date')
const not1El = document.querySelector('#notes1')
const not2El = document.querySelector('#notes2')
const not3El = document.querySelector('#notes3')


// //active class is added to the link that is clicked
langLink.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');

   

   const attr = el.getAttribute('language');

// //change the text content of html elements    
	   titEl.textContent = data[attr].title;
	   sub1El.textContent = data[attr].sub1;
	   par1El.textContent = data[attr].par1;
	   par2El.textContent = data[attr].par2;
	   par3El.textContent = data[attr].par3;
	   par4El.textContent = data[attr].par4;
	   par5El.textContent = data[attr].par5;
	   sub2El.textContent = data[attr].sub2;
	   par6El.textContent = data[attr].par6;
	   par7El.textContent = data[attr].par7;
	   par8El.textContent = data[attr].par8;
	   sub3El.textContent = data[attr].sub3;
	   par9El.textContent = data[attr].par9;
	   par10El.textContent = data[attr].par10;
	   sub4El.textContent = data[attr].sub4;
	   par11El.textContent = data[attr].par11;
	   sub5El.textContent = data[attr].sub5;
	   par12El.textContent = data[attr].par12;
	   sub6El.textContent = data[attr].sub6;
	   par13El.textContent = data[attr].par13;
	   par14El.textContent = data[attr].par14;
	   sub7El.textContent = data[attr].sub7;
	   par15El.textContent = data[attr].par15;
	   sub8El.textContent = data[attr].sub8;
	   par16El.textContent = data[attr].par16;
	   par17El.textContent = data[attr].par17;
	   sub9El.textContent = data[attr].sub9;
	   par18El.textContent = data[attr].par18;
	   par19El.textContent = data[attr].par19;
	   par20El.textContent = data[attr].par20;
	   autEl.textContent = data[attr].authors;
	   datEl.textContent = data[attr].date;
	   not1El.textContent = data[attr].notes1;
	   not2El.textContent = data[attr].notes2;
	   not3El.textContent = data[attr].notes3;
	   

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {
   	   "title":"Neo-Vagrancy Laws In Canada",
   	   "sub1":"No Standing, No Resting, No Shelter",
   	   "par1":"Anti-homeless laws pose a very real threat to people experiencing homelessness during the pandemic. One widespread form of anti-homeless legislation is what we have documented as neo-vagrancy law.",
   	   "par2":"Vagrancy prohibitions have a 700 year-old history in English criminal law. Vagrancy offences were designed to target anyone whose simple presence was perceived as a threat to the prevailing social and economic order. In particular, people who were visibly poor and could not give a ‘good account’ of themselves were arrested as criminals.",
 	   "par3":"Vagrancy law has been complicit with some of the most violent expressions of racism. Racial profiling and ‘stop and search’ practices were a central feature of  vagrancy law enforcement. Black and Asian Canadians, Indigenous Peoples, queer and trans individuals, and sex workers - all were major targets of vagrancy law before most of the offences were repealed from Canada’s Criminal Code by the early 1970’s.",
 	   "par4":"In the last 30 years, there has been a revival of vagrancy type laws directed at people who are homeless and street involved. New or revised laws have been enacted across Canada targeting the presence and survival activities of homeless people in public spaces.",
 	   "par5":"We call these laws neo-vagrancy laws because they revive a key purpose of archaic vagrancy law: to punish people who are visibly poor and have no choice but to spend their time in public spaces.",
 	   "par6":"These laws are profoundly prejudicial given how minority communities (such as Indigenous Peoples) are over-represented in homeless populations.",
	   "sub2":"At least 75% of Canadians live in a jurisdiction with a Neo-Vagrancy Law.", 
	   "par7":"Our mapping of neo-vagrancy laws in Canada is drawn primarily from the by-laws of municipalities. Current by-laws are posted on municipality websites for ‘research’ or ‘convenience’ purposes, with the proviso that they may contain errors or may not be up to date. Please contact us to report additions or corrections. In addition, Ontario and British Columbia both have province wide Safe Streets Act legislation that target panhandling.",
	   "par8":"We have adhered to the following criteria in developing each neo-vagrancy offence type.",
	   "sub3":"Panhandling ('soliciting')",
	   "par9":"The map includes anti-panhandling and anti-begging laws. These laws prohibit soliciting money or something of value from pedestrians. Some of the laws completely prohibit panhandling, while others partially restrict it during certain times (i.e. after 5pm), in certain places (i.e. in a park), or along with certain behaviours (i.e. while sitting). Regardless of how narrowly they are written, we consider all panhandling by-laws to be discriminatory for two reasons: 1) they directly target an activity associated with homelessness and poverty, 2) pedestrians often give money to people perceived as being visibly needy in public space, even if that person is not actively soliciting donations.",
	   "par10":"Also, while they are sometimes used against homeless people, we do not include laws whose purpose is to regulate activities that have a commercial aspect such as touting, trading, hawking, vending, peddling or busking. As well, we do not include soliciting carried out on a roadway, or a permitted or registered charity.",
	   "sub4":"Loitering",
	   "par11":"All by-laws that explicitly prohibit loitering are included in the map. The prohibition on loitering is sometimes specifically against ‘lingering’ or standing around somewhere ‘without an apparent purpose’; in other cases, loitering is restricted to certain times and places (i.e. after sunset, inside parks). We have included all loitering prohibitions not just because they are very subjective, but also because any homeless person surviving in public space would automatically be a target of the law.",
	   "sub5":"Obstructing",
	   "par12":"Obstructing by-laws are a close cousin of loitering by-laws. They are very generally defined as bothering a pedestrian’s right to passage. While they are more specific than loitering by-laws, sometimes these laws are written in a way that is so vague and subjective that they could target homeless people who live in and survive in public space. We included these by-laws on the map. Obstructing offences can also be used to indirectly target people who are homeless by claiming that their personal possessions (such as a sleeping bag) pose a hazard to the public.",
 	   "sub6":"Salvaging ('scavenging')",
 	   "par13":"Salvaging by-laws prohibit homeless people from ‘picking-over’ and collecting from re-cycling and refuse containers for personal use – to find edible food or to collect bottles and cans that have recycling value.",
 	   "par14":"We do not include by-laws that prohibit scavenging as an organized commercial activity, or those that interfere with waste disposal sites.",
 	   "sub7":"Resting and Sleeping",
 	   "par15":"This category overlaps with both loitering and obstructing by-laws, but these laws are distinct because they specifically target the bodies of homeless people that are resting (sitting, reclining or sleeping) in public spaces. These by-laws can be general anti-sleeping prohibitions in all public spaces or can restrict sitting and sleeping in specific places (on street furniture or grassy areas). Along with loitering and obstruction by-laws, they can work to exclude the very simple presence of homeless people altogether from public spaces.",
 	   "sub8":"Sheltering",
 	   "par16":"By-laws regulating camping or erecting materials like tents, tarps or other covers in public space are categorized as sheltering by-laws. They emphasize some sort of shelter or place-making. Some of these by-laws allow narrow exceptions for homeless people, but still restrict times and places where people can set up shelters, effectively banning building shelter for more than a very short period of time (usually from sunset to sunrise).",
 	   "par17":"We do not include by-laws that regulate recreational camping in municipal parks that have organized campgrounds with permitted sites. Nor do we include general prohibitions involving entry into park spaces.",
 	   "sub9":"Disorder",
 	   "par18":"These by-laws prohibit vaguely-defined behaviours that provide a means to target anyone that a member of the public may find to be undesirable. Often these by-laws characterize certain kinds of conduct as a form of ‘nuisance’, using extremely general language about ‘annoying’, ‘offending’ or ‘being objectionable to’ others. They are so general and vague that they provide a legal means to anyone to complain about street-involved people in public spaces.",
 	   "par19":"We do not include general anti-nuisance by-laws that specifically prohibit harassment or violent behaviour in public spaces.",
 	   "par20":"We conclude on an important point: neo-vagrancy laws are a specific set of anti-homeless laws that reproduce aspects of repealed vagrancy law. They do not include a wide range of other laws that are often used against people experiencing homelessness such as alcohol or trespass laws. Indeed, as we will explore in upcoming research, they are only one feature of a legal landscape that punishes people who are homeless and attempts to drive them out of public spaces.",
 	   "authors":"Joe Hermer and Elliot Fonarev",
 	   "date":"July 12, 2020",
 	   "notes1":"This work is protected under a Creative Commons license that allows you to share, copy, distribute, and transmit the work for non-commercial purposes, provided you attribute it to the original source.",
 	   "notes2":"This essay may be cited as:",
 	   "notes3":"Hermer, J., & Fonarev, E. (2020, July 12). Neo-Vagrancy Laws in Canada. Retrieved from: http://covid19-phi.ca/",

 	},

 "french":
	  {
	   "title":"Texte français à suivre.",
	   "sub1":"",
	   "par1":"",
	   "par2":"",
	   "par3":"",
	   "par4":"",
	   "par5":"",
	   "par6":"",
	   "sub2":"",
	   "par7":"",
	   "par8":"",
	   "sub3":"",
	   "par9":"",
	   "par10":"",
	   "sub4":"",
	   "par11":"",
	   "sub5":"",
	   "par12":"",
	   "sub6":"",
	   "par13":"",
	   "par14":"",
	   "sub7":"",
	   "par15":"",
	   "sub8":"",
	   "par16":"",
	   "par17":"",
	   "sub9":"",
	   "par18":"",
	   "par19":"",
	   "par20":"",
	   "authors":"",
	   "date":"",
	   "notes1":"",
 	   "notes2":"",
 	   "notes3":"",

	  }
 }


 $(document).ready(function(){
    $('.menuFilter').click(function() {
      $('#menu').toggle("slide");
    });
  });

 $(document).ready(function(){
    $('.mobileLegend').click(function() {
      $('#legend').toggle("slide");
    });
  });

  $(document).ready(function(){
    $('.biblioExpand').click(function() {
      $('.bibliography').toggle("slide");
    });
  });




