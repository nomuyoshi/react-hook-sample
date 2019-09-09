import React, { useState } from 'react';

export default function UseStateSample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Joy', email: 'joy@example.com' });

  const handleUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <p>クリック数: {count}回</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        click!!
      </button>

      <p>ユーザー</p>
      <ul>
        <li>名前: {user.name}</li>
        <li>メール: {user.email}</li>
      </ul>
      <div>
        名前: <input type="text" value={user.name} name="name" onChange={handleUserChange}/>
      </div>
      <div>
        メール: <input type="email" value={user.email} name="email" onChange={handleUserChange}/>
      </div>
    </div>
  );
}
