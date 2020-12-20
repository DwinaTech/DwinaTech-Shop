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
  bookingSteps,
  handleChange,
  handleSubmit,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCheckout,
}) => {
  switch (bookingSteps) {
    case 0:
      return (
        <CheckoutForm
          user={user}
          orderInfo={orderInfo}
          checkoutData={checkoutData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <BookingDetails
          user={user}
          checkoutData={checkoutData}
          bookingSteps={bookingSteps}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case 2:
      return (
        <Payment
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case 3:
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
                Thank you for your purchase, {orderInfo.customer.firstname}{" "}
                {orderInfo.customer.lastname}!
              </Typography>
              <Divider className="divider" />
              <Typography variant="subtitle2">
                Order ref: {orderInfo.customer_reference}
              </Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">
              Back to home
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
