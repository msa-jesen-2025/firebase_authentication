[![si](https://img.shields.io/badge/lang-si-green.svg)](https://github.com/lukapavlic/faas/blob/main/primer/frontend/README.md)

# 🏠 Work-from-Home Platform - Frontend

This is the frontend of a Work-from-Home management system, built with React. The application interfaces with Firebase for user authentication and Cloud Functions for automated email notifications and request processing.

## 🚀 Features and Pages

1. **Login Page** `/login`
   - 🔑 **Purpose**: Allows users to log into the platform.
   - **Features**: Firebase Authentication integration for secure login.

2. **Dashboard** `/`
   - 🏠 **Purpose**: Main hub for navigating the platform.
   - **Navigation**: Links to other sections such as Work-from-Home requests, calendar, and request history.

3. **Work-from-Home Request Page** `/work-from-home`
   - 📅 **Purpose**: Allows users to submit a work-from-home request.
   - **Features**: Form for selecting start and end dates, with validation and submission to Firestore.

4. **Calendar View** `/request-history`
   - 📆 **Purpose**: Shows a calendar of user’s requests.
   - **Features**: Displays requests with color-coded status (approved, declined, pending). Hovering over dates shows request details.

5. **Request History List** `/request-history-list`
   - 📜 **Purpose**: Lists all user’s past requests in a paginated format.
   - **Features**: Each request shows dates and status, with navigation between pages.
