# The Philosophy Dept.

<!-- ABOUT THE PROJECT -->
## About The Project
The Philosophy Department:
In this app, users will be able to create and save philosopher profiles–profiles which will include a name, image, school of thought, and personalized user notes on books and philosophical ideas of that philosopher–to their own digital personal library. Users will be able to build out their library and sort/access their compiled knowledge with ease.

## Getting Started
1. Clone the repository
2. CD to the directory
3. Run ```NPM install```
4. Run ```NPM run dev```
5. Ensure the API is running
6. In the browser, Navigate to the localhost link
<!-- USAGE EXAMPLES -->
## Usage
### As a user, I should be able to view all my posts
Given the user wants to view all their posts
When the user clicks “My Library”
Then They will be taken to a page that houses all their posts.

### As a user, I should be able to view a single post
Given the user wants to read a single post
When the user clicks on the name of the post
Then They will be taken to a page where the image, name, school, status, reading list, and their annotations are displayed.

### As a user, I should be able to edit a post
Given the user wants to edit a post
When the user is viewing a single post on the “view philosopher’ page and clicks the “edit philosopher” button
Then They will be taken to the “edit philosopher” page where they are able to edit/update all fields for that post.

### As a user, I should be able to save my edits
Given the user wants to save their edits on a post.
When the user updates the information on the “edit philosopher” page and clicks “submit changes” button
Then the changes will be saved to the database and they will be redirected back to their library. 

### As a user, I should be able to delete a post
Given the user wants to delete a post
When the user clicks on the “delete philosopher” button on the “view philosopher” page
Then the philosopher will be deleted from the database and they will be redirected back to their library. 

### As a user, I should be able to add a new post
Given the user wants to add a new post
When the user clicks on the “add philosopher” button in the navbar
Then the user will be taken to a form on the “add philosopher” page where they can input the applicable information.



### As a user, I should be able to save a new post
Given the user wants to save a new post to their library
When the user clicks on the “submit” button on the “add philosopher” page
Then the new philosopher will be added to the database and the user will be directed back to “my library” where the new philosopher will be visible in their library.

### As a user, I should be able to view my profile
Given the user wants to view their profile
When the user clicks on the “my profile” button in the navbar
Then the user will be directed to the “my profile” page where they will be able to read their name, username, email, and the number of philosophers currently in their library. 

### As a user, I should be able to edit my profile
Given the user wants to edit their profile
When the user clicks on the “edit profile” button on the “my profile” page
Then the user will be directed to the “edit profile” page where they will be able to edit their name, username, and email. They will not be able to edit the number of philosophers currently in their library. 

### As a user, I should be able to save profile changes
Given the user wants to save their profile changes
When the user clicks on the “submit changes” button on the “edit profile” page
Then the changes will be updated in the database and the user will be redirected back to their profile.
### Tools
This project was built using React, JSX, and CSS

