import React from 'react';

const MainContent = ({children}) => {
    return (
        <>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    {children}
                </main>
            </div>
        </>
    );
};

export default MainContent;