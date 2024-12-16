import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addPerson, PeopleStateType, PersonType } from './redux/peopleReducer';

function App() {
  const dispatch = useDispatch(); 

  return (
    <>
      this is a thing 
    </>
  );
}

export default App;
