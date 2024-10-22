import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const worksData = [
    {
      id: 1,
      image: require('../assets/images/img6.jpg'),
      title: 'Lonely Path',
      subtitle: 'Travelling'
    },
    {
      id: 2,
      image: require('../assets/images/img3.jpg'),
      title: 'Passionate about',
      subtitle: 'Frontend Development'
    },
    {
      id: 3,
      image: require('../assets/images/img7.jpg'),
      title: 'Winter Sonata',
      subtitle: 'Winter arc'
    },
    {
      id: 5,
      image: require('../assets/images/img8.jpg'),
      title: 'Personal Branding',
      subtitle: 'UI/UX Designer'
    },
    {
      id: 6,
      image: require('../assets/images/img9.jpg'),
      title: 'Appreciation',
      subtitle: 'Photography'
    },
    {
      id: 7,
      image: require('../assets/images/img2.jpg'),
      title: 'Happy Days',
      subtitle: 'Writing Notes'
    }
  ]
  

export default function AppWorks(){
    return(
       <section id="works" className="block works-block">
           <Container fluid>
        <div className="title-holder">
          <h2>My Hobbies</h2>
          <div className="subtitle">How I'm enjoy my life</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container> 
       </section>
    )
}