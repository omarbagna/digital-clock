setInterval(() => {
	let hourContainer = document.getElementById('hour');
	let minuteContainer = document.getElementById('minute');
	let secondContainer = document.getElementById('second');
	let hourTwelveContainer = document.getElementById('hourTwelve');
	let minuteTwelveContainer = document.getElementById('minuteTwelve');
	let secondTwelveContainer = document.getElementById('secondTwelve');
	let gmtTwelveContainer = document.getElementById('gmtTwelve');

	let currentDate = new Date();

	let currentHour = currentDate.getHours();
	let currentMinute = currentDate.getMinutes();
	let currentSecond = currentDate.getSeconds();

	if (currentSecond.toString().length === 1) {
		secondContainer.innerText = `0${currentSecond}`;
		secondTwelveContainer.innerText = `0${currentSecond}`;
	} else {
		secondContainer.innerText = currentSecond;
		secondTwelveContainer.innerText = currentSecond;
	}

	if (currentMinute.toString().length === 1) {
		minuteContainer.innerText = `0${currentMinute}`;
		minuteTwelveContainer.innerText = `0${currentMinute}`;
	} else {
		minuteContainer.innerText = currentMinute;
		minuteTwelveContainer.innerText = currentMinute;
	}

	if (currentHour.toString().length === 1) {
		hourContainer.innerText = `0${currentHour}`;
	} else {
		hourContainer.innerText = currentHour;
	}

	if (currentHour.toString().length === 1) {
		hourTwelveContainer.innerText = `0${currentHour}`;
		gmtTwelveContainer.innerText = 'am';
	} else {
		if (currentHour > 12) {
			gmtTwelveContainer.innerText = 'pm';
			if ((currentHour - 12).toString().length === 1) {
				hourTwelveContainer.innerText = `0${currentHour - 12}`;
			} else {
				hourTwelveContainer.innerText = currentHour;
			}
		} else {
			hourTwelveContainer.innerText = currentHour;
		}
	}
}, 1000);
