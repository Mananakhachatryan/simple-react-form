import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Radio,
} from 'antd';
import './RegistrationComponent.scss';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => (val == 'error' || val == null || val == false) && (valid = false)
  );
  return valid;
};

const RegistrationComponent = ({
  registration
}) => {


  const [subjectList, setSubjectList] = useState(['Short Reports', 'Annual Reports', 'Presentations'])

  console.log(subjectList);

  const [data, setData] = useState({
    course: 1,
    subject: subjectList[0],
    startDate: '',
    additionalNotes: '',
  });

  useEffect(() => {
    setData(
      {
        ...data,
        subject : subjectList[0]
      }
    );
  }, [subjectList])

  const [error, setError] = useState({
    course: 'success',
    subject: 'success',
    startDate: null,
    additionalNotes: 'success',
  });

  const onChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    const errors = error;
    let subjectListClone = Object.assign([], subjectList);
    if (name === 'course'){
      if(value === 1){
        subjectListClone = ['Short Reports', 'Annual Reports', 'Presentations']
      }else if ( value === 2 ){
        subjectListClone = ['Poetry', 'Short Stories', 'Drama']
      }else if ( value === 3 ){
        subjectListClone = ['Web Development', 'Desktop Software Development', 'Research and Analysis']
      };
      setSubjectList(subjectListClone);
    }


    if(name === 'additionalNotes' && value.length !== 0){
        errors.additionalNotes = ((value.length < 20 ) || (value.length > 500)) ? 'error' : 'success';
    }else {
      errors.additionalNotes = 'success'
    }
    setError(errors)

    setData(
      {
        ...data,
        [name]: value
      }
    )
  };

  const onChangeDate = (date, dateString) => {
    const errors = error;

    console.log(dateString);

    if( dateString === '2019-12-20' || dateString === '2020-01-15' || dateString === '2020-02-01'){
      errors.startDate = 'success'
    } else{
      errors.startDate = 'error'
    }
    setError(errors)
    setData(
      {
        ...data,
        startDate: dateString
      }
    )
  }

  const onFinish = values => {
    console.log('Success:', data, values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='registration-component'>
      <div className="row">
        <div className="col-sm-12">
          <Form>
            <Form.Item hasFeedback validateStatus={error.course}>
              <label>Course</label>
              <Radio.Group onChange={ (e) => onChange(e, 'course')}  value={data.course} >
                <Radio value={1}>Technical Report Writing</Radio>
                <Radio value={2}>English Literature</Radio>
                <Radio value={3}>Computer Sciences</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item hasFeedback validateStatus={error.subject}>
              <label>Subject</label>
              <Select onChange={ (e) => onChange(e, 'subject')} value={data.subject}>
              {subjectList.map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            </Form.Item>
            <Form.Item hasFeedback validateStatus={error.startDate}>
              <label>Start Date</label>
              <DatePicker
                onChange={onChangeDate}
              />
              {error.startDate === 'error' &&
                <p className="error">Your selected course and subject is not offered beginning from your selected date</p>
              }
            </Form.Item>
            <Form.Item hasFeedback validateStatus={error.additionalNotes}>
              <label>Additional Notes</label>
              <TextArea rows={4} onChange={ (e) => onChange(e, 'additionalNotes')}/>
            </Form.Item>

            <Button className={`auth ${!validateForm(error) ? 'disabled' : ''}`} htmlType="submit" onClick={registration}>
              Submit
            </Button>

          </Form>
        </div>
      </div>
    </div>

  )
}

export default RegistrationComponent;
