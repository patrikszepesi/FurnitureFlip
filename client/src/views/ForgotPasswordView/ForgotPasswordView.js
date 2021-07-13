import { useState, useContext, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import { Image } from '../../../components/atoms';
import { LearnMoreLinkPlain } from '../../../components/atoms';
import { SectionHeader } from '../../../components/molecules';
import { HeroShapedAuth } from '../../../components/organisms';
import { Typography, Grid, Button, TextField } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formElement:{
    width:'100%',
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

const ForgotPasswordView = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();



  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Nézd meg a kódot amit az emailcímedre küldtünk", {
         duration: 4000,
    style: {
    border: '5px solid #E1C699',
    padding: '16px',
    color: '#713200',
    minWidth:'800px',
    marginTop:'70px',
    },
    iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
    },
    });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data, {
         duration: 4000,
    style: {
    border: '5px solid #E1C699',
    padding: '16px',
    color: '#713200',
    minWidth:'800px',
    marginTop:'70px',
    },
    iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
    },
    });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Siker, jelentkezz be az új jelszavaddal", {
         duration: 4000,
    style: {
    border: '5px solid #E1C699',
    padding: '16px',
    color: '#713200',
    minWidth:'800px',
    marginTop:'70px',
    },
    iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
    },
    });
    } catch (err) {
      setLoading(false);
      toast(err.response.data, {
         duration: 4000,
    style: {
    border: '5px solid #E1C699',
    padding: '16px',
    color: '#713200',
    minWidth:'800px',
    marginTop:'70px',
    },
    iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
    },
    });
    }
  };

  return (
    <>
    <Toaster />
    <div className={classes.root}>
      <HeroShapedAuth
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Elfelejtett jelszó"

              titleProps={{
                variant: 'h3',
              }}
            />
            <div className={classes.formElement}>
              <form onSubmit={success ? handleResetPassword : handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="E-mail"
                      label="E-mail"
                      variant="outlined"
                      size="medium"
                      name="email"
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                  {success && (
                    <>
                      <input
                        type="text"
                        className="form-control mb-4 p-4"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Emailben küldött kód"
                        required
                        label="Kód"
                      />

                      <input
                        type="password"
                        className="form-control mb-4 p-4"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Új jelszó"
                        required
                        label="Jelszó"
                      />
                    </>
                  )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      size="large"
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Új jelszó mentése
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align="center"
                    >

                      <LearnMoreLinkPlain
                        title="  Vissza a bejelentkezéshez"
                        onClick={() => router.push(`/login`)}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        }
        rightSide={
          <Image
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>

    </>
  );
};

export default ForgotPasswordView;
