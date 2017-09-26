HelloFresh Dev Team - Front-end Developer Test
=============================================

Hello and thanks for taking the time to try out the Front-end Developer test.

The goal of this test is to assert your coding, UI, HTML and CSS skills (to some degree).

Feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result. Take as much time as you want on the test, please do over-engineer we would like to assess all your skills!

_Note: While we love open source here at HelloFresh, please do not create a public repo with your test in! This challenge is only shared with people interviewing, and for obvious reasons we'd like it to remain this way._

Instructions
------------

1. Clone this repo.
2. Create a new `dev` branch, or create a fork of this repo.
3. Write your code, in various commits so we can see your development timeline. We won't be looking at the time each task took you. We're much more interested in your train of thought!
4. When finished, create a Pull Request with set-up instructions and an explanation for your solution.
5. Reply to the thread your having with our HR department telling us that we may start reviewing your code.

Requirements
------------

- You *MUST* write your test with modern HTML and JS (ES6 or ES7, so no TypeScript, CoffeeScript or other superset languages)
- Your code *MUST* be in english (variable names, comments etc..)
- You *MAY* comment your code wherever you feel necessary
- You *SHOULD* use webpack
- You *MAY* design something nice, but you *COULD* also copy your designs from our [website](https://www.hellofresh.com/recipe-archive/collection/light)
- You *SHOULD NOT* use jQuery, Twitter's Bootstrap or any other CSS framework
- You *SHOULD* use a CSS preprocessor or postprocessor, when you use CSS
- You *COULD* use CSS-in-JS
- You *SHOULD* use some kind of server to serve your code, something like [http-server](https://github.com/indexzero/http-server) would do

Exercise
--------

In this test we will build a recipe review area.

It will contain two pages:

- [Login page](#login-page)
- [Recipe review page](#recipe-review-page)

#### Login page

Implement a login page with a form to login, it doesn't have to actually log you in or do any checks, but things like e-mail validation are appreciated!

#### Recipe overview page

This will show all the recipes that are attached.

The following should be true for this page:

- All the recipes will be displayed here
- The recipes have to be shown with all the data in the JSON displayed in a user-friendly way
- Each recipe can be favorited or unfavorited
- Each recipe can be rated

Evaluation Criteria
-------------------

**IMPORTANT**: Building a back-end or adding a database to this test is optional. Although, it's perfectly fine to approach this test as a refined front-end prototype.

- The app must run.
- Your app is lean and mean (small files that make the page look good).
- You implemented a proper grid.
- Your app is responsive.
- Your app is well structured.
- You implemented the rating functionality without using a third-party library.

Bonus points

- You wrote unit tests for your JavaScript.
- Your application is an SPA.
- You wrote server side code instead of using a utility application like `http-server`.
- You implement actual endpoints to request the recipe data.
- You use our own API instead of the JSON file, read how to do that [here](./USE_THE_API.md).
- Your app is deployed to Github Pages or some other hosting.
- Your application is isomporphic/universal.
- You implemented actual authentication with the use of passport or something similar.

Good luck, and have fun!
