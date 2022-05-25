import { useState } from 'react';

const SimpleInput = (props) => {

  const [name, setname] = useState('')

  const [touch, settouch] = useState(false)

  const validname = name.trim() !== '';
  const validtouch = !validname && touch;

  const inputvalue = (event) => {
    setname(event.target.value);

  }

  const blurinput = event => {
    settouch(true);

  }
  const submitHandler = (event) => {
    event.preventDefault();

    settouch(true);
    if (!validname) {

      return;
    }



    console.log(name);

    setname('');
    settouch(false)
  };


  const inputclass = validtouch ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={inputclass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputvalue} onBlur={blurinput} value={name} />
        {validtouch && <p className='error-text'>Name Not Empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );

};

export default SimpleInput;
