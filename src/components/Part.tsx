import React from 'react';
import { CoursePart } from '../types/types';
import utils from '../utils/utils';

interface PartProps {
    part: CoursePart;
}

export const Part: React.FC<PartProps> = ({ part }) => {
    switch (part.name) {
        case 'Fundamentals':
            return (
                <>
                    <p>
                        {part.name} {part.exerciseCount}
                    </p>
                    <p>Description: {part.description}</p>
                </>
            );
        case 'Deeper type usage':
            return (
                <>
                    <p>
                        {part.name} {part.exerciseCount}
                    </p>
                    <p>Description: {part.description}</p>
                    <p>{part.exerciseSubmissionLink}</p>
                </>
            );
        case 'Using props to pass data':
            return (
                <>
                    <p>
                        {part.name} {part.exerciseCount}
                    </p>
                    <p>Group projects: {part.groupProjectCount}</p>
                </>
            );
        case 'I added this one':
            return (
                <>
                    <p>
                        {part.name} {part.exerciseCount}
                    </p>
                    <p>Description: {part.description}</p>
                    <p>Difficulty: {part.difficulty}</p>
                </>
            );
        default:
            return utils.assertNever(part);
    }
};
