// components/SearchField.js
import Image from 'next/image';
import SearchImg from "@/public/searchbutton.svg";
import "./ui.scss";
const SearchField = () => {

    return (
        <div className="searchFieldWrapper">
            <div className='searchFieldInner'>
                <input
                    type="text"
                    // value={query}
                    // onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full py-2 px-4 border border-teal-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-300"
                />
                <div className='searchIcon'>
                    <Image src={SearchImg} width={44} height={44} alt="SearchImg" />
                </div>
            </div>
        </div>
    );
};

export default SearchField;
