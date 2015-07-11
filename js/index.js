$('#readerchoice').on('submit', function(e){
	e.preventDefault();
	// var time = $(this).find("select[name=readtime]").val();
	var time = $(this).find("input[name=readtime]:radio:checked").val();

	// var mood = $("select[name=readmood]").val();
	var mood = $("input[name=readmood]:radio:checked").val();
	//console.log(time);
	
	var articleoptions = [];
	for (var i = 0; i<articles.length; i++) {
		var article = articles[i];
		if (article.readtime >= criteria.readtime[time][0] && article.readtime <= criteria.readtime[time][1]) {
			if (article.readmood == criteria.readmood[mood]){
				// console.log(mood);
				// console.log(article.name);
				//console.log(article.url);
				articleoptions.push(article.url);
				//console.log(articleoptions);
				var rand = articleoptions[Math.floor(Math.random() * articleoptions.length)];
				console.log(rand);
				window.location.href= "article.html?url_key="+ rand;
		}
		}
	}


});



$('#readerchoice input[type=radio]').change(function() {       
    $('#question2').css('display', 'block');
    $('#submit').css('display','inline-block');
});


var articles = [
	{
		name: "Germanwings Co-Pilot Was Treated for ‘Suicidal Tendencies,’ Authorities Say",
		readtime: 500,
		readmood: 1,
		url: 'http://www.nytimes.com/2015/03/31/world/europe/germanwings-copilot-andreas-lubitz.html'
	},
	{
		name: "An Iran Nuclear Deal Built on Coffee, All-Nighters and Compromise",
		readtime: 500,
		readmood: 1,
		url: 'http://www.nytimes.com/2015/04/04/world/middleeast/an-iran-nuclear-deal-built-on-coffee-all-nighters-and-compromise.html'
	},
	{
		name: "What Colors Are This Dress?",
		readtime: 2123,
		readmood: 2,
		url: 'http://www.buzzfeed.com/catesish/help-am-i-going-insane-its-definitely-blue#.mrVbzbZoA'
	},
	{
		name: "42 Of The Most Important Puppies Of All Time",
		readtime: 20000,
		readmood: 3,
		url: 'http://www.buzzfeed.com/kaelintully/i-want-all-the-puppies-in-the-world-pls-pls-pls-pls#.geLmnmld1'
	},
	{
		name: "The Case Against Robert Menendez",
		readtime: 4500,
		readmood: 1,
		url: 'http://www.theatlantic.com/politics/archive/2015/04/robert-menendez-is-indicted-for-corruption/389366'
	},
	{
		name: "Afghan Policewomen Struggle Against Culture",
		readtime: 6000,
		readmood: 1,
		url: 'http://www.nytimes.com/2015/03/31/world/europe/germanwings-copilot-andreas-lubitz.html'
	},
	{
		name: "To Fall in Love With Anyone, Do This",
		readtime: 8000,
		readmood: 2,
		url: 'http://www.nytimes.com/2015/01/11/fashion/modern-love-to-fall-in-love-with-anyone-do-this.html'
	},
	{
		name: "Stop Everything: You Can Play “Pac-Man” In Google Maps Right Now",
		readtime: 500,
		readmood: 2,
		url: 'http://www.buzzfeed.com/davidmack/waka-waka#.hgWW1Wap5'
	},
	{
		name: "The 32 best April Fools' Day gags of 2015",
		readtime: 4000,
		readmood: 3,
		url: 'http://www.buzzfeed.com/iknowkayleen/slumber-party#.jq03539D6'
	},
	{
		name: "21 Kids Who Gave Absolutely Zero F*cks",
		readtime: 900,
		readmood: 3,
		url: 'http://www.buzzfeed.com/remeepatel/these-kids-are-so-yolo#.cog0d03gv'
	},
	{
		name: "In Report on Rolling Stone, a Case Study in Failed Journalism",
		readtime: 1500,
		readmood: 1,
		url: 'http://www.nytimes.com/2015/04/06/business/in-report-on-rolling-stone-a-case-study-in-failed-journalism.html'
	}

];

var criteria = {
	readtime: {
		five: [100, 1000],
		ten: [1001, 5000],
		tenplus: [5000, 99999999] 
	}, 
	readmood: {
		informative: 1,
		popular: 2,
		amuse: 3
	}
};

