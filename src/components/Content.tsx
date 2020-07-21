import React from 'react';

interface ContentProps {
    courseParts: {
        name: string;
        exerciseCount: number;
    }[];
}

export const Content: React.FC<ContentProps> = ({ courseParts }) => {
    return (
        <div>
            {courseParts.map((part) => (
                <p key={part.name}>
                    {part.name} {part.exerciseCount}
                </p>
            ))}
        </div>
    );
};
