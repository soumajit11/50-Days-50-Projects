# Day 23 - Kinetic Loader

A compact, CSS-driven loader that uses two rotating triangular halves to create a kinetic spinning effect.

## Overview

This project demonstrates how to build a minimal, visually engaging loader using CSS keyframe animations and transforms. The main goal was to create a lightweight, responsive loader effect that is easy to customize and performs well across browsers.

## Features

- CSS-only loader composed of layered triangular shapes
- Smooth, continuous rotation using keyframe animations
- Minimal DOM footprint and lightweight styles
- Responsive sizing suitable for small UI placeholders
- Easily customizable colors and timing via CSS
- Optional lightweight JavaScript hook for enhancements

## Technologies Used

- HTML5
- CSS3 (transforms, animations, pseudo-elements)
- JavaScript (optional)

## What I Learned

- Creating complex shapes with CSS borders and pseudo-elements
- Driving motion with keyframe timing and transform animations
- Keeping animations performant by using transforms instead of layout properties
- Structuring lightweight components with minimal markup
- Designing for easy customization and reuse

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- [index.html](index.html) — Entry HTML that mounts the loader
- [style.css](style.css) — Styling and keyframe animations for the loader
- script.js — Optional enhancement script (not required for core effect)

## How to Run

1.  Open [index.html](index.html) in a web browser or start a local server
2.  Observe the kinetic loader animation in the center of the page
3.  Modify `style.css` to change color, size, or animation timing

## Notes

- The loader uses two pseudo-elements rotated relative to each other to produce the kinetic motion
- The effect is driven by `transform` and `border` techniques to keep the DOM minimal
- No JavaScript is required for the animation; `script.js` can be used for optional hooks
- Animations use `linear` easing for a continuous, mechanical feel

## Credits

Built as part of the `50 Days 50 Projects` challenge.
