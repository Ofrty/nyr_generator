// source lists
var a =
[
	"create",
	"design",
	"intensify",
	"legalize",
	"jeopardize",
	"entirely absorb",
	"condemn",
	"cook",
	"lose",
	"cure",
	"intensify",
	"chase",
	"binge watch",
	"exercise",
	"paint",
	"commit",
	"liquidate",
	"distill",
	"defeat",
	"defenestrate",
	"deface",
	"deter",
	"destabilize",
	"delete",
	"replace",
	"drop",
	"truncate",
	"select",
	"alter",
	"extinguish",
	"exsanguinate",
	"embalm",
	"interpret",
	"annotate"
];

var b =
[
	{
		"val": "",
		"pluralInd": true
	},
	{
		"val": "17",
		"pluralInd": true
	},
	{
		"val": "a roaring horde of",
		"pluralInd": true
	},
	{
		"val": "the one true",
		"pluralInd": false
	},
	{
		"val": "every fourth",
		"pluralInd": false
	},
	{
		"val": "enough",
		"pluralInd": true
	},
	{
		"val": "no",
		"pluralInd": true
	},
	{
		"val": "several",
		"pluralInd": true
	},
	{
		"val": "every",
		"pluralInd": false
	},
	{
		"val": "eleventy",
		"pluralInd": true
	},
	{
		"val": "that gosh darn",
		"pluralInd": false
	},
	{
		"val": "only the finest",
		"pluralInd": true
	},
	{
		"val": "7.5 metric tons' worth of",
		"pluralInd": true
	},
	{
		"val": "my weight in gold of",
		"pluralInd": true
	},
	{
		"val": "a cornucopia of",
		"pluralInd": true
	},
	{
		"val": "a plethora of",
		"pluralInd": true
	},
	{
		"val": "a smattering of",
		"pluralInd": true
	},
	{
		"val": "the",
		"pluralInd": false
	},
	{
		"val": "the",
		"pluralInd": true
	}
];

var c =
[
	{
		"sing": "Schmoe Schmandernach",
		"plural": "Schmoe Schmandernachs"
	},
	{
		"sing": "avocado tree",
		"plural": "avocado trees"
	},
	{
		"sing": "episode of existential angst",
		"plural": "episodes of existential angst"
	},
	{
		"sing": "lemon",
		"plural": "lemons"
	},
	{
		"sing": "Five Dollar Shake",
		"plural": "Five Dollar Shakes"
	},
	{
		"sing": "insurance policy",
		"plural": "insurance policies"
	},
	{
		"sing": "Usain Bolt",
		"plural": "Usain Bolts"
	},
	{
		"sing": "anonymous donor",
		"plural": "anonymous donors"
	},
	{
		"sing": "universal truth",
		"plural": "universal truths"
	},
	{
		"sing": "wild goose",
		"plural": "wild geese"
	},
	{
		"sing": "sweet dance move",
		"plural": "sweet dance moves"
	},
	{
		"sing": "craft beer",
		"plural": "craft beers"
	},
	{
		"sing": "province of the former Yugoslavia",
		"plural": "provinces of the former Yugoslavia"
	},
	{
		"sing": "bouffant hairdo",
		"plural": "bouffant hairdos"
	},
	{
		"sing": "discombobulated octopode",
		"plural": "discombobulated octopodes"
	},
	{
		"sing": "rotating helicopter blade",
		"plural": "rotating helicopter blades"
	},
	{
		"sing": "amicable stranger",
		"plural": "amicable strangers"
	},
	{
		"sing": "sense of lingering ennui",
		"plural": "episodes of lingering ennui"
	},
	{
		"sing": "glittering tiara",
		"plural": "glittering tiaras"
	},
	{
		"sing": "marine invertebrate",
		"plural": "marine invertebrates"
	},
	{
		"sing": "DO metric",
		"plural": "DO metrics"
	},
	{
		"sing": "proposal in stage 6",
		"plural": "proposals in stage 6"
	}
];

var d =
[
	"",
	"between now and election day",
	", just like momma used to",
	" before the heat death of the universe",
	", but only on Saturdays",
	"in Montana",
	"before the protomolecule turns me into blue goo",
	"immediately after lunch",
	"if someone submits a TrackIt ticket for it",
	"when no one is looking",
	"with pomp & circumstance",
	"singlehandedly and with proper fervor",
	"in a batch process",
	"due to escalating tensions",
	"sternly, but fairly",
	"with my bare hands",
	"while blindfolded",
	", for kingdom and glory",
	"wherever I please",
	"while moving uphill both ways"
];

//  funcs
function randBetween(maxNum)
/* Generates a random number between 0 and arg1

@param maxNum integer - an integer greater than 1

returns: int
*/
{
	return Math.round(Math.random() * maxNum);
}

function genRes()
/* Generates a random, syntactically-valid New Year's Resolution from the global source lists. Inserts into DOM.

params: none
returns: nothing
*/
{
	// pos or neg. 1/notDenom chance.
	var notDenom = 3; // set chance of not
	var yoda;
	if (randBetween(notDenom - 1) == (notDenom - 1))
	{
		yoda = " not ";
	}
	else { yoda = ""}

	// pick from lists, account for plurality
	var valA = a[randBetween(a.length - 1)];
	var objB = b[randBetween(b.length - 1)];
	var valB = objB.val;  
	var objC = c[randBetween(c.length - 1)];

	var valC;
	switch (objB.pluralInd)
	{
		case true:
		  valC = objC.plural
		break;

		default:
		  valC = objC.sing
	}

	var valD = d[randBetween(d.length - 1)];

	// pre-assembly tweaks
	// fix double-negation
	if (yoda == " not " && valB == "no")
	{
		valB = "any";
	}

	// gen res
	var resStr = "I will " +
	yoda +
	valA + " " +
	valB + " " +
	valC + " " +
	valD + "."
	;

	// post-assembly tweaks
	resStr = resStr.replace(" ,", ","); // space + ,

	// insert res into DOM
	var resElem = document.getElementById("res");
	resElem.textContent = resStr
}

// insert first res on page load
genRes();

// handle regen button
var regenElem = document.getElementById("regen");
regenElem.addEventListener("click", genRes);
