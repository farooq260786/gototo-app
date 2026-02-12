# GoToto Real-Time Live Tracking System Flow 🛰️

This document outlines the connected logic between the **Passenger** and **Driver** applications to simulate a real-time experience using `localStorage` for state synchronization.

## 🔄 The Lifecycle of a Ride

### 1. Request Phase
*   **Passenger**: Submits a request in `fare-estimation.html`.
*   **System**: Sets `rideState = 'searching'`.
*   **Passenger View**: Navigates to `waiting.html` showing a radar loader.

### 2. Dispatch Phase
*   **Driver**: In `driver-home.html`, an incoming request badge appears.
*   **Driver Action**: Clicks "Accept".
*   **System**: Updates `rideState = 'accepted'`.
*   **Passenger View**: `waiting.html` detects the state change, stops the radar, and slides up the "Driver Assigned" card showing Abdul Gani's details.

### 3. Navigation to Pickup
*   **Driver**: Enters `driver-tracking.html`.
*   **Driver Action**: Clicks "Arrived at Pickup".
*   **System**: Updates `rideState = 'arrived'`.
*   **Passenger View**: In `tracking.html`, the status bar immediately updates from "Navigating" to "Driver Arrived at Pickup" (Green theme).

### 4. Trip In-Progress
*   **Driver Action**: Clicks "Start Ride".
*   *System**: Updates `rideState = 'in_progress'`.
*   **Both Apps**: The vehicle icon starts moving along the dashed route line.
*   **Passenger View**: Displays "Your Trip is in Progress".

### 5. Completion & Settlement
*   **Driver Action**: Clicks "End Ride".
*   **System**: Updates `rideState = 'completed'`.
*   **Passenger View**: Automatically redirects from the tracking map to `completed.html` showing the final fare.
*   **Driver View**: Navigates to `driver-completed.html` with cash collection instructions.

---

## 🛠️ Implementation Details
- **Persistence**: Using `window.localStorage` to bridge the two browser contexts.
- **Polling**: Lightweight `setInterval` (1000ms) listeners ensure sub-second UI updates across apps.
- **Animations**: CSS `cubic-bezier` transitions are synchronized to ensure the 🛺 movement feels fluid in both views.
