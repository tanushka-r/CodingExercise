# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

*** Browser Support ***

Tested in following browsers:

Chrome 
Firefox
Safari

Edge

*** Colours ***

I am on Mac system and screen is much brighter and colours are differnet from any other laptop. I have used images provided and used colour picker in Sketch to extract colours. Some colours are very subtle, especially ones that used for hover effects etc., while visible on Mac, it is barely noticeable on Windows machine... But the styles are there. 

## Given more time, what would you have done differently?

Would add unit testing.

Would break down and organise css better, I am using styles per component, just didn't have enough time to analyse and see where common parts are to be able to move them. 

## How did you deviate from the directions, if at all, and why?

I have tried not to deviate from directions as much as possible. As it is important to be able to show that I can code exactly to the specs.

However, since there was a broken URL for one of the images, I had to make a simple image placeholder and add it to the project to programmaticaly replace any image with broken URL.

Just a really small change - dropdown caret. I have "flipped" it when dropdown expanded, just to give more visual feedback.


## Is there anything else you'd like to let us know?


*** Suggestions ***

Layout of filters section:

To improve user experience, could try to move Movies/Books rado buttons to the same line as dropdowns (at lease on desktop view). That would allow to move Clear Filters button/link closer - e.g. law of proximity, as currently there is a bit of disconnect when entering and clearing data. However, such suggestions would be verified by user feedback or A/B testing or both.

Interactions:

Would be nice to introduce "tag cloud" for faster removal of filters one-by-one. For example, if user pick a genre at the bottom of the list and wishes to un-select only that genre withou clearing all filters, they would have to epxand dropdown and scroll all way down in order to do so.

Another advantage of "tag cloud" would be that user would be able to see an actual selections, e.g. "sci-fi", "1991", rather than counter of how many selections has been made. From user perspective they may want to have overview of what exactly they are searching for rather than number of search criteria entered so far.

Movie cards:

Could add popularity rating - e.g. stars, numbers or percentage that immediately visible.

Could add roll-over (for mobile on-tap) overlay with more info about each book/movie.