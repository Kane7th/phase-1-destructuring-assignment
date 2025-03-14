// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const farmAnimals = 'cow horse sheep pig chicken';

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// console.log(moo);  
// console.log(neigh);
// console.log(baa);  
// console.log(oink);  
// console.log(cluck); 

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const farmAnimalsArray = farmAnimals.split(' ');
const farmAnimals2 = [farmAnimalsArray[0], ...farmAnimalsArray.slice(2)];

const [bessie, dolly, babe, little] = farmAnimals2;

console.log(bessie);
console.log(dolly);  
console.log(babe);   
console.log(little);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// 4. Use destructuring to assign appropriate variables using the color names.

const farmAnimals4 = [farmAnimalsArray[0], ...farmAnimalsArray.slice(2, 4)];
let [blackAndWhite, black, pink] = farmAnimals4;

console.log(blackAndWhite);
console.log(black);  
console.log(pink); 

//-------------------------------------------------------------------------------------------------------


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const [r, o, y, g, b, , v] = colors;

console.log(r);
console.log(o); 

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

const [, , , , , indg] = colors;

console.log(indg); 

//-------------------------------------------------------------------------------------------------------

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

const { nestedName, nestedColor, nestedJob, nestedPartner, album } = nestedMuppet;

console.log(muppetName);
console.log(color);
console.log(song);
console.log(job);
console.log(partner);

// Destructure all songs
const { song1, song2, song3, song4 } = album.theMuppetMovie;

console.log(song1);
console.log(song2);
console.log(song3);
console.log(song4);

// 8. Use destructuring to assign only songs 2 and 4, and Kermit's job and partner
const { 
  album: { theMuppetMovie: { song2: songTwo, song4: songFour } } 
} = nestedMuppet;

// Already destructured earlier: nestedJob, nestedPartner

console.log(nestedName);
console.log(nestedColor);
console.log(nestedJob);
console.log(nestedPartner);
console.log(songTwo);
console.log(songFour);
