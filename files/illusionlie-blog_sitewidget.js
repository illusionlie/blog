/**
 *  @project IllusioinLie Site Widget JS
 *  @version 2.0.0
 *  @author IllusionLie
 */
var blogWidget = (function () {

let latestHeight;
let latestWidth;

function tsfWidgetGuard() {
    return;
    if (!(window.location.host.includes('theskyflame.pages.dev') || window.location.host.includes('theskyflame.org') || window.location.host.includes('localhost:4000'))) {
        tsfEndLoad();
    }
    if (new Date() < new Date('2025-01-21')) {
        tsfEndLoad();
    }
    if (((Math.abs(window.outerHeight - window.innerHeight) >= 250 ) || (210 <= Math.abs(window.outerWidth - window.innerWidth))) && !document.hidden) {
        tsfEndLoad();
    }

    if (((Math.abs(window.innerHeight - latestHeight) >= 250) || (210 <= Math.abs(window.innerWidth - latestWidth))) && !document.hidden) {
        tsfEndLoad();
    }
    latestHeight = window.innerHeight;
    latestWidth = window.innerWidth;
    setTimeout(tsfWidgetGuard, 300);
};

async function tsfEndLoad() {
    document.body.innerHTML = "";
    window.location.href = "about:blank";
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.stop();
    debugger;
}

const bannerCookie = () => {
    if (`; ${document.cookie}`.split(`; notice=`).length === 2) {
        if ((`; ${document.cookie}`.split(`; notice=`).pop().split(';').shift()) == "true") {
            return;
        }
    }
    const cookieB = document.createElement('div');
    cookieB.className = 'cookie-consent';
    cookieB.innerHTML = `
    <div class="cookie-consent">
      🍪 本站使用Cookie来分析流量以改善用户体验
      -
    <a href="https://developer.mozilla.org/docs/Web/HTTP/Cookies" target="_blank" style="color:#2DFFFF;">什么是Cookie?</a>
    <button class="close-btn" onclick="blogWidget.closeBanner();"> × </button>
    </div>
    `;
    const styleB = document.createElement('style');
    styleB.innerHTML = `
        .cookie-consent {position: fixed;left: 0;bottom: 0;width: 100%;background-color: #003366;color: white;text-align: left;padding: 10px;z-index: 1000;}
        .close-btn {position: absolute;right: 20px;top: 50%;transform: translateY(-50%);border: none;background-color: transparent;color: white;font-size: 30px;cursor: pointer;}
        .close-btn:hover {color: #ccc;}
    `;
    document.head.appendChild(styleB);
    document.body.appendChild(cookieB);
};

function closeBanner() {
    document.querySelector('.cookie-consent').style.display='none';
    const d = new Date();
    d.setTime(d.getTime() + (14 * 24 * 60 * 60 * 1000));
    document.cookie = "notice=true;" + "expires=" + d.toUTCString() + ";path=/;SameSite=Lax;secure;";
}

function popupStyle() {
    const styleStatus = document.getElementById('popupStyle');
    if (styleStatus) {
        return;
    }
    const styleP = document.createElement('style');
    styleP.innerHTML = `
        .wrap {padding: 40px;text-align: center;}
        .tsfpop {background: #428bca;border: #357ebd solid 1px;border-radius: 3px;color: #fff;display: inline-block;font-size: 14px;padding: 8px 15px;text-decoration: none;text-align: center;min-width: 60px;position: relative;transition: color 0.1s ease;}
        .tsfpop:hover {background: #357ebd;}
        .tsfpop.tsfpop-big {font-size: 18px;padding: 15px 20px;min-width: 100px;}
        .tsfpop-close {color: #aaa;font-size: 30px;text-decoration: none;position: absolute;right: 15px;top: 0;cursor: pointer;}
        .tsfpop-close:hover {color: #919191;}
        .modalTSF {display: flex;justify-content: center;align-items: center;}
        .modalTSF:before {content: "";display: none;background: rgba(0, 0, 0, 0.6);position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;}
        .modalTSF.active:before {display: block;}
        .modalTSF .modalTSF-dialog {background: #fefefe;border: #333 solid 1px;border-radius: 5px;margin-left: -200px;position: fixed;left: 50%;top: -50%;z-index: 11;max-width: 500px;overflow-y: auto;transform: translate(0, -500%);transition: transform 0.3s ease-out;}
        .modalTSF.active .modalTSF-dialog {transform: translate(0, 0);top: 20%;}
        @media (max-width: 768px) {
            .modalTSF .modalTSF-dialog {margin-left: -150px;max-width: 300px;max-height: 68vh;}
            .modalTSF-body {overflow-y: scroll;}
        }
        .modalTSF-body {padding: 15px;}
        .modalTSF-header,
        .modalTSF-footer {padding: 10px 20px;}
        .modalTSF-header {border-bottom: #eee solid 1px;}
        .modalTSF-header h2 {font-size: 20px;}
        .modalTSF-footer {border-top: #eee solid 1px;text-align: right;}
    `;
    styleP.id = "popupStyle";
    document.head.appendChild(styleP);
}

function tsfCelebration() {
    if (document.getElementById('modalTSF-one') || document.getElementById('modalTSF-two')) {
        setTimeout(tsfCelebration, 1000);
    } else {
        const co_script = document.createElement('script');
        co_script.src = "https://gcore.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js";
        co_script.onload = async function() {
            try {
                const confetti = new JSConfetti();
                await confetti.addConfetti({
                    confettiColors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'],
                    confettiNumber: 333,
                    confettiRadius: 5,
                });
                popupC();
            } catch (error) {
                popupC();
            }
        };
        co_script.onerror = function() {
            popupC();
        };
    document.head.appendChild(co_script);
    };
    function popupC() {
        if (document.getElementById('modalTSF-one')) {
            setTimeout(popupC, 1000);
        } else {
            const createDate = new Date('2024-03-09');
            let runYears = Math.floor((new Date() - createDate) / (1000 * 60 * 60 * 24 * 365));
            popupStyle();
            const popupContainer = document.createElement('div');
            popupContainer.id = "popupC";
            popupContainer.innerHTML = `
                <div class="modalTSF" id="modalTSF-two" aria-hidden="true">
                    <div class="modalTSF-dialog">
                        <div class="modalTSF-header">
                            <h2 style="color:black">虚像谎言Site Widget</h2>
                            <a class="tsfpop-close" aria-hidden="false" onclick="blogWidget.closePopup();"> × </a>
                        </div>
                        <div class="modalTSF-body">
                            <h5 style="color:black; font-weight:bold;"><span style="color:blue; font-weight:bold;"> 🎉 今天是该站点的建站${runYears}周年 ! 感谢各位的陪伴 ! </span></h5>
                            <p style="color:black"><strong>可喜可贺, 可喜可贺</strong></p>
                            <p style="color:black">2024/04/26 --> ${new Date().toLocaleDateString()}</p>
                        </div>
                        <div class="modalTSF-footer">
                            <a class="tsfpop" onclick="blogWidget.closePopup();">我知道了</a>
                        </div>
                    </div>
                </div>
            `;
            if (!document.getElementById('popupC')) {
                document.body.appendChild(popupContainer);
            }
            document.getElementById('modalTSF-two').classList.add('active');
        }
    }
}

function closePopup() {
    const popupC = document.getElementById('popupC');
    if (popupC) {
        popupC.classList.remove('active');
        popupC.parentNode.removeChild(popupC);
        return;
    }
    document.cookie = "popuptime=true; expires=" + new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString() + "; path=/; SameSite=Lax; secure;";
    const popupP = document.getElementById('modalTSF-one');
    popupP.classList.remove('active');
    popupP.parentNode.removeChild(popupP);
}

function checkCFcdn() {
    const request = new XMLHttpRequest();
    request.open('GET', '/cdn-cgi/trace', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const area = request.responseText.split("colo=")[1].split("\n")[0];
        const areas = ['{"s":"TNR","l":"Antananarivo, Madagascar 🇲🇬"}','{"s":"CPT","l":"Cape Town, South Africa 🇿🇦"}','{"s":"CMN","l":"Casablanca, Morocco 🇲🇦"}','{"s":"DAR","l":"Dar Es Salaam, Tanzania 🇹🇿"}','{"s":"JIB","l":"Djibouti City, Djibouti 🇩🇯"}','{"s":"DUR","l":"Durban, South Africa 🇿🇦"}','{"s":"JNB","l":"Johannesburg, South Africa 🇿🇦"}','{"s":"KGL","l":"Kigali, Rwanda 🇷🇼"}','{"s":"LOS","l":"Lagos, Nigeria 🇳🇬"}','{"s":"LAD","l":"Luanda, Angola 🇦🇴"}','{"s":"MPM","l":"Maputo, MZ 🇲🇿"}','{"s":"MBA","l":"Mombasa, Kenya 🇰🇪"}','{"s":"MRU","l":"Port Louis, Mauritius 🇲🇺"}','{"s":"RUN","l":"Réunion, France 🇫🇷"}','{"s":"BLR","l":"Bangalore, India 🇮🇳"}','{"s":"BKK","l":"Bangkok, Thailand 🇹🇭"}','{"s":"BWN","l":"Bandar Seri Begawan, Brunei 🇧🇳"}','{"s":"CEB","l":"Cebu, Philippines 🇵🇭"}','{"s":"CTU","l":"成都,  中国大陆 🇨🇳"}','{"s":"MAA","l":"Chennai, India 🇮🇳"}','{"s":"CGP","l":"Chittagong, Bangladesh 🇧🇩"}','{"s":"CKG","l":"重庆, 中国大陆 🇨🇳"}','{"s":"CMB","l":"Colombo, Sri Lanka 🇱🇰"}','{"s":"DAC","l":"Dhaka, Bangladesh 🇧🇩"}','{"s":"SZX","l":"东莞, 中国大陆 🇨🇳"}','{"s":"FUO","l":"佛山, 中国大陆 🇨🇳"}','{"s":"FOC","l":"福州, 中国大陆 🇨🇳"}','{"s":"CAN","l":"广州, 中国大陆 🇨🇳"}','{"s":"HGH","l":"杭州, 中国大陆 🇨🇳"}','{"s":"HAN","l":"Hanoi, Vietnam 🇻🇳"}','{"s":"HNY","l":"衡阳, 中国大陆 🇨🇳"}','{"s":"SGN","l":"Ho Chi Minh City, Vietnam 🇻🇳"}','{"s":"HKG","l":" 香港 🇭🇰"}','{"s":"HYD","l":"Hyderabad, India 🇮🇳"}','{"s":"ISB","l":"Islamabad, Pakistan 🇵🇰"}','{"s":"CGK","l":"Jakarta, Indonesia 🇮🇩"}','{"s":"TNA","l":"济南, 中国大陆 🇨🇳"}','{"s":"KHI","l":"Karachi, Pakistan 🇵🇰"}','{"s":"KTM","l":"Kathmandu, Nepal 🇳🇵"}','{"s":"CCU","l":"Kolkata, India 🇮🇳"}','{"s":"KUL","l":"Kuala Lumpur, Malaysia 🇲🇾"}','{"s":"LHE","l":"Lahore, Pakistan 🇵🇰"}','{"s":"NAY","l":"廊坊, 中国大陆 🇨🇳"}','{"s":"LYA","l":"洛阳, 中国大陆 🇨🇳"}','{"s":"MFM","l":" 澳门 🇲🇴"}','{"s":"MLE","l":"Malé, Maldives 🇲🇻"}','{"s":"MNL","l":"Manila, Philippines 🇵🇭"}','{"s":"BOM","l":"Mumbai, India 🇮🇳"}','{"s":"NAG","l":"Nagpur, India 🇮🇳"}','{"s":"NNG","l":"南宁, 中国大陆 🇨🇳"}','{"s":"DEL","l":"New Delhi, India 🇮🇳"}','{"s":"KIX","l":"Osaka, Japan 🇯🇵"}','{"s":"PNH","l":"Phnom Penh, Cambodia 🇰🇭"}','{"s":"TAO","l":"青岛, 中国大陆 🇨🇳"}','{"s":"ICN","l":"Seoul, South Korea 🇰🇷"}','{"s":"SHA","l":"上海, 中国大陆 🇨🇳"}','{"s":"SHE","l":"沈阳, 中国大陆 🇨🇳"}','{"s":"SJW","l":"石家庄, 中国大陆 🇨🇳"}','{"s":"SIN","l":"Singapore, Singapore 🇸🇬"}','{"s":"SZV","l":"苏州, 中国大陆 🇨🇳"}','{"s":"TPE","l":"台北, 台湾 🇹🇼"}','{"s":"PBH","l":"Thimphu, Bhutan 🇧🇹"}','{"s":"TSN","l":"天津, 中国大陆 🇨🇳"}','{"s":"NRT","l":"Tokyo, Japan 🇯🇵"}','{"s":"ULN","l":"Ulaanbaatar, Mongolia 🇲🇳"}','{"s":"VTE","l":"Vientiane, Laos 🇱🇦"}','{"s":"WUH","l":"武汉, 中国大陆 🇨🇳"}','{"s":"WUX","l":"无锡, 中国大陆 🇨🇳"}','{"s":"XIY","l":"西安, 中国大陆 🇨🇳"}','{"s":"EVN","l":"Yerevan, Armenia 🇦🇲"}','{"s":"CGO","l":"郑州, 中国大陆 🇨🇳"}','{"s":"CSX","l":"株洲, 中国大陆 🇨🇳"}','{"s":"AMS","l":"Amsterdam, Netherlands 🇳🇱"}','{"s":"ATH","l":"Athens, Greece 🇬🇷"}','{"s":"BCN","l":"Barcelona, Spain 🇪🇸"}','{"s":"BEG","l":"Belgrade, Serbia 🇷🇸"}','{"s":"TXL","l":"Berlin, Germany 🇩🇪"}','{"s":"BRU","l":"Brussels, Belgium 🇧🇪"}','{"s":"OTP","l":"Bucharest, Romania 🇷🇴"}','{"s":"BUD","l":"Budapest, Hungary 🇭🇺"}','{"s":"KIV","l":"Chișinău, Moldova 🇲🇩"}','{"s":"CPH","l":"Copenhagen, Denmark 🇩🇰"}','{"s":"ORK","l":"Cork, Ireland 🇮🇪"}','{"s":"DUB","l":"Dublin, Ireland 🇮🇪"}','{"s":"DUS","l":"Düsseldorf, Germany 🇩🇪"}','{"s":"EDI","l":"Edinburgh, United Kingdom 🇬🇧"}','{"s":"FRA","l":"Frankfurt, Germany 🇩🇪"}','{"s":"GVA","l":"Geneva, Switzerland 🇨🇭"}','{"s":"GOT","l":"Gothenburg, Sweden 🇸🇪"}','{"s":"HAM","l":"Hamburg, Germany 🇩🇪"}','{"s":"HEL","l":"Helsinki, Finland 🇫🇮"}','{"s":"IST","l":"Istanbul, Turkey 🇹🇷"}','{"s":"KBP","l":"Kyiv, Ukraine 🇺🇦"}','{"s":"LIS","l":"Lisbon, Portugal 🇵🇹"}','{"s":"LHR","l":"London, United Kingdom 🇬🇧"}','{"s":"LUX","l":"Luxembourg City, Luxembourg 🇱🇺"}','{"s":"MAD","l":"Madrid, Spain 🇪🇸"}','{"s":"MAN","l":"Manchester, United Kingdom 🇬🇧"}','{"s":"MRS","l":"Marseille, France 🇫🇷"}','{"s":"MXP","l":"Milan, Italy 🇮🇹"}','{"s":"DME","l":"Moscow, Russia 🇷🇺"}','{"s":"MUC","l":"Munich, Germany 🇩🇪"}','{"s":"LCA","l":"Nicosia, Cyprus 🇨🇾"}','{"s":"OSL","l":"Oslo, Norway 🇳🇴"}','{"s":"CDG","l":"Paris, France 🇫🇷"}','{"s":"PRG","l":"Prague, Czech Republic 🇨🇿"}','{"s":"KEF","l":"Reykjavík, Iceland 🇮🇸"}','{"s":"RIX","l":"Riga, Latvia 🇱🇻"}','{"s":"FCO","l":"Rome, Italy 🇮🇹"}','{"s":"LED","l":"Saint Petersburg, Russia 🇷🇺"}','{"s":"SOF","l":"Sofia, Bulgaria 🇧🇬"}','{"s":"ARN","l":"Stockholm, Sweden 🇸🇪"}','{"s":"TLL","l":"Tallinn, Estonia 🇪🇪"}','{"s":"SKG","l":"Thessaloniki, Greece 🇬🇷"}','{"s":"VIE","l":"Vienna, Austria 🇦🇹"}','{"s":"VNO","l":"Vilnius, Lithuania 🇱🇹"}','{"s":"WAW","l":"Warsaw, Poland 🇵🇱"}','{"s":"ZAG","l":"Zagreb, Croatia 🇭🇷"}','{"s":"ZRH","l":"Zürich, Switzerland 🇨🇭"}','{"s":"ARI","l":"Arica, Chile 🇨🇱"}','{"s":"ASU","l":"Asunción, Paraguay 🇵🇾"}','{"s":"BOG","l":"Bogotá, Colombia 🇨🇴"}','{"s":"EZE","l":"Buenos Aires, Argentina 🇦🇷"}','{"s":"CWB","l":"Curitiba, Brazil 🇧🇷"}','{"s":"FOR","l":"Fortaleza, Brazil 🇧🇷"}','{"s":"GUA","l":"Guatemala City, Guatemala 🇬🇹"}','{"s":"LIM","l":"Lima, Peru 🇵🇪"}','{"s":"MDE","l":"Medellín, Colombia 🇨🇴"}','{"s":"PTY","l":"Panama City, Panama 🇵🇦"}','{"s":"POA","l":"Porto Alegre, Brazil 🇧🇷"}','{"s":"UIO","l":"Quito, Ecuador 🇪🇨"}','{"s":"GIG","l":"Rio de Janeiro, Brazil 🇧🇷"}','{"s":"GRU","l":"São Paulo, Brazil 🇧🇷"}','{"s":"SCL","l":"Santiago, Chile 🇨🇱"}','{"s":"CUR","l":"Willemstad, Curaçao 🇨🇼"}','{"s":"GND","l":"St. George‘s, Grenada 🇬🇩"}','{"s":"AMM","l":"Amman, Jordan 🇯🇴"}','{"s":"BGW","l":"Baghdad, Iraq 🇮🇶"}','{"s":"GYD","l":"Baku, Azerbaijan 🇦🇿"}','{"s":"BEY","l":"Beirut, Lebanon 🇱🇧"}','{"s":"DOH","l":"Doha, Qatar 🇶🇦"}','{"s":"DXB","l":"Dubai, United Arab Emirates 🇦🇪"}','{"s":"KWI","l":"Kuwait City, Kuwait 🇰🇼"}','{"s":"BAH","l":"Manama, Bahrain 🇧🇭"}','{"s":"MCT","l":"Muscat, Oman 🇴🇲"}','{"s":"ZDM","l":"Ramallah, Palestine 🇵🇸"}','{"s":"RUH","l":"Riyadh, Saudi Arabia 🇸🇦"}','{"s":"TLV","l":"Tel Aviv, Israel 🇮🇱"}','{"s":"IAD","l":"Ashburn, VA, United States 🇺🇸"}','{"s":"ATL","l":"Atlanta, GA, United States 🇺🇸"}','{"s":"BOS","l":"Boston, MA, United States 🇺🇸"}','{"s":"BUF","l":"Buffalo, NY, United States 🇺🇸"}','{"s":"YYC","l":"Calgary, AB, Canada 🇨🇦"}','{"s":"CLT","l":"Charlotte, NC, United States 🇺🇸"}','{"s":"ORD","l":"Chicago, IL, United States 🇺🇸"}','{"s":"CMH","l":"Columbus, OH, United States 🇺🇸"}','{"s":"DFW","l":"Dallas, TX, United States 🇺🇸"}','{"s":"DEN","l":"Denver, CO, United States 🇺🇸"}','{"s":"DTW","l":"Detroit, MI, United States 🇺🇸"}','{"s":"HNL","l":"Honolulu, HI, United States 🇺🇸"}','{"s":"IAH","l":"Houston, TX, United States 🇺🇸"}','{"s":"IND","l":"Indianapolis, IN, United States 🇺🇸"}','{"s":"JAX","l":"Jacksonville, FL, United States 🇺🇸"}','{"s":"MCI","l":"Kansas City, MO, United States 🇺🇸"}','{"s":"LAS","l":"Las Vegas, NV, United States 🇺🇸"}','{"s":"LAX","l":"Los Angeles, CA, United States 🇺🇸"}','{"s":"MFE","l":"McAllen, TX, United States 🇺🇸"}','{"s":"MEM","l":"Memphis, TN, United States 🇺🇸"}','{"s":"MEX","l":"Mexico City, Mexico 🇲🇽"}','{"s":"MIA","l":"Miami, FL, United States 🇺🇸"}','{"s":"MSP","l":"Minneapolis, MN, United States 🇺🇸"}','{"s":"MGM","l":"Montgomery, AL, United States 🇺🇸"}','{"s":"YUL","l":"Montréal, QC, Canada 🇨🇦"}','{"s":"BNA","l":"Nashville, TN, United States 🇺🇸"}','{"s":"EWR","l":"Newark, NJ, United States 🇺🇸"}','{"s":"ORF","l":"Norfolk, VA, United States 🇺🇸"}','{"s":"OMA","l":"Omaha, NE, United States 🇺🇸"}','{"s":"PHL","l":"Philadelphia, United States 🇺🇸"}','{"s":"PHX","l":"Phoenix, AZ, United States 🇺🇸"}','{"s":"PIT","l":"Pittsburgh, PA, United States 🇺🇸"}','{"s":"PAP","l":"Port-Au-Prince, Haiti 🇭🇹"}','{"s":"PDX","l":"Portland, OR, United States 🇺🇸"}','{"s":"QRO","l":"Queretaro, MX, Mexico 🇲🇽"}','{"s":"RIC","l":"Richmond, Virginia 🇺🇸"}','{"s":"SMF","l":"Sacramento, CA, United States 🇺🇸"}','{"s":"SLC","l":"Salt Lake City, UT, United States 🇺🇸"}','{"s":"SAN","l":"San Diego, CA, United States 🇺🇸"}','{"s":"SJC","l":"San Jose, CA, United States 🇺🇸"}','{"s":"YXE","l":"Saskatoon, SK, Canada 🇨🇦"}','{"s":"SEA","l":"Seattle, WA, United States 🇺🇸"}','{"s":"STL","l":"St. Louis, MO, United States 🇺🇸"}','{"s":"TPA","l":"Tampa, FL, United States 🇺🇸"}','{"s":"YYZ","l":"Toronto, ON, Canada 🇨🇦"}','{"s":"YVR","l":"Vancouver, BC, Canada 🇨🇦"}','{"s":"TLH","l":"Tallahassee, FL, United States 🇺🇸"}','{"s":"YWG","l":"Winnipeg, MB, Canada 🇨🇦"}','{"s":"ADL","l":"Adelaide, SA, Australia 🇦🇺"}','{"s":"AKL","l":"Auckland, New Zealand 🇳🇿"}','{"s":"BNE","l":"Brisbane, QLD, Australia 🇦🇺"}','{"s":"MEL","l":"Melbourne, VIC, Australia 🇦🇺"}','{"s":"NOU","l":"Noumea, New caledonia 🇳🇨"}','{"s":"PER","l":"Perth, WA, Australia 🇦🇺"}','{"s":"SYD","l":"Sydney, NSW, Australia 🇦🇺"}'];
        for (let i = 0; i < areas.length; i++) {
          const as = JSON.parse(areas[i]);
          if (as.s === area) {
            console.log(
                `%c ☁️ Cloudflare CDN %c You are using ${as.l}`,
                'color: white; background: #0078E7; padding:5px 0;',
                'padding:4px;border:1px solid #0078E7;'
            );
            document.getElementById("cf-cdn").innerHTML = as.l;
            break;
          }
        }
      } else {
        document.getElementById("cf-cdn").innerHTML = "异常";
        console.error('Failed to get CDN area');
      }
    };
    request.onerror = function() {
      document.getElementById("cf-cdn").innerHTML = "异常";
      console.error('Network error');
    };
    request.send();
};

document.addEventListener('DOMContentLoaded', () => {
    tsfWidgetGuard();
    checkCFcdn();
    bannerCookie();
    document.addEventListener('pjax:complete', () => {
        checkCFcdn();
    });
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 123 || event.code === 'F12' || event.key === 'F12') {
          event.preventDefault();
        }
    });
    const celebraMonth = 3
    const celebraDay = 9
    if (new Date().getMonth() == celebraMonth && new Date().getDate() == celebraDay) {
        tsfCelebration();
    }

});
return {
    Celebration: tsfCelebration,
    closePopup: closePopup,
    closeBanner: closeBanner,
}
})();