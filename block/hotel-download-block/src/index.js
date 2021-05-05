import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    ColorPalette,
    TextControl,
    TextareaControl,
} from '@wordpress/components';

registerBlockType('hotel/download', {
    title: __('Download Block', 'hotel'),
    icon: 'list-view',
    category: 'hotel',
    //custom attr.
    attributes: {
        title: {
            type: 'string',
            selector: 'h3',
        },
        selectedIcon: {
            type: 'string',
            default: 'check',
        },
        description: {
            type: 'string',
            selector: 'h5',
        },
        buttons: {
            type: 'array',
            default: [],
        },
        background_color: {
            type: 'string',
            default: '#f7fafd',
        },
    },
    edit: (props) => {
        const {
            attributes: { title, description, buttons, background_color },
            setAttributes,
        } = props;
        let contentFields, contentDisplay;
        const block_style = {
            backgroundColor: background_color,
        };

        const handleAddLocation = () => {
            const loc = [...buttons];
            loc.push({
                text: '',
            });
            setAttributes({ buttons: loc });
        };
        const handleTextChange = (text, index, key) => {
            const buttons = [...props.attributes.buttons];
            buttons[index][key] = text;
            props.setAttributes({ buttons });
        };
        const handleRemoveLocation = (index) => {
            const buttons = [...props.attributes.buttons];
            buttons.splice(index, 1);
            props.setAttributes({ buttons });
        };
        if (buttons && buttons.length) {
            contentFields = buttons.map((key, index) => {
                return (
                    <Fragment key={index}>
                        <legend className='blocks-base-control__label'>
                            {__('Button Text', 'hotel')}
                        </legend>
                        <TextControl
                            placeholder={__('Some Text', 'hotel')}
                            value={buttons[index].text}
                            onChange={(text) =>
                                handleTextChange(text, index, 'text')
                            }
                        />
                        <legend className='blocks-base-control__label'>
                            {__('Button Sub text', 'hotel')}
                        </legend>
                        <TextControl
                            placeholder={__('Some sub text', 'hotel')}
                            value={buttons[index].subText}
                            onChange={(subText) =>
                                handleTextChange(subText, index, 'subText')
                            }
                        />
                        <legend className='blocks-base-control__label'>
                            {__('Button Link', 'hotel')}
                        </legend>
                        <TextControl
                            placeholder={__('Add Link', 'hotel')}
                            value={buttons[index].link}
                            onChange={(link) =>
                                handleTextChange(link, index, 'link')
                            }
                        />
                        <legend className='blocks-base-control__label'>
                            {__('Button Icon', 'hotel')}
                        </legend>
                        <TextControl
                            placeholder={__(
                                'Add FontAwesome Icon class',
                                'hotel'
                            )}
                            value={buttons[index].iconClass}
                            onChange={(iconClass) =>
                                handleTextChange(iconClass, index, 'iconClass')
                            }
                        />
                        <fieldset>
                            <Button
                                isDestructive
                                className='hotel-remove__btn'
                                label='Delete location'
                                onClick={() => handleRemoveLocation(index)}
                                text={__('Remove', 'hotel')}
                            />
                        </fieldset>
                    </Fragment>
                );
            });

            contentDisplay = props.attributes.buttons.map((location, index) => {
                return (
                    <>
                        <a
                            class='property-download__button'
                            href={location.link}
                        >
                            <i className={`${location.iconClass} fa-2x`}></i>
                            <span>
                                <span>{location.subText}</span>
                                <br />
                                {location.text}
                            </span>
                        </a>
                    </>
                );
            });
        }
        return (
            <Fragment>
                <InspectorControls key='1'>
                    <PanelBody title={__('Title', 'hotel')}>
                        <RichText
                            className='property-download__title'
                            tagName='h3'
                            placeholder={__('Write title', 'hotel')}
                            value={title}
                            onChange={(val) =>
                                setAttributes({
                                    title: val,
                                })
                            }
                        />
                        <TextareaControl
                            className='property-download__description'
                            placeholder={__('Write Description', 'hotel')}
                            value={description}
                            onChange={(val) =>
                                setAttributes({
                                    description: val,
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody title={__('Buttons', 'hotel')}>
                        {contentFields}
                        <Button
                            isSecondary
                            onClick={handleAddLocation.bind(this)}
                        >
                            {__('Add Button')}
                        </Button>
                    </PanelBody>
                    <PanelBody title={__('Colors', 'hotel')}>
                        <legend className='blocks-base-control__label'>
                            {__('Background Color', 'hotel')}
                        </legend>
                        <ColorPalette
                            colors={[
                                { name: 'lightBlue', color: '#F7FAFD' },
                                { name: 'white', color: '#fff' },
                                { name: 'lightGray', color: '#d5dae2' },
                            ]}
                            onChange={(color) =>
                                setAttributes({ background_color: color })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <div
                    className={props.className}
                    style={block_style}
                    class='wp-block-hotel-download'
                >
                    <h3 class='property-download__title'>{title}</h3>
                    <div class='property-download__description'>
                       {description}
                    </div>
                    <div class='property-download-content'>
                        {contentDisplay}
                    </div>
                </div>
            </Fragment>
        );
    },
    save: () => {
        return null;
    },
});
