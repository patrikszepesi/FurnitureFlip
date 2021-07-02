import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import { Image } from '../../../components/atoms';
import { LearnMoreLink } from '../../../components/atoms';
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
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
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
      toast("Great! Now you can login with your new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
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
                      label="E-mail *"
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
                        placeholder="Enter secret code"
                        required
                      />

                      <input
                        type="password"
                        className="form-control mb-4 p-4"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        required
                      />
                    </>
                  )}
                  </Grid>
                  <Grid item xs={12}>
                    <i>
                      <Typography variant="subtitle2">
                        *Kötelező mezők
                      </Typography>
                    </i>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      size="large"
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Bejelentkezés
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align="center"
                    >
                      Elfelejtetted a jelszavad?{' '}
                      <LearnMoreLink
                        title="Jelszó visszaállítása"
                        href="/forgot-password"
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
            src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG9wZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
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
