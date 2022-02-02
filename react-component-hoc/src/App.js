import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
//Компонент высшего порядка (Higher-Order Component, HOC)

// все HOC'и лучше начинать с with
const withSlider = (BaseComponent, getData) => {
	return (props) => {
		const [slide, setSlide] = useState(0);
		const [autoplay, setAutoplay] = useState(false)

		useEffect(() => {
			setSlide(getData());
		}, [])

		function changeSlide(i) {
			setSlide(slide => slide + i);
		}

		return <BaseComponent
			{...props}
			slide={slide}
			autoplay={autoplay}
			changeSlide={changeSlide}
			setAutoplay={setAutoplay}/>;
	}
}

const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = (props) => {
	return (
		<Container>
			<div className="slider w-50 m-auto">
				<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
				<div className="text-center mt-5">Active slide {props.slide}</div>
				<div className="buttons mt-3">
						<button
							className="btn btn-primary me-2"
							onClick={() => props.changeSlide(-1)}>-1</button>
						<button
							className="btn btn-primary me-2"
							onClick={() => props.changeSlide(1)}>+1</button>
				</div>
			</div>
		</Container>
	)
}

const SliderSecond = (props) => {
	return (
		<Container>
			<div className="slider w-50 m-auto">
				<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
				<div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
				<div className="buttons mt-3">
						<button
							className="btn btn-primary me-2"
							onClick={() => props.changeSlide(-1)}>-1</button>
						<button
							className="btn btn-primary me-2"
							onClick={() => props.changeSlide(1)}>+1</button>
						<button
							className="btn btn-primary me-2"
							onClick={() => props.setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
				</div>
			</div>
		</Container>
	)
}



const SliderWithFirtFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);
const withLogger = WrappedComponent => props => {
	useEffect(() => {
		console.log('first render!');
	}, []);

	return <WrappedComponent {...props}/>
}

const Hello = () => {
	return (
		<h2>Hello bro</h2>
	)
}

const HelloWithLogger = withLogger(Hello);

function App() {
	return (
		<>
			<HelloWithLogger/>
			<SliderWithFirtFetch/>
			<SliderWithSecondFetch/>
		</>
	);
}

export default App;

