# LearnLingo

This site was created for a company that offers language teaching services, with
the possibility of authorization (registration, login, obtaining data about the
current user, logout) and adding teachers to a favorites list.

[Layout of the application](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0)
[Terms of reference](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit?tab=t.0)

## Features

- user authorization capability
- main page with a general description of the services provided by the company
- gallery with detailed information about teachers, including the option to book
  a trial lesson
- filtering options for teachers based on the language to learn, proficiency
  level, and price per hour
- a favorites page: available only to authorized users, showing teachers the
  user has added to their favorites
- a wide selection of application color themes

## Technologies

This project uses the following technologies and libraries: HTML, CSS, REACT,
react-dom, react-router-dom, tailwindcss, react-select, react-modal,
react-hook-form, yup, react-hot-toast.

## Backend

The project uses Firebase as the backend:

- Firebase Realtime Database for storing collections of teachers and user data.
- Firebase Authentication for user registration, login, retrieving user data,
  and logout.

[https://firebase.google.com/](https://firebase.google.com/)

## Preparation for work

1. Make sure the LTS version of Node.js is installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Set basic dependence on the project with the `npm install` command.
3. Start the authoring mode by executing the `npm start` command.
4. Go to the browser at [http ://localhost: 3000](http://localhost:3000). This
   page will automatically reload when you save your changes to the project
   files.

## Expand

The production version of the project will automatically be linted, assembled
and deployed on GitHub Pages, in the `gh-pages` branch, whenever the `main`
branch is updated. For example, after direct push or accepted pool-request. To
do this, in the `package.json` edit the `homepage` field, replacing
`your_username`and `your_repo_name` on your own, and send the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Next, you need to go to the GitHub repository settings (`Settings` > `Pages`)
and expose the distribution of the production version of files from the`/root`
folder of the `gh-pages` branch, if it was not done automatically.
