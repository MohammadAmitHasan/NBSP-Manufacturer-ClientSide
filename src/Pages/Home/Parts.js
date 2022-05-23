import React from 'react';
import useParts from '../../Hooks/useParts';

const Parts = () => {
    const partsData = useParts();
    console.log(partsData);
    return (
        <div>

        </div>
    );
};

export default Parts;