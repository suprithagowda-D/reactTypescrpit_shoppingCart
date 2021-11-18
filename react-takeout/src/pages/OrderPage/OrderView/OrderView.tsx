import { AiTwotoneDelete } from 'react-icons/ai';
import { useOrderContext } from '../OrderContext';
import { NavLink } from 'react-router-dom';

export const OrderView = () => {
  const { order, setOrder } = useOrderContext();

  //totalPrice format
  const totalData = order.items.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
  const totalPrice = new Intl.NumberFormat().format(totalData);

  //remove Item
  const removeItem = (itemRemovedId: string) => {
    const itemDelete = order.items.filter(
      (c) => c.menuItemId !== itemRemovedId
    );
    setOrder({ ...order, items: itemDelete });
  };

  return (
    <div className={`overflow-auto min-h-0 px-2 width40`}>
      <div className="flex">
        <h3 className="flex-grow-1 ">YOUR ORDER</h3>
        {order.items.length > 0 ? (
          <NavLink to="/checkout">
            <button className={`btn-primary `}>Checkout</button>
          </NavLink>
        ) : (
          ''
        )}
      </div>

      {order.items.length > 0 ? (
        <table>
          <tbody>
            {order.items.map((order, key) => (
              <tr key={order.menuItemId}>
                <td>{key + 1}</td>
                <td>{order.name}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>
                  <AiTwotoneDelete
                    onClick={() => removeItem(order.menuItemId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="py-2">
          Please click on the menu item to start your order
        </p>
      )}
    </div>
  );
};
