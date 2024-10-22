import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Responsive web design responds to user needs by adapting to different screen sizes, orientations, layouts, and platforms. This is accomplished with the use of flexible grids and layouts, responsive images, and CSS media queries.  '
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Creative design involves using computer-generated imagery and digital animation to visualise a product. It aims to produce unique and memorable designs that stand out so that customers may easily identify a brand or product.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'It is the process of improving your website to increase visitors from Google, Microsoft Bing and other search engines, whenever people search for: Products you sell. Services you provide. Information on topics in which you have expertise or experience.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Video Editing',
    description: 'organizing and manipulating video clips to create a coherent final product. This includes understanding your editing software, cutting and arranging clips, adding transitions, sound editing, color grading, and exporting the final product in the desired format'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description: 'Browser compatibility refers to the ability of a website or web application to function correctly across different web browsers. This is crucial because users access the internet using a variety of browsers, each with its own unique rendering engine. '
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Customer service is the practice of supporting customers before, during, and after their purchase. Someone providing customer service helps the customer navigate how to use the product or service and troubleshoot any errors or defects that may arise.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Skills</h2>
          <div className="subtitle">Hands on Experience</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;