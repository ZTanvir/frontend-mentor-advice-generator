# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Mobile](screenshot/mobileScreenShoot.png)
![Tablet](screenshot/tablet.png)
![laptop](screenshot/laptop.png)

### Links

- Solution URL: [URL ](https://github.com/ZTanvir/frontend-mentor-advice-generator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

Add loading spinner to the component untill component data fetch from the api.

```react
 {loading === true ? (
        <div data-center>
          <Loading />
        </div>
      ) : (
        <div>
          <p className="adviceId">ADVICE #{randomAdvice.id}</p>
          <h3 className="advice">“{randomAdvice.advice}”</h3>
          <img className="adviceLineImg" src={lineDividerImg} alt="" />
          <button
            className="adviceBtn"
            onClick={() => {
              handleGenerateNewAdvice(true);
              setLoading(true);
            }}
          >
            <img data-center src={diceIcon} alt="" />
          </button>
        </div>
      )}
```

### Useful resources

- [Mastering css layout](https://www.newline.co/courses/mastering-css-layout) - This helped me to identify website layout as design patten. I really liked this pattern and will use it going forward.

## Author

- Github - [Zahirul Islam Tanvir](https://github.com/ZTanvir)
