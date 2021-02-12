import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const CheckoutForm = ({
  user = {},
  orderInfo,
  handleChange,
  handleSubmit,
  checkoutData,
  handleSelectChange,
}) => (
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
          value={user.address}
          label="Address line 1"
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
          value={user.postCode}
          onChange={handleChange}
          label="Zip / Postal code"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-country-select-label">
            Shipping Country
          </InputLabel>
          <Select
            required
            name="shippingCountry"
            id="shipping-country-select"
            value={user.shippingCountry.code || ""}
            labelId="shipping-country-select-label"
            onChange={(e) => handleSelectChange(e, "shippingCountries")}
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
            required
            name="shippingSubdivision"
            id="shipping-subdivision-select"
            labelId="shipping-subdivision-select-label"
            value={user.shippingSubdivision.code || ""}
            onChange={(e) => handleSelectChange(e, "shippingSubdivisions")}
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
            required
            name="shippingOptions"
            value={user.shippingOption.id}
            id="shipping-options-select"
            labelId="shipping-options-select-label"
            onChange={(e) => handleSelectChange(e, "shippingOptions")}
          >
            {user.shippingOptions.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {`Per product - (${option.price.formatted_with_symbol})`}
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
      <Button type="submit" size="medium" color="secondary" variant="contained">
        Next
      </Button>
    </div>
  </form>
);

export default CheckoutForm;
