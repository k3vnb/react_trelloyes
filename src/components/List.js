import React from 'react';
import Card from './Card';
import './List.css';


function List(props){
     
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{props.header}</h2>
                </header>
                <div className="List-cards">
                    {props.cardContent.map(card => 
                        <Card key={card.id} id={card.id} title={card.title} content={card.content} onDeleteCard={props.onDeleteCard}/>
                    )}
                   <button type="button" className="List-add-button">+ Add Random Card</button>
                </div>
            </section>
        )
 
}

export default List