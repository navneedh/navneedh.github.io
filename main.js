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


  var email_large = document.getElementsByClassName("email-large")[0];
  var linkedin_large = document.getElementsByClassName("linkedin-large")[0];
  var resume_large = document.getElementsByClassName("resume-large")[0];
  var github_large = document.getElementsByClassName("github-large")[0];
  
  if (landing.style.display === "none") {
    landing.style.display = "block";
  } else {
    landing.style.height = "12%";
    about_me.style.height = "100%";
    name.style['width'] = "0";
    // name.style['left'] = "0px";
    landingcontent.style['top'] = '0px';


    byline.parentNode.removeChild(byline);
    arrow_button.parentNode.removeChild(arrow_button);
    social_links.parentNode.removeChild(social_links);

    name.classList.add("fadetranslate");
	 social_links_large.classList.add("fadein");
    aboutme_content.classList.add("fadein");
	 aboutme_header.classList.add("fadein");

   email_large.classList.add("fadein");
   linkedin_large.classList.add("fadein");
   resume_large.classList.add("fadein");
   github_large.classList.add("fadein");

  }
}

function hideLoader() {
    $('#loading').hide();
}

$(window).ready(hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 10 * 1000);

