import React from 'react';
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Menubar from "./Menubar";

const Layout = ({children}) => {
    return (
        <>
            <div>
                <div className="bg-gray-800">
                    {/* Static Menubar for Mobile*/}
                    <Menubar/>
                    <div className="h-screen flex bg-gray-100">
                        {/* Static Sidebar for Desktop */}
                        <Sidebar/>
                        <MainContent>
                            {children}
                        </MainContent>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;