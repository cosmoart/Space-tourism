export default function handleLinks(e, styles) {
	let linksInfo = [
		{ className: `[class*="-card"]`, hidden: styles.sliderHidden },
		{ className: `[class*="-img"]`, hidden: styles.imgHidden }
	]

	linksInfo.forEach(nav => {
		document.querySelectorAll(nav.className).forEach((card) => {
			if (String(card.classList).includes(e.target.value)) {
				card.classList.remove(nav.hidden);
			} else {
				card.classList.add(nav.hidden);
			}
		});
	})
}