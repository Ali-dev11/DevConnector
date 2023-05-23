/** @format */

import Link from "next/link";

const Landing = () => {
	return (
		<div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex items-center justify-center">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-white mb-6">
					Welcome to Dev Connector
				</h1>
				<p className="text-white text-lg mb-8">
					Connect with developers from around the world and showcase your
					skills.
				</p>
				<div className="flex space-x-4">
					<Link
						className="bg-white py-3 px-6 rounded-lg text-lg font-semibold text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
						href="/login">
						Login
					</Link>
					<Link
						className="bg-white py-3 px-6 rounded-lg text-lg font-semibold text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
						href="/signup">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
