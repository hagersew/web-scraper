import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import cheerio from 'cheerio';

function App() {
  const URL = 'https://www.bet365.com/#/HO/';
  const [title, setTitle] = useState('');
  useEffect(() => {
    axios.get(URL).then((response: any) => {
      const html = response.data;
      const $ = cheerio.load(html);
      setTitle($('title').text());
      $('.him-Classification', html).each(function () {});
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <p>{title}</p>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Soccer" key="1">
            Content of Soccer
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tennis" key="2">
            Content of Tab Tennis
          </Tabs.TabPane>
          <Tabs.TabPane tab="Cricket" key="3">
            Content of Tab Cricket
          </Tabs.TabPane>
          <Tabs.TabPane tab="UEFA Europa League" key="4">
            Content of Tab UEFA
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
