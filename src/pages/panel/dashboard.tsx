import React, {ReactElement} from 'react';
import Panel from '@app/layouts/panel';

const Dashboard = () => {
  return (
        <>
          <h1 className='h5 border-bottom border-white pb-3'>DASHBOARD</h1>
        </>
  );
};
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Panel>
      {page}
    </Panel>
  );
};

export default Dashboard;