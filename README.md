# MEAN-ENERGY

CRUD application to display Energy Drinks using the MEAN Stack.
This application is for educational purposes only.

### About

MEAN Energy is an application dedicated to providing public gathered information on various drink brands and the brands available products. The application is built on Mongo Express Angular and Node, and designed using Sketch, InVision, and old fashioned pencil and paper. Designed by [Reynier Vorobey](https://www.instagram.com/vorobey12/?hl=en) and developed by [Stephen Fuller](http://williamsfuller.com/)

### Installation

It is recommended that you install [Yarn](https://yarnpkg.com/en/)

* `yarn install` || `npm install`
* Run Test API server `yarn run jsonServer`, `http://localhost:3004`
* Bundle and run Frontend `gulp`, `http://localhost:8080`

### Routes

Test User:

    "email": "bat@man.com",
    "password": "12345"

**Drinks**

**Users**

* GET     `/api/v1/users`
* GET     `/api/v1/users/:id`
* PUT     `/api/v1/users/:id`
* DELETE  `/api/v1/users/:id`
* POST    `/api/v1/users/register`
* POST    `/api/v1/users/authenticate`
* SECURED `/api/v1/users/dashboard`


### Technology:

* MongoDB
* ExpressJS
* AngularJS
* NodeJS
* Bower
* Gulp


### Brands

* Monster Energy
  * Regular
  * Lo-Carb
  * Cuba Lima
  * Absolutely Zero
  * Ubermonster
  * Assult
  * Khaos
  * M-80
  * Import
  * M3
  * VR46
  * Rehab
  * Ultra
  * Unleaded
* Rockstar
  * Original
  * Sugar Free
  * Zero Carb
  * Energy Cola
  * Energy Cola - Double Strength
  * Diet Energy Cola - Double Strength
  * PerfectBerry
  * Cucumber Lime
  * Pina Colada
  * Lime Freeze
  * Coconut Water
  * Revolt -Killer Citrus
  * Horchata
  * 2X Energy Cxtra Caffeine
  * Relax - Caffeine Free Tropical Guava
* Red Bull
   * Original
   * Sugar Free
   * Total Zero
   * Red Edition
   * Blue Edition
   * Yellow Edition
   * Orange Edition
   * Lime Edition
   * Silver Edition
   * Pink Edition
   * Kiwi Edition
   * F1 Edition
   * Orange Edition Zero
   * Cherry Edition Zero
* NOS
    * NOS Original
    * NOS Sugar Free
    * NOS GT Grape
    * NOS Cherried Out
    * NOS Charged Citrus
    * NOS Rowdy
* AMP
  * Original
  * Sugar Free
  * Overdrive
  * Traction
  * Elevate
  * Relaunch
  * Black Tea
  * Green Tea
  * Lightning
  * Sugar Free Lightning
  * Amp Energy Juice - Orange
  * Amp Energy Juice - Mixed Berry
* Full Throttle
  * Citrus
  * Orange
  * Blue Agave
* Xyience
  * Cherry Lime
  * Mango Guava
  * Frostberry Blast
  * Blue Pomegranate
  * Cran Razz
  * Fruit Punch
  * Tangerine
  * Melon Mayhem
* Venom
  * Black Mamba
  * Mojave Rattler
  * Death Adder
  * Killer Taipan


### Roadmap

* Assets
    * Favicon
    * Logo
* Views
    * 404
    * Home
    * Login
    * Admin
        * Register Users
        * Edit Drinks

### Disclaimer

This application is by by no means affiliated with any of the mentioned companies or products including Red Bull, Monster, Rockstar, NOS, Amp, Full Throttle, Xyience Xenergy, Arizona Energy, Rip It, Venom, Mountain Dew Kickstart, or any parent or subsidiary of these or any other brands or products mentioned in this application. All information is gathered by public forums including product pages, wikipedia, Google Search, and various websites. This application is for educational use only and is not intended to be used as a guide for any use of these products. This application does not endorse any products, the use of energy drinks, or support of any company or subsidiary and is completely independent in presenting information found on public domains. Please drink these drinks responsibly.
