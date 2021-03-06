import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<Link className="btn" to={`${props.id}`}>
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;

/**
 * @Link - here we are deriving the dynamic path value we get as we set in our apps> Route which has QuoteDetails.
 */
