import {
  Button,
  Divider,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import BookingDetails from "./BookingDetails";
import Payment from "./Payment";

export const renderRelatedComponent = ({
  user,
  orderInfo,
  orderError,
  bookingStep,
  handleChange,
  handleSubmit,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCheckout,
}) => {
  switch (bookingStep) {
    case "order-address":
      return (
        <CheckoutForm
          user={user}
          orderInfo={orderInfo}
          checkoutData={checkoutData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      );
    case "order-details":
      return (
        <BookingDetails
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case "order-payment":
      return (
        <Payment
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case "confirmation":
      return () => {
        if (orderError) {
          return (
            <>
              <Typography variant="h5">Error: {orderError}</Typography>
              <br />
              <Button component={Link} variant="outlined" type="button" to="/">
                Back to home
              </Button>
            </>
          );
        }
        return orderInfo.customer ? (
          <>
            <div>
              <Typography variant="h5">
                Thank you {orderInfo.customer.firstname}{" "}
                {orderInfo.customer.lastname} for your purchase!
              </Typography>
              <Divider className="divider" />
              <Typography variant="subtitle2">
                Order ref: {orderInfo.customer_reference}
              </Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">
              Continue shopping
            </Button>
          </>
        ) : (
          <div className="spinner">
            <CircularProgress />
          </div>
        );
      };

    default:
      return null;
  }
};
