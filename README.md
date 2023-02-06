## To Run WebApp

## `git clone <Link>`

Clone this project to your local environment through git clone.

## Follow these below instructions to install App.

# STEP 1: `npm install` [To install Node modules]

# STEP 2: `npm i json-server` [To Install JSON Server]

# STEP 3: `json-server --watch db.json` [To Start JSON Server]

First of all run this command to run the json-server locally. If fetches the data from "db.json" file.
Open [http://localhost:3000/posts] to check if it is running.

Open next terminal

## STEP 4: `npm run dev` [TO start App]

## Usage

• A non-admin user can see 10 posts per page.
• They can click and view the post in detail.
• Admin can login to the side through login button by putting email as ["admin123@admin.com"] and password as ["admin321"] .
• Admin can edit and delete the post after succesful login.
• Admin can create the new post through "/admin/create" route.

## Features of App

• An admin user can login to the website and create / update / delete a post. Logged status and language details gets saved to localstorage.
• When user hits authenticated routes then the user redirects to 401 page.
• Non existing routes are redirected to 404 page.
• Translation feature lets user switch between english & nepali.
• Every page have dynamic meta title & description.
