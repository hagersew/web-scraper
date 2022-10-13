import React from 'react';
import { Tabs } from 'antd';

function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
