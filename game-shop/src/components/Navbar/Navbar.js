import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {shoppingCart} from '@material-ui/icons'
import logo from './assets/logo.png';
import classes from '*.module.css'

export default function Navbar() {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="logo" height="25px" className={classes.image}/>
                        GameShop
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
