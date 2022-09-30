import React, { useEffect, useMemo } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { SignInError } from "../models/SignInError";
import * as Yup from "yup";
import { getCollection, signIn } from "../services/firebase";
import { handleChangeAndResetPassword } from "../utils/function";
import { userState, gamesState } from "../atoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Line } from "../components/StyledComponents";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const setList = useSetRecoilState(gamesState);
  const navigate = useNavigate();

  useEffect(() => {
    getCollection(
      "games",
      "https://cdn-icons-png.flaticon.com/512/3430/3430778.png"
    ).then((data: any) => {
      setList(data.data);
    });
  }, [setList]);

  const isDevelopment = useMemo(() => {
    return process.env.NODE_ENV === "development";
  }, []);

  const setLoadingAndPassword = (typeAccount: string) => {
    switch (typeAccount) {
      case "admin":
        formik.setFieldValue("email", "bartlomiejzimny@outlook.com");
        formik.setFieldValue("password", "123456");
        break;
      default:
        formik.setFieldValue("email", "");
        formik.setFieldValue("password", "");
        formik.setFieldError("email", "nie zaimplenetowane");
        break;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Niepoprawny adres email")
        .required("Pole email nie może być puste"),
      password: Yup.string()
        .min(5, "Hasło musi mieć co najmniej 5 znaków")
        .required("Pole hasło nie może być puste"),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async ({ email, password }: any) => {
      const { data, error } = await signIn(email, password);
      if (!error) {
        setUser(JSON.parse(JSON.stringify(data)));
        formik.resetForm();
        navigate("/");
      } else {
        switch (error.code as string) {
          case SignInError.invalidEmail:
            formik.setFieldError("email", "Niepoprawny email lub hasło");
            formik.setFieldError("password", "Niepoprawny email lub hasło");
            break;
          case SignInError.wrongPassword:
            formik.setFieldError("email", "Niepoprawny email lub hasło");
            formik.setFieldError("password", "Niepoprawny email lub hasło");
            break;
          case SignInError.userNotFound:
            formik.setFieldError("email", "Niepoprawny email lub hasło");
            formik.setFieldError("password", "Niepoprawny email lub hasło");
            break;
          case SignInError.userDisabled:
            formik.setFieldError("email", "Dostęp zablokowany");
            break;
        }
      }
    },
  });

  return (
    <Box sx={{ display: "flex", margin: 10, flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          margin: 10,
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          GraTy
        </Typography>
        <Typography variant='h4'>
          Blogerzy, youtuberzy, streamerzy i organizatorzy eventów z grami
          planszowymi, miejskimi oraz terenowymi.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          margin: 10,
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        {!user && (
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant='h3'
              sx={{ alignSelf: "center", fontWeight: "bold" }}
            >
              Zaloguj się
            </Typography>
            <TextField
              label='Email'
              sx={{ marginTop: 2, marginBottom: 2 }}
              value={formik.values.email}
              onChange={(event) =>
                handleChangeAndResetPassword(event, "email", formik)
              }
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label='Password'
              type='password'
              sx={{ marginTop: 2, marginBottom: 2 }}
              value={formik.values.password}
              onChange={(event) =>
                handleChangeAndResetPassword(event, "password", formik)
              }
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              variant='contained'
              sx={{ marginTop: 2, marginBottom: 2 }}
              type='submit'
            >
              Zaloguj
            </Button>
            <Line />
            <Typography sx={{ alignSelf: "center" }}>
              Logując się na stronie akceptujesz regulamin.
            </Typography>
          </form>
        )}
        {isDevelopment && !user && (
          <Box
            sx={{
              display: "flex",
              flex: 1,
              margin: 10,
              flexDirection: "row",
            }}
          >
            <Button
              variant='contained'
              onClick={() => setLoadingAndPassword("admin")}
            >
              <Typography>Admin</Typography>
            </Button>
            <Button
              variant='contained'
              onClick={() => setLoadingAndPassword("loaner")}
            >
              <Typography>Loaner</Typography>
            </Button>
            <Button
              variant='contained'
              onClick={() => setLoadingAndPassword("guest")}
            >
              <Typography>Guest</Typography>
            </Button>
          </Box>
        )}
        {!!user && (
          <Typography
            variant='h4'
            sx={{
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >{`Witaj ${user.email.substring(
            0,
            user.email.indexOf("@")
          )}!`}</Typography>
        )}
      </Box>
    </Box>
  );
}
