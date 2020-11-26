import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';


const BookCard = book => {
  const { title, author, price, image, addToCart, addedCount, description } = book;
  return (
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
      <Card.Meta>
          <span>{description}</span>
        </Card.Meta>
        </Card.Content>
      <Card.Content extra>
        <a>
          &#8372;
          &nbsp;
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Додати в кошик {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
