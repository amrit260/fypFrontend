import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Box variant='h3' fontWeight="fontWeightMedium" color='secondary' >Welcome Nepal</Box>
      
    </RouterLink>
  );
}
