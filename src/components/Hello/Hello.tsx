import React from 'react';
import './Hello.css';

interface Props {
    title: string;
}

const Hello: React.FC<Props> = ({ title }) => {
    return <div className="hello">{title}</div>;
};

export default Hello;
