// music should be an object with title, artist, and album properties
const music = {
  artist: "J Dilla",
  album: "Donuts",
  title: "Lightworks",
}

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `“${music.title}” from ${music.album} by ${music.artist}`

console.log(songSnippet)
