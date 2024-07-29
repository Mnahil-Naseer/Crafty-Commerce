import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import BillingPage from './pages/BillingPage';
import Login from './pages/LoginPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Layout from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/billing"  element={<BillingPage />}/>
            </Routes>
          </Layout>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
