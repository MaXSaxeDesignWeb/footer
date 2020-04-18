// SECTION 0
var s0 = document.createElement("SECTION");

// FIXED YEAR
var fixYear = "2020";

// PERIOD
var period = document.createTextNode(" - ");

// PARAGRAPH 0
var p0 = document.createElement("P");
var p0A0 = document.createElement("A");
var p0A0A = document.createTextNode("MaX Falstein Website");
p0A0.setAttribute("href", "https://mf");
p0A0.appendChild(p0A0A);
var copy = document.createTextNode(" \u00A9 ");
var p0A1 = document.createElement("A");
var p0A1A = document.createTextNode("MaX Falstein");
p0A1.setAttribute("href", "https://lnk.bio/MaX"); // or max.risqué
p0A1.appendChild(p0A1A);
var and = document.createTextNode(" & ");
var p0A2 = document.createElement("A");
var p0A2A = document.createTextNode("Falstein Inc.");
p0A2.setAttribute("href", "https://fi");
p0A2.appendChild(p0A2A);

// PARAGRAPH 0 ARRAY
var pA0 = [
	document.createElement("P"),
	document.createElement("A").setAttribute("href", "https://mf"),
	document.createTextNode("MaX Falstein Website"),
	document.createTextNode(" \u00A9 "),
	document.createElement("A").setAttribute("href", "https://lnk.bio/MaX"),
	document.createTextNode("MaX Falstein"),
	document.createTextNode(" & "),
	document.createElement("A").setAttribute("href", "https://fi"),
	document.createTextNode("Falstein Inc.")
];

// PARAGRAPH 0 ARRAY V2
var pA0 = [
	document.createTextNode("MaX Falstein Website"), // 0
	document.createTextNode(" \u00A9 "), // 1
	document.createTextNode("MaX Falstein"), // 2
	document.createTextNode(" & "), // 3
	document.createTextNode("Falstein Inc."), // 4
];

pA0.push (document.createElement("A").setAttribute("href", "https://mf").appendChild(pA0[0]),
document.createElement("A").setAttribute("href", "https://lnk.bio/MaX").appendChild(pA0[2]),
document.createElement("A").setAttribute("href", "https://fi").appendChild(pA0[4]));

pA0.push (document.createElement("P").appendChild(pA0[5]).appendChild(pA0[1]).appendChild(pA0[6]).appendChild(pA0[3]).appendChild(pA0[7]));

// DATE
var bDate = new Date();
var bYear = bDate.getFullYear().toString();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var bMonth = month[bDate.getMonth()];
var footerMonth = document.createTextNode(bMonth);
var gap = document.createTextNode(" ");
if (fixYear == bYear) {
  var footerYear = document.createTextNode(bYear);
} else {
  var footerYear = document.createTextNode(fixYear);
}

var patent = document.createTextNode(" - Patents & Trademarks Pending");
p0.appendChild(p0A0);
p0.appendChild(copy);
p0.appendChild(p0A1);
p0.appendChild(and);
p0.appendChild(p0A2);
p0.appendChild(period);
p0.appendChild(footerMonth);
p0.appendChild(gap);
p0.appendChild(footerYear);
p0.appendChild(patent);

// PARAGRAPH 1
var p1 = document.createElement("P");
var p1A = document.createTextNode("MaX Falstein");
var p1BR = document.createElement("BR");
var p1B = document.createTextNode("Computer Stack (H/W, Net, Security, S/W) Architect, Designer, Engineer & Researcher | Executive & Founder | Investor");
p1.appendChild(p1A);
p1.appendChild(p1BR);
p1.appendChild(p1B);

// PARAGRAPH 2
var p2 = document.createElement("P");
var p2A = document.createTextNode("Temporary");

// PARAGRAPH 3
var p3 = document.createElement("P");
var p3A = document.createTextNode("Temporary");

s0.appendChild(p0);
s0.appendChild(p1);
s0.appendChild(p2);
s0.appendChild(p3);

// SECTION 1
var s1 = document.createElement("SECTION");

// PARAGRAPH 4
function ytIframe(uri, autoplay) {
	var href = window.location.href;
	var origin = "origin=".concat(href);
	var autoplayTrue = "?autoplay=1&";
	var autoplayFalse = "?autoplay=0&";
	var ytEmbed = "https://www.youtube.com/embed/".concat(uri);
	if (autoplay == true) {
      var curi = ytEmbed.concat(autoplayTrue).concat(origin);
	} else {
      var curi = ytEmbed.concat(autoplayFalse).concat(origin);
    }
	var s1Iframe = document.createElement("IFRAME");
	s1Iframe.src = encodeURI(curi);
	s1Iframe.style.width = "560px";
	s1Iframe.style.height = "315px";
	s1Iframe.frameborder = "0";
	s1Iframe.allow ="autoplay; encrypted-media; allowfullscreen";
	s1Iframe.setAttribute('allowFullScreen', '');
	return s1Iframe;
}
var s1P0 = document.createElement("P");
var s1P0A = document.createTextNode("A quick little message from MaX saying thank you for visiting the repository!");
var s1BR0 = document.createElement("BR");
var s1I0 = ytIframe("FPI9Rt1PIkY", false);
var s1BR1 = document.createElement("BR");
var s1P0B = document.createTextNode("MaX hopes you enjoyed the little video message.");

s1P0.appendChild(s1P0A);
s1P0.appendChild(s1BR0);
s1P0.appendChild(s1I0);
s1P0.appendChild(s1BR1);
s1P0.appendChild(s1P0B);

s1.appendChild(s1P0);

var footer = document.createElement("FOOTER");
footer.appendChild(s0);
footer.appendChild(s1);
document.getElementById("body").appendChild(footer);
