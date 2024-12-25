```javascript
// pages/aboutSolution.js

export default function About() {
  try {
    const nonExistentVariable = something; //ReferenceError: something is not defined
    return (
      <div>
        <h1>About Page</h1>
        <p>{nonExistentVariable}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>An error occurred: {error.message}</p>
      </div>
    );
  }
}
```