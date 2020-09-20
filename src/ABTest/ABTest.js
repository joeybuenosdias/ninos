import React from 'react';

/** config */
import { config } from '../config';

export default class ABTest extends React.Component {
    render() {
        const activeValue = config.sitetests[this.props.name].value
        let childToShow = null;
        React.Children.forEach(this.props.children, child => {

            if(child.props.value === activeValue) {
                childToShow = child
            }

            if (child.props.value !== activeValue && child.props.isDefault) {
                childToShow = child
            }
        })

        return (
            <React.Fragment>
                {childToShow}
            </React.Fragment>
        )
    }
}