import React from 'react';
import Button from 'react-bootstrap/Button';

import { withFirebase } from '../Firebase/firebase';

const SignOutButton = ({ firebase }) => (
    <Button type="button" onChange={firebase.doSignOut}>
        Sign Out
    </Button>
);

export default withFirebase(SignOutButton);