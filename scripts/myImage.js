getData(myURL).then(abbsData => {
    let myAvatar = abbsData.data.avatar;

    console.log(myAvatar);

    // Maakt een variable myImg en creeër hierin een img
    let myImg = document.createElement("img");
    let myName = abbsData.data.name;

    myImg.src = myAvatar;
    myImg.alt = myName;

    console.log(myImg);

    let mySection = document.querySelector("section:nth-of-type(1)");

    mySection.append(myImg);
})














/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }