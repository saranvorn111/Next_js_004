import { useRouter } from 'next/router';
import React, {useEffect,useState} from 'react'; 
import { BASE_URL,API_KEY,IMAGE_BASE_URL } from '@/lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Modal from 'react-bootstrap/Modal';

export default function Movie() {
    const router = useRouter();  
    console.log(router.query);

    const[id,setId]= useState(router.query.id);
    const [movie,setMovie]= useState({});
    const [loading,setLoading]=useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState();


    useEffect(() => {        
        fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
            .then((respone) => respone.json())
            .then((data) => {
                console.log("movie url ", data)
                const key = data.results[0].key;
                setKey(key);
            })
          });        
    useEffect(() =>{
      setLoading(true);
      fetch(BASE_URL+`/movie/${id}?api_key=${API_KEY}`).then((res)=> res.json())
      .then((data) =>{
        console.log("data at movie page:",data);
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setLoading(false);
      });     
      
    },[]);
    if(loading){
      return <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
    }
  return (
    // <Card style={{ width: '80%', height:'60%' }}>
    //   <Card.Img variant="top" src={movie.backdrop_path? IMAGE_BASE_URL + movie.backdrop_path:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} />
    //   <Card.Body>
    //     <Card.Title>{movie.title? movie.title :"Unknows"}</Card.Title>
    //     <Card.Text>
    //       {movie.overview? movie.overview :"Unknows"}
    //     </Card.Text>        
    //   </Card.Body>
    // </Card>
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-6'>
          <Card.Img variant="top" src={movie.backdrop_path? IMAGE_BASE_URL + movie.backdrop_path:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} />
        </div> 
        <div className='col-6'>
          <Card.Body>
          <Card.Title>{movie.title? movie.title :"Unknows"}</Card.Title>
          <Card.Text>
            {movie.overview? movie.overview :"Unknows"}
          </Card.Text>   
          <Button variant="primary" onClick={handleShow}>Play Viedo</Button>     
        </Card.Body>
        </div>
      </div> 
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
            <div class="ratio ratio-16x9">
                <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video" allowfullscreen></iframe>
            </div>
        </Modal>
      </div>       
    </div>

    
  )
}
