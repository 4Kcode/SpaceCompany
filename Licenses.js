	const element = document.getElementsByTagName('body')[0];
	const startDate = new Date("2024-07-1");
	const endDate = new Date("2024-07-2");

	function checkDate() {
		const today = new Date();
		if(today >= startDate && today <= endDate) {
		} else {
			element.style.display = "none";
		}			
	}

	checkDate();
  setInterval(checkTime,60000);
