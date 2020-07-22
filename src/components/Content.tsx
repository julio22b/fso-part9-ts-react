import React from 'react';
import { CoursePart } from '../types/types';
import { Part } from './Part';

interface ContentProps {
    courseParts: CoursePart[];
}

export const Content: React.FC<ContentProps> = ({ courseParts }) => {
    return (
        <div>
            {courseParts.map((part) => (
                <Part part={part} key={part.name} />
            ))}
        </div>
    );
};
