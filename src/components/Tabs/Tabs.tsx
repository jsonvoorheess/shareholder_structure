import React, { useState } from 'react';
import './Tabs.scss';

interface TabsProps {
  items: Array<{
    key: string;
    label: string;
    content: React.ReactNode;
  }>;
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0]?.key);

  const activeContent = items.find(item => item.key === activeKey)?.content;

  return (
    <div className="tabs">
      <div className="tabs__header">
        {items.map(item => (
          <button
            key={item.key}
            className={`tabs__tab ${activeKey === item.key ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveKey(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;