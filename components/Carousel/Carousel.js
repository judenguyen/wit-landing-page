import { Carousel } from 'react-bootstrap'
import styles from './Carousel.module.scss';

export default () => {
	return (
		<Carousel>
		<Carousel.Item>
			<div className={styles.image}>
				<img
					className="d-block w-100"
					src="prize_image.jpg"
					alt="First slide"
				/>
			</div>
		  <Carousel.Caption>
		  	<div className={styles.text}>
				<h3>1st Place</h3>
				<p>FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT</p>
			</div>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div className={styles.image}>
				<img
					className="d-block w-100"
					src="prize_image.jpg"
					alt="First slide"
				/>
			</div>
		  <Carousel.Caption>
		  	<div className={styles.text}>
				<h3>2nd Place</h3>
				<p>FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT</p>
			</div>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div className={styles.image}>
				<img
					className="d-block w-100"
					src="prize_image.jpg"
					alt="First slide"
				/>
			</div>
		  <Carousel.Caption>
		  	<div className={styles.text}>
				<h3>3rd Place</h3>
				<p>FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT</p>
			</div>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div className={styles.image}>
				<img
					className="d-block w-100"
					src="prize_image.jpg"
					alt="First slide"
				/>
			</div>
		  <Carousel.Caption>
		  	<div className={styles.text}>
				<h3>4th Place</h3>
				<p>FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT</p>
			</div>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div className={styles.image}>
				<img
					className="d-block w-100"
					src="prize_image.jpg"
					alt="First slide"
				/>
			</div>
		  <Carousel.Caption>
		  	<div className={styles.text}>
				<h3>5th Place</h3>
				<p>FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT</p>
			</div>
		  </Carousel.Caption>
		</Carousel.Item>		
	  </Carousel>

	);
  };