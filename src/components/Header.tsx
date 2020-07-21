import React from 'react';

interface HeaderProps {
    name: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
    return <div>{name}</div>;
};
