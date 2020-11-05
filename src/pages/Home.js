import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getLists, { deleteListByID } from '../api/helpers';
import Button from '../components/Button';

const List = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
export default function Home() {
  const [lists, setLists] = useState(null);

  async function refreshLists() {
    const newLists = await getLists();
    setLists(newLists);
  }

  useEffect(async () => {
    await refreshLists();
  }, []);

  const handleDelete = async (id) => {
    await deleteListByID(id);
    await refreshLists();
  };

  return (
    <List>
      <h1>Wish Lists</h1>
      {lists?.map((list) => (
        <div key={list.id}>
          <NavLink to={`/${list.id}`}>{list.title}s Wishlist</NavLink>
          <Button onClick={() => handleDelete(list.id)}>
            <span role="img" aria-label="deleteButton">
              ❌
            </span>
          </Button>
        </div>
      ))}
      <Button navigation>+</Button>
    </List>
  );
}
