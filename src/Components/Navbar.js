import React from 'react';

const Navbar = () => {
	return (
		<>
			{/* header */}
			<div>
				<nav className="navbar navbar-expand-lg ">
					<div className="container-fluid justify-content-between">
						<a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
							<ul className="navbar-nav justify-content-center">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">T-shirts</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Jeans</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Women Dress</a>
								</li>
							</ul>
							<form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="Search a Product" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>
						<button type="button" className="btn btn-outline-dark m-2 text-warnning">Login</button>
						<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
							<path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
						</svg></div>

					</div>
				</nav>
			</div>

		</>
	);
}

export default Navbar;
