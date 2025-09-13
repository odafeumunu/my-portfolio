import pro1 from "../assets/pro1.webp";
import pro2 from "../assets/pro2.webp";
import pro3 from "../assets/pro3.webp";
import pro4 from "../assets/pro4.webp";
import pro5 from "../assets/pro5.webp";
import pro6 from "../assets/pro6.webp";

export const projects = [
  {
    name: "Hotel",
    color: "",
    link: "https://github.com/odafeumunu/Hotel-and-suites",
    code: "/project/hotel",
    image: pro3,
    desc1:
      "Designing the hotel website was an exciting challenge that required a balance of aesthetics, functionality, and user-friendliness. I began with a clean HTML structure to lay the foundation for a responsive and intuitive interface. Using CSS, I carefully styled the layout to reflect the hotel's brand identity, incorporating elegant typography, a calming color palette, and visually appealing imagery to create a welcoming atmosphere. I utilized media queries to ensure the site was fully responsive, providing an optimal experience across all devices, from desktops to smartphones.",
    desc2:
      "To add dynamic functionality, I integrated JavaScript for interactive features like a real-time booking form and a responsive navigation bar. For the backend, I used PHP to handle server-side operations, such as storing and retrieving booking data securely. The seamless connection between the frontend and backend ensured a smooth user experience, while keeping customer data secure. By combining these technologies, I delivered a robust and visually engaging website that effectively showcases the hotel's services and allows visitors to book with ease.",
  },
  {
    name: "Movie",
    color: "",
    link: "https://szmovie-app.netlify.app",
    code: "/project/movie",
    image: pro4,
    desc1:
      "The movie website project involved building a dynamic and responsive platform using React.js and Tailwind, focusing on delivering seamless access to a vast movie database. I structured the app with reusable components to ensure maintainability and efficient rendering. By integrating the TMDB API, I enabled real-time fetching and display of up-to-date movie information, including posters, ratings, and descriptions. The interface was designed with user experience in mind, featuring intuitive navigation and clean layouts that highlight the cinematic content. Responsive design principles were applied to guarantee optimal usability across various devices, from smartphones to desktops.",
    desc2:
      "To enhance functionality, I implemented a robust search feature allowing users to quickly find movies by title, with live suggestions improving the discovery process. The app also connects with Supabase to manage user data and preferences, facilitating a personalized experience. Additional interactive elements such as movie detail modals and pagination were included to streamline browsing. By combining React’s component-driven architecture with real-time API data and backend integration, I created a modern and engaging movie platform that provides users with rich content and smooth interactivity.",
  },
  {
    name: "Lendsqr",
    color: "dark-bg",
    link: "https://umunu-odafe-peter-lendsqr-fe-test.netlify.app",
    code: "/project/lendsqr",
    image: pro1,
    desc1:
      "The Lendsqr project was a rewarding opportunity to showcase my skills in TypeScript and SCSS while building a modern, responsive web application. Using TypeScript, I created strongly-typed components in React, ensuring better code maintainability and reducing runtime errors. This approach allowed me to handle complex state management and API integration seamlessly, especially when working with mock data for the dashboard and user details. By leveraging TypeScript's static typing, I was able to build a robust application with confidence in the accuracy of my code.",
    desc2:
      "For styling, I utilized SCSS to create modular and reusable styles, making it easier to maintain a consistent design across the project. I implemented SCSS features like mixins and variables to simplify styling for the mobile-responsive layout and ensure adherence to the provided design specifications. The project also required implementing dynamic filtering, navigation, and local storage for enhanced user experience. The combination of TypeScript and SCSS allowed me to deliver a clean, functional, and visually appealing application that met all the requirements efficiently.",
  },
  {
    name: "Crypto",
    color: "dark-bg",
    link: "https://crypttoos.netlify.app",
    code: "/project/crypto",
    image: pro5,
    desc1:
      "Building the frontend for the crypto website was a thrilling challenge that allowed me to blend creativity with functionality. Using HTML, I structured the content to provide a seamless and intuitive user experience. With CSS, I crafted a sleek, modern design that reflected the dynamic nature of the cryptocurrency industry, using grids and flexbox for responsive layouts. To enhance the website’s appeal, I implemented both light and dark modes, allowing users to switch themes effortlessly based on their preferences. This feature was made possible by leveraging CSS custom properties (variables) for dynamic styling and ensuring consistent design across themes.",
    desc2:
      "To add interactivity and functionality, I used JavaScript to manage theme toggling, interactive charts, and responsive navigation. The theme-switching mechanism was optimized for user convenience, storing the selected mode in local storage to persist preferences even after the site was reloaded. These features, combined with clean code and responsive design principles, resulted in a highly engaging and user-centric frontend that aligned perfectly with the fast-paced and innovative spirit of the cryptocurrency industry.",
  },
  {
    name: "Hospital",
    color: "",
    link: "https://healthtemplate.netlify.app",
    code: "/project/hospital",
    image: pro2,
    desc1:
      "Designing the hospital website was a rewarding project where I focused on creating a clean, professional, and user-friendly platform. Using HTML, I structured the site to prioritize accessibility, ensuring that vital information like services, doctor profiles, and appointment booking options were easy to find. I incorporated Bootstrap for faster development and consistent styling, leveraging its grid system to create a responsive layout that works seamlessly across devices. With CSS, I fine-tuned the design to reflect a calm and trustworthy aesthetic, using soothing colors and appropriate typography to enhance user comfort.",
    desc2:
      "To make the site interactive and functional, I used JavaScript for features like a dynamic appointment form, interactive navigation menus, and a carousel for showcasing hospital facilities. Bootstrap's components, such as modals and accordions, allowed me to implement user-friendly interactions efficiently. The final result was a visually appealing and highly functional website that not only represented the hospital's brand but also made it easy for patients to find information, book appointments, and engage with the hospital's services.",
  },
  {
    name: "Car",
    color: "dark-bg",
    link: "https://carweblink.netlify.app",
    code: "/project/car",
    image: pro6,
    desc1:
      "Designing the Tesla car website was an exciting project where I focused on capturing the sleek, innovative essence of the Tesla brand. Using HTML, I built a structured layout that showcased key sections like car models, features, and a call-to-action for exploring more about Tesla vehicles. With CSS, I designed a clean and modern aesthetic, incorporating Tesla’s signature minimalistic style with bold typography, high-quality images, and smooth animations. I also utilized media queries to ensure the website was fully responsive, providing an optimal browsing experience on both desktop and mobile devices.",
    desc2:
      "To enhance interactivity, I implemented JavaScript for dynamic features such as smooth scrolling, a sticky navigation bar, and interactive buttons for exploring car models and their specifications. I also added animations to create a seamless experience when navigating through different sections, ensuring a premium feel consistent with Tesla's brand. By combining these technologies, I delivered a visually striking and functional website that effectively highlights Tesla’s innovation and cutting-edge design.",
  },
];
