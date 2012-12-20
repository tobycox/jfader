# JFader

A super simple plugin to fade between `<li>` elements.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jfader.js"></script>

## Usage

If you have a list of `<li>` elements like:

	<ul id="my-list">
		<li><img src="image1.png" /></li>
		<li><img src="image2.png" /></li>
		<li><img src="image3.png" /></li>
	</ul>

then calling 

	$('#my-list').jfader();

on them will show the first element and create next and previous buttons to scroll through the items.
