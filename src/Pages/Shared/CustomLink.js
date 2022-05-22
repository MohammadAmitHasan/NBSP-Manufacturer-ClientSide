import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyle = {
        color: match ? '#ff2e70' : 'black',
    }
    return (
        <div className=' mb-3 md:mb-0'>
            <Link
                className='font-semibold decoration-none mx-3 py-2 px-2 rounded-sm text-lg hover:bg-sky-100 border-b-2 border-white hover:border-[#ff2e70]'
                style={activeStyle}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;

