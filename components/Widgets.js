import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";

function Widgets({ trendingResults, followResults }) {
    return (
        <div className="hidden lg:inline ml-2 xl:w-[450px] py-1 space-y-5 ">
          

            <div className=" space-y-3 text-black dark:text-[#d9d9d9] bg-white dark:bg-[#1D2226] pt-2 rounded-xl w-11/12 xl:w-9/12">
                <h4 className="font-bold text-xl px-4">What's happening</h4>
                {trendingResults.map((result, index) => (
                    <Trending key={index} result={result} />
                ))}
                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
                    Show more
                </button>
            </div>

            <div className="text-black dark:text-[#d9d9d9] bg-white dark:bg-[#1D2226] space-y-3  pt-2 rounded-xl w-11/12 xl:w-9/12">
                <h4 className="font-bold text-xl px-4">Who to follow</h4>
                {followResults.map((result, index) => (
                    <div
                        className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
                        key={index}
                    >
                        <Image
                            src={result.userImg}
                            width={50}
                            height={50}
                            objectFit="cover"
                            className="rounded-full"
                        />
                        <div className="ml-4 leading-5 group">
                            <h4 className="font-bold group-hover:underline">
                                {result.username}
                            </h4>
                            <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
                        </div>
                        <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
                            Follow
                        </button>
                    </div>
                ))}
                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
                    Show more
                </button>
            </div>
        </div>
    );
}

export default Widgets;