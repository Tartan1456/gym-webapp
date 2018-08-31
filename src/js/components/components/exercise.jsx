import React from 'react';

const Exercise = ({ exerciseName, sets, weight }) => (
  <div className='workout__exercise'>
    <div className='workout__exercise-name'>
      { exerciseName }
    </div>
    <div className='workout__sets'>
      { sets }
    </div>
    <div className='workout__weight'>
      { weight }
    </div>
  </div>
);

export default Exercise;
