import { useState, useEffect } from 'react';
import logic from '../hooks/logic';
import Card from './Card';

const BackwardCounter = () => {
  const counter = logic(false); 
 
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
