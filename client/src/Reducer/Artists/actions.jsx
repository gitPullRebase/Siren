//sends call to server to get related artists for what is clicked on
export function getArtists() {
  console.log('calling set artists properly');
  //send get request to server to get related artists
  const artists = ['taylor swift', 'marshmellowwwww'];
  // need to use dispatch for async functions
  return setArtists(artists);
}

export function setArtists(artists) {
  return {
    type: "SET_ARTISTS",
    artists,
  };
}