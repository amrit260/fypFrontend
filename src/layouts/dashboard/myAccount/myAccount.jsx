import { Avatar, Grid, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import Iconify from "src/components/Iconify"
import { serverURL } from "src/config"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UpdatePasswordForm from "src/sections/authentication/updatePassword/updatePassword";



export default function MyAccount() {
    const user = useSelector(state => state.auth.user)

    return (
        <Paper elevation={3}>
            <Grid direction="column"
                justifyContent="center"
                sx={{ padding: '20px' }} container spacing={0}>
                <Grid item xs={4} md={12}>
                    <Typography color="primary" variant="h5">
                        Welcome Back,   {user.name}!
                    </Typography>
                    <Typography color="success" variant="subtitle1">
                        You can manage your profile here.
                    </Typography>
                </Grid>

                <Grid item xs={6} md={12}>
                    <Paper sx={{ width: '100%' }} sx={{ padding: '20px' }} variant='outlined'>
                        <Grid container container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ paddingLeft: '30px' }}
                            spacing={3}>

                            <Grid item xs={12}>

                                <Avatar sx={{ height: '100px', width: '100px' }} src={`${serverURL}/img/users/${user.photo}`} alt="photoURL" />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2"> <MailOutlineIcon /> {user.email} </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">  {user.name} </Typography>

                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            <UpdatePasswordForm />
        </Paper>
    )
}