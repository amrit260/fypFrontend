import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
// components
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../sections/@dashboard/products';
//


// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  // console.log(useSelector(state=>state))
  // const tours = useSelector(state => state.tours.data);
  
  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Dashboard: Tours | Explore Nepal">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
         Tours and Destinations
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            <ProductSort />
          </Stack>
        </Stack>

        {/* <ProductList products={tours} /> */}
        <h1>coming soon</h1>
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
