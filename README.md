## Spoofify - A React clone of Spotify

An application to emulate all spotify features using the official REST API. Built with React,Redux and Sass, uses a node server for token. Get the node repo [here](https://github.com/SsjSanthosh/remote-spotify-server)

## Table of Contents

- [Project Status](#project-status)
- [Description](#description)
- [Motivation](#motivation)
- [Tech/Framework Used](#techframework-used)
- [Demo/Screenshots](#demo-screenshots)
- [Installation](#installation)
- [Possible Future Updates](#possible-future-updates)
- [Reflection](#reflection)

## Project Status

This project will be evolving over time, currently planned future updates include ability to create and delete playlists and more customization.

## Description

A react app to emulate the behavior of the official spotify web player with the design sense of the native desktop app. The app uses the Spotify REST api to get data, the node.js server to get the non-authenticated token.

Non-logged in users can still browse and check out the features of the app but will need to be authenticated in order to do anything user-specific.

Logged in users can control their spotify playback, transfer to other devices or add/remove tracks and artists.

#### Note - Only premium users can control playback. This is a spotify API limitation.

## Tech/Framework Used

- React
- Redux,thunk
- Sass
- React router

## Motivation

I wanted to build something that could showcase everything I have learnt in a real-world scenario. Something with an exhaustive API and enough room to play with some of the designs but not have to design it from scratch. The spotify API was perfect was this, and I use it in daily. I always preferred the native look of the app over the web player so I have tried to make it the best of both worlds here.

## Demo/Screenshots

![Logged in with playback](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/screenshots/thumbnail.png)
_Logged in with playback_

![Logged in library page](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/screenshots/loginlibrary.png)
_Logged in library page_

![Logged out playlist page](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/screenshots/playlistpage.png)
_A playlist page, logged out_

![Accent color change](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/screenshots/accentchange.png)
_Changed accent color_

![Demo of auth flow and playback](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/demo/demo-1.gif)
_A walkthrough of the auth flow and basic playback_

![Demo of non-logged in user](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/demo/demo-2.gif)
_A demo of the non-logged in user flow_

![Demo of saving tracks and playling playlists](https://raw.githubusercontent.com/SsjSanthosh/remote-spotify/master/demo/demo-3.gif)
_A demo of saving tracks and playlist playlists_

More screenshots and details [here!](https://ssjsanthosh.github.io/portfolio)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

- `npm install`
- Create a .env variable and set the following environment variables
  - `REACT_APP_SPOTIFY_CLIENT_ID = ${Your Spotify Client ID}`
  - `REACT_APP_SPOTIFY_CLIENT_SECRET = ${Your Spotify Client Secret}`
  - `REACT_APP_BACKEND_TOKEN_ENDPOINT = https://reactify-backend-token.herokuapp.com/token OR your own server`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Possible Future Updates

- Add podcasts and shows
- Implement infinite scroll for fetching
- Add detailed search pages
- Web playback with the new SDK
- More customization
- Implement refresh token with the backend node server

## Reflection

This was a 1-2 week long project built after my internship had ended. The goal was to get a working application that was usable for everyone and looked good. I wanted to consolidate all my learning into this project and showcase my skills in a real-world environment. I also wanted to get better at reading documentation for APIs and third party modules.

Authentication and auth flow was one of the major hurdles to getting this off the ground, as I never had to go through such extensive flows before. This lead me to spend a few days on a research spike into OAuth. Due to project time constraints, I had to limit my auth flow to just having the node server for getting the access token for logged out users. I do plan on implementing the refresh token flow soon. You can find the auth flow for the API [here](https://developer.spotify.com/documentation/general/guides/authorization-guide/).

The whole thing was built from scratch by me and I am very happy with how the project has turned out. Everything is a component, the folder structure is easy to understand, I have made sure to compartmentalize all the components and even have a lot of common components. I made it a point to have comprehensive utils folder that really helped me change things faster later on. I thought out most of the design beforehand and I wanted each page to be it's own component with no real dependencies, so while there might be a bit of a boilerplate in the pages, I wanted to make sure that they were all unique as I want to dive deeper into them later. I have tried to be as DRY as possible. The only place where I feel I could have done better is with the styling, I did not have a set design for the different pages and there ended up being a bit of repetition of styles, I intend to fix this soon.

Check out more about this project and more at my portfolio [here](https://ssjsanthosh.github.io/portfolio)
