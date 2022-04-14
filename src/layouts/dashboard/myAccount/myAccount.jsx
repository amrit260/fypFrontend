import { useState } from "react"
import { Avatar, Grid, Paper, Typography, Button, Dialog, DialogTitle, Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { serverURL } from "src/config"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UpdatePasswordForm from "src/sections/authentication/updatePassword/updatePassword";
import deleteItem from "src/utils/httpRequests/deleteItem";
import { toast } from "react-toastify"
import { setCurrentUser } from "src/redux/user/userActions"
import { logout } from "src/redux/auth/authAction"


export default function MyAccount() {
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const handleDelete = async () => {
        const res = await deleteItem('Account', `${serverURL}/api/v1/users/deleteMe`)
        if (res) {

            setOpen(false)
            dispatch(logout())
            navigate('/')
        }
    }

    return (
        <Paper sx={{ padding: '20px' }} elevation={3}>
            <Grid direction="column"
                justifyContent="center"
                container spacing={0}>
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
            <Grid item xs={8}>

                <UpdatePasswordForm />
                <Typography>Delete your account </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='outlined' onClick={() => setOpen(true)} color='error'>Delete account</Button>
                </Box></Grid>

            <Dialog maxWidth='md' fullWidth={true} onClose={() => setOpen(false)} open={open}>
                <DialogTitle >Do you really want to delete you account</DialogTitle>

                <Button color='error' onClick={handleDelete}>Yes, delete my account</Button>
                <Button color='success' onClick={() => setOpen(false)}>Cancel</Button>


            </Dialog>
        </Paper>
    )
}