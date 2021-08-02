<div>
	<header class="navbar">
		<a class="name" href="./"> Nicholas Baker </a>
		<div class="right-nav">
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</div>
	</header>
	<a style="display: none" class="" href="#about">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
			<path d="M12 6H0l6-6z" />
		</svg>
	</a>
</div>

<style>
	.navbar {
		z-index: 99;
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		padding: 40px 40px 0;
		display: flex;
		justify-content: space-between;
	}

	.navbar a {
		color: #fff;
		letter-spacing: 0.1em;
		transition: 0.3s;
		font-size: 1.6rem;
	}
	.navbar a:hover {
		color: #aaa;
	}
	.right-nav a {
		padding-left: 40px;
	}

	/*  Jump to Top Button  */
	.top-link {
		transition: background-color 0.2s ease, margin 0.5s ease;
		box-shadow: 0 3px 5px #000000;
		position: fixed;
		bottom: 0;
		right: 0;
		display: inline-flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		margin: 0 -6em 3em 0;
		border-radius: 50%;
		width: 80px;
		height: 80px;
		background-color: #f8f8f8;
		z-index: 9999;
	}
	.off-screen {
		margin: 0 3em 3em 0;
	}
	.top-link svg {
		fill: #000;
		width: 24px;
		height: 12px;
	}
	.top-link:hover {
		background-color: rgb(192, 192, 192);
	}
</style>
