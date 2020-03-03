import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import RegistrationComponent from "../../components/RegistrationComponent/RegistrationComponent";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import { Modal } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationContainer = ({
  registrationResponse,
  checkEmailData,
  checkEmail,
  errorReg,
}) => {

  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);

  const registration = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false);
      setModal(true);
    }, 3000);

  }

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      {loader &&
        <LoaderComponent  background />
      }

      <RegistrationComponent
        registration={registration}
      />

      <Modal
        title="Success"
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Your course has been successfully registered</p>
      </Modal>


    </>
  );
};


export default(RegistrationContainer);
