// react function component
// one function can return only one html element
// before return we can write javascript code
// we can use curly braces to run javascript code in html
function App() {
  const name = "Khairulamirin";
  const age= 20;
  const isMale = true;
  return (
    <div>
      <h1>Hello, world</h1>
      <p>Welcome to your new single-page application, built with React.</p>
      <p>Hi, my name is {name}</p>
      <p>I am {age} years old</p>
      <p>I am an adult: {(age > 18) ? "Yes" : "No"}</p>
      <p>I am a male: {(isMale) ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;