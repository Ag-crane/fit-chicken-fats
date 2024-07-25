import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox"
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Explanation from "./components/Common/Explanation";
import AverageTable from "./components/AverageTable/AverageTable";

const App: React.FC = () => {
    const [showExplanation, setShowExplanation] = useState(false);

    const handleMouseEnter = () => { setShowExplanation(true); };
    const handleMouseLeave = () => { setShowExplanation(false); };

    return (
        <>
            <div> TEST BRANCH</div>
            <Header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <div className="flex justify-end">
                {showExplanation ? <Explanation /> : null}
            </div>
            <div className="flex items-center justify-center p-1 px-3">
                <div className="flex flex-row w-full sm:flex-col">
                    <div>
                        <ProductsFilter />
                        <AverageTable />
                        <SearchBox />
                        <ChickenTable />
                    </div>
                    <div className="lg:py-10 sm:w-auto sm:py-5 sm:flex-col">
                        <ComparisonTable />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
