// import React from "react"
// import ReactDOM from "react-dom"
// import { makeAutoObservable } from "mobx"
// import { observer } from "mobx-react-lite"

// // Model the application state.
// export default function createTimer() {
//     return makeAutoObservable({
//         secondsPassed: 0,
//         increase() {
//             this.secondsPassed += 1
//         },
//         reset() {
//             this.secondsPassed = 0
//         }
//     })
// }

// const myTimer = createTimer()

// // Build a "user interface" that uses the observable state.
// const TimerView = observer(({ timer }) => (
//     <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
// ))

// ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// // Update the 'Seconds passed: X' text every second.
// setInterval(() => {
//     myTimer.increase()
// }, 1000)

import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;