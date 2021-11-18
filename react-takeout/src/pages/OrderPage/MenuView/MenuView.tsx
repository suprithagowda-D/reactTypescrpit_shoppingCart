import { useMenu } from './useMenu';
import { Loading } from '../../../components';
import { StringUtils } from '../../../utils';
import { SectionView } from './SectionView';

export const MenuView = () => {
  const { isLoading, isError, error, menu } = useMenu();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <main>
        <h1>{StringUtils.errorToString(error)}</h1>
      </main>
    );
  }

  return (
    <div className={`overflow-auto min-h-0 divider-right width60`}>
      <h1 className="title">Our Menu</h1>
      <main>{menu && <SectionView menu={menu} />}</main>
    </div>
  );
};
