var React = require('react');
var render = require('../../lib/render.jsx');

var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../components/page/www/page.jsx');
var FlexRow = require('../../components/flex-row/flex-row.jsx');
var SubNavigation = require('../../components/subnavigation/subnavigation.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');

require('./parents.scss');

var Parents = React.createClass({
    type: 'Parents',
    render: function () {
        return (
            <div className="parents">
                <TitleBanner className="masthead">
                    <div className="inner">
                        <h1 className="title-banner-h1">
                            <FormattedMessage id="parents.title" />
                        </h1>
                        <FlexRow className="masthead-info">
                            <p className="title-banner-p intro">
                                <FormattedMessage id="parents.intro" />
                            </p>
                            <div className="ted-talk">
                                <iframe src="https://www.youtube.com/embed/uPSuG063jhA?border=0&wmode=transparent"
                                    frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </FlexRow>
                    </div>
                </TitleBanner>
            </div>
        );
    }
});

render(<Page><Parents /></Page>, document.getElementById('app'));
