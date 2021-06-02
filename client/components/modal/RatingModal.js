import  { useState,useContext } from "react";
import { Modal, Button } from "antd";
import { toast } from "react-toastify";
import { StarOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router'
import { Context } from "../../context";



const RatingModal = ({ children,enrolled,course }) => {
const [modalVisible, setModalVisible] = useState(false);
const { state, dispatch } = useContext(Context);

const { user,backendCall } = state;




let alreadyRated=true
let arr=[];
course.disable.forEach(x=>arr.push(x))

if(user!=null && user._id !=null){
  if(arr.includes(user._id)){
    alreadyRated=true;
  }else{
    alreadyRated=false;
  }
}


  //let history = useHistory();
  //let { slug } = useParams();

  const handleModal = () => {
    // if (user && user.token) {
      setModalVisible(true);
    // } else {
    //   history.push({
    //     pathname: "/login",
    //     state: { from: `/product/${slug}` },
    //   });
    // }
  };//

  const backendCallTrue = () => {
    dispatch({
      type: "SET_BACKEND_CALL_TRUE",
    });
  };

  return (
    <>
      <Button className="mb-3 mt-3"
      type="danger"
      block
      shape="round"
      onClick={handleModal}>

      {user
        ? enrolled.status && !alreadyRated
          ? "Hagyj értékelést"
          : ""
        : ""}
      </Button>
      <Modal
        title="Hagyj értékelést(az összes mező kötelező)"
        centered
        visible={modalVisible}



        onOk={() => {
          setModalVisible(false);

          //setBackendCall(true);
          backendCallTrue();

        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
