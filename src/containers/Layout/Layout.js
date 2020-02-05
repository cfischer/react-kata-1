import React from 'react';
import {
  Container,
  Dropdown,
  Header,
  Menu,
  Segment,
  List
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          React Kata
        </Menu.Item>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
        <Dropdown item simple text='Options'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/'>All Books and Magazines</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Search</Dropdown.Header>
            <Dropdown.Item as={Link} to='/isbn'>Find by ISBN</Dropdown.Item>
            <Dropdown.Item as={Link} to='/email'>Find by author`s email</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Sorted Content</Dropdown.Header>
            <Dropdown.Item as={Link} to='/sorted'>Sorted by Title</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}

function Footer() {
  return (
    <Segment inverted vertical>
      <Container>
        <Header as='h2' inverted>Summary of Instructions</Header>
        <List as='ol' inverted>
          <List.Item as='li'>Your software should read all data from the given CSV files in a meaningful structure.</List.Item>
          <List.Item as='li'>Print out all books and magazines with all their details (with a meaningful output format).</List.Item>
          <List.Item as='li'>Find a book or magazine by its `isbn`.</List.Item>
          <List.Item as='li'>Find all books and magazines by their `authors`’ email..</List.Item>
          <List.Item as='li'>Print out all books and magazines with all their details sorted by `title`. This sort should be done for books and magazines together.</List.Item>
        </List>
        <p>
          Please read full instructions on the <a rel="noopener noreferrer" target="_blank" href="https://github.com/echocat/react-kata-1/blob/master/README.md"> README </a> file
        </p>
      </Container>
    </Segment>
  );
}

function Layout({children}) {
  return (
    <>
      <MainHeader />
      <Container style={{ marginTop: '5em' }}>
        <Header as='h1'>React Kata</Header>
          <Segment vertical>
            {children}
          </Segment>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
