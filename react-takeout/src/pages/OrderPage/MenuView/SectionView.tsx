import { Menu } from '../../../models/Menu';
import { MenuItemView } from './MenuItemView';

export interface MenuListProps {
  menu: Menu;
}

export const SectionView = ({ menu }: MenuListProps) => {
  const menuList = menu.sectionIds.map((items, key) => {
    const itemId = menu.sections[items].itemIds;
    const itemList = itemId.map((itemName) => {
      const menuItem = menu.items[itemName];
      return <MenuItemView key={menuItem.id} menuItem={menuItem} />;
    });
    return (
      <div>
        <h3 className="title2">{items} </h3>
        <ul>{itemList}</ul>
      </div>
    );
  });
  return <>{menuList}</>;
};
