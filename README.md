# Aahar

This repository houses a comprehensive system developed using Node.js, Express, EJS, Bootstrap, and MongoDB. The system facilitates the seamless coordination of surplus food donations from donors to NGOs or local food banks, optimizing the process through dynamic assignment of delivery agents.

## Features

- **User Roles:** Donor, receiver (admin), and agent roles for tailored user experiences.
- **Dynamic Donations:** Submit and track surplus food donations with ease.
- **Agent Assignment:** Efficient assignment of delivery agents based on predefined criteria.
- **Real-time Updates:** Keep donors, agents, and receivers informed with real-time status updates.
- **Responsive Design:** Bootstrap ensures a visually appealing and responsive UI across devices.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/guptaryan73/aahar.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection using environment variables:**
   - Install MongoDB following the [official installation guide](https://docs.mongodb.com/manual/installation/).
   - Create a `.env` file in the root of your project and add the MongoDB connection URL:
     ```env
     MONGO_URI=mongodb://localhost:27017/Aahar
     ```
     Adjust the URL according to your MongoDB setup.
   - Update the `config/db.js` file to use the environment variable:
     ```javascript
     // config/db.js
     require('dotenv').config(); // Load environment variables
     module.exports = {
         // other configurations
         url: process.env.MONGO_URI || 'mongodb://localhost:27017/Aahar',
     };
     ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Access the system at:** `http://localhost:5000`

## Technologies Used

- **Front-end:** EJS, Bootstrap
- **Back-end:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Passport.js