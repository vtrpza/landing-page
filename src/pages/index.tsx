import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

const LandingPage = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <MainContent />
    <ServicesSection />
    <Footer />
  </div>
)

export default LandingPage