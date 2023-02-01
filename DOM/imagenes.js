for(let i = 0; i < 10; i++) {
	const img = document.createElement("img");
	img.src = "https://picsum.photos/200/301?id=" + i;
	img.addEventListener("click", function() {
		console.log(i); // selected index number
		img.style.border = "10px solid orange";

	})
	document.body.appendChild(img);
}
