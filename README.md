# Doghouse Service

## Features

- **Create dog**: Create a new dog
- **Get dogs**: Get a dogs list with pagination and sorting 

## Installation

To run Doghouse Service locally, follow these steps:

You need to have installed Node.js, npm and psql on your machine.

1. Clone the repository:

```bash
git clone https://github.com/olehmartynenko/Doghouseservice.git
```
2. Install the dependencies:

```bash
cd Doghouseservice
npm ci
```

3. Configure the environment variables in .env file (see .env.example):

4. Create and seed the database:

```bash
npm run createAndSeedDb
```

5. Run the application:

```bash
npm start
```

6. Open application in browser:

```bash
http://localhost:PORT
```

You can find the API documentation here: http://localhost:PORT/api-docs