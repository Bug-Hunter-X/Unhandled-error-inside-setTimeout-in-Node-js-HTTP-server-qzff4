# Unhandled Error in Node.js HTTP Server

This repository demonstrates an uncommon error scenario in Node.js where an unhandled error occurs within an asynchronous callback of an HTTP server. The error is thrown inside a `setTimeout` function, making it difficult to catch using a standard `try...catch` block.

## Bug Description
The `bug.js` file contains a simple HTTP server.  If you request `/error`, an error is intentionally thrown within the `setTimeout` callback.  Because the error is asynchronous, it is not caught by the server's event loop and results in a crash. 

## Solution
The solution in `bugSolution.js` addresses this by handling the error using the server's `'error'` event listener. This ensures that errors thrown within asynchronous callbacks are gracefully handled, preventing server crashes.