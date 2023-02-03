
import { Button } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App ">
      <header className="App-header  ">

        {/* <Stack direction="horizontal" gap={2}> */}
        <Button as="a" variant="primary">
          Welcome
        </Button>

        {/* </Stack> */}
      </header>
    </div>
  );
}

export default App;
