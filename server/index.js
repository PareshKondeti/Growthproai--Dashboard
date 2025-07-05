import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001


app.use(cors())
app.use(express.json())


const generateBusinessData = (name, location) => {
  const ratings = [3.8, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8]
  const reviewCounts = [45, 67, 89, 112, 134, 156, 178, 203, 245, 287, 321, 356]
  
  const rating = ratings[Math.floor(Math.random() * ratings.length)]
  const reviews = reviewCounts[Math.floor(Math.random() * reviewCounts.length)]
  
  return { rating, reviews }
}

const headlineTemplates = [
  "Why {business} is {location}'s Best-Kept Secret in 2025",
  "Discover {business}: {location}'s Premier Destination",
  "How {business} Became {location}'s Most Trusted Choice",
  "The Ultimate Guide to {business} in {location}",
  "{business}: Leading the Way in {location} Since Day One",
  "Why Everyone in {location} is Talking About {business}",
  "Experience Excellence at {business} in {location}",
  "{business}: Where Quality Meets Service in {location}",
  "The {location} Local's Guide to {business}",
  "Transforming {location} One Customer at a Time: {business}",
  "{business}: Setting New Standards in {location}",
  "From {location} with Love: The {business} Story",
  "Why {business} is {location}'s Hidden Gem",
  "The Future of Business in {location} Starts with {business}",
  "{business}: Making {location} a Better Place",
  "Exceptional Service, Exceptional Results: {business} in {location}",
  "The {location} Advantage: Choose {business}",
  "{business}: Where Innovation Meets Tradition in {location}",
  "Building Community, One Customer at a Time: {business} in {location}",
  "The Complete {location} Experience at {business}"
]

const generateHeadline = (name, location) => {
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)]
  return template.replace('{business}', name).replace('{location}', location)
}

app.get('/', (req, res) => {
  res.json({ 
    message: 'GrowthProAI Business Dashboard API',
    version: '1.0.0',
    endpoints: {
      'POST /business-data': 'Get business data including rating, reviews, and SEO headline',
      'GET /regenerate-headline': 'Generate a new SEO headline for a business'
    }
  })
})

app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body
    
    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Both name and location are required'
      })
    }
    
  
    const { rating, reviews } = generateBusinessData(name, location)
    const headline = generateHeadline(name, location)
    

    setTimeout(() => {
      res.json({
        rating,
        reviews,
        headline,
        timestamp: new Date().toISOString()
      })
    }, 800)
    
  } catch (error) {
    console.error('Error in /business-data:', error)
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to generate business data'
    })
  }
})


app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query
    

    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required parameters',
        message: 'Both name and location query parameters are required'
      })
    }
    

    const headline = generateHeadline(name, location)
    

    setTimeout(() => {
      res.json({
        headline,
        timestamp: new Date().toISOString()
      })
    }, 600)
    
  } catch (error) {
    console.error('Error in /regenerate-headline:', error)
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to regenerate headline'
    })
  }
})


app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  })
})


app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist'
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})