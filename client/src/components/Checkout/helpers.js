import CheckoutForm from "./CheckoutForm";
import BookingDetails from "./BookingDetails";
import Confirmation from "./Confirmation";
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
  handleSelectChange,
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
          handleSelectChange={handleSelectChange}
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
      return <Confirmation orderInfo={orderInfo} orderError={orderError} />;
    default:
      return null;
  }
};
