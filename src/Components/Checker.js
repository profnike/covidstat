import '../Style/Checker.css'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import React, {useEffect,useState} from 'react';
import {Link} from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import NumberFormat from 'react-number-format'

function Checker() {
  const [latest,setLatest]=useState([])
  const [value,setValue]=useState([])
  const [country, setCountry]=useState("")
  const [countryname, setCountryname]=useState("")
  const [loading, setLoading]=useState(false)
  const [post, setPost]=useState(null)
  const [content, setContent]=useState({display:"none"})
 
  const [headInputs, setHeadInputs]=useState({fontWeight:"bold",
display:"none", fontSize:"medium",})

const [searchDatar, setSearchDatar]=useState("")

   
  

  function reset(){
   
   setCountry("")
    
  }
  useEffect(()=>{
    
    axios
     
    .all([
      axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
      axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
    ])
   

    .then(res =>{
      setLatest(res[0].data);
      setValue(res[1].data)
      const {body}=res[0]
      setPost(body)
     setLoading(true)
   
    })
     
   
    
  
 .catch (err =>{
    
      console.log(err)
    })
    
   
    
  },[]);
 var NumberFormat= require('react-number-format')
  
  const date= new Date(parseInt(latest.updated))
  const latestUpdated=date.toString();

  const countryFilter=value.filter(val =>{
    return country!="" ? val.country.toLowerCase().includes(country.toLowerCase()):val
  })
  const countryCases=
  
 countryFilter.map((data, index) =>{
    return (
      <Col
      className="colum" key={index} style={{display:"flex",justifyContent:"center",
     
       }}>
     
      <Card
      key={index}
      bg="light"
      text="dark"
      className="text-center"
      id="carrd"
      style={{margin:"5px", }}>
        <Card.Img variant="top" src={data.countryInfo.flag} style={{height:"140px",}} />
        <Card.Body>
          <Card.Title  > {data.country}</Card.Title>
            <Card.Text>Total Cases: {data.cases.toLocaleString()}</Card.Text>
            <Card.Text>Recovered: {data.recovered.toLocaleString()}</Card.Text>
            <Card.Text>Deaths: {data.deaths.toLocaleString()}</Card.Text>
            <Card.Text>Today's cases: {data.todayCases.toLocaleString()}</Card.Text>
            <Card.Text>Today's deaths: {data.todayDeaths.toLocaleString()}</Card.Text>
            <Card.Text>Active Cases: {data.active.toLocaleString()}</Card.Text>

           
         
        </Card.Body>
      </Card>
      </Col>
    )
  })
  
 
  
    return (
      <div className="Checker">
         {loading ? 
       ( <div >
       <h2>Covid-19 Statistics</h2>
       <hr className="covidcheckerhorizontal"></hr>
      <CardGroup>
  <Card className="mb-2" bg="secondary" style={{ margin: '10px', }} text="white">
    
    <Card.Body>
      <Card.Title>Total Cases</Card.Title>
      <Card.Text>
        {latest.cases.toLocaleString()}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {latestUpdated}</small>
    </Card.Footer>
  </Card>
  <Card className="mb-2" bg="dark" style={{ margin: '10px' }} text="white">
  
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
     {latest.deaths.toLocaleString()} 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {latestUpdated}</small>
    </Card.Footer>
  </Card>
  <Card className="mb-2" bg="success" style={{ margin: '10px' }} text="white">
    
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
     {latest.recovered.toLocaleString()}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {latestUpdated}</small>
    </Card.Footer>
  </Card>
</CardGroup>

<Form>
  <Form.Group className="mb-3" controlId="formGroupSearch" style={{
    display:"flex"
  }}>
    
    <Form.Control type="text" placeholder="Enter Country name" value={country} onChange={e => setCountry(e.target.value)}
    style={{marginTop:"15px",position:"relative",border:"3px solid black",marginBottom:"15px",marginLeft:"20px",marginRight:"20px"}} />
  <div className="resetButton" onClick={e => reset()}>Reset</div>
  </Form.Group>

  
</Form>

<Row xs={1} md={4} className="g-4">{countryCases}
      </Row>

      
      </div>)
 

      : (<Spinner animation="border" id="spin" 
      />)}
      </div>
    );
  }
  
  export default Checker;