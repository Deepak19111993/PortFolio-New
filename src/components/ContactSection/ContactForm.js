import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Peragraph, Title } from "../../assets/styles/Global.styles";
import {
  ConatctFormLeft,
  ConatctFormRight,
  ConatctFormWrapper,
} from "./ConatctSection.styles";
import { Form, Input, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const ContactForm = () => {
  const [userForm] = Form.useForm();
  const formUser = useRef();
  const [data, setData] = useState({});
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   setData({
  //     Name: values.Name,
  //     Email: values.email,
  //     Message: values.message,
  //   });
  // };

  useEffect(() => {
    userForm.resetFields();
  });

  const sendEmail = (e) => {
    // debugger;
    // console.log(formUser.current.getFieldsValue);
    // e.preventDefault();

    setData({
      Name: e.Name,
      Email: e.email,
      Message: e.message,
    });
    emailjs
      .send(
        "service_2o5zyp9",
        "template_ydkrj3p",
        userForm.getFieldsValue(),
        "user_wFIY3zYcNta045kgizAij"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log();

  return (
    <ConatctFormWrapper
      data-aos="fade-down"
      data-aos-mirror="true"
      data-aos-duration="2000"
      data-aos-delay="500"
      data-aos-once="true"
    >
      <ConatctFormLeft>
        <Title className="contact-title">Contact Information</Title>
        <Peragraph className="contact-pera">
          Have some project? or maybe just want to say hello? I’d love to hear
          from you
        </Peragraph>
        <ul className="contact-detail">
          <li>
            <span className="icon icon-user"></span>Deepak Singh
          </li>
          <li>
            <span className="icon icon-call"></span>+91 7990335823
          </li>
          <li>
            <span className="icon icon-mail"></span>
            <a href="mailto:deepak207510@gmail.com">deepak207510@gmail.com</a>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="/contact">
              <span className="icon icon-dribble"></span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="icon icon-Facebook"></span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="icon icon-Twitter"></span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="icon icon-Instagram"></span>
            </a>
          </li>
        </ul>
      </ConatctFormLeft>
      <ConatctFormRight>
        <Form
          // ref={formUser}
          // onSubmit={sendEmail}
          form={userForm}
          layout="vertical"
          onFinish={sendEmail}
          autoComplete="off"
          //   initialValues={{ requiredMarkValue: requiredMark }}
          //   onValuesChange={onRequiredTypeChange}
          //   requiredMark={requiredMark}
          className="conatct-form"
        >
          <Form.Item
            label="Name"
            name="Name"
            // required
            rules={[{ required: true, message: "Please type a Name!" }]}
            tooltip="Please type a Name"
          >
            <Input
              onChange={(e) =>
                userForm.setFieldsValue({ Name: e.target.value })
              }
              placeholder="Your name"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please type a Email!" }]}
            tooltip={{
              title: "Please type a Email",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input
              onChange={(e) =>
                userForm.setFieldsValue({ email: e.target.value })
              }
              placeholder="Your email"
            />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please type a Message!" }]}
            tooltip={{
              title: "Please type a Message",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input
              onChange={(e) =>
                userForm.setFieldsValue({ message: e.target.value })
              }
              placeholder="Your  message"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn"
              // onClick={() => {
              //   userForm.submit();
              //   // userForm.resetFields();
              //   // setData({});
              // }}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>

        {/* {Object.entries(data).length > 0 ? (
          <div
            className="form-detail"
            style={{ marginTop: "20px", textAlign: "left" }}
          >
            <div>Name: {data.Name}</div>
            <div>Email: {data.Email}</div>
            <div>Message: {data.Message}</div>
          </div>
        ) : (
          ""
        )} */}
      </ConatctFormRight>
    </ConatctFormWrapper>
  );
};

export default ContactForm;
