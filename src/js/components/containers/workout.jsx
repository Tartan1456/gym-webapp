import React from 'react';
import { Link } from 'react-router-dom'

import Workout from '../components/workout';
import Exercise from '../components/exercise';

const WorkoutContainer = () => (
  <div className='workouts-wrapper'>
    <Link to='workoutDay'>
      <Workout
        date='Fri 31 Aug'
        muscleSet='Legs &amp; Shoulders'
      >
        <Exercise
          exerciseName='SQ'
          sets='5x5'
          weight='30kg'
        />
      </Workout>
    </Link>
    <Workout
      date='Mon 3 Sep'
      muscleSet='Back'
    >
      <Exercise
        exerciseName='DL'
        sets='5x5'
        weight='60kg'
      />
    </Workout>
  </div>
);

export default WorkoutContainer;
