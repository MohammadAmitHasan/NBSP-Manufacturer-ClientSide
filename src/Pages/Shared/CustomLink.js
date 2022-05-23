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
                className='btn btn-ghost'
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

