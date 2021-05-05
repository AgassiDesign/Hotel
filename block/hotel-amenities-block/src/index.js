import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';


registerBlockType('hotel/amenities-list', {
    title: __('Amenities List', 'hotel'),
    icon: 'list-view',
    category: 'hotel', 
    //custom attr.
    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: 'h3',
        },
        taxonomies: {
            type: 'object'
        },
        selectedtaxonomy: {
            type: 'string'
        },
        numberList: {
            type: 'array',
            source: 'children',
            selector: '.amenities-list',
        },
    },
    edit: (props) => {
        const {
            className,
            attributes: { title, numberList },
            setAttributes,
        } = props;
        const onChangeTitle = (value) => {
            setAttributes({ title: value });
        };
        const onChangeNumberList = (value) => {
            setAttributes({ numberList: value });
        };
        return (
            <div className={className}>
                <RichText
                    className='amenities-list__title'
                    tagName='h3'
                    placeholder={__('Write title', 'hotel')}
                    value={title}
                    onChange={onChangeTitle}
                />
                <RichText
                    tagName='ul'
                    multiline='li'
                    placeholder={__('Write a list item', 'hotel')}
                    value={numberList}
                    onChange={onChangeNumberList}
                    className='amenities-list'
                />
            </div>
        );
    },
    save: (props) => {
        const {
            className,
            attributes: { title, numberList },
        } = props;

        return (
            <div className={className}>
                <RichText.Content
                    className='amenities-list__title'
                    tagName='h3'
                    value={title}
                />

                <RichText.Content
                    tagName='ul'
                    className='amenities-list'
                    value={numberList}
                />
            </div>
        );
    },
});

