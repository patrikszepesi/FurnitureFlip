import { useState, useEffect } from 'react';
//import UserNav from '../../components/nav/UserNav';
//import { getUserOrders } from '../../services/user'
//import { useSelector, useDispatch } from 'react-redux';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
//import ShowPaymentInfo from '../../components/cards/ShowPaymentInfo';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../components/Invoice';
import axios from 'axios';
import Link from "next/link";

const History = () => {
  const [orders, setOrders] = useState([]);
  const[user,setUser]=useState();
  let user2;



  useEffect(() => {
    user2=JSON.parse(window.localStorage.getItem('user'))
    loadUserOrders();

  }, []);
//
  const loadUserOrders = async () =>{
      const { data } = await axios.get(`/api/course/invoice/${user2._id}`);
      console.log(data)
      setOrders(data.purchases);






      // for(let i=0;i<data[0].puchases;i++){
      //   console.log(data[0])
      // }

    };
console.log(orders)

//orders[0].map(x=>console.log(x.time))

  //   const loadUserOrders = () =>
  // getUserOrders(user.token).then(res => {
  //   console.log(JSON.stringify(res.data, null, 4));
  //   setOrders(res.data);
  // });
  //
  // const sendRatingToBackend = async() => {
  //   setTimeout(backendCallFalse,0);
  //
  // const { data } = await axios.post(`/api/ratings/${course._id}`,{
  //   toSend:{...ratingObj}
  // });
  //
  //
  // };



  const showOrderInTable = order => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col"> Ajánlat Neve</th>
          <th scope="col">Ára</th>
          <th scope="col">Dátum</th>
            <th scope="col">Értékeld az órát itt</th>


        </tr>
      </thead>

      <tbody>
        {
          <tr key={order._id}>
            <td>
              {order.course.name}
            </td>
            <td>
              {order.course.price}
            </td>
            <td>
              {order.time}
            </td>

            <td>
            <Link href={`/course/${order.course.slug}`}>
              <a>Értékelem</a>
            </Link>
            </td>



          </tr>
        }
      </tbody>
    </table>
  );

  const showDownloadLink = order => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
      className="btn btn-sm btn-block btn-outline-primary"
    >
      Számla letöltése
    </PDFDownloadLink>
  );

  const showEachOrders = () =>
    orders.reverse().map((order, i) => (
      <div key={i} className="m-5 p-3 card">

        {showOrderInTable(order)}
        <div className="row">
          <div className="col">{showDownloadLink(order)}</div>
        </div>
      </div>
    ));


  //
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col text-center">
          <h4>
            {orders.length > 0 ? 'Eddig vásárolt' : 'Még nem vásároltál semmit'}
          </h4>
          {showEachOrders()}
        </div>
      </div>
    </div>
  );
};

export default History;
