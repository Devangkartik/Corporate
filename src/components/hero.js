import Carousel from 'react-bootstrap/Carousel';


var heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Hello, I’m Devang Kartik 😊',
      description: 'My degree in Computer Applications has equipped me with a range of skills crucial for my career and life. Despite limited exposure, I have learned that hard work and determination can make anything possible, and I am ready to put in the effort. I am also developing a habit of staying updated with current trends and industry news.',
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'My Future Plan',
      description: 'I aspire to become a successful frontend developer, leveraging my skills in React, JavaScript, Redux, HTML, and Tailwind CSS to create innovative and impactful web applications. My goal is to continuously improve my expertise and stay updated with the latest trends in frontend development.In addition to my professional ambitions, I dream of owning a beautiful houses. I also have a strong desire to travel and explore the world, experiencing diverse cultures and landscapes.',
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Enjoy Own Personal Space',
      description: 'In my free time, I enjoy using various apps, WhatsApp groups, and Telegram for chatting and talking to others in English. These activities help me relax. Additionally, when juniors approach me, I love providing guidance on what they should do and how to navigate their future. Engaging in these activities brings me immense joy',
    }
  ]

export default function Apphero(){
    return(
        <section id="home" className="hero-block">
        <Carousel>
           {
             heroData.map(hero => {
               return (
                 <Carousel.Item key={hero.id}>
                   <img
                     className="d-block w-100"
                     src={hero.image}
                     alt={"slide " + hero.id}
                   />
                   <Carousel.Caption>
                     <h2>{hero.title}</h2>
                     <p>{hero.description}</p>
                   </Carousel.Caption>             
                 </Carousel.Item>
               );
             })
           }
       </Carousel>
     </section>
    )
}