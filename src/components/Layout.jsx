const Layout = (props) => {
	return (
		<div className="container">
			<nav>
				<div className="title">
					<h1>CARTAS PARA TI Y LOS QUE QUIERES</h1>
				</div>
			</nav>
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
