
import './App.css';
import { useState } from 'react'

function App() {

  const [userData, setUserData] = useState([]);
  fetch("https://gorest.co.in/public/v2/users")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('result', result)
        setUserData(result)
      },
      (error) => {}
    )

  return (
    <>
      {console.log('userData', userData)}
      {userData.map((userData) => (
        <p>{`${userData.name},${userData.status}`}</p>

      ))}
    </>
  );
}

export default App;
