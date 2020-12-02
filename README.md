# User Grouper

A [React](https://reactjs.org/) based application to sort and make user groups based on user data provided on this [link](https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json).


#### Application hosted on [https://vedant1202.github.io/usergrouper/](https://vedant1202.github.io/usergrouper/).

#### Github hosted repository at [https://github.com/Vedant1202/usergrouper](https://github.com/Vedant1202/usergrouper).


## Features

- **ES9** based latest ECMAScript features
- Frontend based on the [React](https://reactjs.org/) framework.
- [Node Sass](https://www.npmjs.com/package/node-sass) compiler for [Sass](https://sass-lang.com/) files. 
- Commit hooks by [Husky](https://www.npmjs.com/package/husky).
- Code styling by [Prettier](https://prettier.io/).
- Application hosted on Github by [Github Pages](https://pages.github.com/).


## Installation

This project would require [Node.js](https://nodejs.org/en/) already installed.

It is recommended to use [Yarn](https://yarnpkg.com/) as a package manager. Otherwise even [NPM](https://www.npmjs.com/) would do.


1. Clone the repository and enter into the directory 

```bash
git clone https://github.com/Vedant1202/usergrouper.git
cd usergrouper
## Make sure to be on master branch
``` 

2. Install packages
```bash
yarn
```

Or if you have npm then

```bash
npm install
```

3. Start the server

```bash
yarn start
```

Or 

if you have npm
```bash
npm start
```

4. The application can be visited on `http://localhost:3000/` on your preferred browser.


## Code formatting:

```bash
# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

Or if you have NPM

```bash
# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix
```


## Project Structure

```
public\             # Public static files   
screenshots\        # Screenshots of application      
src\
 |--components\     # Individual components files 
 |--fonts\          # Fonts from google fonts
 |--pages\          # Individual pages files
 |--App.js\         # Main App component
 |--index.js        # App entry point
```



## Screenshots

1. Homepage 

![homepage](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/homepage-default.png)


2. Selecting users

![members selection](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-selection.png)


3. Adding name, description and an icon to a group

![add name, description, icon](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-inputs.png)


4. Sorting users by name in ascending order

![members sort ascending](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-sort-ascending.png)


5. Sorting users by name in descending order

![members sort descending](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-sort-descending.png)


6. Update/Submit the user group

![submit user group](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-submit.png)


7. Remove the user group

![remove user group](https://raw.githubusercontent.com/Vedant1202/usergrouper/master/screenshots/home-remove.png)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
