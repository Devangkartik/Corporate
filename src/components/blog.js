import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.png'),
    time: '15 August 2024',
    title: 'Netflix Gpt',
    description: 'Most challenging project ! Well, it not only proved to be challenging, but it also proved to be one of the finest things I have ever done. However every project have its own set of challenges, generally these are exclusive in nature.',
    link: 'https://github.com/Devangkartik/netflix-gtp'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.png'),
    time: '10 march 2024',
    title: 'Youtube UI Design',
    description: '🦾About : - Its my second project to journey of forntend developer so its not much challenging for me but definetly i am done lot of mistake and much more learn thoes mistakes .',
    link: 'https://github.com/Devangkartik/my-youtube'
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '07 Feb 2024',
    title: 'Text Modifier',
    description: 'This wesite is modify your text in uppercase , lowercase , forSpace , counting words , clear box.',
    link: 'https://github.com/Devangkartik/text-modifier'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest Projects</h2>
          <div className="subtitle">Get latest Projects</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;