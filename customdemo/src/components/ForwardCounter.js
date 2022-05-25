import { useState, useEffect } from 'react';

import Card from './Card';
import logic from '../hooks/logic';

const ForwardCounter = () => {
 const counter = logic();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
