# Developing an Aim Trainer

## Project Brief

**MVP - Minimum Viable Product**

- Display a game in the browser
- be interactive
- Include separate HTML / CSS / JavaScript files
- Use Javascript for DOM manipulation that is triggered by a browser event

## Timeframe

1 week

## Technologies & Tools Used

- HTML
- CSS
- JavaScript
- Git & GitHub

<br>

## Description

This is a spin on the classic, whack-a-mole type of game. The game was created while on-course at General Assembly (Software Engineering Immersive). Designed and implemented using HTML, CSS, and Javascript.

Reason for creating this simple game was because I use similar programs to train my aim in FPS (First-Person-Shooter) games, where speed and accuracy(mouse-placement) are the main determinants of winning "gun-fights" (exchange of shots with opposing player(s)). Variants of this game (similar concepts) can be found on the gaming platform Steam (KovaaK's and AimLabs).

The inspiration to create such a simple and barebones game (in terms of graphics and simplicity of function) was borne out of necessity as I was not entirely satisfied with the granulity of the other alternatives for use in personal FPS training regimes.
The variations of "scenarios"(game-modes) can now be tailor-made and altered to fit specific games/purposes. E.g. If the targets ony appear one at a time, or if the you can only "fire" (click) once every 4 seconds (e.g. in-between reloading of in-game Shot-guns) where shot placements and timing matters.

<br>

## Main Concept

Target(s) (number can be selected by user/player) will appear at random within an invisible grid that will stay on-screen until it is "shot-at" (clicked), which will cause another target to take its place at another random spot on the grid. Players will need to utilise and train their mouse "flicking" to achieve better results.(Mouse-flicking: Moving from point-to-point in the screen, in the shortest amount of time, and as accurately as possible)

<br>

## Deployment

The game is deployed on GitHub pages, and you can play the game here: https://aimtrainerv2.vercel.app/

<br>

## How To Play

Instructions:
The goal of the game is to hit as many targets as possible within the time allocated. The player must move their mouse/cursor from point to point not only with precision but also speed.

As this game requires an intense amount of concentration for sustained periods, it will undoubtely get more challenging as the timer continues on. Focus, and on-the-fly planning will be required. Peripheral vision and reaction speed will also be tested.

<br>

## Approach to Development

In order to facilitate the writing of the code and simplify the thought process, the project was broken down into stages:

- [x] **Step 1:** Generate the Invisible Grid
- [x] **Step 2:** Generate the Targets within the grid
- [x] **Step 3:** Game Logic (disappear on-click and randomise appearance)
- [x] **Step 4:** Create a system to calculate the accuracy and speed of the player
- [x] **Step 5:** Generate a running timer, and up-to-date accuracy counter for displaying during the game
- [x] **Step 6** (Stretch Goal): Create options for changing/limiting the number of targets.
      <br>

## Key Learnings

1. How to dynamically generate new elements

2. Nesting of functions (more than what was initially anticipated)

3. Throughout the project, there was a constant need to search for answers beyond what was within the scope of the course. Which meant practicing continuously; Identifying a problem -> Breaking down the problem -> Verbalising the problem into words -> Finding and sieving through possible solutions -> Breaking down potential solutions -> Modifying/adapting it for own code.

<br>

## Future Developments / Improvements

As this is created for a project submission, there might be no future iterations of this. However, if there were, these would be the future developments/improvements I would implement:

- Update the basic game visuals (i.e cursor).
- Adding in sliders/inputs for changing the per-round time and number of targets so that that they may be changed on the fly in-game.
- Creating options for custoimisation and baking them into the game (i.e changing of target colours for colour-blind individuals)
- Create more dynamic and informative post-game statistics that compared the player's progress over a period of play-sessions.
- Create a Start screen with instructions.
- Adding in more "scenarios" to train other "skills" necessary for FPS games (i.e "tracking"/keeping the cursor on a moving target as long as possible)

<br>

## Summary

This being the 2nd week from my initial exposure to coding and its concepts, I wanted to start by creating something that was meant to solve a real-life problem of mine. And as expected, motivation and tenacity to solve the problem/finish the code was greatly intensified.

As much as possible, I tried to avoid using snippets of code from others or even look up how similar games were made from other sources. This serves as a proof of concept for myself that even with a very limited breadth of coding knowledge/concepts, solutions can be derived from basics; sometimes it's not always about how much we know, but also how well we know the concepts to utilise them. For the tools are limitless, and knowing how to use them is equally as important.

Still, there was a fair bit of reading/searching/learning necessary on my own part and there is no discounting the help received from sutdying other's codes. But moving forward, this proof of concept will definitely stick with me a long way throughout my journey as a coder.
