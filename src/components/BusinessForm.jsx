import React, { useState } from 'react'
import { Building2, MapPin, Search } from 'lucide-react'

const BusinessForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: ''
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Business name is required'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Search className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Business Information</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Business Name</span>
            </div>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your business name"
            className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-red-500 text-sm flex items-center space-x-1">
              <span>⚠️</span>
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-slate-700">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter your business location"
            className={`input-field ${errors.location ? 'border-red-500 focus:ring-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.location && (
            <p className="text-red-500 text-sm flex items-center space-x-1">
              <span>⚠️</span>
              <span>{errors.location}</span>
            </p>
          )}
        </div>


        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center space-x-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Get Business Insights</span>
            </>
          )}
        </button>
      </form>
      

      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <p className="text-sm text-slate-600">
          <strong>Example:</strong> "Pizza Hut" in "Hyd"
        </p>
      </div>
    </div>
  )
}

export default BusinessForm