import React from 'react'
import { Building2, TrendingUp } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Building2 className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">GrowthProAI</h1>
              <p className="text-sm text-slate-600">Business Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-secondary-600">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered SEO</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header