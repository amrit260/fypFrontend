import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './tourCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ tours, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {tours.map((tour) => (
        <Grid key={tour.id} item xs={12} sm={6} md={3}>
          <ShopProductCard tour={tour} />
        </Grid>
      ))}
    </Grid>
  );
}
