import React from 'react';
import Image from '../Image';
import Rating from '../Rating';
import { Link } from "react-router-dom";
import './index.scss';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Price from '../Price';

class CardComponent extends React.Component {
    render() {
        const { id, imageUrl, name, category, price, rating } = this.props.product || this.props;
        return (
            <Card>
                <Link to={`/product/${id}`}>
                    <Image imageSrc={imageUrl} imageAlt={name} className="img-fluid card-img-top"></Image> 
                </Link>
                <CardBody>
                <Link to={`/product/${id}`} className="product-title">
                    <CardTitle>{name}</CardTitle>
                </Link>
                {category && category.name ? (<CardSubtitle className="text-muted">{category.name}</CardSubtitle>) : null }
                <p><Price price={price} currency="$"></Price></p>
                <Rating maxRating={5} avgRating={rating} className="text-warning"></Rating>
                </CardBody>
            </Card>
        );
    }
}

export default CardComponent;