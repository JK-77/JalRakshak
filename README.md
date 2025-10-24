# 🌊 Jeevan-Rakshak: Water Quality & Health Monitoring System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-jeevan--rakshak--wkrv.vercel.app-blue)](https://jeevan-rakshak-wkrv.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-17.0.2-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.14.1-orange.svg)](https://firebase.google.com/)

**Jeevan-Rakshak** is a comprehensive water quality monitoring and health outbreak detection system that combines real-time data visualization, machine learning predictions, and GIS mapping to help communities monitor water safety and prevent health outbreaks.

## 🎯 Project Overview

This project consists of two main applications:

1. **Dashboard Application** - A React-based analytics dashboard for water quality monitoring and health data visualization
2. **GIS Tracking Application** - A React-based mapping system for real-time water network monitoring and outbreak detection

## ✨ Key Features

### 🏥 Dashboard Application
- **Real-time Water Quality Monitoring** - Live data from sensors and water quality tests
- **Health Outbreak Detection** - AI-powered risk assessment and hotspot identification
- **Interactive Charts & Analytics** - Comprehensive data visualization with charts and graphs
- **Multi-language Support** - Available in multiple languages
- **Dark/Light Theme** - Customizable UI themes
- **Export Functionality** - PDF and Excel export capabilities
- **Power BI Integration** - Embedded Power BI reports for advanced analytics

### 🗺️ GIS Tracking Application
- **Interactive Water Network Mapping** - Real-time visualization of water distribution networks
- **Sensor Node Management** - Add, edit, and monitor sensor nodes
- **Pipeline Monitoring** - Track water pipelines with risk assessment
- **Outbreak Risk Visualization** - Color-coded risk levels for different areas
- **Firebase Integration** - Real-time data synchronization
- **Mobile-Responsive Design** - Works seamlessly on all devices

## 🚀 Live Demo

Visit our live application: **[jeevan-rakshak-wkrv.vercel.app](https://jeevan-rakshak-wkrv.vercel.app/)**

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.7+ (for backend services)
- Firebase account (for real-time data)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JK-77/JalRakshak.git
cd JalRakshak
```

### 2. Dashboard Application Setup

```bash
# Navigate to Dashboard directory
cd Dashboard

# Install dependencies
npm install

# Start the development server
npm start
```

The dashboard will be available at `http://localhost:3000`

### 3. GIS Tracking Application Setup

```bash
# Navigate to GIS tracking directory
cd gisTracking-main

# Install dependencies
npm install

# Start the development server
npm start
```

The GIS application will be available at `http://localhost:3000`

### 4. Backend Services (Optional)

For full functionality, you may need to run backend services:

```bash
# Install Python dependencies
pip install Flask Flask-Cors pandas numpy matplotlib seaborn scikit-learn tensorflow epanettools

# Run water quality prediction service
python waterquality.py

# Run sensor allocation service
python sensor_allocation_final.py

# Run pilferage detection service
python finalpilferage.py

# Run leak detection service
python leak_model.py
```

## 🏗️ Project Structure

```
Jeevan-Rakshak/
├── Dashboard/                    # Main dashboard application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Main application pages
│   │   │   ├── Dashboard.jsx   # Main dashboard
│   │   │   ├── WaterQuality.jsx # Water quality analysis
│   │   │   ├── OutbreakRisk.jsx # Risk assessment
│   │   │   └── ...
│   │   ├── contexts/           # React contexts
│   │   ├── data/              # Static data and assets
│   │   └── firebaseConfig.js  # Firebase configuration
│   └── package.json
├── gisTracking-main/           # GIS mapping application
│   ├── src/
│   │   ├── App.js             # Main GIS application
│   │   ├── FireApp.js         # Firebase integration
│   │   └── firebase.js        # Firebase configuration
│   └── package.json
├── LICENSE
└── README.md
```

## 🔧 Technologies Used

### Frontend
- **React 17.0.2** - UI framework
- **Syncfusion Components** - Advanced UI components
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Firebase** - Real-time database and authentication

### Backend & ML
- **Flask** - Python web framework
- **TensorFlow** - Machine learning models
- **Scikit-learn** - Data analysis
- **Pandas & NumPy** - Data processing
- **EPANet** - Water network simulation

### Mapping & GIS
- **React Leaflet** - Interactive maps
- **Leaflet** - Mapping library
- **OpenStreetMap** - Map tiles

## 📊 Key Features Breakdown

### Water Quality Monitoring
- **CSV Upload & Analysis** - Upload water quality data for ML prediction
- **Real-time Sensor Data** - Live monitoring of water quality parameters
- **Risk Assessment** - AI-powered risk scoring and recommendations
- **Alert System** - Automated alerts for unsafe water conditions

### Health Outbreak Detection
- **Hotspot Identification** - Geographic identification of high-risk areas
- **Trend Analysis** - Historical data analysis and trend prediction
- **Risk Factors** - Multi-factor risk assessment including:
  - Water quality indicators
  - Reported health cases
  - Population density
  - Seasonal factors

### GIS Network Management
- **Interactive Mapping** - Real-time water network visualization
- **Sensor Management** - Add and monitor sensor nodes
- **Pipeline Tracking** - Monitor water distribution pipelines
- **Risk Visualization** - Color-coded risk levels on maps

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark/Light Themes** - Customizable color schemes
- **Multi-language Support** - Internationalization ready
- **Accessibility** - WCAG compliant components
- **Modern Design** - Clean, intuitive interface

## 🔐 Firebase Configuration

The project uses Firebase for:
- **Real-time Database** - Live data synchronization
- **Firestore** - Document storage
- **Authentication** - User management
- **Analytics** - Usage tracking

## 📱 Mobile App

The project includes a mobile application (referenced in the dashboard) for field data collection and monitoring.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **EPANet Tools** - Water network simulation capabilities
- **TensorFlow & Keras** - Machine learning framework
- **Firebase** - Real-time database and cloud services
- **Syncfusion** - Advanced UI components
- **OpenStreetMap** - Open-source mapping data

## 📞 Support

For technical support or questions:
- **Phone**: 8265096155
- **Email**: [Contact through GitHub Issues](https://github.com/JK-77/JalRakshak/issues)

## 🔗 Related Links

- [Project Presentation](https://drive.google.com/file/d/1U69NSHG5IizTqg8Tm9rK__9jTCdIJV5v/view?usp=sharing)
- [Live Demo](https://jeevan-rakshak-wkrv.vercel.app/)
- [GitHub Repository](https://github.com/JK-77/JalRakshak)

---

**Made with ❤️ by Team Jeevan-Rakshak**

*Protecting communities through intelligent water quality monitoring and health outbreak prevention.*