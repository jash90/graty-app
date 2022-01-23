import React from 'react';
import { Typography, Box, Button, TextField, styled } from '@mui/material';
import { useFormik } from 'formik';
import { SignInError } from '../models/SignInError';
import * as Yup from 'yup'
import { signIn } from '../services/firebase';
import { handleChangeAndResetPassword } from '../utils/function';

const Line = styled('div')({
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'grey'
})

export default function Home() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema:
            Yup.object({
                email: Yup.string()
                    .email("Niepoprawny adres email")
                    .required("Pole email nie może być puste"),
                password: Yup.string()
                    .min(5, 'Hasło musi mieć co najmniej 5 znaków')
                    .required("Pole hasło nie może być puste"),
            })
        ,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async ({ email, password }) => {
            const { data, error } = await signIn(email, password);
            if (!error) {
                console.log({ data })
            } else {
                console.log(error.code);
                switch (error.code as string) {
                    case SignInError.invalidEmail:
                        formik.setFieldError('email', 'Niepoprawny email lub hasło');
                        formik.setFieldError('password', 'Niepoprawny email lub hasło');
                        break;
                    case SignInError.wrongPassword:
                        formik.setFieldError('email', 'Niepoprawny email lub hasło');
                        formik.setFieldError('password', 'Niepoprawny email lub hasło');
                        break;
                    case SignInError.userNotFound:
                        formik.setFieldError('email', 'Niepoprawny email lub hasło');
                        formik.setFieldError('password', 'Niepoprawny email lub hasło');
                        break;
                    case SignInError.userDisabled: formik.setFieldError('email', 'Dostęp zablokowany'); break;
                }
            }
        }
    })

    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'row' }} >
            <Box sx={{ display: 'flex', flex: 1, margin: 10, flexDirection: 'column', alignSelf: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>GraTy</Typography>
                <Typography variant="h4" >Blogerzy, youtuberzy, streamerzy i organizatorzy eventów z grami planszowymi, miejskimi oraz terenowymi.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flex: 1, margin: 10, flexDirection: 'column', alignSelf: 'center' }}>
                <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h3" sx={{ alignSelf: 'center', fontWeight: 'bold' }}>Zaloguj się</Typography>
                    <TextField
                        label="Email"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        value={formik.values.email}
                        onChange={event => handleChangeAndResetPassword(event, 'email', formik)}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField

                        label="Password"
                        type="password"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        value={formik.values.password}
                        onChange={event => handleChangeAndResetPassword(event, 'password', formik)}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} type="submit">
                        Zaloguj
                    </Button>
                    <Line />
                    <Typography sx={{ alignSelf: 'center', }}>Logując się na stronie akceptujesz regulamin.</Typography>
                </form>
            </Box>
        </Box>
    );
}
