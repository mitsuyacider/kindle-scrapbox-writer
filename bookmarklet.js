// javascript:(
//   function(){
//       var highlights = document.getElementsByClassName("kp-notebook-highlight");
//       var highlights_array = [];
//       for (var i = 0; i < highlights.length; i++) {
//         highlights_array.push(highlights[i].innerText);
//       }
//       var results = Array.prototype.slice.call(highlights_array);
//       c = window.open();
//       c.document.open();
//       for(j=0; j < results.length; j++) {
//           c.document.write(">" + results[j]);
//           c.document.write("<br>");
//           c.document.write("<br>");
//       }
//       c.document.close()
//     }
//  )();


 javascript:
Scrapbox="https://scrapbox.io/mitsuya/";
url="https://read.amazon.co.jp/kp/notebook";
if(location.href.indexOf(url)==0){
  title=document.getElementById("annotation-scroller").querySelectorAll("h3.kp-notebook-metadata,h5.kp-notebook-metadata,#highlight,#note");
  author=document.getElementById("annotation-scroller").querySelectorAll(".a-spacing-none,h5.kp-notebook-metadata,#highlight,#note");
  s="";
  sss = "";
  for(i=0;i<title.length;i++) sss += title[i].innerText+"\n\n";

  var highlights = document.getElementsByClassName("kp-notebook-highlight");
  var highlights_array = [];

  var quotation = document.querySelectorAll("#annotationHighlightHeader");
  var quotation_array = [];
  
  for (var i = 0; i < highlights.length; i++) {
    highlights_array.push(highlights[i].innerText);
  }

  for (var i = 0; i < quotation.length; i++) {
    quotation_array.push(quotation[i].innerText);
  }
  
  b="["+document.querySelector(".kp-notebook-printable img").src+" "+document.querySelector(".kp-notebook-printable").href+"]";  
  s += b;
  s += "\n";
  s += author[0].innerText;
  
  s += "\n\n";
  var results = Array.prototype.slice.call(highlights_array);
  var results2 = Array.prototype.slice.call(quotation_array);
  for(j=0; j < results.length; j++) {
      s += results2[j];
      s += "\n";
      s += ">" + results[j];
      s += "\n";
  }

  s += "#readings";
  t =sss.split("\n")[0];
  url=Scrapbox+encodeURIComponent(t)+"?body=" + encodeURIComponent(s);
}
location=url;