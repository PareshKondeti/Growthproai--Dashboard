import React, { useState } from 'react'
import BusinessForm from './BusinessForm'
import BusinessCard from './BusinessCard'
import { MapPin, Building2 } from 'lucide-react' 
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'


const Dashboard = () => {
  const [businessData, setBusinessData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleBusinessSubmit = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch business data')
      }
      
      const data = await response.json()
      setBusinessData({ ...data, ...formData })
    } catch (error) {
      console.error('Error fetching business data:', error)

    } finally {
      setIsLoading(false)
    }
  }

  const handleHeadlineRegenerate = async () => {
    if (!businessData) return
    
    setIsLoading(true)
    try {
      const response = await fetch(
        `${BASE_URL}/regenerate-headline?name=${encodeURIComponent(businessData.name)}&location=${encodeURIComponent(businessData.location)}`
      )
      
      if (!response.ok) {
        throw new Error('Failed to regenerate headline')
      }
      
      const data = await response.json()
      setBusinessData(prev => ({ ...prev, headline: data.headline }))
    } catch (error) {
      console.error('Error regenerating headline:', error)
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
    
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">
          Local Business <span className="text-primary-600">Dashboard</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Discover how your business appears online with AI-powered SEO insights and simulated Google Business metrics.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
            <Building2 className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Business Insights</h3>
          <p className="text-slate-600">Get comprehensive business data</p>
        </div>
        <div className="card text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-full mb-4">
            <MapPin className="w-6 h-6 text-secondary-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Local Presence</h3>
          <p className="text-slate-600">Optimize for local search</p>
        </div>
        <div className="card text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">AI-Powered SEO</h3>
          <p className="text-slate-600">Generate compelling headlines</p>
        </div>
      </div>

 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
   
        <div className="space-y-6">
          <BusinessForm onSubmit={handleBusinessSubmit} isLoading={isLoading} />
        </div>


        <div className="space-y-6">
          {businessData ? (
            <BusinessCard 
              data={businessData} 
              onRegenerateHeadline={handleHeadlineRegenerate}
              isLoading={isLoading}
            />
          ) : (
            <div className="card text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Your Business Dashboard
              </h3>
              <p className="text-slate-600">
                Enter your business details to see simulated Google Business metrics and AI-generated SEO content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard