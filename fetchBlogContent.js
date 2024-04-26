// fetchBlogContent.js

// Function to fetch and display blog content
function fetchBlogContent() {
  // URL of the RSS feed
  var rssFeedUrl = "YOUR_RSS_FEED_URL_HERE";

  // Fetching the RSS feed
  fetch(rssFeedUrl)
    .then(response => response.text())
    .then(xml => {
      // Parsing the XML response
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xml, "text/xml");

      // Retrieving the first blog post's data
      var item = xmlDoc.querySelector("item");

      // Extracting headline, featured image, and first paragraph
      var headline = item.querySelector("title").textContent;
      var featuredImage = item.querySelector("enclosure").getAttribute("url");
      var firstParagraph = item.querySelector("description").textContent;

      // Displaying the content
      document.getElementById("headline").innerText = headline;
      document.getElementById("featured-image").src = featuredImage;
      document.getElementById("first-paragraph").innerText = firstParagraph;
    })
    .catch(error => console.error('Error fetching blog content:', error));
}
