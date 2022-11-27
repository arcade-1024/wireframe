import React from "react";
import Carousel from "../../common/Carosel/Carosel";
import Navbar from "../../common/Navbar/Navbar";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import AvailableWebinar from "../components/AvailableWebinar/AvailableWebinar";
import CategoryRow from "../components/CategoryRow/CategoryRow";
import ContinueCourse from "../components/ContinueCourse/ContinueCourse";
import NewCourse from "../components/NewCourse/NewCourse";
import RecomendedCourse from "../components/RecomendedCourse/RecomendedCourse";
import WebinarRow from "../components/WebinarRow/WebinarRow";

const HomeContainer = () => {
	return (
		<HomeLayout>
			<Carousel />
			<div className="px-7">
				<ContinueCourse />
				<CategoryRow />
				<RecomendedCourse />
				<NewCourse />
				<WebinarRow />
				<AvailableWebinar/>
			</div>
		</HomeLayout>
	);
};

export default HomeContainer;
