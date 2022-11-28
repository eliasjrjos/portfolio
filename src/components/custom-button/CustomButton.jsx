import React from 'react';

import { CustomButtonContainer } from './CustomButton.style';

const CustomButton = ({ children, ...otherProps}) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;