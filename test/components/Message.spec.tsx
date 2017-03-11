import * as React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import Message from '../../src/components/Message';
import 'mocha';

describe('<Message />', () => {
    it('should render component', () => {
        const props = {
            title: 'Title',
            datetime: new Date()
        };

        const wrapper = mount(<Message {...props} />);

        expect(wrapper.contains(<h5>Title</h5>)).to.equal(true);
    });
});