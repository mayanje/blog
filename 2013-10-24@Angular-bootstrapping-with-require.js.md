Angular js comes with a powerful dependency injection system.  It provides you a powerful way to ensure that your components are loaded properly, however, it does not help you when it comes to dependency loading, and definition.  Before starting with Angular I was a great fan of the [amd](http://en.wikipedia.org/wiki/Asynchronous_module_definition) pattern for dependency managment.  My go to library for amd is [require.js](http://requirejs.org/), due to it's powerful plugin system, and I wanted to find a good pattern for defining angular modules in require.js.

When I first started down this path I found lots of good resources, including an [angular seed project](https://github.com/tnajdek/angular-requirejs-seed).  This seed project gives you an ok base to work from, and covers most of what you need to know to start an angular project in requirejs.  However, there are a few pitfalls in the process.

The most major pitfall is the bootstrap process.  A standard angular bootstrap looks for the `ng-app` attribute to find out which module should be bootstrapped, and initializes automatically after the dom is ready.  This becomes a problem when loading via requirejs as the dom is already ready when angular loads.  Given you need angular to start defining modules this prevents dependency managment from having a module to load.

In order to solve this problem we can bootstrap manually by calling `angular.bootstrap` with the element that you wish to bootstrap as your base template, and an array of modules to load.

```javascript
require( [
    'angular',
    'app'
], function(angular, app) {
    'use strict';
    //get a reference to the html tag to use as the base template
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    //just in case dom is not ready for some reason fire the manual bootstrap on ready
    angular.element().ready(function() {
        //bootstrap to the html tag with the application module loaded in your app.js file
        //which returns the declared angular module which has been added to angular.
        angular.bootstrap($html, [app.name]);
    });
});
```

This works great for loading your application logic and getting it running but is a very simplistic setup.  It works great in angular 1.0 and the upcomming 1.2 release.  There are drawbacks to this method as the standard ngScenario tests can be extremely finnicky.  In the seed project they handle this with half second waits after every command, but I find that is not terribly friendly.  I hope to post more about this issue in the future, but it's time for sleep now.
