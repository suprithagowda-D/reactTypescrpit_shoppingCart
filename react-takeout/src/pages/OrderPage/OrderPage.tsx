import React from 'react';
import { MenuView } from './MenuView/index';
import { OrderView } from './OrderView/index';
import { OrderContextProvider } from './OrderContext';
import { ToastProvider } from 'react-toast-notifications';

export const OrderPage = () => {
  return (
    <ToastProvider>
      <OrderContextProvider>
        <div className={`flex-1 flex flex-row h-screen p-3`}>
          <MenuView />
          <OrderView />
        </div>
      </OrderContextProvider>
    </ToastProvider>
  );
};
