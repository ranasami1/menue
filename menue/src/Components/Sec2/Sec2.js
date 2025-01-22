import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Spiner } from '../spinner/spinner';
import  { AppContext } from "../../App";

export function Sec2() {
    const { meal, Category } = useContext(AppContext);
  
    return (
      <div>
        <h2 className="title tracking-in-expand">Categories</h2>
        <div className="container-fluid d-flex gap-3 align-items-center justify-content-center flex-wrap p-5">
          {meal ? (
            meal.map((category, key) => (
              <Card key={key}>
                <Card.Img
                  variant="top"
                  src={category.items.details[0].image} // First item's image
                  style={{maxHeight: '230px'}}
                />
                <Card.Body>
                  <Card.Title>{category.en_category_name}</Card.Title>
                  <Link to="/menue">
                    <Button
                      variant="warning"
                      onClick={() => Category(category)} // Pass category object
                    >
                      Menue
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Spiner />
          )}
        </div>
      </div>
    );
  }
  
  