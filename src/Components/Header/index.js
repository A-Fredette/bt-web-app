import React from 'react';
import { HeaderNavigation } from '../Navigation/index'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// TODO: Get theme application to work
export default class Header extends React.Component {
    render() {
        return (
            <div className='root'>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className='menuButton' color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className='grow'>
                            News
                            {/*<HeaderNavigation />*/}
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )

    }
};

