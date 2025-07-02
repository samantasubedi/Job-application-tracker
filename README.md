# 🧾 Job Application Tracker

A fully responsive Job Application Tracker built using **React** and **Tailwind CSS**, designed to help users seamlessly manage their job hunt process. This application allows users to add, edit, delete, and filter job applications. It stores all data in the browser using **localStorage**, ensuring persistence without needing a backend.

---

## 🚀 Features

### ✅ Core Features
- **Add New Job Applications** with fields like:
  - Company Name
  - Job Title
  - Location
  - Job Type (Onsite, Remote, Hybrid)
  - Job Status (Applied, Interviewing, Offered, Rejected, Withdrawn)
  - Application Date
  - Source (LinkedIn, Website, Referral, etc.)
  - Notes
  - Upload Resume and Cover Letter

- **Edit Existing Applications**  
  Update any previously submitted job application using the edit functionality.

- **Delete Applications with Confirmation**  
  Prevents accidental deletion through a confirmation dialog.

- **Filter Applications by Job Status**  
  Easily narrow down the list of applications by selecting a specific job status like "Interviewing" or "Rejected".

- **Mobile Responsiveness**  
  The entire application is fully responsive and works smoothly on all screen sizes from mobile to desktop.

- **Persistent Local Storage**  
  All application data is saved in the browser, so it remains available even after refreshing or closing the tab.

- **Clean and Minimal UI**  
  Built using **Tailwind CSS**, the UI is intuitive, consistent, and visually appealing.

---

## 🛠 Tech Stack

- **React** – Frontend framework
- **Tailwind CSS** – Utility-first CSS for styling
- **LocalStorage** – For persistent client-side data
- **Framer Motion** – For smooth animations
- **React Router** – For navigation between pages
- **React Icons** – For consistent and scalable icons

---

## 🌍 Live Demo

> 🔗 [View Live App](https://job-application-tracker-ashen.vercel.app/)  


---

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/samantasubedi/job-application-tracker.git
cd job-application-tracker

# Install dependencies
npm install

# Run the application
npm run dev
