/*  Jest is really FREAKING AWESOME because it comes with everything 
packaged together. This means no more extra libraries for testing. Jest
also allows for both front-end (only React though I believe) and 
back-end testing. Really makes writing unit tests for your particular
feature easy!

Refer below for writing correct tests:

1. Create a new section for your tests using comments 
  (ex: /*Tests for Artist Component & Artist List Component)

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
import sinon from "sinon";

/*
CONTINUE TO ADD TESTS ON TOP OF EACH OTHER! :D
*/



/*
TESTS FOR ARTIST LIST COMPONENT
*/
import ArtistList from "../client/src/Components/ArtistList.jsx";

test("ArtistList should render 3 <Artist /> components", () => {
  const artists = [
    {
      name: "Biggie Smalls",
      uri: "www.fakesite.com",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
          width: 160
        }
      ]
    },
    {
      name: "Eminem",
      uri: "www.fakesite.com",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
          width: 160
        }
      ]
    },
    {
      name: "Jay-Z",
      uri: "www.fakesite.com",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
          width: 160
        }
      ]
    }
  ];

  //we pass in an array of three artists, so Artist List should render 3 artists exactly
  const artistList = mount(<ArtistList artists={artists} />);

  expect(artistList.find(Artist).length).toBe(3);
});

test('ArtistList component should render a "book now" button for every artist', () => {
  const artists = [
    {
      name: "Biggie Smalls",
      uri: "www.fakesite.com",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
          width: 160
        }
      ]
    },
    {
      name: "Eminem",
      uri: "www.fakesite.com",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
          width: 160
        }
      ]
    }
  ];

  const artistList = mount(<ArtistList artists={artists} />);

  expect(artistList.find(".bookBtn").length).toBe(2);
});

/*
TESTS FOR ARTIST COMPONENT
*/

import Artist from "../client/src/Components/Artist.jsx";

test("Artist component renders a component with given artist data", () => {
  //create a fake artist data that is passed into the Artist component
  const artist = {
    name: "Biggie Smalls",
    uri: "www.fakesite.com",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
        width: 640
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
        width: 320
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
        width: 160
      }
    ]
  };
  const artistComponent = shallow(<Artist artist={artist} />);
  expect(artistComponent.find(".artist-text").length).toBe(1);
});

test("at least two divs is always rendered", () => {
  const artist = {
    name: "Biggie Smalls",
    uri: "www.fakesite.com",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
        width: 640
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
        width: 320
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
        width: 160
      }
    ]
  };
  const artistComponent = shallow(<Artist artist={artist} />);
  expect(artistComponent.find("div").length).toBeGreaterThanOrEqual(2);
});

test('"book now" button should exist', () => {
  const artist = {
    name: "Biggie Smalls",
    uri: "www.fakesite.com",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/4e9029bb24f55c60216a7076574ce619d0d16775",
        width: 640
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/2d42a4be32d338906ac1d27d4360877fc0cae924",
        width: 320
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/cef6aaefeb4538c394da5e89df30eb22ce416aa0",
        width: 160
      }
    ]
  };
  const artistComponent = shallow(<Artist artist={artist} />);
  const numberBtn = artistComponent.find(".bookBtn").length;
  expect(numberBtn).toBe(1);
});

//Tests for ServerIndex.js
