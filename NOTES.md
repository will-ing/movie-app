# Notes

## stateless components

> A `functional stateless component` is just a plain javascript function which takes props as an argument and returns a react element

You should use functional stateless components anytime you are not using refs or life cycle methods

## Lifecycle methods

- mounting - setting up the component. This runs after the component has been rendered to the DOM.
- unmounting - removing the component when its finished.

## Routers

1 `npm install react-router-dom`

2 import BrowserRouter

```js
import{
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'; 
```

Wrap router around app

```js
 render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          this is the header
        </header>
        <Route path="/test" component={ test } />
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
    </Router>
    );
  }
}

export default App;

const Test = () => {
  <h1>TEST</h1>
}
```

