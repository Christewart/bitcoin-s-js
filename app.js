var Random = require('bcrypto/lib/random');

var randInt = Random.randomInt();
console.log(randInt)

var randomBytes = Random.randomBytes(32);
console.log(randomBytes);
