import React, { Children } from 'react';
import TileFooterCell from './TileFooterCell.js';

const TileFooter = ({ children, align }) => (
    <div className={`sdc-tile-footer ${align === 'center' ? 'centered' : ''}`}>
        {Children.toArray(children).filter(e => e.type === TileFooterCell)}
    </div>
);

export default TileFooter;
