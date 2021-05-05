import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';


registerBlockType('hotel/number-list', {
    title: __('Number List', 'hotel'),
    icon: 'list-view',
    category: 'hotel',
    supports: {
        // Turn off ability to edit HTML of block content
        html: false,
        // Turn off reusable block feature
        reusable: false,
        // Add alignwide and alignfull options
        align: false,
    },
    //custom attr.
    attributes: {
        content: {
            type: 'string',
            selector: '.number-list',
            multiline: 'li',
        },
    },
    edit: (props) => {
        const {
            className,
            attributes: { content },
            setAttributes,
        } = props;
        return (
            <div className={className}>
                <RichText
                    tagName='ul'
                    multiline='li'
                    placeholder={__('Write a list item', 'hotel')}
                    value={content}
                    onChange={(value) => setAttributes({ content: value })}
                    className='number-list'
                />
            </div>
        );
    },
    save: (props) => {
        return null;
    },
});

