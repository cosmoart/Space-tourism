import { useEffect } from "react";
import styles from "../styles/FollowCursor.module.css";

export default function FollowCursor() {
	useEffect(() => {
		let cursor = document.querySelector("." + styles.cursor)
			, cursor2 = document.querySelector("." + styles.cursor2);

		document.addEventListener("mousemove", (e) => {
			cursor.style.left = e.pageX + "px";
			cursor.style.top = e.pageY + "px";
			cursor2.style.left = e.pageX + "px";
			cursor2.style.top = e.pageY + "px";

			if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
				cursor.classList.add(styles.cursorHidden);
				cursor2.classList.add(styles.cursorHidden);
			} else {
				cursor.classList.remove(styles.cursorHidden);
				cursor2.classList.remove(styles.cursorHidden);
			}
		});
		document.addEventListener("click", (e) => {
			cursor2.style.transform = "scale(0.8) translate(-62%, -62%)";
			setTimeout(() => {
				cursor2.style.transform = "scale(1) translate(-50%, -50%)";
			}, 100);
		});

	}, []);

	return (
		<div className={styles.cursorContainer}>
			<div className={styles.cursor}></div>
			<div className={styles.cursor2}></div>
		</div>
	)
}