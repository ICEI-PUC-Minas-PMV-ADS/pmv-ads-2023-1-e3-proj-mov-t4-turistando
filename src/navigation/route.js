import React from 'react';

import {useUser} from '../context/UserContext';

import Main from './main';
import Auth from './auth';


const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed
      ? <Auth />
      : <Main />
    }
    </>
  )

}

export default Route;