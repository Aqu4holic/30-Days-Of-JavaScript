// this is your main.js script

challenge = '30 Days of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log(challenge.split(' '));

let tmp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(tmp.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charCodeAt(challenge.indexOf('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

tmp = 'You cannot end a sentence with because because because is a conjunction'
console.log(tmp.indexOf('because'));
console.log(tmp.lastIndexOf('because'));
console.log(tmp.search('because'));

tmp = ' 30 Days Of JavaScript '
console.log(tmp.trim());

tmp = '30 Days Of JavaScript'
console.log(tmp.startsWith('30'));
console.log(tmp.endsWith('ript'));
console.log(tmp.match('a'));

console.log('30 Days of'.concat(' JavaScript'));

console.log(tmp.repeat(2));

tmp = `
The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.
`
console.log(tmp);

tmp = `
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`
console.log(tmp);

console.log('10' == 10);

console.log(`
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`);