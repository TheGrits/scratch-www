var React = require('react');
var render = require('../../lib/render.jsx');

var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../components/page/www/page.jsx');
var FlexRow = require('../../components/flex-row/flex-row.jsx');
var SubNavigation = require('../../components/subnavigation/subnavigation.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');

require('./developers.scss');

var Developers = React.createClass({
    type: 'About',
    render: function () {
        return (
            <div className="developers">
                <TitleBanner className="masthead">
                    <div className="inner">
                        <h1><FormattedMessage id='developers.title' /></h1>
                        <p className="intro">
                            <FormattedMessage id='developers.intro' />
                        </p>
                    </div>
                    <div className="band">
                        <SubNavigation className="inner">
                            <a href="#projects">
                                <li>
                                    <FormattedMessage id='developers.projectsTitle' />
                                </li>
                            </a>
                            <a href="#principles">
                                <li>
                                    <FormattedMessage id='developers.principlesTitle' />
                                </li>
                            </a>
                            <a href="#donate">
                                <li>
                                    <FormattedMessage id='developers.donateTitle' />
                                </li>
                            </a>
                            <a href="#partners">
                                <li>
                                    <FormattedMessage id='developers.partnersTitle' />
                                </li>
                            </a>
                            <a href="#faq">
                                <li>
                                    <FormattedMessage id='developers.faqTitle' />
                                </li>
                            </a>
                        </SubNavigation>
                    </div>
                </TitleBanner>

                <div className="inner">
                    <section id="projects">
                        <span className="nav-spacer"></span>
                        <h2>Projects</h2>
                        <p className="intro">
                            <FormattedMessage id='developers.projectsIntro' />
                        </p>
                        <FlexRow className="sidebar-row">
                            <div className="body-copy column">
                                <h3><FormattedMessage id='developers.scratchBlocksTitle' /></h3>
                                <p>
                                    <FormattedHTMLMessage id='developers.scratchBlocksIntro' />
                                </p>
                                <p>
                                    <FormattedMessage id='developers.scratchBlocksBody' />
                                </p>
                            </div>
                            <img className="sidebar column" src="/images/developers/block-sketch.png" alt="blocks" />
                        </FlexRow>
                        <FlexRow className="sidebar-row">
                            <div className="body-copy column">
                                <h3><FormattedMessage id='developers.wwwTitle' /></h3>
                                <p>
                                    <FormattedHTMLMessage id='developers.wwwIntro' />
                                </p>
                            </div>

                            <img className="sidebar column" src="/images/developers/www-sketch.png" alt="www" />
                        </FlexRow>
                    </section>

                    <section id="principles">
                        <span className="nav-spacer"></span>
                        <h2><FormattedMessage id='developers.principlesTitle' /></h2>
                        <p className="intro">
                            <FormattedMessage id='developers.principlesIntro' />
                        </p>

                        <FlexRow className="sidebar-row">
                            <div className="body-copy column">
                                <h3><FormattedMessage id='developers.learningPrinciplesTitle' /></h3>
                                <dl>
                                    <dt><FormattedMessage id='developers.learningPrinciplesProjectsTitle' /></dt>
                                    <dd>
                                        <FormattedMessage id='developers.learningPrinciplesProjectsBody' />
                                    </dd>
                                    <dt><FormattedMessage id='developers.learningPrinciplesPassionTitle' /></dt>
                                    <dd>
                                        <FormattedMessage id='developers.learningPrinciplesPassionBody' />
                                    </dd>
                                    <dt><FormattedMessage id='developers.learningPrinciplesPeersTitle' /></dt>
                                    <dd>
                                        <FormattedMessage id='developers.learningPrinciplesPeersBody' />
                                    </dd>
                                    <dt><FormattedMessage id='developers.learningPrinciplesPlayTitle' /></dt>
                                    <dd>
                                        <FormattedMessage id='developers.learningPrinciplesPlayBody' />
                                    </dd>
                                </dl>
                            </div>
                        </FlexRow>

                        <FlexRow className="sidebar-row">
                            <div className="body-copy column">
                                <h3>Design Principles</h3>
                                <dl>
                                    <dt>Low Floor & Wide Walls</dt>
                                    <dd>
                                        In order to encourage a varied and diverse set of interactions, we{' '}
                                        explicitly include elements and features that are easy for kids to{' '}
                                        understand (low floor), but general enough to support diverse uses (wide walls).
                                    </dd>
                                    <dt>Make it as Simple as Possible — And Maybe Even Simpler</dt>
                                    <dd>
                                        Despite the common drive to add more features to software products, we{' '}
                                        have found that reducing the number of features often improves the user{' '}
                                        experience. What initially seems like a constraint or limitation can foster{' '}
                                        new forms of creativity.
                                    </dd>
                                    <dt>Many Paths, Many Styles</dt>
                                    <dd>
                                        Many math and science activities have traditionally been biased towards{' '}
                                        specific populations. By paying special attention to creating accessible{' '}
                                        and appealing technologies, we are working to close the gap.
                                    </dd>
                                    <dt>Design for Tinkerability</dt>
                                    <dd>
                                        We believe that the learning process is inherently iterative. Tinkerers{' '}
                                        start by exploring and experimenting, then revising and refining their{' '}
                                        goals and creations. To support this style of interaction, we design{' '}
                                        our interfaces to encourage quick experimentation and rapid cycles of iteration.
                                    </dd>
                                </dl>
                            </div>
                        </FlexRow>
                    </section>

                    <section id="donate">
                        <span className="nav-spacer"></span>
                        <h2>Donate</h2>
                        <p>
                            We are pleased to provide Scratch free of charge. If you enjoy using Scratch, please{' '}
                            consider <a href="https://secure.donationpay.org/scratchfoundation/">making a donation{' '}
                            to support Scratch</a>. Donations of any size are appreciated.
                        </p>
                        <p>
                            Your donation to the Scratch Foundation will be used to support future development of{' '}
                            Scratch software and the Scratch website.
                        </p>
                        <p>
                            Thanks for supporting Scratch!
                        </p>
                    </section>

                    <section id="partners">
                        <span className="nav-spacer"></span>
                        <h3>Partners</h3>
                        <p>
                            The creation and maintenance of this open source code would not be possible without{' '}
                            generous technical and financial support from our partners:
                        </p>

                        <FlexRow className="logos">
                            <img className="logo" src="/images/developers/google.png" alt="google" />
                            <img className="logo" src="/images/developers/intel.png" alt="intel" />
                            <img className="logo" src="/images/developers/cn.png" alt="cartoon network" />
                            <img className="logo" src="/images/developers/lemann.png" alt="lemann foundation" />
                        </FlexRow>
                    </section>
                </div>

                <TitleBanner className="faq-banner">
                    <div className="inner">
                        <section id="faq">
                            <span className="nav-spacer"></span>
                            <h3>FAQ</h3>
                            <FlexRow className="three-col-row">
                                <div className="faq column">
                                    <h4>Where can I learn more about Scratch?</h4>
                                    <p>
                                        Scratch is a free programming language and online community where young{' '}
                                        people can create their own interactive stories, games, and animations.{' '}
                                        Scratch is a project of the{' '}
                                        <a href="https://llk.media.mit.edu/">Lifelong Kindergarten</a>{' '}
                                        Group at the <a href="http://media.mit.edu/">MIT Media Lab</a>.{' '}
                                        You can learn more about Scratch{' '}
                                        <a href="https://scratch.mit.edu/about">here</a>.
                                    </p>
                                </div>
                                <div className="faq column">
                                    <h4>Are there rules to using this code in my application?</h4>
                                    <p>
                                        You may use this code in accordance with the license which governs{' '}
                                        each project. We also strongly encourage you to consider the learning{' '}
                                        and design principles (above, on this page) when building creative{' '}
                                        learning experiences for kids of all ages.
                                    </p>
                                </div>
                                <div className="faq column">
                                    <h4>
                                        Am I allowed to use the name "Scratch Blocks" in the description of my{' '}
                                        app and other public messaging?
                                    </h4>
                                    <p>
                                        If you wish, you can publicly state that your application is powered by{' '}
                                        Scratch Blocks. If you do so, we would also encourage you to link back to{' '}
                                        the code repository.
                                    </p>
                                </div>
                                <div className="faq column">
                                    <h4>Are you releasing more code and when?</h4>
                                    <p>
                                        We plan to open source additional code relating to the Scratch programming{' '}
                                        language over the next few months. Keep an eye on this page!
                                    </p>
                                </div>
                                <div className="faq column">
                                    <h4>What’s the difference between Blockly and Scratch Blocks?</h4>
                                    <p>
                                        Scratch Blocks builds upon the Blockly code base, and is specifically{' '}
                                        designed with our principles in mind to support creative learning experiences.
                                    </p>
                                </div>
                                <div className="faq column">
                                    <h4>I’d like to collaborate. How do I get in touch?</h4>
                                    <p>
                                        You can reach us over on <a href="https://github.com/LLK/">github</a> or{' '}
                                        you can send an email to{' '}
                                        <a href="mailto:help@scratch.mit.edu">help@scratch.mit.edu.</a>{' '}
                                        We look forward to hearing from you!
                                    </p>
                                </div>
                            </FlexRow>
                        </section>
                    </div>
                </TitleBanner>
            </div>
        );
    }
});

render(<Page><Developers /></Page>, document.getElementById('app'));
