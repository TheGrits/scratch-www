var React = require('react');
var render = require('../../../lib/render.jsx');

var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../../components/page/www/page.jsx');
var InformationPage = require('../../../components/informationpage/informationpage.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');

var Download = React.createClass({
    type: 'Download',
    render: function () {
        return (
            <div className="download">
                <TitleBanner className="masthead">
                    <div className="inner">
                        <h1 className="title-banner-h1">
                            <FormattedMessage id='download.title' />
                        </h1>
                        <p className="title-banner-p intro">
                            <FormattedMessage id='download.intro' />
                        </p>
                    </div>
                </TitleBanner>
            </div>
        );
    }
})
