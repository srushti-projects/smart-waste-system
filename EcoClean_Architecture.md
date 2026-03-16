# EcoClean: System Flow & Technical Overview

EcoClean is a modern, full-stack themed React application designed to bridge the gap between citizens and waste management authorities.

## 🔄 The User Journey

### 1. Unified Onboarding
- **Landing**: Users arrive at a high-impact dashboard displaying city-wide cleanup stats.
- **Role Selection**: During Login/Register, users choose their identity:
  - **Citizen**: Focused on reporting and rewards.
  - **Collector**: Focused on execution and management.

### 2. The Citizen Flow (Reporter)
1. **Identify Waste**: Citizen spots garbage and opens the "Report Waste" page.
2. **Instant Location**: One-tap "Detect Device Location" avoids manual typing using the browser's Geolocation API.
3. **Evidence**: Optional photo upload via the glassmorphic camera interface.
4. **Impact**: Upon submission, the citizen is credited with **Impact Points (XP)**, visible on their profile.

### 3. The Collector Flow (Resolver)
1. **Task Queue**: Collector logs in to see a real-time list of "Active Requests" near them.
2. **Action**: Collector arrives at the site and clicks **"Mark as Collected"**.
3. **Resolution**: The request is instantly archived, and global stats (Pending vs. Resolved) are updated city-wide.

### 4. Global Transparency
- **Live Recovery Map**: Every report is projected onto a Leaflet-powered map. 
  - 🟡 **Yellow Markers**: Active/Pending waste locations.
  - 🟢 **Green Markers**: Successfully resolved/cleaned sites.
- **Dynamic Dashboard**: Activity logs show a sequence of recent "Eco-Wins" by the community.

---

## 🛠️ Technical Architecture

### 🚄 Frontend Engine
- **React & Router**: Handles seamless single-page navigation and role-based route protection.
- **AuthContext**: A central hub managing:
  - User session details.
  - Role-based permissions.
  - **Theme Intelligence**: Persists Light/Dark/Glass preferences in `localStorage`.

### 🎨 Design System (The "Wow" Factor)
- **Tailwind CSS**: Custom configuration using HSL variables for enterprise-grade color harmony.
- **Glassmorphism**: Extensive use of `backdrop-blur`, semi-transparent borders, and radial gradients for a premium feel.
- **State-Synchronized UI**: The `reports` data is managed at the [App](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/App.js#14-54) level, ensuring that marking a task as "Collected" updates the Dashboard, Map, and Collector Panel simultaneously.

### 📡 Integrated APIs
- **Geolocation API**: High-accuracy coordinate retrieval.
- **Leaflet.js**: High-performance interactive mapping with custom iconography.
- **React CountUp**: Smooth numerical transitions for stats visualization.
