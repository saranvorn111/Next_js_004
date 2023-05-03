import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { IMAGE_BASE_URL } from '@/lib';
import { useRouter } from 'next/router';
export default function CardComponent({title,description,imagePath,id}) {
  const router = useRouter();
  const handleClick = ()=>{
    router.push(`/movies/${id}`);

  };
  return (    
    <div className='mt-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagePath? IMAGE_BASE_URL+ imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} />
        <Card.Body>
          <Card.Title>{title? title: "Unknows"}</Card.Title>       
          <Button onClick={handleClick} variant="primary">View detail</Button>
        </Card.Body>
      </Card>
    </div>
   
  )
}


