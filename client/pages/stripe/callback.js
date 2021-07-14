import { useContext, useEffect } from "react";
import { Context } from "../../context";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const classes = useStyles();


  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        // console.log(res);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/user";
      });
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default StripeCallback;
