## To run project

First delete node_modules and .next folder
Then run

```bash
yarn Install
```

To run development server run

```bash
yarn dev
```

To add any new package use

```bash
yarn add package_name
```

And to create build

```bash
yarn run build
```

and to run build local

```bash
yarn run start
```

<!-- import React, { useState } from 'react';

const tabContent = [
  {
    key: 'tab1',
    title: 'Richmond Flooring',
    content: 'Content for Richmond Flooring...',
  },
  {
    key: 'tab2',
    title: 'Sintrich Stone',
    content: 'Content for Sintrich Stone...',
  },
  {
    key: 'tab3',
    title: 'Polar Flooring',
    content: 'Content for Polar Flooring...',
  },
  {
    key: 'tab4',
    title: 'Monster Sealant',
    content: 'Content for Monster Sealant...',
  },
  {
    key: 'tab5',
    title: 'Dulux Paints',
    content: 'Content for Dulux Paints...',
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full py-8">
      <div className="flex justify-center">
        {tabContent.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 mx-2 font-medium text-sm border-b-2 ${
              activeTab === tab.key ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
            } focus:outline-none`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabContent.map((tab) => (
          <div
            key={tab.key}
            className={`p-4 ${activeTab === tab.key ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs; -->
