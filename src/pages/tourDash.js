import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
// components
import Page from '../components/Page';
import { Alert,AlertTitle } from '@mui/material';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../sections/@dashboard/tours';
import AddTourBtn from 'src/components/action-buttons/AddTourBtn';
//


// ----------------------------------------------------------------------

export default function Tours() {
  const [openFilter, setOpenFilter] = useState(false);
  
  

  const tours = useSelector(state => state.tours);
  
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
        <AddTourBtn ></AddTourBtn>
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

       {tours.length !=0?<ProductList tours={tours} />:<Alert severity="info">

  <AlertTitle>Tours Not found</AlertTitle>
  Tours are not added yet  — <strong>add tours now!</strong>
</Alert>} 
       
        <ProductCartWidget />
        
      </Container>
    </Page>
  );
}
