import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon} from '@material-ui/core'; 
import addToCart from '../../../assets/cart-icon.svg'
import useStyles from './styles';

export default function Product( {product, onAddToCart }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography className={classes.price} variant="h6" gutterBottom>
                        {product.price.formatted_with_symbol}
        
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">Score:</Typography>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
        

                <CardActions className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id)}>
                        <img src={addToCart} width={40}/>
                    </IconButton>   
                </CardActions>    
            </CardContent>
        </Card>
    )
}
