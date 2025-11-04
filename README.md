# Healthy - Health Tracking Application

A modern health tracking application built with Next.js and Redux, featuring meal tracking, health records, and informative columns.

## 🌟 Features

### Core Technologies
- Next.js 14 with App Router
- Redux Toolkit for state management
- TailwindCSS for styling
- Recharts for data visualization

### Pages
- **Home (/)**: Dashboard with achievement rate and meal history
- **My Record (/my-record)**: Personal health records and exercise tracking
- **Column (/column)**: Health and diet-related articles
- **Responsive Design**: Mobile-friendly interface

### Components
- Interactive charts for body metrics
- Meal tracking grid with load more functionality
- Exercise and diary records
- Health achievement visualization
- Responsive navigation with dropdown menu
- Scroll to top button
- Notification system

### State Management
- Redux integration for:
  - Meal tracking
  - Health records
  - Exercise logs
  - Achievement data
  - Column articles
  - Notifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone [repository-url]
   cd healthy
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open http://localhost:3000 in your browser

## 📁 Project Structure

\`\`\`
healthy/
├── app/                   # Next.js app router pages
├── components/           # Reusable React components
├── public/              # Static assets
├── services/           # API services
├── store/              # Redux store and slices
│   ├── slices/        # Redux slices
│   └── store.js       # Redux store configuration
└── styles/            # Global styles
\`\`\`

## 🎯 Key Features Implementation

### Redux Integration
- Centralized state management
- Async data fetching with Redux Thunk
- Modular state slices for different features

### Data Visualization
- Interactive line charts for body metrics
- Customizable time periods (Day/Week/Month/Year)
- Responsive chart layouts

### Pagination
- Client-side pagination for meals, diaries, and columns
- Load more functionality with smooth UI updates

### UI/UX Features
- Smooth scroll to top
- Responsive navigation
- Real-time notification updates
- Interactive data filters

## 📱 Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Optimized for various screen sizes

## 🛠 Development

### Available Scripts
- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run start\`: Start production server
- \`npm run lint\`: Run ESLint

### Tech Stack Versions
- Next.js: 14.0.0
- React: 18.2.0
- Redux Toolkit: ^1.9.7
- TailwindCSS: ^3.4.12
- Recharts: 2.6.2

## 🔜 Future Enhancements
- User authentication
- Real-time data synchronization
- More detailed health analytics
- Exercise tracking features
- Meal planning functionality
