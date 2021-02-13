import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon} from '@material-ui/core'; 
import { storeProducts } from '../../../Data';
import addToCart from '../../../assets/cart-icon.svg'
import useStyles from './styles';

export default function Product( {product }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        R${product.price}
        
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                        Score: {product.score}
                    </Typography>

                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <img src={addToCart} width={50}/>
                    </IconButton>   
                </CardActions>    
            </CardContent>
        </Card>
    )
}
