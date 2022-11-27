import React, { ReactNode } from "react";
import BottomNavbar from "../../common/BottomNavbar/BottomNavbar";
import Navbar from "../../common/Navbar/Navbar";

export interface HomeLayoutInterface {
	children: ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutInterface) => {
	return (
		<div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-gray-200 h-screen max-h-screen overflow-hidden">
			<div className="max-w-2xl  mx-auto">
				<Navbar />
				<BottomNavbar />
			</div>
			<div className="max-w-2xl h-full mx-auto bg-white relative overflow-auto scrollBarThin">
				<div className="overflow-auto mt-[72px] mb-[85px]  scrollBarThin">
					{children}
				</div>
			</div>
		</div>
	);
};

export default HomeLayout;
