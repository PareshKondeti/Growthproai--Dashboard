import React from 'react'
import { Star, MessageSquare, Sparkles, RefreshCw } from 'lucide-react'

const BusinessCard = ({ data, onRegenerateHeadline, isLoading }) => {
  const { name, location, rating, reviews, headline } = data

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-yellow-500 fill-current absolute" />
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 text-gray-300 fill-current" />
          </div>
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" />
      )
    }

    return stars
  }

  return (
    <div className="card animate-fade-in">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{name}</h2>
          <p className="text-slate-600 flex items-center space-x-1">
            <span>📍</span>
            <span>{location}</span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500">Business Profile</div>
          <div className="text-xs text-slate-400">Simulated Data</div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-1 bg-yellow-100 rounded">
              <Star className="w-4 h-4 text-yellow-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Google Rating</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-slate-900">{rating}</span>
            <div className="flex items-center space-x-1">
              {renderStars(rating)}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-1 bg-blue-100 rounded">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Total Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-slate-900">{reviews}</span>
            <span className="text-sm text-slate-500">reviews</span>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">AI-Generated SEO Headline</h3>
              <p className="text-sm text-slate-600">Optimized for search engines</p>
            </div>
          </div>
          <button
            onClick={onRegenerateHeadline}
            className="btn-secondary flex items-center space-x-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Regenerate</span>
              </>
            )}
          </button>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-purple-200">
          <p className="text-lg font-medium text-slate-900 leading-relaxed">
            {headline}
          </p>
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-sm text-slate-600">
          <div className="flex items-center space-x-1">
            <span>✨</span>
            <span>AI-optimized</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🎯</span>
            <span>SEO-friendly</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>📈</span>
            <span>Engagement-focused</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard