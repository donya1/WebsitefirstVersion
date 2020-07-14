$('.lang a').click(function(event){
 event.preventDefault();
});


const langEl = document.querySelector('.lang');
const langLink = document.querySelector('.lang').querySelectorAll('a');
// const QuestionEl = document.querySelector('#Question');
// const mainTitleEl = document.querySelector('.mainTitle')
// const taglineEl = document.querySelector('.tagline')
const par1El = document.querySelector('.par1')
const par2El = document.querySelector('.par2')
const par3El = document.querySelector('.par3')
const par4El = document.querySelector('.par4')
const par5El = document.querySelector('.par5')
const par6El = document.querySelector('.par6')
const par7El = document.querySelector('.par7')
const par8El = document.querySelector('.par8')

// //active class is added to the link that is clicked
langLink.forEach(el => {
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
	   par5El.textContent = data[attr].par5;
	   par6El.textContent = data[attr].par6;
	   par7El.textContent = data[attr].par7;
	   par8El.textContent = data[attr].par8;

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {
   // "Question": "how will police change the way they encounter people experiencing homelessness during the pandemic?",
   // "mainTitle":"COVID-19 Policing & Homelessness",
   // "tagline":"A Rapid Response Research Initiative",
	   "par1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum gravida iaculis. In aliquam metus et nunc finibus, a viverra purus ultrices. Nullam sollicitudin mauris eu risus finibus volutpat eu in ex. Vestibulum interdum elit ex, eu facilisis justo fermentum eget. Donec purus libero, hendrerit sed lectus id, mattis mollis quam. Duis pellentesque dui ut arcu hendrerit accumsan. Suspendisse id sapien nec purus elementum elementum interdum eu neque. Integer mauris turpis, sagittis nec metus ac, faucibus ullamcorper tortor. Suspendisse molestie id eros eu efficitur. Fusce congue vestibulum lectus, eu rhoncus nibh mollis vitae. Sed non sodales tortor, sed condimentum magna. Aliquam at viverra nisl, at tincidunt eros. Pellentesque dapibus nisi dui, sit amet viverra est ornare vitae. Quisque imperdiet lacus eget neque auctor aliquet. In interdum auctor nisi, quis tristique nulla.",
	   "par2":"Fusce at sapien id erat rutrum dictum id nec tellus. Nam urna erat, volutpat eget lectus ut, porttitor condimentum lacus. Aliquam id vehicula leo, at porta nisl. Aliquam efficitur feugiat dui, nec ultricies sem. Ut interdum iaculis ultrices. Maecenas sed porttitor nisl, in suscipit nulla. Vestibulum auctor, purus accumsan vehicula efficitur, quam mi egestas sapien, ut congue urna ipsum at metus. Phasellus tristique luctus lacus at sodales. Morbi fringilla tortor non finibus elementum. Maecenas porttitor tincidunt cursus. Quisque felis nulla, efficitur tempus consectetur sit amet, lacinia vitae dolor. In bibendum elit quis lorem luctus pulvinar. Phasellus velit neque, eleifend eget volutpat eu, porttitor nec orci.",
	   "par3":"Vivamus vitae ante posuere velit lobortis accumsan. Maecenas placerat posuere dignissim. Aliquam molestie luctus justo vitae maximus. Duis posuere tellus sapien, vel tincidunt libero tempor in. Suspendisse at odio sed nibh ornare pharetra fringilla eget augue. Curabitur ultricies laoreet faucibus. Curabitur vel vehicula magna. Aliquam erat volutpat. Phasellus a enim vitae quam semper fermentum quis efficitur velit. Vivamus vitae porta lorem, nec maximus leo. Suspendisse eleifend nisl quam, nec posuere nibh auctor ac. Aenean sit amet vehicula dolor. Morbi eleifend arcu vel sem euismod, eu vestibulum dolor congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vel odio sit amet tellus malesuada aliquet.",
	   "par4":"Fusce ornare bibendum odio ac consectetur. Nulla mattis aliquet scelerisque. Vivamus tempor leo et ligula vehicula, quis pretium risus vestibulum. Nullam commodo rhoncus massa, ac egestas magna accumsan vel. Pellentesque ac fringilla elit. Curabitur auctor eros nec felis suscipit, ac imperdiet leo blandit. Nunc porttitor rhoncus bibendum. Morbi ut varius ante. Sed vel tincidunt lacus. Curabitur ut ornare lectus. In egestas dictum erat, ac vulputate justo fringilla id. Cras lacinia dui urna, sit amet laoreet lacus dapibus vitae. Curabitur cursus eleifend elit eu imperdiet. Duis et rutrum diam.",
	   "par5":"Curabitur eget ipsum hendrerit, finibus dui ac, iaculis odio. Donec ac fringilla nisl, in bibendum dolor. Phasellus quis nibh lorem. Nulla eu tempor elit. Donec ipsum diam, fringilla at eleifend eu, mattis quis leo. Curabitur ipsum ipsum, mollis at nisl a, rutrum bibendum dui. Pellentesque vel ante ante. In quis mattis ipsum, vel condimentum urna. Sed et mattis tortor, quis fermentum velit.",
	   "par6":"Integer mattis nisl sed arcu convallis varius. Vivamus ut leo ultricies, placerat ligula quis, porta arcu. Quisque laoreet cursus lectus, in accumsan arcu mattis sit amet. Donec efficitur mauris erat, at lobortis diam accumsan a. Suspendisse a dui varius, egestas ex nec, ullamcorper ex. Aliquam fermentum risus massa, eget molestie ligula suscipit non. Vestibulum auctor ante tellus, nec sollicitudin enim imperdiet sed. Donec quis arcu pulvinar, congue mauris quis, ultrices sapien. Nullam ornare dignissim vehicula. In hac habitasse platea dictumst. Donec faucibus metus quis ligula rhoncus, at luctus ligula lobortis.",
	   "par7":"In hac habitasse platea dictumst. Mauris ac turpis blandit, lobortis ex vitae, faucibus odio. Sed diam eros, volutpat ut egestas nec, varius in nisi. Nunc a dapibus sem, quis sodales massa. Pellentesque venenatis cursus vestibulum. Cras placerat, dolor vel laoreet scelerisque, nisl est dictum dolor, a hendrerit tellus ex a augue. Vestibulum maximus urna ut nisl blandit semper. Vivamus vulputate aliquet nisl, sed lobortis sapien pharetra sit amet. Ut mattis justo id nisi convallis tristique. Phasellus commodo est in neque dictum pellentesque. Etiam condimentum purus vel velit dictum volutpat aliquam ut libero.",
	   "par8":"In et dignissim lorem. Nullam turpis arcu, egestas non convallis consectetur, elementum vel velit. Aenean id nunc at sem condimentum elementum. Fusce dapibus.",

 },

 "french":
	  {
//    "Question": "Comment la police va-t-elle changer sa façon de rencontrer les personnes sans-abri pendant la pandémie?",
//    "mainTitle":"La Police et l’Itinérance durant COVID-19",
//    "tagline":"UNE INITIATIVE DE RECHERCHE POUR UNE RÉPONSE RAPIDE",
	   "par1":"Texte français à suivre.",
	   "par2":"",
	   "par3":"",
	   "par4":"",
	   "par5":"",
	   "par6":"",
	   "par7":"",
	   "par8":"",

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



