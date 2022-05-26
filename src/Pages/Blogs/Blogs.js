import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h3 className='text-xl text-primary mb-2'>
                        How will you improve the performance of a React Application?
                    </h3>
                    <p>
                        1. By memorizing react components to prevent unusual re-rendering. <br />
                        2. Keeping components state local if possible <br />
                        3. Using code-splitting system <br />
                        4. Making sure the components are receiving only necessary props <br />
                        5. Using functional components <br />
                        6. Deleting wasted renders using performance optimization tool <br />
                        7. React performance tuning by fixing unnecessary rendering of components. Etc

                    </p>
                </div>

                <div className='p-5 shadow-lg rounded-lg'>
                    <h3 className='text-xl text-primary mb-2'>
                        2. What are the different ways to manage a state in a react application?
                    </h3>
                    <p>
                        There are five types of React application states through which we can handle the react States. They are: <br />
                        1. Data state <br />
                        2. Communication state<br />
                        3. Control state <br />
                        4. Session state <br />
                        5. Location state <br />
                    </p>
                </div>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h3 className='text-xl text-primary mb-2'>
                        4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </h3>
                    <p>
                        We use setProducts because it allows us to keep track of state in a function component. This makes the react application much faster and react can handle it in a much faster way by using virtual dom. When we set a new array in the setProducts React application doesn't render the entire page instead, it identifies the change and only renders those. So the main purpose is to make the react application faster.
                    </p>
                </div>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h3 className='text-xl text-primary mb-2'>
                        5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </h3>
                    <p>
                        const result = products.filter( <br />
                        product => product.brand.toLowerCase().includes <br />
                        (search.toLocaleLowerCase()))

                        <br />
                        <br />
                        The result variable will contain the searched data
                    </p>
                </div>
                <div className='p-5 shadow-lg rounded-lg'>
                    <h3 className='text-xl text-primary mb-2'>
                        6. What is a unit test? Why should write unit tests?
                    </h3>
                    <p>
                        We should write the Uint test for: <br />
                        1. It ensures that all code needs quality standards before deployment. <br />
                        2. It is also useful in case of rewriting a piece of code. <br />
                        3. It saves time in case of reusing code. <br />
                        4. This makes implementation details shorter and easier to understand. Etc. <br />

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;