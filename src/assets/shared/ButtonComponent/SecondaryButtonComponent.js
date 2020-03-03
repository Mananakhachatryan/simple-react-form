import React from 'react';
import {Button, Icon} from 'antd';

const SecondaryButtonComponent = ({onSubmit, className, icon, title, disabled}) => {
    return (
        <>
            <Button onClick={onSubmit} disabled={disabled}  className={`secondary-btn ${className}`}>{title}<Icon type={icon}/></Button>
        </>
    )
}
export default SecondaryButtonComponent;
