import _ from 'lodash';
import '@nitro-ui/utility-spacing';

const spacesPrefix = {
    margin: 'u-margin',
    marginTop: 'u-margin-top',
    marginBottom: 'u-margin-bottom',
    marginLeft: 'u-margin-left',
    marginRight: 'u-margin-right',
    padding: 'u-padding',
    paddingTop: 'u-padding-top',
    paddingBottom: 'u-padding-bottom',
    paddingLeft: 'u-padding-left',
    paddingRight: 'u-padding-right',
};

const spacesPrefixMany = {
    marginMany: 'u-margin',
    marginTopMany: 'u-margin-top',
    marginBottomMany: 'u-margin-bottom',
    marginLeftMany: 'u-margin-left',
    marginRightMany: 'u-margin-right',
    paddingMany: 'u-padding',
    paddingTopMany: 'u-padding-top',
    paddingBottomMany: 'u-padding-bottom',
    paddingLeftMany: 'u-padding-left',
    paddingRightMany: 'u-padding-right',
};

const spacesProps = {
    margin: {
        type: String
    },
    marginTop: {
        type: String
    },
    marginBottom: {
        type: String
    },
    marginLeft: {
        type: String
    },
    marginRight: {
        type: String
    },
    padding: {
        type: String
    },
    paddingTop: {
        type: String
    },
    paddingBottom: {
        type: String
    },
    paddingLeft: {
        type: String
    },
    paddingRight: {
        type: String
    }
};

const spacesPropsMany = {
    marginMany: {
        type: Array
    },
    marginTopMany: {
        type: Array
    },
    marginBottomMany: {
        type: Array
    },
    marginLeftMany: {
        type: Array
    },
    marginRightMany: {
        type: Array
    },
    paddingMany: {
        type: Array
    },
    paddingTopMany: {
        type: Array
    },
    paddingBottomMany: {
        type: Array
    },
    paddingLeftMany: {
        type: Array
    },
    paddingRightMany: {
        type: Array
    }
};

const Spaces = {

    props: {
        ...spacesProps,
        ...spacesPropsMany
    },

    computed: {
        classNameUtilitySpaces: function () {

            let classNames = [];

            _.forEach( spacesPrefix, ( spacePrefix, spaceName ) => {
                if ( this[ spaceName ] ) {
                    classNames.push( `${spacePrefix}-${this[ spaceName ]}` );
                }
            } );

            _.forEach( spacesPrefixMany, ( spacePrefix, spaceName ) => {
                if ( this[ spaceName ] ) {
                    _.forEach( this[ spaceName ], child => {
                      classNames.push( `${spacePrefix}-${child}` );
                    } );
                }
            } );

            return [ 'hello-spaces', ...classNames ];
        }
    }
};

export default Spaces;
