$('.lang a').click(function(event){
 event.preventDefault();
});


const langEl = document.querySelector('.lang');
const langLink = document.querySelector('.lang').querySelectorAll('a');
const capTit1El = document.querySelector('.capTitle1');
const capDesEl = document.querySelector('#capDes');
const MapMenEl = document.querySelector('.MapMen');
const Map1El = document.querySelector('#map1');
const Map2El = document.querySelector('#map2');
const Map3El = document.querySelector('#map3');
const titEl = document.querySelector('.title');
const sub1El = document.querySelector('#sub1');
const par1El = document.querySelector('#par1');
const par2El = document.querySelector('#par2');
const par3El = document.querySelector('#par3');
const par4El = document.querySelector('#par4');
const par5El = document.querySelector('#par5');
const par6El = document.querySelector('#par6');
const sub2El = document.querySelector('#sub2');
const par7El = document.querySelector('#par7');
const par8El = document.querySelector('#par8');
const sub3El = document.querySelector('#sub3');
const par9El = document.querySelector('#par9');
const par10El = document.querySelector('#par10');
const sub4El = document.querySelector('#sub4');
const par11El = document.querySelector('#par11');
const sub5El = document.querySelector('#sub5');
const par12El = document.querySelector('#par12');
const sub6El = document.querySelector('#sub6');
const par13El = document.querySelector('#par13');
const par14El = document.querySelector('#par14');
const sub7El = document.querySelector('#sub7');
const par15El = document.querySelector('#par15');
const sub8El = document.querySelector('#sub8');
const par16El = document.querySelector('#par16');
const par17El = document.querySelector('#par17');
const sub9El = document.querySelector('#sub9');
const par18El = document.querySelector('#par18');
const par19El = document.querySelector('#par19');
const par20El = document.querySelector('#par20');
const autEl = document.querySelector('.authors');
const datEl = document.querySelector('.date');
const not1El = document.querySelector('#notes1');
const not2El = document.querySelector('#notes2');
const not3El = document.querySelector('#notes3');


// //active class is added to the link that is clicked
langLink.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');

   

   const attr = el.getAttribute('language');

// //change the text content of html elements   


	   capTit1El.textContent = data[attr].capTitle1;
	   capDesEl.textContent = data[attr].capDes;
	   MapMenEl.textContent = data[attr].MapMen;
	   Map1El.textContent = data[attr].map1;
	   Map2El.textContent = data[attr].map2;
	   Map3El.textContent = data[attr].map3;
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
	   

	$("#par7:contains('contact us')").html(function(_, html){
  		return html.replace(/(contact us)/g, '<a href="Contact.html">$1</a>');
 	});

 	$("#par7:contains('nous contacter')").html(function(_, html){
 		return html.replace(/(nous contacter)/g, '<a href="Contact.html">$1</a>');
 	});

 	$("#sub3:contains('soliciting')").html(function(i, h){
  		return h.replace(/(\(.+\))/g, '<span class="span">$1</span>');
 	});

 	$("#sub6:contains('scavenging')").html(function(i, h){
 		return h.replace(/(\(.+\))/g, '<span class="span">$1</span>');
 	});

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {

	   "capTitle1":"OFFENCE TYPE DISTRIBUTION BY REGION:",
	   "capDes":"The distribution of offence types by region is presented in each donut. Use legend to view offence types. The number at the centre of the donut represents the total number of offences in each cluster. Zoom in and out to inspect different regions.",
	   "MapMen":"Viewing Options",
	   "map1":"By-Laws",
	   "map2":"Offence Types",
	   "map3":"Offence Distribution",
   	   "title":"Neo-Vagrancy Laws In Canada",
   	   "sub1":"No Standing, No Resting, No Shelter",
   	   "par1":"Anti-homeless laws pose a very real threat to people experiencing homelessness during the pandemic. One widespread form of anti-homeless legislation is what we have documented as neo-vagrancy law.",
   	   "par2":"Vagrancy prohibitions have a 700 year-old history in English criminal law. Vagrancy offences were designed to target anyone whose simple presence was perceived as a threat to the prevailing social and economic order. In particular, people who were visibly poor and could not give a ‘good account’ of themselves were arrested as criminals.",
 	   "par3":"Vagrancy law has been complicit with some of the most violent expressions of racism. Racial profiling and ‘stop and search’ practices were a central feature of  vagrancy law enforcement. Black and Asian Canadians, Indigenous Peoples, queer and trans individuals, and sex workers - all were major targets of vagrancy law before most of the offences were repealed from Canada’s Criminal Code by the early 1970’s.",
 	   "par4":"In the last 30 years, there has been a revival of vagrancy type laws directed at people who are homeless and street involved. New or revised laws have been enacted across Canada targeting the presence and survival activities of homeless people in public spaces.",
 	   "par5":"We call these laws neo-vagrancy laws because they revive a key purpose of archaic vagrancy law: to punish people who are visibly poor and have no choice but to spend their time in public spaces.",
 	   "par6":"These laws are profoundly prejudicial given how minority communities (such as Indigenous Peoples) are over-represented in homeless populations.",
	   "sub2":"75% of Canadians live in a jurisdiction with a Neo-Vagrancy offences.", 
	   "par7":"Our mapping of neo-vagrancy laws in Canada is drawn primarily from the by-laws of municipalities. Current by-laws are posted on municipality websites for ‘research’ or ‘convenience’ purposes, with the proviso that they may contain errors or may not be up to date. Please contact us to report additions or corrections. In addition, Ontario and British Columbia both have province wide Safe Streets Act legislation that target panhandling. Each of these provincial laws are included/counted as one point on the map, with each one containing the offence type of ‘panhandling’.",
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

	   "capTitle1":"DISTRIBUTION DES TYPES D'INFRACTION PAR RÉGION:",
	   "capDes":"La distribution des types d'infractions par région est présentée dans chaque diagramme. Utilisez la légende pour afficher les types d'infractions. Le chiffre au centre du diagramme représente le nombre total d'infractions dans chaque groupe. Faites un zoom avant et arrière pour examiner/vérifier les différentes régions.",
	   "MapMen":"Options de visualisation",
	   "map1":"RÈGLEMENTS",
	   "map2":"TYPES D'INFRACTIONS",
	   "map3":"RÉPARTITION DES INFRACTIONS",
	   "title":"La législation sur le néo-vagabondage au Canada",
	   "sub1":"Rester debout? Non. Se reposer? Non. Construire un abri? Non.",
	   "par1":"Les lois contre le phénomène des personnes en situation d'itinérance représentent une menace bien réelle pour les personnes qui n'ont pas où se loger pendant la pandémie. Nous avons qualifié de législation sur le néo-vagabondage une forme répandue de législation contre les personnes en situation d'itinérance.",
	   "par2":"Les interdictions de vagabondage sont vieilles de 700 ans dans le droit pénal anglais. Les délits de vagabondage étaient conçus pour cibler toute personne dont la simple présence était perçue comme une menace à l'ordre social et économique en vigueur. En particulier, les personnes dont la pauvreté était manifeste et qui étaient incapables de montrer une « bonne image » d'elles-mêmes étaient arrêtées comme des criminels.",
	   "par3":"La législation sur le vagabondage a été complice de certaines des expressions les plus violentes du racisme. Le profilage racial et les pratiques d'interpellation et de fouille sont au cœur de l'application de cette législation. Les Canadiens noirs et asiatiques, les peuples autochtones, les personnes homosexuelles et transgenres et les travailleurs du sexe en étaient tous des cibles importantes avant que la plupart des infractions ne soient supprimées du Code criminel du Canada au début des années 1970.",
	   "par4":"Au cours des trente dernières années, on a assisté à une renaissance des lois concernant le vagabondage visant les personnes en situation d’itinérance et les personnes vivant dans la rue. Des lois nouvelles ou révisées ont été promulguées dans tout le Canada, ciblant la présence et les activités de survie de ces personnes dans les espaces publics.",
	   "par5":"Nous qualifions ces lois de législation relative au néo-vagabondage, et nous les répertorions, en raison du fait qu’elles font réapparaître un objectif clé de la loi archaïque sur le vagabondage : punir les personnes dont la pauvreté est manifeste, et qui n'ont d'autre choix que de passer leur temps dans les espaces publics.",
	   "par6":"Ces lois sont profondément préjudiciables étant donné la surreprésentation des communautés minoritaires (comme les peuples autochtones) dans les populations en situation d'itinérance.",
	   "sub2":"75% DES CANADIENS VIVENT DANS UNE JURIDICTION OÙ IL EXISTE UNE INFRACTION RELATIVE AU néo-vagabondage.",
	   "par7":"Notre cartographie des lois sur le néo-vagabondage au Canada est principalement basée sur les règlements des municipalités. Les règlements actuels sont publiés sur les sites web des municipalités à des fins de « recherche » ou de « commodité », au risque, toutefois, qu'ils puissent contenir des erreurs ou ne pas être à jour. Veuillez nous contacter pour suggérer des ajouts ou des corrections. En outre, les provinces de l'Ontario et de la Colombie-Britannique ont toutes deux adopté une loi provinciale sur la sécurité dans les rues (Safe Streets Act) qui cible la mendicité. Chacune de ces lois provinciales est représentée par un point sur la carte, et chacune d'entre elles contient le type d'infraction de 'mendicité'.",
	   "inTextContact":"nous contacter",
	   "par8":"Nous avons respecté les critères suivants lors de l'élaboration de chaque type d'infraction de néo-vagabondage.",
	   "sub3":"Mendier",
	   "par9":"La carte comprend des lois contre la mendicité et le racolage. Ces dernières interdisent de demander de l'argent ou un objet de valeur aux piétons. Certaines lois interdisent totalement la mendicité, tandis que d'autres la restreignent partiellement à certaines heures (c'est-à-dire après 17 heures), à certains endroits (c'est-à-dire dans un parc) ou avec certains comportements (c'est-à-dire en étant assis). Quelle que soit la rigueur de leur rédaction, nous considérons que tous les règlements sur la mendicité sont discriminatoires pour deux raisons : 1) ils visent directement une activité associée à une situation d'itinérance et à la pauvreté; 2) les piétons donnent souvent de l'argent à des personnes perçues comme étant visiblement dans le besoin dans l'espace public, même si ces personnes n'en demandent pas de manière active.",
	   "par10":"De plus, bien qu'elles soient parfois utilisées contre les personnes en situation d’itinérance, nous n'incluons pas les lois dont le but est de réglementer les activités qui ont un aspect commercial comme le racolage, le commerce, le colportage, la vente ambulante, le démarchage ou l’art de rue à des fins lucratives. De même, nous n'incluons pas le racolage effectué sur la voie publique, ni les organisations caritatives autorisées ou enregistrées.",
	   "sub4":"Flâner",
	   "par11":"Tous les règlements qui interdisent explicitement le flânage sont inclus dans la carte. L'interdiction du flânage ne concerne parfois que le fait de « s'attarder » ou de se tenir quelque part « sans but apparent » ; dans d'autres cas, le flânage est limité à certaines heures et à certains endroits (par exemple, après le coucher du soleil, à l'intérieur des parcs). Nous avons inclus toutes les interdictions de flâner non seulement parce qu'elles sont très subjectives, mais aussi parce que toute personne en situation d'itinérance et de survie dans l'espace public serait automatiquement une cible de la loi.",
	   "sub5":"Provoquer des obstructions",
	   "par12":"Les règlements relatifs à l'obstruction ressemblent beaucoup aux règlements relatifs au flânage. Ils sont très généralement définis comme le fait de gêner le droit de passage d'un piéton. Bien qu'elles soient plus spécifiques que les règlements relatifs au vagabondage, ces lois sont parfois rédigées d'une manière si vague et subjective qu'elles pourraient viser les personnes en situation d'itinérance qui vivent et survivent dans l'espace public. Nous avons inclus ces règlements dans la carte. Ces règlements peuvent également être utilisés pour cibler indirectement les personnes en situation d'itinérance en prétendant que leurs biens personnels (comme un sac de couchage) constituent un danger pour le public.",
	   "sub6":"Récupérer et réutiliser des déchets ",
	   "par13":"Les règlements en matière de récupération interdisent aux personnes en situation d'itinérance de « ramasser » et de collecter des conteneurs de recyclage et de déchets pour leur usage personnel, pour trouver des aliments comestibles ou pour récupérer des bouteilles et des canettes pouvant être recyclées.",
	   "par14":"Nous n'incluons pas les règlements qui interdisent la récupération en tant qu'activité commerciale organisée, ni ceux qui interfèrent avec les sites d'élimination des déchets.",
	   "sub7":"Se reposer et s'allonger au sol",
	   "par15":"Cette catégorie recouvre à la fois les règlements sur le flânage et l'obstruction, mais elle reste distincte car les lois qu’elle contient visent spécifiquement les corps des personnes en situation d'itinérance qui se reposent, assises, couchées, ou dormant simplement dans les espaces publics. Ces règlements peuvent constituer des interdictions générales de dormir dans tous les espaces publics ou restreindre la possibilité de s'asseoir et de dormir dans des endroits spécifiques (sur le mobilier urbain ou les zones gazonnées). Outre les règlements relatifs au flânage et à l'obstruction, ils peuvent viser à exclure totalement de l'espace public la simple présence de personnes en situation d'itinérance.",
	   "sub8":"Construire un abri de fortune",
	   "par16":"Les règlements régissant le camping ou l'installation de matériel tels que les tentes, les bâches ou autres couvertures dans l'espace public sont classés dans la catégorie des règlements relatifs aux abris de fortune. Ils mettent l'accent sur un type de construction d'abris ou de lieux. Certains de ces règlements prévoient des exceptions limitées pour les personnes en situation d'itinérance, mais limitent les heures et les lieux où les gens peuvent installer des abris, interdisant de fait la construction d'abris pendant une longue période (généralement du coucher au lever du soleil).",
	   "par17":"Nous n'incluons pas les règlements qui réglementent le camping récréatif dans les parcs municipaux qui ont organisé des terrains de camping avec des sites autorisés. Nous n'incluons pas non plus d'interdictions générales impliquant l'entrée dans les espaces de parc.",
	   "sub9":"Occasionner des troubles",
	   "par18":"Ces règlements interdisent les comportements vaguement définis qui constituent un moyen de cibler toute personne qu'un membre du public pourrait juger indésirable. Souvent, ces règlements qualifient certains types de comportement de « nuisance », en utilisant des termes extrêmement généraux tels que « ennuyeux », « offensant » ou « répréhensible. » Ils sont si généraux et vagues qu'ils fournissent un moyen légal à quiconque de se plaindre des personnes qui vivent dans la rue dans les espaces publics.",
	   "par19":"Nous n'incluons pas les règlements généraux anti-nuisance qui interdisent spécifiquement le harcèlement ou les comportements violents dans les espaces publics.",
	   "par20":"Voici un point important pour conclure : la législation sur le néo-vagabondage constitue un ensemble spécifique de lois contre la situation d’itinérance qui reprend des aspects de l’ancienne législation abrogée sur le vagabondage. Elle n’inclut pas un large éventail d'autres lois qui sont souvent utilisées contre les personnes en situation d’itinérance, comme les lois sur l'alcool ou sur l'intrusion. En effet, comme nous l'explorerons dans de prochaines recherches, ces lois ne sont qu'une des caractéristiques d'un paysage juridique qui punit les personnes en situation d'itinérance et tente de les chasser des espaces publics.",
	   "authors":"Joe Hermer et Elliot Fonarev",
	   "date":"12 juillet 2020",
	   "notes1":"Ce travail est protégé par une licence Creative Commons qui vous permet de partager, copier, distribuer et transmettre le travail à des fins non commerciales, à condition que vous l'attribuiez à la source originale.",
 	   "notes2":"Cet essai peut être cité comme suit:",
 	   "notes3":"J. Hermer, et E.Fonarev (12 juillet 2020). La législation sur le néo-vagabondage au Canada. Consulté à l'adresse suivante : http://covid19-phi.ca/",

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
      $(this).find('i').toggleClass('.fa fa-caret-square-o-up')
    });
  });




