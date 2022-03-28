import './App.css';

const App = () => (
  <div className="App">
    <h1>Frontend Interview Exercise</h1>

    <section>
      <h2>What to code</h2>
      <p>The exercise is to build a simple front-end web application that has two screens: a user sign-up form, and a user admin screen.  This should take you between 2-4 hours to complete.</p>

      <p>Some sample screenshots have been provided but you are welcome to use your own design instead.  You do not need to create any custom graphics.  Feel free to utilize CSS frameworks if you prefer.</p>

      <p>See <code>/examples/new_user.png</code> in the repo for a sample screenshot.</p>

      <p>The user sign-up form should</p>

      <ul>
        <li>Accept the first name, last name, nickname, and email address</li>
        <li>Each of the inputs is required except nickname</li>
        <li>Validate the email - a simple rule that follows <code>x@y.z</code> format</li>
        <li>A submission should be rejected if the email address is already in use</li>
      </ul>

      <p>See <code>/examples/user_list.png</code> in the repo for a sample screenshot.</p>

      <p>The user admin screen should</p>

      <ul>
        <li>Display each user's info in a simple format.  You can use a table, cards, or anything else you'd like.</li>
      </ul>
    </section>
    <section>
      <h2>Doing the exercise</h2>
      <p>This repo is based on the vanilla <code>create-react-app</code> template that is meant to help you get started, but feel free to use a different boilerplate or start with a clean slate.  You shouldn't need to, but you may also add additional NPM libraries as you like.  It is often just as important to be able to combine various open source libraries into a cohesive product.</p>
      <p>It is preferred for you to complete this exercise using ReactJS, but if you are unfamiliar, you are also welcome to use other frameworks like Angular or Vue.</p>
    </section>
    <section>
      <h2>Evaluation</h2>

      <p>Your implementation will be evaluated against the following criteria:</p>
      <ul>
        <li>it has to work</li>
        <li>cleanliness and readability of code</li>
        <li>creativity - It's great to show off interesting implementations, but stick to the objectives.  This exercise should not take too long, so don't feel the need to add extra features.</li>
      </ul>
    </section>
  </div >
);

export default App;
