// source lists
var a =
[
	"create",
  "design",
  "intensify",
  "legalize",
  "jeopardize"
];

var b =
[
	{
  	"val": 17,
    "pluralInd": true
  },
  {
  	"val": "a raging horde of",
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
  }
];

var d =
[
	"between now and election day",
  ", just like momma used to",
  " before the heat death of the universe",
  ", but only on Saturdays",
  "in Montana"
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
