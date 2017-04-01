var React = require('react');
var render = require('../../../lib/render.jsx');

var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../../components/page/www/page.jsx');
var InformationPage = require('../../../components/informationpage/informationpage.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');
var FlexRow = require('../../components/flex-row/flex-row.jsx');

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
                        <p className="title-banner-p intro">
                            <FormattedHTMLMessage id='download.introMac' />
                        </p>
                    </div>
                </TitleBanner>
                <div className="inner">
                    <FlexRow className="three-col-row">
                        <div class="steps column">
                            <h3><FormattedMessage id='download.airTitle' /></h3>
                            <p><FormattedMessage id='download.airBody' /></p>
                            <p>
                                <FormattedMessage id='download.macOSX' /> -
                                {' '}<a href="http://get.adobe.com/air/">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.macOlder' /> -
                                {' '}<a href="http://airdownload.adobe.com/air/mac/download/2.6/AdobeAIR.zip">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.windows' /> -
                                {' '}<a href="http://get.adobe.com/air/">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.linux' /> -
                                {' '}<a href="http://airdownload.adobe.com/air/lin/download/2.6/AdobeAIRInstaller.bin">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                        </div>
                        <div class="steps column">
                            <h3><FormattedMessage id='download.offlineEditorTitle' /></h3>
                            <p><FormattedMessage id='download.offlineEditorBody' /></p>
                            <p>
                                <FormattedMessage id='download.macOSX' /> -
                                {' '}<a href="http://get.adobe.com/air/">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.macOlder' /> -
                                {' '}<a href="http://airdownload.adobe.com/air/mac/download/2.6/AdobeAIR.zip">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.windows' /> -
                                {' '}<a href="http://get.adobe.com/air/">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.linux' /> -
                                {' '}<a href="http://airdownload.adobe.com/air/lin/download/2.6/AdobeAIRInstaller.bin">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                        </div>
                        <div className="steps column">
                            <h3><FormattedMessage id='download.supportMaterialsTitle' /></h3>
                            <p><FormattedMessage id='download.supportMaterialsBody' /></p>
                            <p>
                                <FormattedMessage id='download.starterProjects' /> -
                                {' '}<a href="https://scratch.mit.edu/scratchr2/static/sa/Scratch2StarterProjects.zip">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.gettingStarted' /> -
                                {' '}<a href="https://cdn.scratch.mit.edu/scratchr2/static/__709da8e5f3d72129538a4ccdbcbf5f2a__/pdfs/help/Getting-Started-Guide-Scratch2.pdf">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                            <p>
                                <FormattedMessage id='download.scratchCards' /> -
                                {' '}<a href="https://cdn.scratch.mit.edu/scratchr2/static/__709da8e5f3d72129538a4ccdbcbf5f2a__/pdfs/help/Scratch2Cards.pdf">
                                    <FormattedMessage id='download.download' />
                                </a>
                            </p>
                        </div>
                    </FlexRow>
                </div>
            </div>
        );
    }
})
