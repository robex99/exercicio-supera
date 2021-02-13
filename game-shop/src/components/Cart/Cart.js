import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

export default function Cart({ cart, handleUpdateCartQty, handleEmptyCart, handleRemoveFromCart }) {
    const classes = useStyles();
    const [frete, setFrete] = useState(0)

    const EmptyCart = () => {
        return (
            <div className={classes.mainEmpty}>
            <Typography variant="h4">O carrinho está vázio!</Typography>
            <Link className={classes.link} to='/'>
            <Typography color='primary' variant="h5">Ver produtos</Typography>
            </Link>
            
            </div>
        )
       
    }


    const FilledCart = () => {
        return (
<div>
<Typography className={classes.title} variant="h5">Carrinho:</Typography>
            <main className={classes.container} container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </main>
            <div className={classes.cardDetails}>
                <Typography variant="h5">
                    Produtos: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <Typography variant="h5">
                    Frete: R${frete}{  cart.subtotal.raw < 249 ? setFrete(cart.total_items * 10) : setFrete(0)}   
                </Typography>
                <Typography variant="h5">
                    Total: R${frete + cart.subtotal.raw}   
                </Typography>
                
                
                <div>
                    <Button className={classes.emptyButton} onClick={handleEmptyCart} size='large' type="button" variant="contained" color="secondary">
                        Limpar carrinho
                    </Button>
                    <Button className={classes.checkoutButton} size='large' type="button" variant="contained" color="primary">
                        Finalizar compra
                    </Button>
                </div>
            </div>
        </div>
        )
        
    }

    if(!cart.line_items) return 'Carregando carrinho...';



    return (
        <Container>
            <div className={classes.toolbar}/>
           
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart />}
        </Container>
    )
}
