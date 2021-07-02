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

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();





  const {
    state: { user },
    dispatch,
  } = useContext(Context);


  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
    <div className={classes.root}>
      <HeroShapedAuth
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Bejelentkezés"
              subtitle={
                <span>
                  Nincs még fiókod?{' '}
                  <Link href="/register">
                  <LearnMoreLink
                    title="Regisztrálj."
                    typographyProps={{ variant: 'h6' }}
                  />
                    </Link>
                </span>
              }
              titleProps={{
                variant: 'h3',
              }}
            />
            <div className={classes.formElement}>
              <form name="login-form" method="post" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="E-mail"
                      label="E-mail *"
                      variant="outlined"
                      size="medium"
                      name="email"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      value={email || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Password"
                      label="Jelszó *"
                      variant="outlined"
                      size="medium"
                      name="password"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      value={password || ''}
                    />
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

export default LoginView;




/*  <h1 className="jumbotron text-center bg-primary square">Login</h1>

  <div className="container col-md-4 offset-md-4 pb-5">
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control mb-4 p-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />

      <input
        type="password"
        className="form-control mb-4 p-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        required
      />

      <button
        type="submit"
        className="btn btn-block btn-primary"
        disabled={!email || !password || loading}
      >
        {loading ? <SyncOutlined spin /> : "Submit"}
      </button>
    </form>

    <p className="text-center pt-3">
      Not yet registered?{" "}
      <Link href="/register">
        <a>Register</a>
      </Link>
    </p>

    <p className="text-center">
      <Link href="/forgot-password">
        <a className="text-danger">Forgot password</a>
      </Link>
    </p>
  </div>*/
