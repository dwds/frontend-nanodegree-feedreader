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
     * empty.
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

  describe('Initial Entries', function() {
    /* Ensures when the loadFeed function is called and completes its work,
     * there is at least a single .entry element within the .feed container.
     */

    // first argument in $.contains() must be DOM element, not jQuery object
    var feed = document.getElementsByClassName('feed')[0];

    // wait for API request
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('should contain at least one entry in .feed container', function() {
      // expect .feed to contain a descendant with .entry
      expect($.contains(feed, $('.entry')[0])).toBe(true);
    });
  });

  describe('New Feed Selection', function() {
    /* Ensures when a new feed is loaded by the loadFeed function
     * that the content actually changes.
     */

    /* This test calls loadFeed() twice, and stores the html content of
     * the feed each time loadFeed() is called. It then compares
     * the two strings.
     */

    // Grab .feed and declare vars to store feed content
    var $feed = $('.feed');
    var feedContent1;
    var feedContent2;

    beforeEach(function(done) {
      // call loadFeed() the first time
      loadFeed(0, function() {
        // store content of first feed
        feedContent1 = $feed.html();
      });

      // call loadFeed() again
      loadFeed(1, function() {
        // store content of second feed
        feedContent2 = $feed.html();
        // and finally … we're done waiting for API requests
        done();
      });
    });

    it('changes content when a new feed is loaded', function() {
      // compare the two feed contents
      expect(feedContent1).not.toEqual(feedContent2);
    });
  });
}());
