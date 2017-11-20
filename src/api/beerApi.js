const getBeer = () => {
  const apiKey = "09d781b90a0b6c7e8a4314f33ae1eee9";
  const crossorigin = "https://cors-anywhere.herokuapp.com/";
  const urlApi =
    crossorigin +
    `http://api.brewerydb.com/v2/beer/random?key=${apiKey}&hasLabels=Y&withBreweries=Y`;
  return fetch(urlApi)
    .then(response => response.json())
    .catch(error => {
      // if the api returns error, return a local beer
      return {
        message: "Request Successful",
        data: {
          id: "cbn7at",
          name: "DUNKEL HEFE-WEIZEN",
          nameDisplay: "DUNKEL HEFE-WEIZEN",
          description:
            "Creamy head and smooth carbonation complement its deep mahogany color. Bouquet teems with chocolate, apple and clove. Roasted malts intertwine with Tettnanger hops creating a depth of complex flavors. Smooth roasted malts and dark caramel leads to clean finish \u2013 unlike any other dark wheat beer.",
          abv: "5.5",
          availableId: 1,
          styleId: 52,
          isOrganic: "Y",
          labels: {
            icon:
              "https://s3.amazonaws.com/brewerydbapi/beer/cbn7at/upload_FGUQHH-icon.png",
            medium:
              "https://s3.amazonaws.com/brewerydbapi/beer/cbn7at/upload_FGUQHH-medium.png",
            large:
              "https://s3.amazonaws.com/brewerydbapi/beer/cbn7at/upload_FGUQHH-large.png"
          },
          status: "verified",
          statusDisplay: "Verified",
          createDate: "2015-05-12 15:21:23",
          updateDate: "2015-12-18 00:44:07",
          available: {
            id: 1,
            name: "Year Round",
            description: "Available year round as a staple beer."
          },
          style: {
            id: 52,
            categoryId: 4,
            category: {
              id: 4,
              name: "German Origin Ales",
              createDate: "2012-03-21 20:06:46"
            },
            name: "South German-Style Dunkel Weizen / Dunkel Weissbier",
            shortName: "Dunkelweizen",
            description:
              "This beer style is characterized by a distinct sweet maltiness and a chocolate-like character from roasted malt. Estery and phenolic elements of this Weissbier should be evident but subdued. Color can range from copper-brown to dark brown. Dunkel Weissbier is well attenuated and very highly carbonated, and hop bitterness is low. Hop flavor and aroma are absent. Usually dark barley malts are used in conjunction with dark cara or color malts, and the percentage of wheat malt is at least 50 percent. If this is served with yeast, the beer may be appropriately very cloudy. No diacetyl should be perceived.",
            ibuMin: "10",
            ibuMax: "15",
            abvMin: "4.8",
            abvMax: "5.4",
            srmMin: "10",
            srmMax: "19",
            ogMin: "1.048",
            fgMin: "1.008",
            fgMax: "1.016",
            createDate: "2012-03-21 20:06:46",
            updateDate: "2015-04-07 15:30:09"
          },
          breweries: [
            {
              id: "WicydY",
              name: "High Point Brewing Co, Inc.",
              nameShortDisplay: "High Point",
              website: "http://www.ramsteinbeer.com/",
              isOrganic: "N",
              status: "verified",
              statusDisplay: "Verified",
              createDate: "2012-01-03 02:41:57",
              updateDate: "2015-12-22 15:20:22",
              isMassOwned: "N",
              brandClassification: "craft",
              locations: [
                {
                  id: "Io1zqC",
                  name: "Main Brewery",
                  streetAddress: "22 Park Pl",
                  locality: "Butler",
                  region: "New Jersey",
                  postalCode: "07405",
                  phone: "973-838-7400",
                  website: "http://www.ramsteinbeer.com/",
                  latitude: 41.0016011,
                  longitude: -74.3402896,
                  isPrimary: "Y",
                  inPlanning: "N",
                  isClosed: "N",
                  openToPublic: "Y",
                  locationType: "micro",
                  locationTypeDisplay: "Micro Brewery",
                  countryIsoCode: "US",
                  status: "verified",
                  statusDisplay: "Verified",
                  createDate: "2012-01-03 02:41:57",
                  updateDate: "2014-07-23 19:11:34",
                  country: {
                    isoCode: "US",
                    name: "UNITED STATES",
                    displayName: "United States",
                    isoThree: "USA",
                    numberCode: 840,
                    createDate: "2012-01-03 02:41:33"
                  }
                }
              ]
            }
          ]
        },
        status: "success"
      };
    });
};

export { getBeer };
