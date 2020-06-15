import React, {useState} from 'react';
import {Form, Input, Button, Upload, Row, Col} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";

import {getBase64, validateImage} from "../../../helpers";
import {setEducation, setImage, setName} from "../../../store/actions/profile/actions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SignUp = ({setImage, setName, setEducation}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [image, setImageUrl] = useState("");

  const onFinish = ({name, education}) => {
    setImage(image);
    setName(name);
    setEducation(education);
    history.push('/profile');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const dummyRequest = ({onSuccess}) => setTimeout(onSuccess, 500);

  const handleChange = (info) => {
    switch (info.file.status) {
      case "uploading":
        setLoading(true);
        setImageUrl("");
        break;
      case "done":
        getBase64(info.file.originFileObj, (image) => {
          setLoading(false);
          setImageUrl(image);
        });
        break;
      default:
        setLoading(false);
        setImageUrl("");
        break;
    }
  };

  return (
    <Row justify="center">
      <Col span={12} offset={6}>
        <Form
          {...layout}
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="upload"
            valuePropName="file"
            getValueFromEvent={normFile}
            rules={[{required: true, message: 'Please input your image!'}]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              progress={true}
              beforeUpload={validateImage}
              onChange={handleChange}
              customRequest={dummyRequest}
            >
              {image ? (
                <img src={image} alt="avatar" style={{width: '100%'}}/>
              ) : (
                <div>
                  {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                  <div className="ant-upload-text">Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{required: true, message: 'Please input your name!'}]}
          >
            <Input placeholder="Name"/>
          </Form.Item>

          <Form.Item
            label="Education"
            name="education"
            rules={[{required: true, message: 'Please input your education!'}]}
          >
            <Input placeholder="Education"/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setImage,
    setName,
    setEducation
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(SignUp);
