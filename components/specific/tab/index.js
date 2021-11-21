import React from 'react'

import { Tabs, Tab, TabContent  } from '../../base/tabs'

export const ApiTabs = ({first, second, third, fourth}) => {
    return (
      <Tabs>
        <Tab index={1}>{first}</Tab>
        <Tab index={2}>{second}</Tab>
        <Tab index={3}>{third}</Tab>
        <Tab index={4}>{fourth}</Tab>

        <TabContent></TabContent>
      </Tabs>
    );
}
