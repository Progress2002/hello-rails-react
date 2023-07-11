import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGreetings from '../redux/greetingsThunk';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((store) => store.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return <h2>{greeting || "Loading ..."}</h2>;
}

export default Greeting;
