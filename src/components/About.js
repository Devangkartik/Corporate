import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/img1.jpg'

const About = () => {
    
    const html = 80;
    const javascript = 75
    const react = 80
   const responsive = 85;
 

  return (
    <section id="about" className="block about-block">
    <Container fluid>
      <div className="title-holder">
        <h2>About Me</h2>
        <div className="subtitle">Know more about me</div>
      </div>
      <Row>
        <Col sm={12} md={6} >
  <Image  src={img1} style={{width : 600,height : 520}} />
        </Col>
        <Col sm={12} md={6}>
        <div >
          <p>I am a passionate and dedicated BCA graduate with a strong interest in Frontend Development. As a fresher, I am seeking an entry-level position in an environment that fosters growth and excellence. I aim to secure a job that provides satisfaction and opportunities for self-development, helping me achieve both personal and organizational goals.</p> 
          <p>In addition to frontend development, I have a keen interest in UI/UX design and video editing. I have also begun learning backend technologies. During my graduation, I gained practical and theoretical knowledge in various programming languages, including C, C++, Java, and Python. Switching between different tech stacks is not a challenge for me . </p>
          <div className='progress-block'>
            <h4>HTML / CSS / Bootstrap</h4>
            <ProgressBar now={html} label={`${html}%`} />
          </div>
          <div className='progress-block'>
            <h4>Responsove Design</h4>
            <ProgressBar now={responsive} label={`${responsive}%`} />
          </div>
          <div className='progress-block'>
            <h4>javascript/ES6</h4>
            <ProgressBar now={javascript} label={`${javascript}%`} />
          </div>
          <div className='progress-block'>
            <h4>React/Redux</h4>
            <ProgressBar now={react} label={`${react}%`} />
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About