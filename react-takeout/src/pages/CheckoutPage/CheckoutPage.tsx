import { NavLink } from 'react-router-dom';

export const CheckoutPage = () => {
  return (
    <main className="p-2">
      <h1 className="text-primary-500">Checkout</h1>
      <div className="mt-3">
        <NavLink to="/" end>
          ← Back to menu
        </NavLink>
        <br />
        <NavLink to="/home" end>
          ← MoviesList
        </NavLink>
      </div>
    </main>
  );
};
