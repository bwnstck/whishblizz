import React, { useEffect, useState } from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteListByID, getListByID } from '../api/helpers';
import Button from './Button';

const ListItem = styled.div`
  margin: 1rem;
  padding: 1rem;
`;
export default function Wishlist() {
  const { id } = useParams();
  const history = useHistory();

  const [listItem, setListItem] = useState(null);

  useEffect(async () => {
    const entry = await getListByID(id);
    setListItem(entry);
  }, []);

  if (!listItem) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deleteListByID(id);
    history.push('/');
  };

  return (
    <ListItem>
      <p> {listItem?.title}s Wunschliste </p>
      {listItem?.items.map((item) => {
        return (
          <div key={item} className="wish">
            {item}
            <Button onClick={async () => handleDelete}>
              <span role="img" aria-label="deleteButton">
                ❌
              </span>
            </Button>
          </div>
        );
      })}
      <Button onClick={handleDelete}>Delete List</Button>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </ListItem>
  );
}
