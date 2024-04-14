(() => {
	/**
	 * @return {HTMLElement[]}
	 */
	function getTerminalTextContainers() {
		return Array.from(
			document.querySelectorAll(".terminal-text, .terminal-text-list li"),
		);
	}

	/**
	 * @param {HTMLElement} container
	 * @param {number} delay
	 * @return {void}
	 */
	function animateTerminalContainer(container, delay) {
		setTimeout(() => {
			container.style["animation-play-state"] = "running";
		}, delay);
	}

	/**
	 * @return {void}
	 */
	function focusMenuInput() {
		const input = document.querySelector("#menu-input");
		input?.focus();
		const inputForm = document.querySelector("#menu-input-form");
		inputForm?.addEventListener("submit", handleMenuInput);
	}

	/**
	 * @return {void}
	 */
	function handleMenuInput(event) {
		event.preventDefault();
		const input = document.querySelector("#menu-input");
		const value = input?.value;
		input.value = '';
		switch (value) {
			case "1":
				document.location.href = "https://github.com/sirbrillig";
				return;
			case "2":
				document.location.href = "https://payton.codes/tag/coding/";
				return;
			case "3":
				document.location.href = "https://payton.codes/tag/dnd/";
				return;
		}
	}

	function startTerminal() {
		const delayBetweenContainersMs = 400;
		const containers = getTerminalTextContainers();
		let delay = 0;
		containers.forEach((container) => {
			animateTerminalContainer(container, delay);
			delay += delayBetweenContainersMs;
		});
		setTimeout(focusMenuInput, delay);
	}

	document.addEventListener("DOMContentLoaded", startTerminal);
})();
