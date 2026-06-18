# Day 18 - Background Slider

A dynamic image slider that cycles through beautiful background images with smooth fade transitions and arrow button navigation.

## Overview

This project demonstrates CSS transitions and JavaScript event handling to create a seamless image carousel experience. The main goal was to build an interactive background slider that smoothly transitions between multiple high-quality images while maintaining a clean, minimal UI with an overlay effect for visual depth.

## Features

- Smooth fade transitions between background images using CSS opacity
- Left and right arrow button navigation with circular cycling
- Active slide indicator highlighting the current image in the thumbnail strip
- Full-screen background with dark overlay for visual depth
- Responsive design that adapts to various screen sizes
- Font Awesome icons for intuitive arrow buttons
- Unsplash integration for high-quality, royalty-free images
- Lightweight JavaScript for state management and DOM manipulation

## Technologies Used

- HTML5
- CSS3 (transitions, opacity, positioning, flexbox)
- JavaScript (ES6+ DOM manipulation, event listeners)
- Font Awesome Icons (CDN)
- Unsplash API for images

## What I Learned

- Implementing CSS transitions for smooth opacity-based fade effects
- Managing application state with JavaScript variables (activeSlide index)
- Event delegation using click handlers on navigation buttons
- Circular array indexing to create infinite loop navigation (wrapping around at boundaries)
- Layering z-index and positioning to create visual hierarchy with overlays
- Synchronizing multiple DOM elements (background image, active indicator, thumbnails)
- Using CSS `position: fixed` for persistent button placement across viewport scrolling
- Calculating dynamic positioning with CSS calc() for responsive button placement

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- `index.html` — HTML markup with slider container, slide elements, and navigation buttons
- `style.css` — Styling for the slider layout, transitions, buttons, and responsive positioning
- `script.js` — JavaScript logic for slide navigation, state management, and DOM updates

## How to Run

1. Open `index.html` in a web browser (or serve from a local server for CORS compliance with external images)
2. Click the left arrow button to view the previous image
3. Click the right arrow button to view the next image
4. Observe the smooth fade transition between slides
5. Note that navigation wraps around—continuing past the last slide returns to the first

## Notes

- The slider uses Unsplash images which are fetched via HTTPS CDN links embedded directly in the HTML
- CSS transitions are set to 0.4s for a balanced fade speed (neither too slow nor too abrupt)
- The body element receives a dark overlay via `body::before` pseudo-element with `rgba(0, 0, 0, 0.7)` for readability
- The slider container is positioned relative with `overflow: hidden` to contain the absolutely-positioned slides
- Navigation buttons are fixed positioned at 50% from the top with `transform: translateY(-50%)` for perfect vertical centering
- Arrow positioning uses `calc()` to dynamically account for the 15vw margin and button width (65px)
- The activeSlide variable serves as the single source of truth for which slide is currently visible
- Circular array wrapping is achieved with modulo-like logic: increment beyond length resets to 0; decrement below 0 wraps to length - 1

## Credits

Built as part of the `50 Days 50 Projects` challenge.
