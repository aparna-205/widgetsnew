# Electric Vehicle Analysis Dashboard

A data-driven web dashboard providing deep insights into Electric Vehicle (EV) fleet performance. Analyse individual vehicle behaviour, monitor battery health, understand driving patterns, and identify peak usage periods — all through interactive widgets.

---


## ✨ Widgets Overview

| Widget | Description |
|--------|-------------|
| **Average km/day** | Distance travelled per day, week, month, or custom date range |
| **Average ON hours** | Total time the vehicle ignition was turned on |
| **Average OFF hours** | Total time the vehicle ignition was turned off |
| **ON / OFF count** | Number of times ignition was switched on and off |
| **Average battery voltage** | Mean battery voltage for a selected vehicle and time range |
| **Acceleration count** | Measures aggressive driving — high counts indicate harsh acceleration |
| **Utilization heatmap** | Peak hours and peak days for individual or selected vehicles |
| **Top speed & average speed** | Speed analysis over a selected date range |
| **Top 5 customers** | Ranks vehicles by average km/day and highlights the top performers |
| **Fleet activity** | Full activity overview across the entire vehicle fleet |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js |
| Frontend | HTML, JavaScript, AJAX |
| Charts | Plotly.js |
| Database | MySQL |

---

## ⚙️ Setup & Installation

**1. Clone the repo**
```bash
git clone https://github.com/aparna-205/ev-analysis-dashboard
cd ev-analysis-dashboard
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure the database**

- Create a MySQL database and import the provided schema
- Update your DB credentials in the config file:

```js
// config.js
module.exports = {
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_password',
  database: 'ev_dashboard'
}
```

**4. Start the server**
```bash
node app.js
```

Open your browser at `http://localhost:3000`

---

## 📂 Project Structure

```
ev-analysis-dashboard/
├── app.js                  # Node.js server entry point
├── config.js               # Database configuration
├── routes/                 # API route handlers
├── public/
│   ├── index.html          # Landing page
│   ├── dashboard.html      # Main dashboard
│   └── js/                 # Plotly.js widgets and AJAX calls
└── README.md
```

---

## 📸 Screenshots

#### Index page
![Index Page](https://i.imgur.com/ThGSivq.jpg)

#### Fleet dashboard
![Fleet Dashboard](https://i.imgur.com/HR23mpy.jpg)

#### Individual vehicle analysis
![Individual Vehicle 1](https://i.imgur.com/xeOishr.jpg)
![Individual Vehicle 2](https://i.imgur.com/NrrDYkj.jpg)

---

## 🗺 Roadmap

- [ ] Add vehicle-wise PDF report export
- [ ] Alert system for low battery voltage
- [ ] Predictive maintenance suggestions based on acceleration patterns
- [ ] Role-based access control (admin / fleet manager)

---

## 📄 License

MIT License — free to use and modify.

---

## 🙋 About

Built by **Aparna** · [GitHub](https://github.com/aparna-205)

> Open to freelance projects in Python, Flask, Streamlit, and data dashboards. Feel free to reach out!
