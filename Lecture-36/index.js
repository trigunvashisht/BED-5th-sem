// Root entrypoint: delegate to api/index.js
// This file allows running `node index.js` from the project root.

try {
  require('./api/index.js');
} catch (err) {
  console.error('Failed to start application from root index.js:', err.message);
  console.error(err);
  process.exit(1);
}