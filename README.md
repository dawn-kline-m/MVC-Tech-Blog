# 14 Model-View-Controller (MVC): Tech Blog

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story


AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


## Acceptance Criteria

This is a CMS-Style blog site

When the user visits the site for the first time, the user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

When the user clicks on the homepage option, the user is taken to the homepage.

When the user clicks on any other links in the navigation, the user is prompted to either sign up or sign in.

When the user chooses to sign up, the user is prompted to create a username and password.

When the user clicks on the sign-up button, the users  credentials are saved and the user is logged into the site.

When the user revisits the site at a later time and choose to sign in, then the user is prompted to enter username and password.

When the user is signed  in to the site, the user sees navigation links for the homepage, the dashboard, and the option to log out.

When the user clicks on the homepage option in the navigation, the user is taken  to the homepage and presented with existing blog posts that include the post title and the date created.

When the user clicks on an existing blog post, the user is  presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

When the user enters a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

When the user clicks on the dashboard option in the navigation, the user is taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

When the user clicks on the button to add a new blog post, the user is prompted to enter both a title and contents for the blog post.

When the user clicks on the button to create a new blog post, the title and contents of my post are saved and the user is taken back to an updated dashboard with my new blog post.

When the user clicks on one of the users existing posts in the dashboard, the user is able to delete or update the post and is taken back to an updated dashboard.

When the user clicks on the logout option in the navigation, the user is signed out of the site.

When the  user is idle on the site for more than a set time (15 min), the user is able to view posts and comments but is prompted to log in again before the user can add, update, or delete posts.


## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

The URL of the functional, deployed application:

The URL of the GitHub repository, with a unique name and a readme describing the project: https://github.com/dawn-kline-m/MVC-Tech-Blog
