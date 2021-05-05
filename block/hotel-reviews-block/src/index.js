import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { RangeControl } from '@wordpress/components';

registerBlockType('hotel/reviews', {
    title: __('Reviews', 'hotel'),
    icon: 'format-chat',
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
        maxReviewCount: {
            type: 'decimalPoint',
            default: 0.0,
        },
        cleanlinessProgress: {
            type: 'number',
            selector: '.cleanliness_progress',
            default: 0,
        },
        communicationProgress: {
            type: 'number',
            selector: '.communication_progress',
            default: 0,
        },
        checkInProgress: {
            type: 'number',
            selector: '.check_in_progress',
            default: 0,
        },
        accuracyProgress: {
            type: 'number',
            selector: '.accuracy_progress',
            default: 0,
        },
        locationProgress: {
            type: 'number',
            selector: '.location_progress',
            default: 0,
        },
        valueProgress: {
            type: 'number',
            selector: '.value_progress',
            default: 0,
        },
    },
    edit: (props) => {
        const {
            className,
            attributes: {
                cleanlinessProgress,
                communicationProgress,
                checkInProgress,
                accuracyProgress,
                locationProgress,
                valueProgress,
                maxReviewCount,
            },
            setAttributes,
        } = props;
        return (
            <div>
                <InspectorControls>
                    <div>
                        <fieldset>
                            <legend className='blocks-base-control__label'>
                                {__('Show Reviews', 'hotel')}
                            </legend>
                            <RangeControl
                                value={maxReviewCount}
                                onChange={(newval) =>
                                    setAttributes({
                                        maxReviewCount: newval,
                                    })
                                }
                                trackColor={'red'}
                                min={0}
                                max={10}
                            />
                        </fieldset>
                    </div>
                </InspectorControls>
                <div className={className}>
                    <h3 class='reviews-list__title'>Reviews</h3>
                    <ul class='reviews-list'>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Cleanliness</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={cleanlinessProgress}
                                onChange={(newval) =>
                                    setAttributes({
                                        cleanlinessProgress: newval,
                                    })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Communication</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={communicationProgress}
                                onChange={(newval) =>
                                    setAttributes({
                                        communicationProgress: newval,
                                    })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Check-in</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={checkInProgress}
                                onChange={(newval) =>
                                    setAttributes({ checkInProgress: newval })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Accuracy</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={accuracyProgress}
                                onChange={(newval) =>
                                    setAttributes({ accuracyProgress: newval })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Location</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={locationProgress}
                                onChange={(newval) =>
                                    setAttributes({ locationProgress: newval })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                        <li class='reviews-list__item'>
                            <span class='reviews-item'>Value</span>
                            <RangeControl
                                className='reviews-item__value cleanliness_progress'
                                value={valueProgress}
                                onChange={(newval) =>
                                    setAttributes({ valueProgress: newval })
                                }
                                withInputField={false}
                                trackColor={'red'}
                                step={0.1}
                                min={0}
                                max={5}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
    save: () => {
        return null;
    },
});
