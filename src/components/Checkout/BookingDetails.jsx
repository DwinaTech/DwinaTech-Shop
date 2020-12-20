import React from "react";
import {
  List,
  ListItem,
  Button,
  Typography,
  ListItemText,
} from "@material-ui/core";

const BookingDetails = ({ checkoutData, handleBackStep, handleNextStep }) => (
  <>
    <Typography align="center" variant="h6" gutterBottom>
      Order Details
    </Typography>
    <List dense>
      {checkoutData.live.line_items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
          <Typography variant="body2">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText primary="Total price" />
        <Typography variant="body2">
          {checkoutData.live.subtotal.formatted_with_code}
        </Typography>
      </ListItem>
    </List>

    <div className="actions">
      <Button size="medium" onClick={handleBackStep} variant="contained">
        Go Back
      </Button>
      <Button
        onClick={handleNextStep}
        size="medium"
        color="secondary"
        variant="contained"
      >
        Next
      </Button>
    </div>
  </>
);

export default BookingDetails;
