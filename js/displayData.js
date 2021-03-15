// function reqListener () {
// 	console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://script.googleusercontent.com/macros/echo?user_content_key=0ghoifVqyHg2lTrK0lL09tBay6UgI-9IGK1EAMrmYMb63meZxzADHxtBDEooX6NJp3V4J2QHj9syo8Xmgtb-GBdMEqjwb3zSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEEcnNn3RJg3tyowjawRramZPcTXbaBnvCf20PVD7CbJQxJkHt43oC_Glvq-7nhS2ESSadH_LtU9qjRsNJUjlEK2ibLLiDM-4tz9Jw9Md8uu&lib=M_mF8dmZ4v-Fr9aDN-8m0eD-7TP3OnhxM");
// oReq.send();



function initData(data){
	
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://script.googleusercontent.com/macros/echo?user_content_key=0ghoifVqyHg2lTrK0lL09tBay6UgI-9IGK1EAMrmYMb63meZxzADHxtBDEooX6NJp3V4J2QHj9syo8Xmgtb-GBdMEqjwb3zSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEEcnNn3RJg3tyowjawRramZPcTXbaBnvCf20PVD7CbJQxJkHt43oC_Glvq-7nhS2ESSadH_LtU9qjRsNJUjlEK2ibLLiDM-4tz9Jw9Md8uu&lib=M_mF8dmZ4v-Fr9aDN-8m0eD-7TP3OnhxM", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
		// console.log(xhr.responseText);
		var myData = JSON.parse(xhr.responseText);
		console.log(myData);

		// var titres = myData[0];
		// var content = myData[1];
		// document.getElementById("section1").innerHTML = titres.section1;
		// document.querySelector("#infos h3").innerHTML = content.section1;
		// document.getElementById("section2").innerHTML = titres.section2;
		// document.getElementById("section3").innerHTML = titres.section3;
		// initData(myData);
		const templateVigneron = document.querySelector("template");
		const content = templateVigneron.content.cloneNode(true);
		document.getElementById("vignerons").append(content);
		const navTemplate = document.querySelectorAll("nav a");
		
		for(var i = 0; i < navTemplate.length; i++){

			//nom des sections
			var nomSection = myData[i].nomSection;
			var nomWhithouSpace = nomSection.split(' ').join('');
			console.log(currentId);
			navTemplate[i].setAttribute("href", "#" + nomWhithouSpace);
			navTemplate[i].querySelector("li").innerHTML = nomSection;
		
			//content section 1
			if(myData[i].siteAbraVinum == "Section 1"){
				var section1Dom = document.querySelector("#infos");
				var currentId = section1Dom.id + " " + nomWhithouSpace;
				console.log(currentId);
				section1Dom.querySelector("h2").innerHTML = nomSection;
				section1Dom.querySelector("h3").innerHTML = myData[0].contentSection1;
				section1Dom.querySelector("p").innerHTML = myData[0].contentSection2;
				section1Dom.setAttribute("id", nomWhithouSpace);
			}

			//content section 2
			if(myData[i].siteAbraVinum == "Section 2"){
				console.log(myData[1]);
				document.getElementById("vignerons").querySelector("h2").innerHTML = nomSection;
			}
		}
		// myData.forEach(function(el){
		// 	console.log(el.nomSection);
		// 	console.log(navTemplate);
		// 	navTemplate.innerHTML  = el.nomSection;

		// });

    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.send(null); 
