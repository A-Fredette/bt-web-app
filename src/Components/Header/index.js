import React from 'react';
import { HeaderNavigation } from '../Navigation/index'

export default class Header extends React.Component {

    render() {
        return (
            <div className='header-container'>
                <div className='logo' />
                <HeaderNavigation />
            </div>
        )

    }
};
