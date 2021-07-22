# Test assignment

## Description

Goal is to create single page application for displaying and searching [GitHub](https://github.com/) users using GitHub public API. We also provided wireframes which express expected outcome from UX perspective.

If you do not have enough time or skills to achieve some parts of the acceptance criteria do not hesitate to send your solution for evaluation.

### Acceptance criteria

* JS framework can be anything you are comfortable with we have competence to validate many of them
* CSS frameworks (Bootstrap or Foundation) should not be used, we would like to see what you can do. Although you are free to use smaller libraries that would do some parts for improving application.
* Documentation for running on local machine
* Should be responsive
* Should be hosted in public repository like GitHub, Bitbucket or any other you are familiar with for the evaluation process

#### Some other bits and bolts that certainly will give you extra points

* Package manager and other tools relevant to your JS framework being used
* It would be nice to see some CSS preprocessors in action
* Small e2e tests
* Some unit tests
* Linters



## Some hints before you kick off

Design is up to you, we're not expecting anything super fancy as you're still applying for developer position, but good sense of design is always something extra. For UX you will get most of the idea from wireframes attached to test assignment.

### API docs

* [GitHub API](https://developer.github.com/v3/)

### Frameworks

* [React](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)

or anything else you are familiar with

### Icons

* [Material icons](https://material.io/icons/)
* [Reflex grid](http://reflexgrid.com/docs/)

or anything else you are familiar with

### Animations
* [Animate.css](https://daneden.github.io/animate.css/)

or anything else you are familiar with



## Application flow

Application has two different views:

### Landing page

URL format: `http://domain`

* Should load a list view that could be switched to grid view with most popular users according to GitHub
    * Should have toggle button for list and grid views
* For each user it should display following:
    * Avatar
    * Name which should be link redirecting to **User page**
    * Type
    * Three first repo names for the user if none then empty info text
* Should have search box to find specific user, if you search for a specific user application redirects the user page
    * Should show 3 latest searches commited by search box (would be nice if they are still available after page reload)

### User page

URL format: `http://domain/:username`

* Back link to **Landing page**
* Should display detailed user information enduser was searching on Landing page or typed to the URL.
    * Should also have possibility to access without Landing page search (work with page reload)
        * If no user found it should display **Not found** content and button which would redirect back to Landing page
* Should display following:
    * Avatar
    * Name which open new tab in browser for user page in GitHub
    * Type
    * Three first repo names for the user if none then empty info text
    * Organizations user belongs:
        * Organization avatar
        * Organization login which is link that opens organizations page in GitHub within new browser tab
        * If no organizations then info text is displayed
