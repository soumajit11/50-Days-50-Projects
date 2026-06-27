# Day 28 - GitHub Profiles

This project lets users search for GitHub profiles and instantly view a summary of the selected account, including recent repositories.

## Overview

This project demonstrates a simple API-driven profile lookup experience. The main goal was to build a clean, interactive UI that fetches user data and repository information from the GitHub API.

## Features

- Search for any GitHub username and display their profile card
- Show follower, following, and repository counts at a glance
- Render a preview of the user's most recently created repositories
- Display a friendly error state when no profile is found
- Keep the layout responsive and easy to use on smaller screens
- Use lightweight JavaScript to handle API requests and DOM updates

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Axios

## What I Learned

- Working with asynchronous JavaScript and API requests
- Handling loading and error states in a user-friendly way
- Dynamically generating UI content from fetched data
- Structuring a small frontend project around external APIs
- Improving user experience with clear feedback and responsive design

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- `index.html` — Contains the search form, main container, and script includes
- `style.css` — Defines the visual styling, layout, and responsive behavior
- `script.js` — Handles API calls, card rendering, and form submission logic

## How to Run

1. Open `index.html` in a web browser or start a local server
2. Enter a GitHub username in the search box
3. View the profile card and repository list that appear below

## Notes

- The app uses the GitHub API to fetch profile and repository data
- Repository links open in a new tab for easier browsing
- The interface gracefully handles invalid or missing usernames
- The JavaScript is intentionally simple and focused on core functionality

## Credits

Built as part of the `50 Days 50 Projects` challenge.
