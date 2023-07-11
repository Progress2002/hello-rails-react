import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGreetings from '../redux/greetingsThunk';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((store) => store.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return <div>{greeting ? greeting : <p>Loading ...</p>}</div>;
}

export default Greeting;