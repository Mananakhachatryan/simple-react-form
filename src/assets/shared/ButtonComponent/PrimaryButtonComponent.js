import React from 'react';
import {Button, Icon} from 'antd';

const ButtonComponent = ({onSubmit, className = '', icon, title, disabled}) => {
    return (
        <>
              <Button onClick={onSubmit} disabled={disabled}  className={className} type="primary"  >{title}<Icon type={icon} /></Button>
        </>
    )
}
export default ButtonComponent;
