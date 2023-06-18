
<img src="https://i.postimg.cc/KvNq6Xjb/logo-no-background.png" alt="image" width="300">

# ASHRAY

A modern and intuitive hotel booking website that allows users to search for hotels, view detailed information, and make bookings seamlessly.

## Description

The Hotel Booking Website provides a user-friendly interface with a focus on usability and efficiency. It incorporates the following features and functionality:

- **Attractive and Responsive Design:** The website boasts an appealing and responsive design that ensures a seamless experience across various devices and screen sizes.
- **Advanced Search Capability:** Users can search for hotels based on location, dates, number of guests, and specific requirements like amenities, star ratings, and price range.
- **Interactive Hotel Listings:** Each hotel listing provides comprehensive details, including high-resolution images, amenities, room types, availability, and user ratings and reviews.
- **Real-time Availability and Pricing:** The website integrates with a hotel management system to fetch real-time availability and pricing information for accurate search results and bookings.
- **Secure Booking Process:** Users can confidently make bookings with a secure and encrypted payment gateway, ensuring the protection of their personal and financial information.
- **Social Media Integration:** Users can easily share their bookings and experiences on social media platforms, promoting the website and generating user engagement.
- **Admin Dashboard:** An administrative dashboard allows authorized personnel to manage hotels, bookings, user accounts, and generate reports.

## Technologies Used

- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js
- API Integration: Hotel management system API for real-time data

![alt text](https://camo.githubusercontent.com/4d13bf1cb702ddb551e9c3206263ae73d9f75b38dfd9abdc5d89966282b89ffd/68747470733a2f2f736b696c6c732e7468696a732e67672f69636f6e733f693d68746d6c2c6373732c6a732c626f6f747374726170)

## BACKENED API

The backend api server serves as a gateway between the frontend and the database, manipluating data through transaction queries and mongo aggregations to return the desired result that the frontend requests as well as broadcasting live updates across its socket connections. Because the backend server has to be able to serve different hotels each with different room numbers and their own reservations, a HotelID query string is used to differentiate API requests.

All backend api requests go through /api route where an express router autenticates the request and sends the it to the matching router. A hotel check middleware also intercepts the request, obtains the HotelID of the request and stores it in a Conductor for it to use to run commands that execute the business logic.

All login requests go through /user route where an express router directs login and logout requests to their matching router as well as join or leave socket rooms accordingly.

The backend is currently encapsulated into three layers of logic

- Controller: handles all API routes
- Services: business logic
- Date-Access: queries for databases with an OO approach to preserve encapsulation and resuse objects through JS prototypical inheritance
- API is working on JSON server

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Access the website:

Open your web browser and visit `http://localhost:3000` to access the hotel booking website.

## Usage

1. Register a new user account or log in with an existing account.
2. Utilize the advanced search functionality to find hotels based on location, dates, number of guests, and specific requirements.
3. Browse through the search results and click on a hotel to view detailed information, including images, amenities, room types, availability, and user reviews.
4. Select desired dates, room types, and the number of guests, and proceed to make a booking.
5. During the booking process, securely enter payment details using the integrated Stripe payment gateway.
6. Manage your bookings, view your booking history, and save favorite hotels in your user profile.
7. Update personal information, change passwords, and customize preferences for a tailored experience.

## Contributing

1. Zeenat Abrar (Team Lead)
2. Mohammed Rafique (Admin site)
3. Narendra Patel (API site)
4. Subhash Rawat (Page development)

## License

This project is licensed under the [ASHRAY] LICENSE.


