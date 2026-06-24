# Day 24 - Content Placeholder

A skeleton loading screen that displays animated placeholder elements before replacing them with actual content, creating a smooth and polished content loading experience.

## Overview

This project demonstrates skeleton screen loading patterns, commonly seen in modern web applications. The main goal was to create a visually engaging placeholder animation that provides feedback while content is being loaded, enhancing perceived performance and user experience.

## Features

- Animated skeleton loading with shimmer effect using CSS gradients
- Simulated content loading delay with automatic content replacement
- Smooth transition from placeholder to actual content
- Responsive card layout with clean, modern styling
- Profile card display with image, title, excerpt, and author information
- CSS-driven animations that don't require heavy JavaScript
- Accessible HTML structure with semantic elements

## Technologies Used

- HTML5
- CSS3 (animations, gradients, flexbox)
- JavaScript (ES6+)

## What I Learned

- Creating shimmer animations using CSS gradients and background-position keyframes
- Combining multiple animated elements for cohesive skeleton loading effects
- Timing content replacement with setTimeout to simulate realistic loading scenarios
- Toggling CSS classes to transition from skeleton to loaded state
- Using CSS animation-iteration with infinite loops for continuous visual feedback
- Building intuitive UX patterns that acknowledge loading states to users

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- `index.html` — HTML structure for the card layout with placeholder elements
- `style.css` — Styling for the card, animations, and skeleton loading effects
- `script.js` — JavaScript logic to handle content loading and class manipulation

## How to Run

1. Open `index.html` in a web browser or start a local server
2. Observe the animated skeleton loading elements on initial page load
3. After 2.5 seconds, watch the placeholders transition to actual content with real images and text

## Notes

- The `.animated-bg` class creates the shimmer effect using a linear gradient with background-size and animated background-position
- The animation runs at 1 second per cycle on infinite loop for continuous feedback
- Content is fetched via `getData()` function triggered by `setTimeout` with a 2.5-second delay
- The `animated-bg` and `animated-bg-text` classes are removed once content is loaded to stop animations
- Images are loaded from external sources (Unsplash for the card image, RandomUser API for the profile picture)
- The skeleton state uses `&nbsp;` placeholders to maintain layout height during loading

## Credits

Built as part of the `50 Days 50 Projects` challenge.
