# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

```css
            .img-container {
              background-color: var(--neutral-700-op-low);
              border-radius: 12px;
              width: 50px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0.5rem;
              transition: all 0.2s ease-in-out;
              overflow: hidden;
```
```js
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const fullName = form["full-name"].value.trim();
      const email = form["email"].value.trim();
      const githubUsername = form["github-username"].value.trim();
      let valid = true;
```

## Author

- Frontend Mentor - (https://www.frontendmentor.io/profile/Alneelna)
