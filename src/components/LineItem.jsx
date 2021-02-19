import React from 'react';
const LineItem = ({
        address,
        city,
        state,
        postalCode,
        className,
        phone,
        ...props
      }) => {
    return (
        <p>{address}<br />{city}, {state} {postalCode}<br /><button type="button"className="link-button" >{phone}</button></p>
       
        );
}
export default LineItem;
