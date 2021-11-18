import React, { useContext, useState } from 'react';
import { Order } from '../../models';

// ---------- OrderContext ----------

type OrderSetter = (order: Order) => void;

/** OrderContext contains Order and OrderSetter */
export const OrderContext = React.createContext<
  { order: Order; setOrder: OrderSetter } | undefined
>(undefined);

// ---------- OrderContextProvider ----------
const OrderContextProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<Order>({ id: '', items: [] });

  const value = { order, setOrder };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

// ---------- useOrderContext ----------
function useOrderContext() {
  const orderContext = useContext(OrderContext);
  /* istanbul ignore next */
  if (orderContext === undefined) {
    throw new Error(
      'useOrderContext must be used within a OrderContextProvider'
    );
  }
  return orderContext;
}

export { OrderContextProvider, useOrderContext };
