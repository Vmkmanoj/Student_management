"use client"


import React, { useState } from 'react';
import { Col, Flex, Form, Input, Button, message, Radio,Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Navbar from './Navbar/page';
import Link from 'next/link';
import "./css/StudentFrom.css"

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <>
      <div className="mt-36 ml-56">
      {/* <h1 className="text-2xl font-bold mb-4">Add Student</h1> */}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="student-form bg-white shadow-md rounded-md px-8 py-6 flex flex-col space-y-4"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Roll No"
          name="rollNo"
          rules={[
            {
              required: true,
              message: 'Please input your roll number!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please select a gender!',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Department"
          name="department"
          rules={[
            {
              required: true,
              message: 'Please select a department!',
            },
          ]}
        >
          <Select>
            <Select.Option value="CSE">Computer Science Engineering</Select.Option>
            <Select.Option value="IT">Information Technology</Select.Option>
            <Select.Option value="ECE">Electronics and Communication Engineering</Select.Option>
            {/* Add more department options as needed */}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2">
            <PlusOutlined /> Add Student
          </Button>
        </Form.Item>
      </Form>
      {/* <Link href="/students" className="text-blue-500 mt-4">View Students</Link> */}
    </div>
    </>
  );
};

export default Home;