# Day 35 - Image Carousel

This project showcases a smooth, auto-rotating image carousel with manual next and previous controls for easy browsing.

## Overview

This project demonstrates a responsive image carousel built with HTML, CSS, and JavaScript. The main goal was to create a polished slideshow experience with automatic rotation and simple navigation controls.

## Features

- Auto-playing image transitions every few seconds
- Manual Prev and Next buttons for user control
- Smooth slide movement using CSS transforms
- Clean, centered layout with a bordered preview frame
- Lightweight JavaScript logic for interval management and image switching

## Technologies Used

- HTML5
- CSS3 (transitions, transforms, flexbox)
- JavaScript (ES6+)

## What I Learned

- Controlling slide position with CSS transforms for smooth animation
- Managing timed intervals and resetting them on user interaction
- Creating simple state logic for cycling through a list of images
- Keeping the UI lightweight while preserving a polished interaction feel

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- `index.html` — Contains the carousel markup and navigation buttons
- `style.css` — Styles the layout, image sizing, and transition behavior
- `script.js` — Handles image switching, autoplay, and button events

## How to Run

1. Open `index.html` in a web browser or start a local server
2. Use the Prev and Next buttons to move between images
3. Observe the automatic slideshow rotation and smooth transitions

## Notes

- The carousel uses translateX to move the image strip horizontally
- The autoplay interval resets whenever the user clicks a button
- The image container is clipped to create the carousel viewport effect
- The JavaScript is intentionally minimal and focused on the core interaction

## Credits

Built as part of the `50 Days 50 Projects` challenge.
