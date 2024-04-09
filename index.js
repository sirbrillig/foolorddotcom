(() => {
	/**
	 * @return {HTMLElement[]}
	 */
	function getTerminalTextContainers() {
		return Array.from(document.querySelectorAll(".terminal-text-container"));
	}

	/**
	 * @param {HTMLElement} container
	 * @param {number} overlayCount
	 * @param {number} delay
	 * @return {void}
	 */
	function animateTerminalContainer(container, overlayCount, delay) {
		const overlay = container.querySelector(
			`.terminal-text-overlay:nth-of-type(${overlayCount})`,
		);
		if (!overlay) {
			console.error(`No overlay found for count ${overlayCount}`);
			return;
		}
		setTimeout(() => {
			overlay.style["animation-play-state"] = "running";
		}, delay);
	}

	function startTerminal() {
		const delayBetweenLinesMs = 200;
		const containers = getTerminalTextContainers();
		let delay = 0;
		containers.forEach((container) => {
			[1, 2, 3].forEach((overlayCount) => {
				animateTerminalContainer(container, overlayCount, delay);
				delay += delayBetweenLinesMs;
			});
		});
	}

	document.addEventListener("DOMContentLoaded", startTerminal);
})();
