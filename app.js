const express = require('express');
const app = express();
require('dotenv').config();
require('./models');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
