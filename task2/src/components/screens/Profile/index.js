import React, {useEffect} from 'react';
import {Row, Col, Avatar, Typography, Button} from 'antd';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {ArrowLeftOutlined} from '@ant-design/icons';

const {Title} = Typography;

const Profile = ({image, name, education}) => {
  const history = useHistory();

  useEffect(() => {
    if(!image || !name || !education) {
      history.push('/');
    }
  }, []);

  const back = () => history.push('/');

  return (
    <section>
      <Row gutter={[24, 24]}>
        <Col>
          <Button onClick={back}>
            <ArrowLeftOutlined />
            Back
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Avatar size={200} src={image}/>
        </Col>
        <Col span={8}>
          <Title>{name}</Title>
          <Title>{education}</Title>
        </Col>
      </Row>
    </section>
  )
}

const mapStateToProps = ({profile: {image, name, education}}) => {
  return ({
    image,
    name,
    education
  });
};

export default connect(mapStateToProps, null)(Profile);
