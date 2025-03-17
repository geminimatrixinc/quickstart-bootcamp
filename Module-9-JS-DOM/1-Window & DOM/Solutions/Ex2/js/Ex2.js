
const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"]

const openTabs = function()
{
   console.log('openTabs');

   for(var i=0; i <= siteUrls.length; i++) {
      var url = siteUrls[i];
      window.open(url);
   }
}

openTabs();