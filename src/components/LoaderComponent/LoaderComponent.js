import React from "react";
import { Spin } from 'antd';
import "./loaderComponent.scss";

const LoaderComponent = ({ background }) => {
  return (
    <>
      <div className={`w-100 d-flex align-items-center justify-content-center loader-box ${ background ? 'loader-bg h-100 position-absolute' : 'mt-4'}`}>
        <Spin size="large" tip="Loading..."></Spin>
      </div>
    </>
  );
};

export default LoaderComponent;
