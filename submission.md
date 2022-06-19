# Submission Notes

Hi, I hope you are having a lovely day :)

I did my best to make this project well organised and easy to understand. 

Thank you for reading it :)


*** Browser Support ***
Tested in following browsers:

## Mac OS Monterey 12.4:
Chrome 101.0.4951.64 
Firefox 101.0.1
Safari 15.5

## Windows 10:
Edge 102.0.1245.44

*** Colours ***
I am using Mac OS and screen is much brighter and colours are differnet from any other laptop. I have used images provided and used colour picker in Sketch to extract colours. Some colours are very subtle, especially ones that used for hover effects etc. While they are visible on Mac, it is barely noticeable on Windows machine... But the styles are there :) 

*** Sizing ***
On the prototype dropdowns are around 6px taller than search input. Not to deviate from requiremenents, I have coded it like that. However, it would look better if they would be same height, especially on smaller screens where they are side-by-side.

*** Minimum supported screen size ***
As an assigment document have only stated that implementation should be "responsive" but did not state minimum supported size, I took a liberty to assume 375px (older iPhone SE) would be enough :) 


## Given more time, what would you have done differently?

Would add more unit tests.
Would look into global styles in React to be able to re-organise CSS better. 
Would add accessibility attributes (aria-) etc.


## How did you deviate from the directions, if at all, and why?

I have tried not to deviate from directions as much as possible in order to show that I can code exactly to the specs.
However, since there was a broken URL for one of the images, I had to make a simple image placeholder and add it to the project to programmaticaly replace any image with broken URL.


## Is there anything else you'd like to let us know?

*** Suggestions ***

*** Layout of filters section ***
To improve user experience, could try to move Movies/Books rado buttons to the same line as dropdowns (at lease on desktop view). That would allow to move Clear Filters button/link closer - e.g. law of proximity, as currently there is a bit of disconnect when entering and clearing data. However, such suggestions would be verified by user feedback or A/B testing or both.

*** Interactions ***
Would be nice to introduce "tag cloud" for faster removal of filters one-by-one. For example, if user pick a genre at the bottom of the list and wishes to un-select only that genre withou clearing all filters, they would have to epxand dropdown and scroll all way down in order to do so.

Another advantage of "tag cloud" would be that user would be able to see an actual selections, e.g. "sci-fi", "1991", rather than counter of how many selections has been made. From user perspective they may want to have overview of what exactly they are searching for rather than number of search criteria entered so far.

*** Product cards ***
Could add popularity rating - e.g. stars, numbers or percentage that immediately visible.
Could add roll-over (for mobile on-tap) overlay with more info about each book/movie.
Some images are of different aspect-ratio, in real life project images would be pre-formatted and optimised. 