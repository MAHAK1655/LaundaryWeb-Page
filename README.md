# README

## Introduction

**LaundaryWeb-Page** is a modern, responsive web application designed for booking professional laundry services. The website provides users with a seamless experience—from exploring service options and adding services to a cart, to booking a service and subscribing to newsletters. Built using **HTML**, **CSS**, and **JavaScript**, the project emphasizes smooth navigation and interactive functionality. The landing page features a dynamic hero section, service listings with add-to-cart functionality, a cart summary, and a booking form that confirms the service appointment. Key front-end elements such as the navigation bar, hero image, and footer are designed to guide users throughout the website with intuitive controls and visual cues fileciteturn0file0.

## Features

The following features make the application user-friendly and efficient:

- **Responsive Navigation Bar:**  
  An interactive navigation menu provides quick access to sections like Home, Services, About Us, and Contact Us.

- **Dynamic Hero Section:**  
  Prominently displays the service slogan and an eye-catching image with a call-to-action button that scrolls to the booking form.

- **Service Listings and Cart Integration:**  
  - **Service Options:** Users can view various laundry services (e.g., Dry Cleaning, Wash & Fold, Ironing, Stain Removal, Leather & Suede Cleaning) along with corresponding prices.
  - **Add/Remove Functionality:** Each service item includes buttons to add to or remove from the cart. These are managed by JavaScript functions such as addToCart() and removeFromCart() which update the cart display dynamically fileciteturn0file1.
  - **Cart Summary:** Displays the selected items, their individual prices, and computes the total amount in real time.

- **Booking System:**  
  A clear booking form collects user details (full name, email, and phone number) before confirmation. The form validates the input fields and alerts the user if any mandatory field is missing. Upon a successful booking, a confirmation message is shown, and the cart along with the form is reset fileciteturn0file4.

- **Smooth Scrolling Navigation:**  
  The webpage enables smooth scrolling to the booking section when the corresponding button is clicked.

- **Newsletter Subscription:**  
  A dedicated section allows users to enter their name and email to subscribe to newsletters. The function subscribeNewsletter() validates inputs and provides a thank-you alert on successful subscription.

- **Footer with Contact and Social Links:**  
  Includes detailed contact information, key navigation links, and social media icons for further engagement.

## Configuration

The application is designed to work out-of-the-box with minimal configuration. However, the following aspects can be customized:

- **External Assets and Libraries:**
  - **Font Awesome CDN:**  
    The project imports Font Awesome icons using a CDN to display icons across buttons, navigation, and social links.
  - **Custom Styles:**  
    The custom style definitions are written in the project’s CSS file (referenced as style.css).

- **Service Details:**  
  Service items are defined within the HTML markup by specifying the data attributes such as `data-service` and `data-price`. This makes it simple to update or add new services. For example:

  Code snippet from a service item:
  ----------------------------
  <code>
  &lt;div class="service-item" data-service="wash-fold" data-price="₹200"&gt;
      &lt;div class="service-info"&gt;
          &lt;h3&gt;&lt;img src="/assests/dry-clean.png" alt="laundary" width="20"&gt; Dry Cleaning
              &lt;span&gt;₹200&lt;/span&gt;
          &lt;/h3&gt;
      &lt;/div&gt;
      ...
  &lt;/div&gt;
  </code>
  ----------------------------
  This setup allows developers to easily adjust service names, images, and prices without modifying the underlying JavaScript logic fileciteturn0file0.

- **JavaScript Functionality:**  
  The JavaScript file (script.js) drives the primary interactions:
  - **Cart Operations:** Handled by addToCart() and removeFromCart() functions.
  - **Form Validation:** The booking form and newsletter subscriptions include built-in validations.
  - **Smooth Scrolling:** Implemented to improve user navigation.
  
  Developers can extend or modify these functions as needed to fit different business logics fileciteturn0file6.

## Usage

To use the application:

1. **Browse and Select Services:**
   - Navigate to the **Services** section.
   - Click on the **Add Item** button next to a service to add it to your cart.
   - Use the **Remove** button to remove any undesired service.

2. **Review Cart and Book a Service:**
   - The **Your Cart** section displays selected items with their prices and a running total.
   - Fill in your personal details (full name, email, and phone number) in the booking form.
   - Click on the **Book Now** button to finalize the service booking.
   - A confirmation message is displayed once the booking is successful.

3. **Subscribe to Newsletter:**
   - Enter your full name and email in the newsletter subscription section.
   - Click on **Subscribe** to receive updates and offers.

4. **Navigation:**
   - Use the navigation bar at the top to smoothly scroll to different sections of the page, including Home, Services, About Us, and Contact.

Each button and action is wired up with interactive JavaScript functions, ensuring a responsive user experience across devices fileciteturn0file3.

## Requirements

The project runs entirely in the browser with no additional server-side setup required. The following requirements must be met:

- **Web Browser:**  
  A modern HTML5-compliant browser (Chrome, Firefox, Edge, or Safari) is recommended.

- **Internet Access:**  
  Required for fetching the Font Awesome CDN and any online libraries referenced in the project.

- **Local Assets:**  
  The website requires the following for full functionality:
  - Custom CSS file (style.css)
  - JavaScript file (script.js)
  - Image assets located in the "assests" folder (note the spelling in the repository should match the file paths used in the HTML).

- **Basic HTML, CSS, and JavaScript Support:**  
  Since the project uses standard HTML, CSS, and vanilla JavaScript, no additional frameworks or libraries are necessary beyond what is referenced.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the Repository:**

   Open your terminal or command prompt and run the following command:

   ----------------------------
   git clone https://github.com/MAHAK1655/LaundaryWeb-Page.git
   ----------------------------

2. **Navigate to the Project Directory:**

   ----------------------------
   cd LaundaryWeb-Page
   ----------------------------

3. **Run the Application:**
   - Open the index.html file in your preferred web browser.
   - You may simply double-click the file or right-click and choose to open with your browser.

4. **Editing and Customization:**
   - To make any changes, open the project files (HTML, CSS, or JavaScript) in your favorite code editor.
   - Changes to the service details or configuration can be made directly in the HTML markup or within the script.js file as needed.

5. **Verify Functionality:**
   - Test all interactive functions such as adding services to the cart, booking, and subscribing to the newsletter to ensure that everything operates as expected.

This straightforward installation process makes it easy to set up and modify the project to suit various requirements fileciteturn0file2.

------------------------------------------------------------
