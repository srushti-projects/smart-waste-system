# EcoClean: Technical Backend Explained

Since EcoClean is currently a high-performance frontend prototype, it uses what we call a **Simulated Backend Architecture**. This allows the app to feel like it's talking to a database without the complexity of a separate server.

## 1. The "Virtual Database" ([App.js](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/App.js))
At the core of the system is the `reports` state in the main [App](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/App.js#14-54) component. This acts as our **Live Database**.

- **Structure**: It stores an array of objects, each containing:
  - [id](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/context/AuthContext.js#13-58): Unique timestamp for identification.
  - `wasteType`: Category of waste.
  - `location`: Human-readable address.
  - `coords`: GPS coordinates for map placement.
  - `status`: Either `"Pending"` or `"Collected"`.
- **Global Sync**: Because this state lives at the top of the tree, any change (like a collector cleaning up a spot) is instantly "broadcast" to the Dashboard, Map, and Collector Panel.

## 2. Authentication Flow ([AuthContext.js](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/context/AuthContext.js))
Instead of a login server, we use **React Context API** to manage high-level permissions.

- **Login Simulation**: When you click "Login," the app updates the `user` and `role` state.
- **Session Persistence**: To make the login "stick" when you refresh the page, we use `localStorage.setItem('user', ...)`. 
  - *Reality Check*: In a real app, the server would send a **JWT (JSON Web Token)** which the browser stores securely. We are currently mocking this by storing the user object directly.

## 3. The "API" Layer (Function Handlers)
In a real backend, the frontend would use `fetch()` or `axios`. In EcoClean, we use **Action Handlers**:

- **Create (POST)**: The [addReport](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/App.js#18-21) function simulates an API endpoint. It takes form data, adds metadata (like timestamps), and "saves" it to the state array.
- **Update (PATCH)**: The [markCollected](file:///c:/Users/Admin/Desktop/Projects/smart-waste-system/frontend/src/App.js#22-25) function simulates a server-side update. It finds the specific ID and toggles the status bit.

## 4. Why use a Simulated Backend?
1. **Speed**: Zero network latency. The UI feels incredibly fast because data never leaves your computer.
2. **Demonstration**: It allows you to see the **Full User Journey** (reporting → mapping → collecting) without needing to host a database.

---

## 🚀 Future Integration: Real Backend
To turn this into a production app, we would:
1. **Connect a Node.js/Express Server**: To handle real HTTP requests.
2. **Add a Database (MongoDB)**: For permanent storage that persists for all users globally.
3. **Cloud Storage (AWS S3)**: To store actual waste images safely.
