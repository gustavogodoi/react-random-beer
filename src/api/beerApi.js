const getBeer = () => {
  const apiKey = "09d781b90a0b6c7e8a4314f33ae1eee9";
  const crossorigin = "https://cors-anywhere.herokuapp.com/";
  const urlApi =
    crossorigin +
    `http://api.brewerydb.com/v2/beer/random?key=${apiKey}&hasLabels=Y&withBreweries=Y`;
  return fetch(urlApi).then(response => response.json());
};

export { getBeer };
