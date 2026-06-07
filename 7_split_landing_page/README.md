# Day 07 - Split Landing Page

An interactive split landing page with hover effects that expands one side while shrinking the other.

## Overview

A split landing page showcasing two products (PlayStation 5 and Xbox Series X) side-by-side. When users hover over either side, it smoothly expands while the other side shrinks, creating an engaging and interactive user experience. Perfect for product comparison or promotional pages.

## Features

- Split container layout with two equal halves
- Smooth hover animations with flexbox transitions
- Real-time DOM class manipulation for hover states
- Responsive design that fills the entire viewport
- Clean typography with Google Fonts (Roboto)
- Professional styling with dark overlay effects
- Background images for visual appeal
- Interactive call-to-action buttons
- Smooth transitions for fluid motion
- Left and right section independence

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts (Roboto)

## What I Learned

- Using CSS flexbox for responsive split layouts
- Hover event listeners for interactive effects
- classList.add() and classList.remove() for dynamic class manipulation
- CSS transitions for smooth animations
- CSS transforms for scaling and visual effects
- querySelector for DOM element selection
- Background image integration with CSS
- Creating responsive full-viewport designs
- Overlay effects with rgba colors
- Event delegation and hover state management
- Efficient animation performance with CSS transitions

## Screenshot

![Project Screenshot](screenshot.png)

## Live Demo

[View Project](#)

## Project Structure

- `index.html` — semantic markup with split container and two sections
- `style.css` — styling for layout, animations, and visual effects
- `script.js` — hover event logic for triggering animations

## How to Run

1. Open `index.html` in a web browser
2. The page displays two sections side-by-side (PlayStation 5 and Xbox Series X)
3. Hover over either side to see the animation effect
4. The hovered side expands to take more space
5. The non-hovered side shrinks accordingly
6. Move your mouse away to reset the layout

## Notes

- The hover effect uses CSS flex basis changes for smooth expansion
- Mouse enter events add the `hover-left` or `hover-right` class to the container
- Mouse leave events remove the hover classes to reset the layout
- Transition duration creates smooth, fluid animations
- The split sections are positioned absolutely within a flex container
- Button styling and hover states enhance user interaction
- Background images provide visual context for each product
- The layout fills the entire viewport (100vh) with no overflow

## Credits

Built as part of the `50 Days 50 Projects` challenge.
