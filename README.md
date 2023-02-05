## To Run WebApp

## `git clone <Link>`

Clone this project to your local environment through git clone.

## Available Scripts

In the project directory,

## `npm install`

Install all the dependencies in the project.

# `npm i json-server`

First of all run this command to run the json-server locally. If fetches the data from "db.json" file.
Open [http://localhost:3000/posts] to check if it is running.

TO RUN APP

## `npm run dev`

• Open the next terminal and run npm start.\
• It runs the project in development mode.\
• Then Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

• A non-admin user can see 10 posts per page.
• They can click and view the post in detail.
• Admin can login to the side through login button by putting email as ["admin123@admin.com"] and password as ["admin321"] .
• Admin can edit and delete the post after succesful login.
• Admin can create the new post through "/admin/create" route.

## Features of App

An admin user can login to the website and create / update / delete a post. Logged status and language details gets saved to localstorage.
When user hits authenticated routes then the user redirects to 401 page.\
Non existing routes are redirected to 404 page.
translation feature lets user switch between english & nepali.
Every page have dynamic meta title & description.
