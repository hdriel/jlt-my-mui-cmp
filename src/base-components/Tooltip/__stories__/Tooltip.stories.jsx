import React from 'react';
import Tooltip from '../Tooltip';
import Button from '../../Button/Button';

export default {
    title: 'base-components/Tooltip',
    component: Tooltip
}

export const Default = () => {
    return <Tooltip ><Button/></Tooltip>
}

export const Click = () => {
    return <Tooltip ><Button/></Tooltip>
}

export const Hover = () => {
    return <Tooltip ><Button/></Tooltip>
}