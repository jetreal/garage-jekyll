

// displayParams
// var scrolled;
// window.onscroll = function () {
//   scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('scroll').innerHTML = scrolled + 'px : scroll';
//   // let g = elem2.style.transform = 'translateY(' + scrolled*-2 + 'px)';

// }
$(window).on('load resize', function () {
	var width = $('html').outerWidth();
	var height = $(window).height();
	// var bodyWidth = $('.myFooter').outerWidth()


	$('#width').html(width + 'px : width');
	$('#height').html(height + 'px : height');

	// $('#bodyWidth').html(bodyWidth + 'px : bodyWidth');
});

// document.onmousemove = function (e) {

// }

new WOW().init()

// Add active class to the current button (highlight it)

window.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('.nav-link');
		switch (true) {
		case (window.pageUrl === "/about"):
			navLinks[1].classList.add('active');
			break;
		case (window.pageUrl === "/contacts"):
			navLinks[2].classList.add('active');
			break;
		case (window.pageUrl === "/feedbacks"):
			navLinks[3].classList.add('active');
			break;
		case (window.pageUrl === "/catalog"):
			navLinks[4].classList.add('active');
			break;
		case (window.pageUrl === "/faq"):
			navLinks[5].classList.add('active');
			break;
		default:
			navLinks[0].classList.add('active');
		}	
});

// -- slider
// var textContentBook = [
// 	{ "text": "первый", "img": "images/1.webp" },
// 	{ "text": "второй", "img": "images/2.webp" },
// 	{ "text": "4", "img": "images/4.webp" },
// 	{ "text": "5", "img": "images/5.webp" },
// 	{ "text": "6", "img": "images/6.webp" },
// 	{ "text": "7", "img": "images/7.webp" }
// ]
var flag = false;
// for (let i = 0; i < textContentBook.length; i++) {
// 	$('.img' + i + ' ' + 'img').attr('src', textContentBook[i].img);
// }

$(document).ready(function () {
	window.mobileCheck = function () {
		let check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
		window.isMobile = check;
		return check;
	}
	if (window.mobileCheck()) {
		const attr = document.createAttribute('href')
		attr.value = "tel:+79290268440"
		const el = document.createElement('a')
		el.setAttributeNode(attr)
		document.querySelector("#phoneButton").appendChild(el)
	}  // для перехода на телефон на мобиле проверка на 
})

$(document).ready(function () {
	// console.log("href", $(location).attr("href"))
	// console.log("origin", $(location).attr("origin"))
	// console.log("pathname", $(location).attr("pathname"))
	// console.log("window.siteBaseUrl", window.siteBaseUrl)
	// console.log("window.pageUrl", window.pageUrl)
	if ($(location).attr("pathname") === window.siteBaseUrl + "/") {
		$('.buttonLeft').on('click', leftBtn);
		$('.buttonRight').on('click', rightBtn);
		showSliderText(2)

	}

});

function showSliderText(position) {
	const el = $('.slider div').eq(position)
	const text = el[0].children[1].innerHTML
	$('#sliderImgText').html(text)
}

function leftBtn() {
	showSliderText(1)
	$('.slider div').css({ 'transform': 'translateX(+300px)', 'transition': 'transform .5s cubic-bezier(.14,1.07,.81,.98)' });
	$('.slider div').removeClass('added-class');
	$('.slider div').eq(1).addClass('added-class');
	// if (is.firefox()) {
	// 	$('.slider > div:eq(0)').css({'position': 'relative', 'left': '1px'});
	// }
	if (flag == false) {
		flag = true;
		setTimeout(function () {
			// if (is.firefox()) {
			// 	$('.slider > div:eq(0)').css({'position': 'relative', 'left': '0px'});
			// }
			$('.slider div:last-child').insertBefore('.slider div:first-child');

			$('.slider div').css({ 'transform': 'translateX(0px)', 'transition': 'transform .0s' });
			// $('.slider div').css({ 'transform': 'translateX(0px)', 'transition': 'transform .0s' });
			flag = false;
		}, 500);
	}
}







function rightBtn() {
	showSliderText(3)
	$('.slider div').css({ 'transform': 'translateX(-300px)', 'transition': 'transform .5s cubic-bezier(.14,1.07,.81,.98)' });
	$('.slider div').removeClass('added-class');
	$('.slider div').eq(3).addClass('added-class');
	if (flag == false) {
		flag = true;
		setTimeout(function () {
			$('.slider div:first-child').insertAfter('.slider div:last-child');
			$('.slider div').css({ 'transform': 'translateX(0px)', 'transition': 'transform .0s' });
			flag = false;
		}, 500);
	}
}

// var startTouchedCoord;
// var endTouched;

// window.addEventListener('load', function () { // после загрузки страницы

// 	document.getElementById('touched').addEventListener('touchstart', function (e) {
// 		startTouchesCoord = (e.changedTouches[0].pageX) // toched point
// 	}, false)

// 	document.getElementById('touched').addEventListener('touchend', function (e) {
// 		endTouched = (e.changedTouches[0].pageX) // up point
// 		let a = Number(startTouchesCoord)
// 		let b = Number(endTouched)

// 		if (a < b) {
// 			$('.buttonLeft').triggerHandler('click', leftBtn)
// 		} else {
// 			$('.buttonRight').triggerHandler('click', rightBtn)
// 		}
// 	}, false)
// }, false)

// $(document).ready(function () {
// 	setTimeout(function () {
// 		$('.wrappDiv').css({ 'transform': 'rotatez(0deg)' })
// 	}, 250)
// });



// function init() {
// 	let map = new ymaps.Map('map', {
// 		center: [53.253239, 34.326175],
// 		zoom: 16

// 	}),

// 		myGeoObject = new ymaps.GeoObject({
// 			// Описание геометрии.
// 			geometry: {
// 				type: "Point",
// 				coordinates: [53.253239, 34.326175]
// 			}
// 		})
// 	map.geoObjects
// 		.add(myGeoObject)

// }


if ($(location).attr("pathname") === '/contacts') {
	ymaps.ready(init);
}


// horizontal progress function
window.onload = function () {
	var progressLine = document.getElementById("progress-line");
	var body = document.body,
		html = document.documentElement,
		viewportHeight = window.innerHeight;

	var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	var scrollTopValue = function () {
		return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	window.addEventListener("scroll", function () {

		var scroll = scrollTopValue();
		document.getElementById('scroll').innerHTML = scroll + 'px : scroll';// show scroll value
		viewportHeight = window.innerHeight;
		documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		var progress = (scroll / (documentHeight - viewportHeight)) * 100;
		progressLine.style.width = progress + "%";
	});

	window.addEventListener("resize", function () {
		body = document.body;
		html = document.documentElement;
		viewportHeight = window.innerHeight;
		documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);


		var width = $('html').outerWidth();
		var height = $(window).height();
		$('#width').html(width + 'px : windowwidth');
		$('#height').html(height + 'px : windowheight');

	});
}
///////////////////////////////////////////////////////////////////////////////////

// паралакс эффект
var elem = document.getElementById('textDiv') // здесь Id контейнера
document.onmousemove = function (e) {

	// display params
	var X = e.pageX;
	var Y = e.pageY;
	document.getElementById('mouseX').innerHTML = X + ': mouseX'
	document.getElementById('mouseY').innerHTML = Y + ': mouseY'

	if (elem) {
		var X = e.pageX;
		var Z = e.pageY
		var Y;
		var C;
		switch (true) {
			case (X > 1600):
				C = 1600;
				break;
			default:
				C = X;
		}
		switch (true) {
			case (Z > 1600):
				Y = 1600;
				break;
			case (Z < 1000):
				Y = 1000;
				break;
			default:
				Y = Z;
		}
		// document.getElementById('mouseX').innerHTML = X + ': mouseX'
		// document.getElementById('mouseY').innerHTML = Y + ': mouseY'
		elem.style.transform = 'translateX(' + (C / 30 - 40) + 'px)' + ' translateY(' + (Y / 10 - 100) + 'px)' + ' rotate(5deg)';
		elem.style.zIndex = -1
	}
}
/////////////////////////////////
var elem2 = document.getElementById('glasses')
if (elem2) {
	window.onscroll = function () {
		var scrolled;
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		elem2.style.transform = 'translateY(' + scrolled * -0.6 + 'px)';

	}

}

/////////////////////////////////
if (window.screen.width > 992) {


	const circle = document.querySelector('#circle');
	const mouse = {
		x: 0,
		y: 0
	};
	let y = 0;
	let x = 0;

	function moveFunc(event) {
		const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
		const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
		mouse.x = clientX - circle.offsetWidth / 2;
		mouse.y = clientY - circle.offsetHeight / 2;
		parallax();
	}

	window.addEventListener('mousemove', moveFunc);
	window.addEventListener('touchmove', moveFunc);

	function parallax() {
		const speed = 300
		const nextX = (mouse.x - x) / speed;
		const nextY = (mouse.y - y) / speed;
		if (Math.abs(nextX) > 0.05 || Math.abs(nextY) > 0.05) {
			requestAnimationFrame(parallax);
		}
		// console.log(1); // Раскомментируй для проверки, что цикл не бесконечный

		x += nextX;
		y += nextY;

		circle.style.transform = `translate(${x}px, ${y}px)`;
	}

	parallax();
}
/////////////////////////////////////////////

function showNumber() {
	$('#phoneButton').on('click', function () {
		$('.buttonSection__callNumber').toggleClass('hideButton')
	})
}

$(document).ready(function () {
	showNumber()
})

//////////////////////////////////////
$(document).ready(function () {
	$('.facQuestionSpan').on('click', function (e) {
		$(e.target.children[1]).toggleClass('openSpan')
		$(e.target.parentNode.parentNode.children[1]).toggleClass('faqAnswerOpen')
	})
})
///////////////////////////////////////
$(document).ready(function () {
	$('.buttonPrice').on('click', function (e) {

		$('.priceDiv').toggleClass('priceOpen')

		// document.querySelector('.priceDiv').scrollIntoView() 
		// Тоже самое только быстро скролит

		// плавный скролл к элементу
		if (!!~$('.priceDiv')[0].getAttribute("class").indexOf("priceOpen")) {
			const yOffset = -10;
			const element = document.querySelector(".priceDiv");
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' })
		}

	})
})

//////////////////////////////////////////
$(document).ready(function () {


	$(window).trigger("scroll")


	var body = document.body,
		timer;
	window.addEventListener('scroll', function () {
		clearTimeout(timer);
		if (!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover')
		}
		timer = setTimeout(function () {
			body.classList.remove('disable-hover')
		}, 100);
	}, false);

})



