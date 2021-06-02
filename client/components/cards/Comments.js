import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { commentMapper,objMapper,starMapper,nameMapper } from "../../utils/helpers";
import Rating from '@material-ui/lab/Rating';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
root: {
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
  },
},
orange: {
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
},
purple: {
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
},
}));


const Comments=({course})=> {


const classes = useStyles();

  let comments = commentMapper(course.ratings)
  let ratings = starMapper(course.ratings)
  let name = nameMapper(course.ratings)


  return (
    <div style={{ padding: 14 }} className="App">
      <h3>Értékelések</h3>
        {comments.map((comment,i)=>
          <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.orange}>{name[i][0].toUpperCase()}</Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{name[i]}</h4>
            <p>
            <Rating
            size="medium"
            style={{ marginTop:'5px' }}
            name="simple-controlled"
            value={ratings[i]}
            precision={0.5}
            readOnly
          /></p>
            <p style={{ textAlign: "left" }}>
              {comment}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
        )}
    </div>
  );
};

export default Comments;
