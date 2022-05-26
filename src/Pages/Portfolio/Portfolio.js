import React from 'react';

const Portfolio = () => {
    return (
        <div className='mx-auto container'>
            <h2 className='text-center font-semibold text-3xl'>Md. Amit Hasan</h2>
            <p className='text-center'>bhamithasan@gmail.com</p>

            <h4 className='text-secondary text-xl my-5'>Educational Background</h4>
            <p>
                BSc (Honors) In Computer Science & Engineering
                University Of Development Alternative
                Duration: 2017-2021
                CGPA: 3.99
            </p>

            <h4 className='text-secondary text-xl my-5'>
                Skills
            </h4>
            <p>
                <span className='font-semibold'>Frontend</span>: JavaScript (ES6), ReactJS, SPA, ReactRouter, React Hooks, Bootstrap5, Tailwind,
                HTML5, CSS3 <br /><br />
                <span className='font-semibold'>Backend</span>: NodeJS, ExpressJS, MongoDB, Rest API <br /><br />
                <span className='font-semibold'>Tools</span>: VSCode, Chrome-Dev tool, JWT, GitHub, Netlify, Firebase, Strip, Heroku, Figma, NPM,
                Yarn, React Forms
            </p>

            <h4 className='text-secondary text-xl my-5'>
                Projects
            </h4>
            <p className='mt-5'>
                <b>Inventory Management</b> <br />

                <a href="https://nasah-inventory-management.web.app/">Live Site</a><br />
                <a href="https://github.com/MohammadAmitHasan/Inventory-Management-Client">GitHub-Client</a><br />
                <a href="https://github.com/MohammadAmitHasan/Inventory-Management-Server">GitHub-Server</a><br />
                ● Users can observe the stock of every product, the last imported product’s list, the last sale <br />
                product’s list, and update the stock amount easily. <br />
                ● Users can easily add new product items in add a product section. <br />
                ● User-wise secure data filtration. A user can see the products he/he has added to the list of
                products. <br />
                ● The website has a secure user authentication system and a secured data protection
                system. <br />
                Technologies: ReactJS, React Hooks, Tailwind, Axios, Firebase, JWT, ReactRouter, React hook
                form, SwiperJS, React Toastify, NodeJS, ExpressJS, MongoDB, etc. <br />
            </p>

            <p className='mt-5'>
                <b>Hasan Hijama Services</b> <br />

                <a href="https://hasan-hijama-services.web.app/">Live Site</a> <br />
                <a href="https://github.com/MohammadAmitHasan/Hasan-Hijama-Service">GitHub-Client</a> <br />

                ● Users can see the services the service provider provides <br />
                ● Secure Authentication System with email-based login and social login like Google, GitHub <br />
                Technologies: ReactJS, React Hooks, Tailwind, Firebase, ReactRiuter, React Toastify, React
                Spinners, React-Responsive-Carousel. <br />
            </p>
        </div>
    );
};

export default Portfolio;