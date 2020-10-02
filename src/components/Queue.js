import React, { useState } from 'react';

const Queue = () => {
  const [input, setInput] = useState('');
  const [final, setFinal] = useState('');

  const onChange = (info) => (e) => {
    setInput({ input: e.target.value });
  };

  onsubmit = (e) => {
    console.log(input, '1');
    e.preventDefault();
    setInput({ ...input });
    console.log(input, '2');
    // setFinal({ final: input });
    // setFinal({ final: input });
  };

  return (
    <div>
      <form>
        <h3>Input Value</h3>
        <br />
        <br />
        <label>
          Value:
          <input onChange={onChange('info')} type='text' name='name' />
        </label>
        <br />
        <br />
        <input type='submit' value='Submit' />
        {/* <h3>{input}</h3> */}
        <h3>{JSON.stringify(input)} </h3>
        {/* <h3>{JSON.stringify(final)} </h3> */}
      </form>
    </div>

    /* <div className='form-group'>
<label className='text-muted'>Email</label>
<input
  onChange={onChange('email')}
  type='email'
  className='form-control'
  value={email}
/>
</div> */
  );
};

export default Queue;
