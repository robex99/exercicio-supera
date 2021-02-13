import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

export default function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardContent}>
        <Typography variant="body3">{item.name}</Typography>
        <Typography className={classes.styledTypo} variant="body3">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.button}>
          <Button
            type="button"
            variant="contained"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography className={classes.styledTypo}>
            {item.quantity}{" "}
          </Typography>
          <Button
            type="button"
            variant="contained"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remover
        </Button>
      </CardActions>
    </Card>
  );
}
