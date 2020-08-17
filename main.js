function myFunction() {
  var landing = document.getElementById("section1");
  var about_me = document.getElementById("section2");
  var landingcontent = document.getElementsByClassName("landingcontent")[0];
  var name = document.getElementsByClassName("name")[0];
  var byline = document.getElementsByClassName("byline")[0];
  var byline = document.getElementsByClassName("byline")[0];

  var social_links = document.getElementsByClassName("social-links")[0];
 var social_links_large = document.getElementsByClassName("social-links-large")[0];
  var aboutme_header = document.getElementsByClassName("aboutmeheader")[0];
  var aboutme_content = document.getElementsByClassName("aboutmecontent")[0];
    var arrow_button = document.getElementsByClassName("arrow_button")[0];

  if (landing.style.display === "none") {
    landing.style.display = "block";
  } else {
        landing.style.height = "10%";
    about_me.style.height = "100%";
    name.style['width'] = "0";
    name.style['margin-left'] = "30px";
    landingcontent.style['top'] = '10px';
    byline.style['opacity'] = "0";
    social_links.style['opacity'] = "0";
    arrow_button.style['opacity'] = "0";

    social_links_large.style['display'] = "block";

	social_links_large.classList.add("fadein");
    aboutme_content.classList.add("fadein");
	aboutme_header.classList.add("fadein");

  }
}

