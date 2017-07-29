import React, { Component, PropTypes } from 'react';


// styled component
import {Container} from 'theme/Container';
import {
  Image,
  MainImage,
  RevealP
} from './Home.style';


// waypoint component
import WhenInView from 'components/WhenInView/WhenInView';


export default class Home extends Component {
  static propTypes = {};

  constructor(props){
    super(props);
  }


  render() {
    return (

      <div>
      <MainImage>
          <h1>Cinema Graphy</h1>
          <h2>React Web App Demo</h2>
      </MainImage>

      <Container>

        <h1>Reveal Paragraphs</h1><br/>
        <WhenInView>
          {({isInView}) => 

            <RevealP hide={!isInView}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </RevealP>
          }
        </WhenInView>

        <WhenInView>
          {({isInView}) => 

            <RevealP hide={!isInView}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
            </RevealP>
          }
        </WhenInView>

        <WhenInView>
          {({isInView}) => 

            <RevealP hide={!isInView}>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.            </RevealP>
          }
        </WhenInView>

      </Container>
      </div>
    );
  }

}
