var React = require('react');
var render = require('../../lib/render.jsx');
var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../components/page/www/page.jsx');

require('./credits.scss');

var Credits = React.createClass({
    type: 'Credits',
    render: function () {
        return (
            <div className="inner credits">
                <h1><FormattedMessage id='credits.title' /></h1>
                <h2><FormattedMessage id='credits.mitst' /></h2>
                <p><FormattedMessage id='credits.developers' /></p>

                <ul>
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/167_170x170.png" alt="Mitchel Avatar" />
                        <span className="name">Mitchel Resnick</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/169_170x170.png" alt="Natalie Avatar" />
                        <span className="name">Natalie Rusk</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/573207_170x170.png" alt="Sayamindu Avatar" />
                        <span className="name">Sayamindu Dasgupta</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/13682_170x170.png" alt="Ricarose Avatar" />
                        <span className="name">Ricarose Roque</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2584924_170x170.png" alt="Ray Avatar" />
                        <span className="name">Ray Schamp</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/3484484_170x170.png" alt="Eric Avatar" />
                        <span className="name">Eric Schilling</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/3532363_170x170.png" alt="Chris Avatar" />
                        <span className="name">Chris Willis-Ford</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/3581881_170x170.png" alt="Carl Avatar" />
                        <span className="name">Carl Bowman</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/4373707_170x170.png" alt="Matthew Avatar" />
                        <span className="name">Matthew Taylor</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/4598206_170x170.png" alt="Kasia Avatar" />
                        <span className="name">Kasia Chmielinski</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/703844_170x170.png" alt="Tim Avatar" />
                        <span className="name">Tim Mickel</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2752403_170x170.png" alt="Saskia Avatar" />
                        <span className="name">Saskia Leggett</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2755634_170x170.png" alt="Christan Avatar" />
                        <span className="name">Christan Balch</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/10866958_170x170.png" alt="Colby Avatar" />
                        <span className="name">Colby Gutierrez-Kraybill</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/1709047_170x170.png" alt="Andrew Avatar" />
                        <span className="name">Andrew Sliwinski</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2286560_170x170.png" alt="Carmelo Avatar" />
                        <span className="name">Carmelo Presicce</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2678986_170x170.png" alt="Moran Avatar" />
                        <span className="name">Moran Tsur</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/3661900_170x170.png" alt="Juanita Avatar" />
                        <span className="name">Juanita Buitrago</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/3714374_170x170.png" alt="Shruti Avatar" />
                        <span className="name">Shruti Mohnot</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/1494_170x170.png" alt="Chris Avatar" />
                        <span className="name">Chris Garrity</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2796185_170x170.png" alt="Julia Avatar" />
                        <span className="name">Julia Zimmerman</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/246290_170x170.png" alt="Sarah Avatar" />
                        <span className="name">Sarah Otts</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/36977_170x170.png" alt="Connor Avatar" />
                        <span className="name">Connor Hudson</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/17618638_170x170.png" alt="Hanako Avatar" />
                        <span className="name">Hanako Tjia</span>
                    </li>
                </ul>

                <p><FormattedMessage id='credits.moderators' /></p>

                <ul>
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/49156_170x170.png" alt="Mark Avatar" />
                        <span className="name">Mark Goff</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/159139_170x170.png" alt="Franchette Avatar" />
                        <span className="name">Franchette Viloria</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/2496866_170x170.png" alt="Jolie Avatar" />
                        <span className="name">Jolie Castellucci</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/373646_170x170.png" alt="Dalton Avatar" />
                        <span className="name">Dalton Miner</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/4836354_170x170.png" alt="Christina Avatar" />
                        <span className="name">Christina Huang</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/4747093_170x170.png" alt="Annie Avatar" />
                        <span className="name">Annie Whitehouse</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/1048810_170x170.png" alt="Linda Avatar" />
                        <span className="name">Linda Fernsel</span>
                    </li>

                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/14110644_170x170.png" alt="Lily Avatar" />
                        <span className="name">Lily Kim</span>
                    </li>
                    
                    <li>
                        <img src="//cdn.scratch.mit.edu/get_image/user/13639421_170x170.png" alt="Tauntaun Avatar" />
                        <span className="name">Tauntaun Kim</span>
                    </li>
                </ul>

                <h2><FormattedMessage id='credits.previousTitle' /></h2>
                <p><FormattedMessage id='credits.previousBody' /></p>

                <h2><FormattedMessage id='credits.partnersTitle' /></h2>
                <p><FormattedMessage id='credits.partnersBody' /></p>

                <h2><FormattedMessage id='credits.researchersTitle' /></h2>
                <p><FormattedHTMLMessage id='credits.researchersBody' /></p>

                <h2><FormattedMessage id='credits.acknowledgementsTitle' /></h2>
                <p><FormattedHTMLMessage id='credits.acknowledgementsContributors' /></p>
                <p><FormattedMessage id='credits.acknowledgementsCommunity' /></p>
                <p><FormattedMessage id='credits.acknowledgementsInfluencers' /></p>

                <h2><FormattedMessage id='credits.supportersTitle' /></h2>
                <p><FormattedMessage id='credits.supportersFinancialHeader' /></p>
                <p>
                    <a href="http://www.nsf.gov/">National Science Foundation</a>,
                    <a href="http://www.scratchfoundation.org/"> Scratch Foundation</a>,
                    <a href="http://www.google.org/"> Google</a>,
                    <a href="http://www.legofoundation.com/"> LEGO Foundation</a>,
                    <a href="http://www.intel.com/"> Intel</a>,
                    <a href="http://www.turner.com/company/"> Cartoon Network</a>,
                    <a href="http://www.fundacaolemann.org.br/lemann-foundation/"> Lemann Foundation</a>,
                    <a href="https://www.macfound.org/"> MacArthur Foundation</a>.
                </p>
                
                <p><FormattedMessage id='credits.supportersServicesHeader' /></p>
                <p>
                    <a href="http://www.advancedinstaller.com/"> Advanced Installer</a>,
                    <a href="http://aws.amazon.com/"> Amazon Web Services</a>,
                    <a href="https://codetree.com/"> Codetree</a>,
                    <a href="https://www.fastly.com/"> Fastly</a>,
                    <a href="https://www.geckoboard.com"> Geckoboard</a>,
                    <a href="https://github.com/"> Github</a>,
                    <a href="https://www.inversoft.com/"> Inversoft</a>,
                    <a href="http://mailchimp.com/"> MailChimp</a>,
                    <a href="http://mandrill.com/">  Mandrill</a>,
                    <a href="http://newrelic.com/"> New Relic</a>,
                    <a href="https://www.pagerduty.com/"> PagerDuty</a>,
                    <a href="https://www.pingdom.com/"> Pingdom</a>,
                    <a href="https://www.rallydev.com/"> Rally</a>,
                    <a href="https://saucelabs.com/"> SauceLabs</a>,
                    <a href="https://screenhero.com/"> Screenhero</a>,
                    <a href="https://getsentry.com/welcome/"> Sentry</a>,
                    <a href="http://www.git-tower.com/"> Tower</a>,
                    and <a href="https://travis-ci.org/"> Travis-CI</a>.
                </p>
                
                <p><FormattedMessage id='credits.supportersOpenHeader' /></p>
                <p>
                    <a href="https://www.djangoproject.com/"> Django</a>,
                    <a href="http://djangobb.org/"> DjangoBB</a>,
                    <a href="https://www.docker.com/"> Docker</a>,
                    <a href="https://www.elastic.co/"> Elasticsearch</a>,
                    <a href="http://ganglia.sourceforge.net/"> Ganglia</a>,
                    <a href="gunicorn.org"> Gunicorn</a>,
                    <a href="https://jenkins-ci.org/"> Jenkins</a>,
                    <a href="http://www.linux.org/"> Linux</a>,
                    <a href="http://memcached.org/"> Memcached</a>,
                    <a href="https://www.mediawiki.org/wiki/MediaWiki"> MediaWiki</a>,
                    <a href="http://www.mysql.com/"> MySQL</a>,
                    <a href="https://www.nagios.org/"> Nagios</a>,
                    <a href="https://www.nginx.com/resources/wiki/"> Nginx</a>,
                    <a href="https://nodejs.org/en/"> Node.js</a>,
                    <a href="http://pootle.translatehouse.org/"> Pootle</a>,
                    <a href="http://www.postgresql.org/"> PostgreSQL</a>,
                    <a href="https://www.python.org/"> Python</a>,
                    <a href="http://redis.io/"> Redis</a>,
                    <a href="http://saltstack.com/"> SaltStack</a>,
                    <a href="https://github.com/etsy/statsd/"> StatsD</a>,
                    <a href="http://www.ubuntu.com/"> Ubuntu</a>,
                    and <a href="https://www.varnish-cache.org/"> Varnish</a>.
                </p>
            </div>
        );
    }
});

render(<Page><Credits /></Page>, document.getElementById('app'));
