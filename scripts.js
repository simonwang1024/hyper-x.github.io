document.addEventListener("DOMContentLoaded", function () {
	// 默认显示企业简介
	showContent("about");

	// 监听导航链接点击事件
	document.querySelectorAll(".nav a").forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const sectionId = this.getAttribute("href").substring(1);
			showContent(sectionId);
		});
	});

	// 显示指定内容
	function showContent(id) {
		document.querySelectorAll(".content-section").forEach((section) => {
			section.style.display = "none";
		});
		document.getElementById(id).style.display = "block";
	}
});
