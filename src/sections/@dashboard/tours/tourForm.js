import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';



// material
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    TextareaAutosize,
    IconButton,
    InputAdornment,
    FormControlLabel,
    Grid,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormGroup,
    Select,
    MenuItem,
    Container,
    Paper,
    Switch


} from '@mui/material';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import updateItem from 'src/utils/tourRequests/updateTours';
import getItems from 'src/utils/httpRequests/getItems';
import AddItem from 'src/utils/tourRequests/addTours';
import { setTours } from 'src/redux/tours/tourActions';
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';
import { ImageListItem,ImageList } from '@mui/material';
import MapInput from 'src/components/Maps/mapInput';
// component


// import Paper from 'src/theme/overrides/Paper';

// ----------------------------------------------------------------------

const ImageListfxn = ({images}) => {
    console.log(images)
    const itemData = []
   

    for(let i=0;i<images.length;i++){
        itemData.push(URL.createObjectURL(images[i]))
    }

    return <ImageList sx={{marginTop:'10px' }} cols={3} rowHeight={164}>
    {itemData.map((item,index) => (
      <ImageListItem key={index}>
        <img
          src={`${item}`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
}

export default function TourForm({ actionType, tour, handleClose }) {

    const updateMode = actionType == 'update tour' ? true : false;
    const [showImages, setShowImages] = useState(false);

    const locationObj = {
        type: 'Point',
        coordinates: [85,27],
        address: '',
        description: '',
        day: 0,
    }

   
    const [isSubmitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();






    const TourSchema = Yup.object().shape({
        name: Yup.string().min(3).required('Name should be atleast 3 characters'),
        //   startLocation:{
        //       type:'Point',
        //       description:Yup.string().required('Start Location is required'),

        //   },
        //   startDates:[Yup.DateSchema.required('Start Date is required')],
        //   secretTour:Yup.boolean(),
        duration: Yup.number().required('Duration is required'),
        maxGroupSize: Yup.number().required('Max Group Size is required'),
        // difficulty: Yup.mixed().oneOf(['easy', 'medium', 'difficult']),
        price: Yup.number().required('Price is required'),
        summary: Yup.string().required('Summary is required'),
        description: Yup.string().required('Description is required'),
        // slug:Yup.string().required('Slug is required'),
        // durationWeeks:Yup.number().required('Duration Weeks is required'),

    });

    const formik = useFormik({
        initialValues: {
            name: updateMode ? tour.name : '',
            startLocation:updateMode?tour.startLocation : locationObj,

            // startDates: [],
            secretTour: updateMode ? tour.secretTour : false,
            duration: updateMode ? tour.duration : 0,
            maxGroupSize: updateMode ? tour.maxGroupSize : 0,
            difficulty: updateMode ? tour.difficulty : 'easy',
            price: updateMode ? tour.price : 0,
            summary: updateMode ? tour.summary : '',
            locations: updateMode ? tour.locations : [],


            description: updateMode ? tour.description : ''
        },
        validationSchema: TourSchema,

    });

    const { errors, touched, values, getFieldProps } = formik;

    const handleImageUpload = async (e) => {

      

        // if no images return
        setShowImages(true)
        await  formik.setFieldValue("images", e.currentTarget.files);


    }
    const handleSwitchChange = () => {

        formik.setFieldValue("secretTour", !values.secretTour);
    }
    
    const handleLocationUpdate =  (flag,data) => {
            // console.log(data)
        if(flag){
            formik.setFieldValue("startLocation", data);
          
        }
        else{
            // locations will only update in add mode
            // if(!updateMode){

                const arr = values.locations;
            arr.push(data)
            formik.setFieldValue("locations", arr);
            // }
            
             
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(values.locations.length<1){
            formik.setFieldValue("locations", arr);
        }

        //   dispatch(login(user));
        setSubmitting(true);
        if (actionType === 'add tour') {

            let tours;
            let isAdded = await AddItem('tour', `${serverURL}/api/v1/tours`, values);

            if (isAdded) {
                tours = await getItems('tours', `${serverURL}/api/v1/tours`);
                dispatch(setTours(tours));
                toast.success('Tour Added Successfully'), {
                    position: toast.POSITION.BOTTOM_RIGHT
                };

                handleClose();
            }



        }
        else if (actionType === 'update tour') {

            let tours;
            let isUpdated = await updateItem('tour', `${serverURL}/api/v1/tours/${tour._id}`, values);

            if (isUpdated) {
                tours = await getItems('tours', `${serverURL}/api/v1/tours`);
                dispatch(setTours(tours));
                toast.success('Tour Updated Successfully'), {
                    position: toast.POSITION.BOTTOM_RIGHT
                };

                handleClose();
            }



        }



        setSubmitting(false);



    }










    return (
        
            <Container maxWidth="xl" style={{ padding: '20px' }} >
                <FormikProvider value={formik}>
                    <Form autoComplete="off" onSubmit={submitForm}>



                        {/* <Paper style={{ padding: 16 }}> */}
                        {/* first row */}
                        <Grid container alignItems="flex-start" justify='center' spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    variant="standard"
                                    autoComplete="name"
                                    type="name"
                                    label="Name of a tour"
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Select

                                    type="difficulty"
                                    variant="standard"
                                    {...getFieldProps('difficulty')}
                                    label="Difficulty"


                                >
                                    <MenuItem value={'easy'}>Easy</MenuItem>
                                    <MenuItem value={'medium'}>Medium</MenuItem>
                                    <MenuItem value={'difficult'}>Difficult</MenuItem>
                                </Select>

                            </Grid>

                            <Grid item xs={4}>

                                <TextField
                                    type='number'
                                    variant="standard"
                                    label="Price"
                                    {...getFieldProps('price')}

                                    error={Boolean(touched.price && errors.price)}
                                    helperText={touched.price && errors.price}
                                />
                            </Grid>





                        </Grid>
                        {/* second row */}
                        <Grid style={{ marginTop: '10px' }} container alignItems="flex-end" justify='center' spacing={2}>
                            <Grid item xs={4}>


                                <TextField

                                    variant="standard"
                                    type='number'

                                    label="Maximum member in a group"
                                    {...getFieldProps('maxGroupSize')}

                                    error={Boolean(touched.maxGroupSize && errors.maxGroupSize)}
                                    helperText={touched.maxGroupSize && errors.maxGroupSize}
                                />
                            </Grid>
                            <Grid item xs={4}>

                                <TextField

                                    variant="standard"
                                    label="Duration of a tour"
                                    {...getFieldProps('duration')}

                                    error={Boolean(touched.duration && errors.duration)}
                                    helperText={touched.duration && errors.duration}
                                />
                            </Grid>
                            
                            <Grid item xs={4}>

                                <input
                                    name='images'
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    multiple
                                    type="file"

                                />
                            </Grid>

                        </Grid>
                        {showImages?<ImageListfxn images={values.images} />:null}

                        {/* third row */}
                        <Grid style={{ marginTop: '10px' }} container alignItems="flex-end" justify='center' spacing={2}>
                            <Grid item xs={4} >
                                <FormControlLabel control={<Switch onClick={handleSwitchChange} checked={values.secretTour}  color='success' />} label="Active Status" />

                            </Grid>

                        </Grid>
                        <Grid style={{ marginTop: '10px' }} container alignItems="flex-end" justify='center' spacing={2}>
                            <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={12} >


                                <label>Summary</label>
                                <TextareaAutosize

                                    // variant='outlined'

                                    placeholder="Quick Summary of a tour"
                                    minRows={4}
                                    label="Quick Summary of a tour"
                                    {...getFieldProps('summary')}


                                ></TextareaAutosize>
                            </Grid>
                            {/* <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={12} >


                                <label>Summary</label>
                                <TextareaAutosize

                                    // variant='outlined'

                                    placeholder="Quick Summary of a tour"
                                    minRows={4}
                                    label="Quick Summary of a tour"
                                    {...getFieldProps('description')}


                                ></TextareaAutosize>
                            </Grid> */}

                        </Grid>


                        <Grid style={{ marginTop: '10px' }} container alignItems="flex-end" justify='center' spacing={2}>
                            <Grid item xs={12}>
                                <MapInput handleLocationUpdate={handleLocationUpdate} />
                            </Grid>
                        </Grid>
                        <Grid style={{ marginTop: '10px' }} container alignItems="flex-end" justify='center' spacing={2}>
                            <Grid item xs={12}>
                                <LoadingButton
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"

                                    loading={isSubmitting}
                                >
                                    {actionType}
                                </LoadingButton>
                            </Grid>
                        </Grid>


                    </Form>
                </FormikProvider>
            </Container>
      
    );
}





