import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const CheckoutForm = ({
  user = {},
  orderInfo,
  handleChange,
  handleSubmit,
  checkoutData,
}) => {
  if (
    !user.shippingSubdivisions.length ||
    !user.shippingCountries.length ||
    !user.shippingOptions.length
  ) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="first-name"
            name="firstName"
            label="First Name"
            value={user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="first-name"
            name="lastName"
            label="First Name"
            value={user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="address"
            name="address"
            label="Address line 1"
            value={user.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            name="city"
            label="City"
            value={user.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="post-code"
            name="postCode"
            label="Zip / Postal code"
            value={user.postCode}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-country-select-label">
              Shipping Country
            </InputLabel>
            <Select
              labelId="shipping-country-select-label"
              id="shipping-country-select"
              defaultValue={user.shippingCountry.code}
              onChange={handleChange}
              name="shippingCountry"
              required
            >
              {user.shippingCountries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-subdivision-select-label">
              Shipping Subdivision
            </InputLabel>
            <Select
              labelId="shipping-subdivision-select-label"
              id="shipping-subdivision-select"
              defaultValue={user.shippingSubdivision.code}
              onChange={handleChange}
              name="shippingSubdivision"
              required
            >
              {user.shippingSubdivisions.map((subdivision) => (
                <MenuItem key={subdivision.code} value={subdivision.code}>
                  {subdivision.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-options-select-label">
              Shipping Options
            </InputLabel>
            <Select
              labelId="shipping-options-select-label"
              id="shipping-options-select"
              defaultValue={user.shippingOption}
              onChange={handleChange}
              name="shippingOptions"
              required
            >
              {user.shippingOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <div className="actions">
        <Button size="medium" to="/basket" component={Link} variant="contained">
          Go Back
        </Button>
        <Button
          type="submit"
          size="medium"
          color="secondary"
          variant="contained"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
