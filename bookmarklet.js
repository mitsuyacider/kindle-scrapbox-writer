 javascript:
Scrapbox="https://scrapbox.io/your-project-name/";
url="https://read.amazon.co.jp/kp/notebook";
if(location.href.indexOf(url) == 0) {
  var titleElement=document.getElementById("annotation-scroller").querySelectorAll("h3.kp-notebook-metadata");
  var title =titleElement[0].innerText;

  var authorElement=document.getElementById("annotation-scroller").querySelectorAll(".a-spacing-none");
  var authors = authorElement[0].innerText;  
  var content ="";

  var highlightNodes = document.getElementsByClassName("kp-notebook-highlight");
  var highlights = [];

  var quotationNodes = document.querySelectorAll("#annotationHighlightHeader");
  var quotationPages = [];
  
  for (var i = 0; i < highlightNodes.length; i++) {
    highlights.push(highlightNodes[i].innerText);
  }

  for (var i = 0; i < quotationNodes.length; i++) {
    quotationPages.push(quotationNodes[i].innerText);
  }
  
  var banner = "[" + document.querySelector(".kp-notebook-printable img").src + " " + document.querySelector(".kp-notebook-printable").href + "]";  
  content += banner;
  content += "\n";
  content += "By: " + authors;  
  content += "\n\n";

  for(var i = 0; i < quotationPages.length; i++) {
    content += quotationPages[i];
    content += "\n";
    content += ">" + highlights[i];
    content += "\n";
  }

  var links = "#readings" + " ";  
  authorList = authors.split('、');
  for (var i = 0; i < authorList.length; i++) {
    links += "#" + authorList[i] + " ";
  }
  content += links;

  url = Scrapbox + encodeURIComponent(title) + "?body=" + encodeURIComponent(content);
}

location = url;