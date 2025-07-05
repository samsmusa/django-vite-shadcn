import React from "react";
import {Loader} from "lucide-react";

interface LoaderProps {
    next: boolean; // loading state
    hasMore: boolean; // if more items to load
    noMoreMessage?: string; // message when no more items
}

const LoadingIcon: React.FC<LoaderProps> = ({next, hasMore, noMoreMessage}) => {
    if (next) {
        return (
            <div className="flex items-center justify-center p-4  min-h-8">
                <Loader className="animate-spin w-12 h-12 text-blue-500"/>
            </div>
        );
    }

    if (!hasMore) {
        return (
            <div className="text-center text-gray-500 p-4 text-sm min-h-8">
                {noMoreMessage || "No more items available."}
            </div>
        );
    }

    return <div/>;
};

export default LoadingIcon;
