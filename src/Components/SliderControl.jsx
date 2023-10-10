import React from "react";
import rightArrow from "../assets/rightArrow.svg";

export default function SliderControl(
	isLeft,
	currentImage,
	setCurrentImage,
	totalImages
) {
	function nextImage() {
		if (currentImage >= totalImages - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	}

	function previousImage() {
		if (currentImage === 0) {
			setCurrentImage(totalImages - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	}

	return (
		<button
			type="button"
			onClick={(e) => {
				e.preventDefault();
				isLeft ? previousImage() : nextImage();
			}}
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
}
