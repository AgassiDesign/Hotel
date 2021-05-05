import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { RangeControl, TextareaControl } from '@wordpress/components';

registerBlockType('hotel/property-article', {
    title: __('Property Articles', 'hotel'),
    icon: 'images-alt2',
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
        title: {
            type: 'string',
            selector: 'h3',
        },
        description: {
            type: 'string',
            selector: 'h5',
        },
        articleCount: {
            type: 'number',
            default: 3,
        },
        title: {
            type: 'string',
            selector: '.title_description',
        },
        taxonomies: {
            type: 'object',
        },
        selectTaxonomy: {
            type: 'string',
        },
        term: {
            type: 'object',
        },
        term_id: {
            type: 'string',
        },
    },
    edit: (props) => {
        const {
            attributes: {
                title,
                description,
                taxonomies,
                selectTaxonomy,
                articleCount,
                term,
                term_id,
            },
            setAttributes,
        } = props;
        if (!taxonomies) {
            wp.apiFetch({
                url: '/wp-json/hotel/v1/properties/all-terms',
            }).then((taxonomies) => {
                props.setAttributes({
                    taxonomies: taxonomies,
                });

                if (taxonomies && term_id === undefined) {
                    props.setAttributes({
                        selectTaxonomy: taxonomies[0].id,
                    });
                    props.setAttributes({
                        term: taxonomies[0].data[0],
                    });
                    props.setAttributes({
                        term_id: taxonomies[0].data[0].term_id,
                    });
                }
            });
        }

        if (!taxonomies) {
            return __('Loading ...', 'hotel');
        }

        if (
            !props.attributes.taxonomies &&
            props.attributes.taxonomies.length === 0
        ) {
            return __('No taxonomies found. Please add some!!', 'hotel');
        }

        function onChangeTaxonomy(e) {
            setAttributes({ selectTaxonomy: e.target.value });
        }
        function onChangeTerm(e) {
            const value = e.target.value;
            setAttributes({ term_id: value });
            taxonomies
                .filter((taxonomy) => {
                    return taxonomy.id === selectTaxonomy;
                })
                .map((taxonomy) => {
                    taxonomy.data.map((term) => {
                        if (term.term_id === +value) {
                            setAttributes({ term: term });
                        }
                    });
                });
        }
        function Term(props) {
            const selectTaxonomy = props.selectTaxonomy;

            if (!selectTaxonomy) {
                return true;
            }
            return (
                <>
                    <div class='term-list'>
                        <label>Select Term: </label>
                        <select
                            onChange={onChangeTerm}
                            value={term_id}
                            class='components-text-control__input'
                        >
                            {taxonomies
                                .filter((taxonomy) => {
                                    return taxonomy.id === selectTaxonomy;
                                })
                                .map((taxonomy) => {
                                    return taxonomy.data.map((term) => {
                                        return (
                                            <option
                                                value={term.term_id}
                                                key={term.term_id}
                                            >
                                                {term.name}
                                            </option>
                                        );
                                    });
                                })}
                        </select>
                    </div>
                </>
            );
        }
        return (
            <div class='wp-block-hotel-property-articles'>
                <div class='taxonomies-list'>
                    <label>Select Taxonomy: </label>
                    <select
                        onChange={onChangeTaxonomy}
                        value={selectTaxonomy}
                        class='components-text-control__input'
                    >
                        {taxonomies.map((taxonomy) => {
                            return (
                                <option value={taxonomy.id} key={taxonomy.id}>
                                    {taxonomy.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <Term selectTaxonomy={selectTaxonomy} />
                <RichText
                    className='property-articles__title'
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
                    className='property-articles__description'
                    placeholder={__('Write Description', 'hotel')}
                    value={description}
                    onChange={(val) =>
                        setAttributes({
                            description: val,
                        })
                    }
                />
                <label>Select Article Count: </label>
                <RangeControl
                    value={articleCount}
                    onChange={(val) =>
                        setAttributes({
                            articleCount: val,
                        })
                    }
                    trackColor={'red'}
                    min={0}
                    max={6}
                />
            </div>
        );
    },
    save: () => {
        return null;
    },
});
