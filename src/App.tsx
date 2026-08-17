import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConfirmedPage from './pages/ConfirmedPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}
