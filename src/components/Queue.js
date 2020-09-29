import React, { useState } from 'react';

const Queue = () => {
  const [input, setInput] = useState([]);

  const onChange = (info) => (e) => {
    setInput({ input: e.target.value });
  };

  //   const onChange = (name) => (e) => {
  //     setValues({
  //       ...values,
  //       [name]: e.target.value,
  //     });
  //   };

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
