import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import UserRoute from "../../../components/routes/UserRoute";
import { SectionAlternate } from '../../../components/organisms';
import { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../../../components/Invoice';
import axios from 'axios';



const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const InvoiceView = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();





    const [orders, setOrders] = useState([]);
    const[user,setUser]=useState();
    let user2;


    useEffect(() => {
      user2=JSON.parse(window.localStorage.getItem('user'))
      loadUserOrders();

    }, []);

    const loadUserOrders = async () =>{
        const { data } = await axios.get(`/api/course/invoice/${user2._id}`);
        console.log(data)
        setOrders(data.purchases);
      };

    const showOrderInTable = order => (
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col"> Termék  Neve</th>
            <th scope="col">Ára</th>
            <th scope="col">Vásárlás dátuma</th>
          </tr>
        </thead>

        <tbody>
          {
            <tr key={order._id}>
              <td>
                {order.item.name}
              </td>
              <td>
                {order.item.price} Forint
              </td>
              <td>
                {order.time.substring(0,order.time.length-14)}
              </td>
            </tr>
          }
        </tbody>
      </table>
    );

    const showDownloadLink = order => (
      <PDFDownloadLink
        document={<Invoice order={order} />}
        fileName="Vásárlás.pdf"
        className="btn btn-sm btn-block btn-outline-primary"
      >
         Letöltés
      </PDFDownloadLink>
    );

    const showEachOrders = () =>
      orders.reverse().map((order, i) => (
        <div key={i} className="m-5 p-1 card">

          {showOrderInTable(order)}
          <div className="row">
            <div className="col">{showDownloadLink(order)}</div>
          </div>
        </div>
      ));

  return (
    <UserRoute>
  <SectionAlternate>
  <h4>
    {orders.length > 0 ? 'Eddigi vásárlásaim' : 'Még nincs itt semmi'}
  </h4>
  <div className={className} {...rest}>
    {showEachOrders()}
  </div>
  </SectionAlternate>
  </UserRoute>
  );
};


export default InvoiceView;
