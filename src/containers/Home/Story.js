import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'
import coupleWaterImage from '../../../assets/couple-water.jpg'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
  font-weight: 300;

  box-shadow: inset 0px 5px 10px -1px rgba(0, 0, 0, 0.3);

  ${media.medium`
    padding: 24px 40px;
  `};
`

const Image = styled.img`
  display: none;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 32px;

  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);

  ${media.small`
    display: initial;
  `};

  ${media.medium`
    margin: 0 32px 0 0;
  `};

  ${media.large`
    margin: 0 64px 0 0;
  `};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  ${media.medium`
    flex-direction: row;
    align-items: flex-start;
  `};
`

const Title = styled.h3`
  position: relative;
  font-size: 28px;
  margin-bottom: 32px;

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    background: #363636;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const OurStory = styled.p`
  padding: 0 40px;

  ${media.medium`
    padding: 0;
  `};
`

const Story = () => (
  <Container>
    <Title>Our Story</Title>
    <ContentContainer>
      <Image src={coupleWaterImage} alt="" />
      <OurStory>
        Lorem ipsum dolor sit amet consectetur adipiscing elit fames parturient, tortor proin aptent
        turpis etiam habitant dictumst accumsan, eget donec justo vivamus iaculis tincidunt pretium
        posuere. Convallis luctus nec massa justo ornare dignissim eu leo ultricies auctor, quis at
        dis praesent adipiscing amet quisque vel odio. Lectus sagittis conubia semper orci amet sit
        cum, in interdum nam congue pretium faucibus. Mi suspendisse class ligula habitasse a fames
        mauris per magnis, cursus vehicula dolor natoque sit inceptos aptent pellentesque diam,
        ipsum mattis dapibus cum penatibus eu turpis risus. Arcu neque enim elit vestibulum turpis
        eros congue fames etiam, tristique leo inceptos varius fermentum mi sapien dapibus, netus
        amet purus duis proin ridiculus vehicula nisl. Augue ultricies semper a vehicula nullam
        posuere rutrum etiam habitasse, porta mattis inceptos aptent class donec ligula vivamus,
        phasellus auctor ut cubilia pretium senectus est varius. Pellentesque non nisi condimentum
        nascetur duis fames a suscipit elit sapien elementum mattis, inceptos velit gravida praesent
        nullam arcu accumsan enim iaculis quam. Primis elementum mollis mi lobortis non malesuada
        arcu enim diam a neque, ultricies ad aptent lectus nam ipsum posuere hac habitant faucibus
        elit proin, interdum et litora taciti viverra curae habitasse vel facilisi platea. Ultricies
        ipsum tellus libero mattis lectus ultrices vestibulum, magnis dictum semper netus vitae nam
        imperdiet, non litora felis tortor penatibus conubia.
      </OurStory>
    </ContentContainer>
  </Container>
)

export default Story
