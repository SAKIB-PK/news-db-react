import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Cards from './Component/Cards/Cards';

// api key = '66449628807a42dcaa088f9866196fa9'

function App() {
  const [news,setNews] = useState([])
  // make XMLHTTPRequest using asios
  useEffect(()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=66449628807a42dcaa088f9866196fa9')
    .then(res =>setNews(res.data.articles))
  },[])
  return (
    <Container >
      {
        (news.length !==0) ? <Cards news={news} /> :  <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'><Spinner  animation="border" variant="danger" /></div>
      }
    </Container>
  );
}

export default App;
