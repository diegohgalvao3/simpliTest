import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FreeTrial from './components/FreeTrial';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const LandingPage = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <About />
    <Testimonials />
    <Pricing />
    <FreeTrial />
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;