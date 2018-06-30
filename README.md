# Gists API

This application is designed to demonstrate the ability to use React to interact with APIs. As well as aptitude with HTML and CSS to create clean, readable and performant code.

## Design Aspects

Aspects taken into consideration while building this application.

### Code Design

1- The application is designed with high code reusability factors in mind.

2- Higher order components are implemented to extend the functionality of the app components.

3- The application is bootstrapped using create-react-app and the configurations were ejected so that CSS modules could be leveraged. Enhancement for larger environments would be to [publish a custom create-react-app template](https://auth0.com/blog/how-to-configure-create-react-app/) which can be used to create more projects with the same configuration.

### UI/UX

1- The layout is implemented using CSS flexbox hence is responsive to smaller screens.

2- The data are loaded on form submit.

3- The data are paginated 10 items per page.

4- Navigation components are included to paginate the data with ease.

5- Stateful components have a loading element included for when the state is being loaded from the API.

6- Components that communicate with the API has an error handling functionality injected to it to show an error message modal.

## Tech Stack

1- React.

2- Webpack.

3- CSS Flexbox.

4- Bootstrap.

5- Node/NPM.

6- Firebase.
