import  { useState,useContext } from "react";
import { Modal, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router'
import { Context } from "../../context";




const AnswerModal = ({ children,course,text }) => {
const [modalVisible, setModalVisible] = useState(false);
const { state, dispatch } = useContext(Context);

const { user,backendCall } = state;




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

  const backendCallAnswerTrue = () => {
    dispatch({
      type: "SET_BACKEND_CALL_ANSWER_TRUE",
    });
  };

  return (
    <>
      <Button className="mb-3 mt-3"
      type="danger"
      block
      shape="round"
      onClick={handleModal}>

      {user && text==='válaszolj'
          ? 'válaszolj'
        : "Kérdezz"}
      </Button>
      <Modal
        title={text}
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          backendCallAnswerTrue();
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default AnswerModal;
