import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header grid>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);

export default Section