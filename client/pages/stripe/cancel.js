import { CloudSyncOutlined } from "@ant-design/icons";
import UserRoute from "../../components/routes/UserRoute";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const StripeCancel = () => {
  const classes = useStyles();

  return (
    <UserRoute showNav={false}>
      <div className="row text-center">
        <div className="col-md-9">
        <CircularProgress color="secondary" />
          <p className="lead">Hiba. Próbáld újra.</p>
        </div>
        <div className="col-md-3"></div>
      </div>
    </UserRoute>
  );
};

export default StripeCancel;
