import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


export default function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=> {
    axios.get('http://localhost:3001/create/posts')
    .then((res)=> {
      console.log(res);
      setPosts(res.data);
    })
    .catch((err) => console.log(err))

  }, []);

const deletePost = (id) => {
  console.log(id)
  axios.delete(`http://localhost:3001/delete/${id}`)
  .then((res)=> console.log(res))
  .catch((err)=> console.log(err))

  window.location.reload();
};

  const updatePost = (post) => {
   setUpdatedPost(post);
    handleShow();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };


  const savedUpdatedPost = () => {
    axios.put(`http://localhost:3001/update/${updatedPost._id}`, updatedPost)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));

    handleClose();
    window.location.reload();
  }





  return (
    <div style={{width:"90%", margin: "auto auto", textAlign:'center'}}>
      <h2>Posts</h2>
      <Button
      onClick={()=> navigate(-1)}
      variant="outline-dark"
      style={{ width:"100%", marginBottom: "1.5rem"}}

      >Back</Button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
            <Form.Control
            style={{marginBottom: "1.5rem"}}
            placeholder="Title"
            name="title"
            value={updatedPost.title ? updatedPost.title : "N.A" }
            onChange={handleChange}

            />
            <Form.Control
            placeholder="Description"
            name="description"
            value={updatedPost.description ? updatedPost.description : "N.A" }
            onChange={handleChange}
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savedUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>















      {posts ? (
        <>
        {posts.map((post) => {
          return(
            <div
            key={post._id}
            style={{ border: "solid lightgray 1.5px",
            borderRadius: "6px",
            marginBottom:"1.5rem"}}>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
              <Button
              variant="outline-info"
              style={{ width:"100%", marginRight: "1.5rem"}}
              onClick={()=>updatePost(post)}

              >Update</Button>
              <Button
               variant="outline-danger"
              style={{ width:"100%"}}
              onClick={()=> deletePost(post._id)}

              >Delete</Button>
              </div>
            </div>
          )

        })}
        </>

      ) : ''}
    </div>
  );
}
