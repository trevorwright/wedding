import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'
import ourStoryImage from '../../../assets/story.jpg'
import { Section } from '../../components'

const Image = styled.img`
  display: none;
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 32px;
  flex-shrink: 0;

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

const OurStory = styled.div`
  padding: 0 40px;
  text-align: left;

  p:not(:last-child) {
    margin-bottom: 12px;
  }

  ${media.medium`
    padding: 0;
  `};
`

const Story = () => (
  <Section name="story" title="Our Story">
    <Image src={ourStoryImage} alt="" />
    <OurStory>
      <p>He was the grocery clerk. She was the cashier. You know how it goes.</p>
      <p>
        It turns out Metro is a pretty romantic place. Just kidding. But it is where it all started.
        Over one of our shared breaks in the Metro breakroom (which Katelyn thought nothing of, and
        Trevor planned very carefully), we found out he was also the boy next door. Much more
        romantic. We’ll stick with that from now on.
      </p>
      <p>
        After a few months of “just friends”, it all began in September 2012. It has been just over
        6 years, and with every day that passes (and road trip, sushi date, and cat selfie), we feel
        more confident that we belong together. You might even say that we are Wright together.
      </p>
      <p>
        Trevor proposed on May 25, 2018. He somehow found the perfect mix between an intimate,
        romantic proposal and knowing that Kate would want to share the news in person, and
        celebrate one of the most exciting days of their lives with their family and closest
        friends. The result was one incredible surprise during what Katelyn thought was a casual
        hike, one fake party to celebrate her “finishing her first year of graduate school”, MANY
        confused friends and family, and eventually, lots of tears and champagne. It was perfect.
      </p>
      <p>Theme: “I had no idea.” - Kate</p>
    </OurStory>
  </Section>
)

export default Story
