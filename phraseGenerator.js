//javascript
const nameBank = ["Adam","Bob","Charlie","David","Eric","Frank","Greg","Horace","Isaac","Jimothy",
"Kevin","Linus","Mark","Nick","Oscar","Plop","Quentin","Roger","Sean","Tim","Ursula","Victor","William",
"Xerxes","Yannis","Zisko"];
const verbBank = ["resumes","reproduces with","disagrees with","welcomes", "poses with","laughs at", "regains",
"smashes the","recovers", "proclaims that the", "examines the", "links to", "screams at", "concedes",
"rides the", "hits the", "copes with", "bangs the", "prompts the", "spreads the", "dates a", "brushes up against a",
"transmits to the", "states that", "shows the", "informs the"]
const nounBank =["psychology", "wife", "profession", "growth", "driver", "inspector", "criticism", "apple", 
"potato", "relationship"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let name = nameBank[getRandomInt(nameBank.length)];
let verb = verbBank[getRandomInt(verbBank.length)];
let noun = nounBank[getRandomInt(nounBank.length)];

let message = name +" "+ verb +" "+ noun;

console.log(message);