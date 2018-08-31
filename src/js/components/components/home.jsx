import React from 'react';

import Header from '../components/header';
import WorkoutContainer from '../containers/workout';

const Home = () => (
  <div>
    <Header
      title='Workouts'
    />
    <WorkoutContainer
      date='Fri 31 Aug'
      muscleSet='Legs &amp; Shoulders'
    />
  </div>
);

export default Home;
