import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import {
  WechatOutlined,
} from '@ant-design/icons';

export default class App extends Component {
  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <DatePicker onChange={onChange} />
      </div>
    )
  }
}