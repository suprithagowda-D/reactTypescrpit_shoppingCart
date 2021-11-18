import { useOrderContext } from '../OrderContext';
import { useToasts } from 'react-toast-notifications';
import { MenuItem } from '../../../models/Menu';

export interface MenuItemViewProps {
  menuItem: MenuItem;
}

export const MenuItemView = ({ menuItem }: MenuItemViewProps) => {
  const { name, description, price } = menuItem;
  const { order, setOrder } = useOrderContext();
  const { addToast } = useToasts();

  const handleItemClicked = (productId: string) => {
    const items = order.items.some((menu) => menu.menuItemId === productId);
    if (!items) {
      setOrder({
        ...order,
        items: [...order.items, { menuItemId: productId, name, price }],
      });
    } else {
      addToast('Item already in cart', {
        appearance: 'info',
        autoDismiss: true,
      });
    }
  };
  return (
    <div onClick={() => handleItemClicked(menuItem.id)}>
      <li className={`mb-2 cursor-pointer`}>
        <h4>{name}</h4>
        <p>{description}</p>
        <h5>{price}</h5>
      </li>
    </div>
  );
};
