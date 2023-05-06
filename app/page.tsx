import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ResturantCard from "@/components/ResturantCard";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				{/* NAVBAR */}
				<NavBar />
				{/* NAVBAR */}
				<main>
					{/* HEADER */}
					<Header />
					{/* HEADER */} {/* CARDS */}
					<ResturantCard />
					{/* CARDS */}
				</main>
			</main>
		</main>
	);
}
