import Card from '../card/card.component'
import './card-list.styles.css';

// Functional components have two params: (props, forwardRef).
// forwardRef is rarely used, but it does provide additional functionality.
//
// Here, we can destructure the monsters right in the props, because
// we're never modifying the state.
const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => {
        return <Card monster={monster} key={monster.id}/>;
      })}
    </div>
  )
}

export default CardList;
