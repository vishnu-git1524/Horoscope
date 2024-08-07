import React from 'react';

export default function Header() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                <div className="flex">
                    <a
                        className="-m-1.5 p-1.5"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HoroScope
                    </a>
                </div>
            </div>
        </header>
    );
}
