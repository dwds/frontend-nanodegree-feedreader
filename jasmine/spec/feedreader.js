/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Ensures each feed has a URL defined
         * and that the URL is not empty.
         */
        it('have a non-empty URL', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe('');
          });
        });


        /* Ensures each feed has a name defined
         * and that the name is not empty.
         */
        it('have a non-empty name', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe('');
          });
        });
    });


    describe('The menu', function() {
        var $menuIcon = $('.menu-icon-link');
        var $body = $('body');
        /* Ensures the menu element is hidden by default. */
        it('should be hidden by default', function() {
          expect($body.hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon is clicked. */
        it('shows/hides when menu icon is clicked', function() {
          $menuIcon.trigger('click');
          expect($body.hasClass('menu-hidden')).toBe(false);

          $menuIcon.trigger('click');
          expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
