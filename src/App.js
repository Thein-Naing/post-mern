
import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div
    style={{width:"90%", margin: "auto auto", textAlign:'center'}}

    >
      <h4>Write your post</h4>
      <Button
      variant="outline-dark"
      style={{width:"20%"}}
      onClick={() => navigate("create")}>Next</Button>
    </div>
  );
}

export default App;
