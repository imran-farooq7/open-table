import SearchRestaurantCard from "../components/SearchRestaurantCard";
import SearchSidebar from "../components/SearchSidebar";

type Props = {};
const page = (props: Props) => {
	return (
		<div className="flex py-4 m-auto w-2/3 justify-between items-start">
			<SearchSidebar />

			<div className="w-5/6">
				<SearchRestaurantCard />
			</div>
		</div>
	);
};
export default page;
