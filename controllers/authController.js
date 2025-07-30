// Mock user data
const mockUser = {
  username: 'admin',
  password: 'password123'
};

exports.showLogin = (req, res) => {
  res.send(`
    <form method="POST" action="/auth/login">
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `);
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).send('All fields are required.');
  }

  // Authenticate
  if (username === mockUser.username && password === mockUser.password) {
    return res.send('Login successful!');
  } else {
    return res.status(401).send('Invalid username or password.');
  }
};

exports.logout = (req, res) => {
  // In a real app, you would destroy the session or token here
  res.send('Logged out successfully!');
};
