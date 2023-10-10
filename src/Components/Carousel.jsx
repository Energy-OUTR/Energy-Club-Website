import React from "react";
import rightArrow from "../assets/rightArrow.svg";
import bgDetails from "../assets/bgDetails.svg";

export default function Carousel() {
	const [currentImage, setCurrentImage] = React.useState(0);

	const refs = images.reduce((acc, val, i) => {
		acc[i] = React.createRef();
		return acc;
	}, {});

	const scrollToImage = (i) => {
		setCurrentImage(i);
		refs[i].current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	const totalImages = images.length;
	const nextImage = () => {
		if (currentImage >= totalImages - 1) {
			scrollToImage(0);
		} else {
			scrollToImage(currentImage + 1);
		}
	};

	const previousImage = () => {
		if (currentImage === 0) {
			scrollToImage(totalImages - 1);
		} else {
			scrollToImage(currentImage - 1);
		}
	};

	const sliderControl = (isLeft) => (
		<button
			type="button"
			onClick={isLeft ? previousImage : nextImage}
			className={` ${
				isLeft ? "left-2" : "right-2"
			} absolute h-12 w-12 rounded-full z-10 top-1/2 -translate-y-1/2`}
		>
			<span
				role="img"
				aria-label={`Arrow ${isLeft ? "left" : "right"}`}
			>
				{isLeft ? (
					<img
						className="rotate-180"
						src={rightArrow}
						alt="right arrow"
					/>
				) : (
					<img
						src={rightArrow}
						alt="right arrow"
					/>
				)}
			</span>
		</button>
	);

	return (
		<div
			className={`relative p-12 flex flex-col gap-12 justify-center w-screen items-center bg-[var(--project-bg)]`}
		>
			<img
				className="absolute inset-0 scale-75"
				src={bgDetails}
				alt="bgDetails"
			/>
			<h2 className="text-medium uppercase tracking-widest text-5xl font-medium text-[var(--accent-color)] font-[Montserrat]">
				Projects
			</h2>
			<div className="relative w-full">
				<div className="inline-flex overflow-x-hidden px-48">
					{sliderControl(true)}
					{images.map((img, i) => (
						<div
							className={`relative w-full flex-shrink-0 transition-transform duration-500 ${
								currentImage !== i && "scale-75"
							}`}
							key={i}
							ref={refs[i]}
						>
							<img
								src={img}
								className="w-full object-contain rounded-xl"
								alt="carousel-item"
							/>
							<div className="absolute bottom-4 left-4 flex flex-col gap-2 w-1/2 p-4 bg-slate-300 bg-opacity-90 rounded-lg  text-bold text-[var(--para-text-color)]">
								<p className=" break-words font-medium">
									{img}
								</p>
								<button className="font-bold text-sm self-start">
									Explore -&gt;
								</button>
							</div>
						</div>
					))}
					{sliderControl(false)}
				</div>
			</div>
			<span className="flex gap-4 justify-center items-center">
				{images.map((item, index) => {
					const condition = currentImage !== index;
					const rad = 16;
					const color = condition ? "#C8EBD7" : "var(--accent-color)";
					return (
						<svg
							key={index}
							className={!condition && "scale-125"}
							xmlns="http://www.w3.org/2000/svg"
							width={rad + 2}
							height={rad + 2}
							viewBox={`0 0 ${rad + 2} ${rad + 2}`}
							fill="none"
						>
							<circle
								cx={rad / 2}
								cy={rad / 2}
								r={rad / 2}
								fill={color}
							/>
						</svg>
					);
				})}
			</span>
		</div>
	);
}

const images = [
	"https://unsplash.it/1350/720",
	"https://unsplash.it/1351/720",
	"https://unsplash.it/1352/720",
];
