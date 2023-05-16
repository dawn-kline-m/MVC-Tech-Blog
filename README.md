# MVC-Tech-Blog

## Table of Contents
- [Description](#description)
- [User Specifications](#user-specifications)
- [Functionality](#functionality)
- [Mock-Up](#mock-up)
- [Deliverables](#deliverables)

## Description


This challenge is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

This site is built from the mini challenge as starter code and deploy it to Heroku. 

The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Specification

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Functionality

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

## Deliverables

The URL of the functional, deployed application to Heroku:

The URL of the GitHub repository, with a unique name and a readme describing the project: https://github.com/dawn-kline-m/MVC-Tech-Blog
