function doChecked() {
    const input = document.querySelector(".price__term-input");
	const label = document.querySelector(".price__term-switch");
	const priceBasic = document.querySelector(".js--basic");
	const priceProfessional = document.querySelector(".js--professional");
	const priceMaster = document.querySelector(".js--master");
	
	const checked = () => {
		if(input.hasAttribute("checked")) {
			input.removeAttribute("checked");
			priceBasic.innerHTML = "<span>&#36;</span>199.99";
			priceProfessional.innerHTML = "<span>&#36;</span>249.99";
			priceMaster.innerHTML = "<span>&#36;</span>399.99";
		} else {
			input.setAttribute("checked", "");
			priceBasic.innerHTML = "<span>&#36;</span>19.99";
			priceProfessional.innerHTML = "<span>&#36;</span>24.99";
			priceMaster.innerHTML = "<span>&#36;</span>39.99";
		}
	};
	
	label.addEventListener("keyup", event => {
		if(event.code === 'Enter') {
			checked();
		}
	});

	input.addEventListener("click", () => {
		checked();
	});
}

doChecked();