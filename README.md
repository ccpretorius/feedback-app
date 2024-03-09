# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# feedback-app

## vid 16: Conditional Styling

You can set your styling for your Card component with
a ternary operator like this:

function Card({ children, reverse }) {

  <!-- return <div className={`card ${reverse && "reverse"}`}>{children}</div>; -->

return (

<div className="card" style={{ backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff", color: reverse ? "#fff" : "#000" }}>
{children}
</div>
);
}
- Your FeebackItem would have a prop on it for reverse={true} to show the dark reversed theme:
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>

- To toggle between the two themes you would need to set a button somewhere for setting the reverse prop to either true or false
- You can delete the class reverse in your css file because you are now using a prop to set the styling conditionally
- One can also delete the reverse prop in your FeedbackItem component and set it to your chosen theme in a default setting in your Card component
- You can also set your PropTypes to check that your variable types continues being set correctly
  Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  };
- Remember to import:
  import PropTypes from "prop-types";
- In FeedbackItem:
  FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  };
- In FeedbackList:
  FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  })
  ),
  };

* Note: Could also just have done :
  feedback: PropTypes.array

## vid 17:

DELETING A FEEDBACK POST:

- To use a specific font you can include the cdn in your public/html file or you can use the react-icon package:
  npm i react-icons
  includes material and bootstrap as well
  we are looking for font-awesome

import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
return (
<Card>

<div className="num-display">{item.rating}</div>
<button className="close">
<FaTimes color="purple" />
</button>
<div className="text-display">{item.text}</div>
</Card>
);
}

FeedbackItem.propTypes = {
item: PropTypes.object.isRequired,
};

export default FeedbackItem;

- Setting a delete event:

1. You can set it to a named function or do it straight inline with your event
   <button onClick={() => console.log(item.id)}
2. Or you ccould pass a property with an arrow function to a named function:
   <button onClick={() => handleClick(item.id)} ...
   </button>
   with a separate named function:
   const handleClick = (id) => {
   console.log(item.id);
   };
   This will display the item.id whenever the button is clicked

## vid 23: Adding an id with UUID

npm i uuid
import { v4 as uuidv4 } from "uuid";
Inside your add item function: newFeedback.id = uuidv4();
