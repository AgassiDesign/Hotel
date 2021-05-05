import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment, RawHTML } from '@wordpress/element';

import { RichText, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    ColorPalette,
    TextControl,
    TextareaControl,
} from '@wordpress/components';

registerBlockType('hotel/reserve-form', {
    title: __('Reserve Form Block', 'hotel'),
    icon: 'list-view',
    category: 'hotel',
    //custom attr.
    attributes: {
        serviceFee: {
            type: 'string',
            selector: 'h3',
        },
        shortcode: {
            type: 'string',
        },
    },
    edit: (props) => {
        const {
            attributes: { serviceFee, shortcode },
            setAttributes,
        } = props;

        return (
            <Fragment>
                <InspectorControls key='1'>
                    <PanelBody title={__('Form Data', 'hotel')}>
                        <legend className='blocks-base-control__label'>
                            {__('Service Fee', 'hotel')}
                        </legend>
                        <TextControl
                            tagName='h3'
                            placeholder={__('Service fee', 'hotel')}
                            value={serviceFee}
                            onChange={(val) =>
                                setAttributes({
                                    serviceFee: val,
                                })
                            }
                        />
                        <legend className='blocks-base-control__label'>
                            {__('Contact Form 7 Shortcode', 'hotel')}
                        </legend>
                        <TextControl
                            tagName='h3'
                            placeholder={__(
                                'Contact Form 7 Shortcode',
                                'hotel'
                            )}
                            value={shortcode}
                            onChange={(val) =>
                                setAttributes({
                                    shortcode: val,
                                })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <div
                    className={props.className}
                    class='wp-block-hotel-reserve-form'
                >
                    <h3>{__('Reserve Form Block', 'hotel')}</h3>
                    <p>{shortcode}</p>
                </div>
            </Fragment>
        );
    },
    save: () => {
        return null;
    },
});
