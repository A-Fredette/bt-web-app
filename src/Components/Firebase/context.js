import React from 'react';

// Create a context in order to avoid having to pass an instance of the Firebase class
// from a parent to a series of children components
const FirebaseContext = React.createContext(null);

// Higher Order Component
export const withFirebase = Component => props => (
    // "firebase" indicates the value passed by the Provider
    // Consumers require functions as a child, the function receives the current context and returns a node
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;