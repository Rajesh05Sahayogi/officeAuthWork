import React from 'react';
import UserSale from './UserSale';
const SalesPr = ({ alluser }) => {

  return (
    <div>
      {alluser.map((currUser) => (
        <UserSale key={currUser.id} user={currUser}/>
      ))}
    </div>
  );
};

export default SalesPr;
