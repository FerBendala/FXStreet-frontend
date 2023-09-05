# FXStreet Frontend test

This manual provides instructions for running and building an application in development and production mode.

## Install dependecies
Before getting started, ensure that all the necessary dependencies are installed by running the following command:
```bash
npm install
```

## Development
To run the application in development mode, follow these steps:
1. Start the development server with the following command:
```bash
npm start
```

2. If the browser doesn't open automatically, navigate to http://localhost:3000/ to view the application.


## Production
To run the application in production mode, follow these steps:
1. Build the production server by running the following command:
```bash
npm run build
```

2. Start the server with the following command:
```bash
npm run serve
```

3. If the browser doesn't open automatically, navigate to http://localhost:8000/ to view the application.


## Testing
To execute the application's tests, use the following commands:
1. Run all tests with coverage:
```bash
npm run test
```

2. Run a specific test file:
```bash
npm run test tests/{folder}/{file}.test.js
```