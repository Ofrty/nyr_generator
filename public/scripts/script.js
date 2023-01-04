// chance vars: 1 / (xDenom) chance
var notDenom = 4; // chance of "will" -> "will not"
var valDDenom = 3; // chance of final clause val D being applied

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
	"exercise with",
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
	"annotate",
	"build an exact replica of",
	"pay my respects to",
	"escalate",
	"grasp",
	"redact",
	"visit",
	"indulge",
	"hit up",
	"wax philosophical about",
	"compose a symphony dedicated to",
	"address the plight of",
	"restore the crown to",
	"purify",
	"make a Click-Up task for",
	"entomb in carbonite",
	"deeply contemplate",
	"look for defects in",
	"push through QA",
	"convert all data related to",
	"thoroughly document",
	"create a terribly confusing Visio document in order to describe"
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
		"pluralInd": false // the avocado tree
	},
	{
		"val": "the",
		"pluralInd": true // the avocado trees
	},
	{
		"val": "our entire supply of",
		"pluralInd": true
	},
	{
		"val": "all",
		"pluralInd": true
	},
	{
		"val": "your favorite",
		"pluralInd": false
	},
	{
		"val": "the last unaccounted-for",
		"pluralInd": false
	},
	{
		"val": "every single",
		"pluralInd": false
	},
	{
		"val": "seven-and-a-half",
		"pluralInd": true
	},
	{
		"val": "√-1",
		"pluralInd": true
	},
	{
		"val": "the last reigning",
		"pluralInd": false
	},
	{
		"val": "the most pressing",
		"pluralInd": false
	}
];

var c =
[
/* omitted 2020/01/14 to prevent harmless in-joke from being misinterpreted by others.
All characters are fictional, and any resemblance to real people is a coincidence.
	{
		"sing": "Schmoe Schmandernach",
		"plural": "Schmoe Schmandernachs"
	},
*/
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
	},
	{
		"sing": "meticulously-arranged display of 1940s airplane models",
		"plural": "meticulously-crafted 1940s airplane models"
	},
	{
		"sing": "Billy Idol's sneer",
		"plural": "facial expressions of Billy Idol"
	},
	{
		"sing": "email spammer pretending to be an AVP",
		"plural": "email spammers pretending to be AVPs"
	},
	{
		"sing": "arm of Joe Burrow",
		"plural": "arms of Joe Burrow"
	},
	{
		"sing": "Department of Silly Walks",
		"plural": "Silly Walks (of the Department)"
	},
	{
		"sing": "incomprehensible error log",
		"plural": "incomprehensible error logs"
	},
	{
		"sing": "acceptable use of Schadenfreude",
		"plural": "enemies worthy of Schadenfreude"
	},
	{
		"sing": "low-hanging fruit",
		"plural": "low-hanging fruits"
	},
	{
		"sing": "gift on-the-table",
		"plural": "dollars on-the-table"
	},
	{
		"sing": "untapped donor",
		"plural": "untapped donors"
	},
	{
		"sing": "integration environment",
		"plural": "integration environments"
	}
];

var d =
[
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
	"while moving uphill both ways",
	"in a cloud-based environment",
	"with the aid of my sidekick",
	"whether you like it or not",
	"so well that Kim will write a song about it",
	"and then take an apprentice",
	", and stream it live for the world to see",
	"so that no one else ever has to",
	", just in case",
	"without regard for my own safety",
	"to raise money for charity",
	"in the name of Odin",
	", and I won't shave until it's finished",
	"as a proxy for my greater ambitions",
	"in compliance with GDPR",
	"beyond the seas",
	"from coast to coast",
	"aggressively",
	"without remorse",
	", because Cold Stone said so",
	"at the weekly technical ad-hoc meeting",
	"in the full ascend sandbox environment",
	"by the next sprint meeting",
	"before you can even ask about the level of effort",
	"while waiting for our integration software to recover from another crash"
];

//  funcs
function randZeroToN(maxNum)
/* Generates a random number between 0 and arg1. Does weak validation.

@param maxNum integer - an integer greater than 0

returns: int if validated int, 0 if not.
*/
{
	var retVal;
	
	// validate that int is > 1. if not, then just return 0.
	if (maxNum > 0)
	{
		retVal = Math.floor(Math.random() * maxNum);
	}
	else { retVal = 0; }
	
	return retVal;
}

function genRes()
/* Generates a random, syntactically-valid New Year's Resolution from the global source lists. Inserts into DOM.

params: none
returns: nothing
*/
{
	// pos or neg. 1/notDenom chance.
	var yoda;
	if (randZeroToN(notDenom) == (notDenom-1))
	{
		yoda = " not ";
	}
	else { yoda = "" }

	// pick from lists, account for plurality
	var valA = a[randZeroToN(a.length)];
	var objB = b[randZeroToN(b.length)];
	var valB = objB.val;  
	var objC = c[randZeroToN(c.length)];

	var valC;
	switch (objB.pluralInd) // handle plurality of noun
	{
		case true:
		  valC = objC.plural;
		break;

		default:
		  valC = objC.sing;
	}

	var valD;
	if (randZeroToN(valDDenom) == (valDDenom - 1)) // handle valD chance
	{
		valD = d[randZeroToN(d.length)];
	}
	else { valD = ""; }

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
	resStr = resStr.replace(" .", "."); // space + .
	resStr = resStr.replace("  ", " "); // double space

	// insert res into DOM
	var resElem = document.getElementById("res");
	resElem.textContent = resStr;
}

// insert first res on page load
genRes();

// handle regen button
var regenElem = document.getElementById("regen");
regenElem.addEventListener("click", genRes);
