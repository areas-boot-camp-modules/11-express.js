let constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
let planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
let star = "polaris";

// Part 1
constellations.push("Canis Major"),
constellations.sort()

console.log(constellations);

// OR
constellations.unshift("Canis Major")

console.log(constellations);

// Part 2
planets.slice(0,5);

console.log(planets);

// OR
planets.pop()

console.log(planets);

// Part 3
let galaxy = constellations.concat(planets);

console.log(galaxy);

// OR
let galaxyalt = [...constellations, ...planets];

console.log(galaxyalt);

// Part 4
let upperStar = star.toLocaleUpperCase();

console.log(upperStar);
