import { useState, useEffect, useContext } from "react";
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
import registerImage from '../../../public/assets/3.png'




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


const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
    <div className={classes.root}>
      <HeroShapedAuth
      item={'hello'}
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Regisztráció"
              subtitle={
                <span>
                  Van már fiókod?{' '}
                  <Link href="/login">
                  <LearnMoreLink
                    title="Jelentkezz be."
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
              <form name="register-form" method="post" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Neved"
                      label="Teljes Neved *"
                      variant="outlined"
                      size="medium"
                      name="name"
                      fullWidth
                      onChange={(e) => setName(e.target.value)}
                      value={name || ''}
                    />
                  </Grid>
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
                      Regisztráció
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
            src={registerImage}
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
    </>
  );
};

export default RegisterView;

/*  <h1 className="jumbotron text-center bg-primary square">Register</h1>

  <div className="container col-md-4 offset-md-4 pb-5">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-4 p-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
      />

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
        disabled={!name || !email || !password || loading}
      >
        {loading ? <SyncOutlined spin /> : "Submit"}
      </button>
    </form>

    <p className="text-center p-3">
      Already registered?{" "}
      <Link href="/login">
        <a>Login</a>
      </Link>
    </p>
  </div>*/
