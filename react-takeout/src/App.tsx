import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, OrderPage, CheckoutPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
