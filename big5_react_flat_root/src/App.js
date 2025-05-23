
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) return <Login />;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Big 5 App</h1>
      <p>You are logged in as: {user.email}</p>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
