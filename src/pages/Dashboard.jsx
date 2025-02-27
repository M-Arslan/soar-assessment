import { useState } from 'react';
import CardsTransactions from '../components/Dashboard/CardTransactions';
import Charts from '../components/Dashboard/Charts';
import DashboardWidgets from '../components/Dashboard/Widgets';


export const Dashboard = () => {

  return (
    <div>
      <CardsTransactions />
      <Charts />
      <DashboardWidgets />

    </div>

  );
};
