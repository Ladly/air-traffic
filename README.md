# ShowsApp

Application that displays aircrafts at your location.

[Open app](https://ladly.github.io/air-traffic/)

## Getting started

Clone repo: git clone https://github.com/Ladly/air-taffic.git.

Install dependencies: run `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

For deployment on gh-pages to display local images go to home-page.component.html and details-page.component.html and  

## Infrastructure decisions and limitations

This project is created for practical purpose and like that it is suitable to be hosted on gh pages.

Endpoint used is VirtualRadar:

- [Documentation](http://www.virtualradarserver.co.uk/Documentation/Formats/AircraftList.aspx)

- http://www.virtualradarserver.co.uk/Default.aspx

Important to notice: this api is have cors. I used [cors-anywhere](https://cors-anywhere.herokuapp.com/) to display data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

More details about project progress can be found on trello link below.

## Project management

I use [trello](https://trello.com/b/JZYdAwP3).

## Authors

[Vuk Ivanovic](https://www.linkedin.com/in/vuk-ivanovic/).

## Licence

This project is licensed under MIT licence
