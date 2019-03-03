import React from 'react';
import { Link } from 'react-router-dom'

import Workout from '../components/workout';
import Exercise from '../components/exercise';

let workoutDays = require('../../../js/workoutDays.json');


const WorkoutContainer = () => {
  return (
    <div className='workouts-wrapper'>
      {workoutDays.map((workoutDay, i) => {
        return (
          <Link key={ i } to='workoutDay'>
            <Workout
              key={ i }
              { ...workoutDay }
            >
              {workoutDay.exercises.map((exercise, i) => {
                return (
                  <Exercise
                    key={ i }
                    { ...exercise }
                  />
                );
              })}
            </Workout>
          </Link>
        )
      })}
    </div>
  )
};

export default WorkoutContainer;
