# Model-View-Controller-MVC-Tech-Blog

## Table of Contents
 * [Description](#Description)
 * [Criteria](#Criteria)
 * [Website-Link](#Website-Link)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)

## Description
 Built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

<img src="./assets/HomePageScreenShot.png" alt="Home Page"/>
<img src="./assets/BlogPostScreenShot.png" alt="BlogPost"/>

## Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Website-Link
Click the Heroku link below to view the application

https://murmuring-ocean-36955-1319a87838d0.herokuapp.com/

## Installation

Clone project. Run the following line of code in your terminal to install all the needed packages:[express-handlebars], [MySQL2], [Sequelize], [dotenv package], [bcrypt package], [express], [express-session], and [connect-session-sequelize]

```md
npm i
```

## Usage
Once all the packages have been installed, open terminal and run the following code in command line:

node server.js

Go to the Heruko app link and follow the above criteria

## License

This project uses MIT License