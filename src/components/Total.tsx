import React from 'react';

interface TotalProps {
    courseParts: {
        name: string;
        exerciseCount: number;
    }[];
}

export const Total: React.FC<TotalProps> = ({ courseParts }) => {
    const totalCount = courseParts.reduce((acc, curr): number => {
        return (acc += curr.exerciseCount);
    }, 0);
    return <div>Number of exercises: {totalCount}</div>;
};
