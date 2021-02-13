import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import {storeProducts} from '../../Data'


export default function Products() {
    return (
        <Container>
        <Grid container justify="start" spacing={4}>
            {storeProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}

        </Grid>
       
        </Container>
    )
}

const Container = styled.div `
    background-color: grey;

`
