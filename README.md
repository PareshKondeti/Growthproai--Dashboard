# GrowthProAI - Business Dashboard

A full-stack Mini Local Business Dashboard that simulates how small businesses might view their SEO content and Google Business data. Built with React, Tailwind CSS, and Node.js/Express.

## 🌟 Features

- **Business Information Input**: Clean form to enter business name and location
- **Simulated Google Business Metrics**: Display realistic rating and review counts
- **AI-Generated SEO Headlines**: Dynamic SEO headline generation and regeneration
- **Responsive Design**: Mobile-first design that works on all devices
- **Loading States**: Smooth loading animations and transitions
- **Form Validation**: Client-side validation for better user experience
- **Modern UI**: Clean, professional interface with gradients and micro-interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** with JSX
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **CORS** for cross-origin requests
- **RESTful API** design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd growthproai-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev:full
   ```

   Or run them separately:
   ```bash
   # Terminal 1 - Backend server
   npm run server

   # Terminal 2 - Frontend development server
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📡 API Endpoints

### POST `/business-data`
Get business data including rating, reviews, and SEO headline.

**Request Body:**
```json
{
  "name": "Café Luna",
  "location": "New York, NY"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Café Luna is New York, NY's Best-Kept Secret in 2025",
  "timestamp": "2025-01-12T10:30:00.000Z"
}
```

### GET `/regenerate-headline`
Generate a new SEO headline for a business.

**Query Parameters:**
- `name`: Business name
- `location`: Business location

**Response:**
```json
{
  "headline": "Experience Excellence at Café Luna in New York, NY",
  "timestamp": "2025-01-12T10:30:00.000Z"
}
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - For main actions and branding
- **Secondary**: Purple (#8B5CF6) - For accent elements
- **Success**: Green (#10B981) - For positive states
- **Warning**: Orange (#F97316) - For attention states
- **Error**: Red (#EF4444) - For error states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **System**: 8px base unit
- **Responsive**: Mobile-first approach

## 🔧 Development

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server
- `npm run dev:full` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BusinessForm.jsx
│   │   └── BusinessCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── public/
└── package.json
```

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set up environment variables if needed

### Backend (Render/Railway)
1. Deploy the `server` folder
2. Set the start command: `node index.js`
3. Configure environment variables

## 📱 Mobile Responsiveness

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive layout)
- **Desktop**: > 1024px (multi-column layout)

## 🎯 Key Features Implemented

- ✅ Business information input form
- ✅ Simulated Google Business metrics display
- ✅ AI-generated SEO headlines
- ✅ Headline regeneration functionality
- ✅ Responsive design with Tailwind CSS
- ✅ Loading states and animations
- ✅ Form validation
- ✅ RESTful API endpoints
- ✅ Clean, modern UI design
- ✅ Error handling

## 📋 Assignment Requirements Met

### Frontend Requirements
- [x] Input form with business name and location
- [x] Display card with Google rating, reviews, and SEO headline
- [x] "Regenerate SEO Headline" button
- [x] Tailwind CSS styling
- [x] Mobile-friendly responsive design

### Backend Requirements
- [x] POST `/business-data` endpoint
- [x] GET `/regenerate-headline` endpoint
- [x] Simulated data (no database required)
- [x] Proper JSON responses

### Bonus Features
- [x] Loading spinners and transitions
- [x] Form validation
- [x] Clean project structure
- [x] Professional UI/UX design

## 🎨 Design Highlights

- **Modern gradient backgrounds** for visual appeal
- **Card-based layout** for organized content
- **Hover effects** and micro-interactions
- **Consistent spacing** using 8px grid system
- **Accessible color contrast** throughout
- **Professional typography** with Inter font

