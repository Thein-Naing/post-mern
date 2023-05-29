import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title:  "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
      ...prev,
      [name]: value,
        }
      });
    };

    // useEffect(() => {
    //   console.log(post);
    // }, [post]);

    const handleClick = (e) => {
      e.preventDefault();
      // console.log(post)

      axios.post("http://localhost:3001/create", post)
      .then((res)=> console.log(res))
      .catch((err )=> console.log(err));

      navigate("/create/posts")

      };


return(
  <div style={{width:"90%", margin: "auto auto", textAlign:'center'}}>
    <h2>Create a post</h2>
    <Form>
      <Form.Group>
        <Form.Control
        name="title"
        placeholder="Title"
        style={{marginBottom: "1.5rem"}}
        value={post.title}
        onChange={handleChange}
        />

        <Form.Control
        name="description"
        placeholder= "Description"
        style={{marginBottom: "1.5rem"}}
        value={post.description}
        onChange={handleChange}
        />
      </Form.Group>
      <Button
      variant="outline-success"
      style={{width:"100%",  marginBottom:"1.5rem"}}
      onClick={handleClick}>
        Save
      </Button>
    </Form>

    <Button
    variant="outline-dark"
    style={{width:"100%", marginBottom: "1.5rem"}}
    onClick={() => navigate(-1)}>Back</Button>
  </div>
  );
}

export default CreatePost;
