/*  Jest is really FREAKING AWESOME because it comes with everything 
packaged together. This means no more extra libraries for testing. Jest
also allows for both front-end (only React though I believe) and 
back-end testing. Really makes writing unit tests for your particular
feature easy!

Refer below for writing correct tests:

1. Create a new section for your tests using comments 
  (ex: //Tests for Artist Component & Artist List Component)

2. Import whatever you have to 
  (ex: import ArtistList from '../client/src/Components/ArtistList.jsx')
  
2b. Everything else has already been imported such as React, { mount } 
from enzyme, etc.

3. Write 5 tests that pertain to only YOUR ticket; use the example tests 
for guidance

4. Don't worry about other people's tests that are already in here, just 
keep adding yours to the top

Special Note: According to Jest Docs, you should only have 2-3 tests for your
React components. Bless up!!

*/

/* 
INITIAL IMPORTS
 */

import React from "react";
import { mount } from "enzyme";
import { shallow } from "enzyme";

/*
TESTS FOR ARTIST LIST COMPONENT
*/
import ArtistList from "../client/src/Components/ArtistList.jsx";

test("ArtistList component renders however many components specified", () => {
  const artists = [
    {
      name: "Biggie Smalls",
      uri: "www.fakesite.com"
    },
    {
      name: "Eminem",
      uri: "www.fakesite.com"
    },
    {
      name: "Jay-Z",
      uri: "www.fakesite.com"
    }
  ];

  //we pass in an array of three artists, so Artist List should render 3 artists exactly
  const artistList = shallow(<ArtistList artists={artists} />);

  expect(artistList.find(Artist)).to.have.length(3);
});

test('ArtistList component should render a "book now" button for every artist', () => {
  const artists = [
    {
      name: "Biggie Smalls",
      uri: "www.fakesite.com"
    },
    {
      name: "Eminem",
      uri: "www.fakesite.com"
    }
  ];

  const artistList = shallow(<ArtistList artists={artists} />);

  expect(artistList.find(".bookBtn")).to.have.length(2);
});

/*
TESTS FOR ARTIST COMPONENT
*/

import Artist from "../client/src/Components/Artist.jsx";

test("Artist component renders a component with given artist data", () => {
  //create a fake artist data that is passed into the Artist component
  const artist = {
    name: "Biggie Smalls",
    uri: "www.fakesite.com"
  };
  const artistComponent = shallow(<Artist artist={artist} />);
  expect(artistComponent.find(".artist-text")).to.have.length(1);
});

test("at least two divs is always rendered", () => {
  const artistComponent = shallow(<Artist artist={artist} />);
  expect(artistComponent.find("div").length.toBeGreaterThanOrEqual(2));
});

test('"book now" button simulates click events', () => {
  const onButtonClick = sinon.spy();
  const artistComponent = shallow(<Artist onButtonClick={onButtonClick} />);
  artistComponent.find(".bookBtn").simulate("click");
  expect(onButtonClick.calledOnce).to.equal(true);
});

//Tests for ServerIndex.js
