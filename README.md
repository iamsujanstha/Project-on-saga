## To Run WebApp
## `git clone <Link>`

Clone this project to your local environment through git clone.
## Follow these below instructions to install App.
### To install Node modules

```bash
npm i
```
### To install JSON Server for API
```bash
npm i json-server
```
Create db.json file in your root directory of App

### To run JSON server
```bash
json-server --watch db.json
```

First of all run this command to run the json-server locally. It fetches the data from "db.json" file.\
Open [http://localhost:3000/posts] to check if it is running.\

### Open next terminal
### To run Application
```bash
npm run dev
```
## Usage

• A non-admin user can see 10 posts per page.\
• They can click and view the post in detail.\
• Admin can login to the side through login button by putting email as ["admin123@gmail.com"] and password as ["admin321"] .\
• Admin can edit and delete the post after succesful login.\
• Admin can create the new post through "/admin/create-post" route.

## Features of App

• An admin user can login to the website and create / update / delete a post. Logged status and language details gets saved to localstorage.\
• When user hits authenticated routes then the user redirects to 401 page.\
• Non existing routes are redirected to 404 page.\
• Translation feature lets user switch between English , Nepali and French.\
• Every page have dynamic meta title & description.
