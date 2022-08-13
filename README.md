# fancySlider

A lightweight JavaScript image slider

[![Build Status](https://img.shields.io/github/workflow/status/myspace-nu/fancySlider/CI)](https://github.com/myspace-nu/fancySlider/actions)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/myspace-nu/fancySlider/blob/master/LICENSE)

## Live demo

See a live demo on [CodePen](https://codepen.io/myspace-nu/full/RwMergO)

## Usage

	<style>
		@import url('../css/fancySlider.css');
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
		.caption { font-family: 'Roboto', sans-serif; }
	</style>

	<div class="fancyslider-container mySlider">
		<div class="slide" data-transition="fade" style="background-image: url('https://images.unsplash.com/photo-1659733683446-5837c203be5e?auto=format&fit=crop&w=765&q=80');">
			<div class="caption caption-slideUp" style="top:10%;">
				<h1><strong>fancySlider</strong></h1>
			</div>
			<div class="caption caption-slideUp" style="top:30%;">Lightweight, simple, beautiful</div>
		</div>
		<div class="slide" data-transition="fade" style="background-image: url('https://images.unsplash.com/photo-1659830638553-923c362b202f?auto=format&fit=crop&w=800&q=80');">
			<div class="caption caption-fadeIn">
				<h1><strong>I'm fading!</strong></h1>
			</div>
		</div>
		<div class="slide" data-transition="fade"  style="background-image: url('https://images.unsplash.com/photo-1659958661414-59d7bd483853?auto=format&fit=crop&w=800&q=80');">
			<div class="caption caption-customAnimation">
				<h1><strong>Custom animation</strong></h1>
			</div>
		</div>
	</div>

	<script src="../js/fancySlider.js"></script>
	<script>
		let mySlider = new fancySlider(".mySlider", {
			navigation: true
		});
	</script>

## Options

**navigation** - Navigation pills

    navigation: true

*Default: false*

**history** - Back / Forward buttons

    history: false

*Default: true*

**preloadImages** - Preload all images found in the slider element

    preloadImages: false

*Default: true*

**autoplay** - Automatically swap between slides

    autoplay: true

*Default: false*

**autoplayDelay** - Delay between slides with using autoplay (in milliseconds)

    autoplayDelay: 3000

*Default: 5000*

## Slide transitions

Slide transitions are defined by the data-transition attribute. Available transitions are:

* slide (default)
* fade
* rotate

### Author: [Johan Johansson](https://github.com/myspace-nu)
