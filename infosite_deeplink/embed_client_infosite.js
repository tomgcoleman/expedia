// function onClickLocButton( evt ){

var g_openInBackground = false;

function initialSetup(){
    var burger_found = document.getElementById('burger-img');

    if( !burger_found ){
        // console.log('no burger found, inserting');
        insertMainIcon();
    }
    var wb = document.getElementById('popup-burger-dialog');
    if( !wb ){
        // console.log('no popup found, inserting');
        insert_popup_dialog();
    }

    console.log('adding conditional styles');

    var sheet = document.styleSheets[0];
    var ind = 0; // infosite only works with index zero.

    if( window.navigator.userAgent.search(/chrome/i) > -1 ){
        // opera
        //  sheet.insertRule(" #burger-img:hover { webkit-transform: scale(2); -webkit-transform-origin: right top }", ind);
        sheet.insertRule(" #burger-img:hover { transform: scale(2); transform-origin: 35px 10px }", ind);
        sheet.insertRule(" #burger-img:hover { -moz-transform: scale(2.5); -moz-transform-origin: right top; }", ind);
    }
    else if( window.navigator.userAgent.search(/firefox/i) > -1 ){
        sheet.insertRule(" #burger-img:hover { -moz-transform: scale(2.5); -moz-transform-origin: 38px 8px; }", ind);
    }
    else {
        // IE
        sheet.insertRule(" #burger-img:hover { zoom: 250%; top: -2px; right: -2px }", ind);
    }

    if( window.navigator.userAgent.search(/firefox/i) > -1 ){
        sheet.insertRule(" .expBucket { padding: 6px 10px; }", ind);
    }

}

function insertMainIcon(){

    var icon = document.createElement('img');
    icon.id = 'burger-img';
    document.body.appendChild(icon);

    icon.onclick = function(){
        toggleElementVisibility( 'popup-burger-dialog' );
    };
    icon.src="data:image/png;base64,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";
}



function add_group_container(groupName, makeFirst){
    var left_column = document.createElement('div');
    sc.appendChild(group_div);

    group_div.id = 'group_' + groupName + '_container';
    group_div.className = 'groupContainer';
    group_div.style.position = 'relative';
    group_div.style.width = '100%';
}


function calcPosition( position, offset ){
    var pxNum = /(\d+)px/.exec( position );
    if( !pxNum ){
        console.error('failed to get position from:');
        console.error(position);
        return -1;
    }
    var newPxNum = Number( pxNum[1] ) + offset;
    return newPxNum + 'px';
}

function registerForEvents( obj, evt, code ){
    if( obj.addEventListener ){
        obj.addEventListener(evt, code);
    }
    if( obj.attachEvent ){
        obj.attachEvent(evt, code);
    }
}

function createElement( elType, elParent, elId, elText ){
    var newElement = document.createElement( elType );
    elParent.appendChild( newElement );

    newElement.id = elId;
    if( elText ){
        var extractBackgroundColor = /background:(\S+)/.exec(elText);
        var extractColor = /color:(\S+)/.exec(elText);
        if( extractBackgroundColor ){
            newElement.style.backgroundColor = extractBackgroundColor[1];
        } else if(extractColor){
            newElement.style.color = extractColor[1];
        } else {
            newElement.innerHTML = elText;
        }
    }
    return newElement;
}

/* stored as an array to keep them in order */
var environments = [
    { name: 'live', suffix: '', hasDots: true },
    { name: 'RC', suffix: '.integration.sb.karmalab.net', hasDots: false },
    { name: 'trunk', suffix: '.trunk.sb.karmalab.net', hasDots: false },
    { name: 'stub', suffix: 'trunk-stubbed.sb.karmalab.net', hasDots: false },
    { name: 'hotfix', suffix: '.int-milan.sb.karmalab.net', hasDots: false },
    { name: 'sandbox', suffix: '.sandbox.dev.sb.karmalab.net', hasDots: false },
    { name: 'custom', suffix: '{username}.dev.sb.karmalab.net', hasDots: false },
];

/* stored as an array to keep them in order */
var locales = [
    { name: 'us', domain: 'www.expedia.com', special: 'English' },
    { name: 'uk', domain: 'www.expedia.co.uk', special: 'English' },
    { name: 'ca', domain: 'www.expedia.ca', special: 'English dual' },
    { name: 'de', domain: 'www.expedia.de', special: 'long' },
    { name: 'au', domain: 'www.expedia.com.au', special: 'English' },
    { name: 'jp', domain: 'www.expedia.co.jp', special: 'English dual' },

    { name: 'it', domain: 'www.expedia.it' },
    { name: 'es', domain: 'www.expedia.es' },
    { name: 'nl', domain: 'www.expedia.nl' },
    { name: 'mx', domain: 'www.expedia.mx' },
    { name: 'fr', domain: 'www.expedia.fr' },
    { name: 'in', domain: 'www.expedia.co.in', special: 'English' },

    { name: 'at', domain: 'www.expedia.at' },
    { name: 'be', domain: 'www.expedia.be', special: 'dual' },
    { name: 'ie', domain: 'www.expedia.ie', special: 'English' },
    { name: 'nz', domain: 'www.expedia.co.nz', special: 'English' },
    { name: 'vsc',domain: 'expedia.voyages-sncf.com' },
    { name: 'kr', domain: 'www.expedia.co.kr', special: 'symbols' },

    { name: 'se', domain: 'www.expedia.se' },
    { name: 'no', domain: 'www.expedia.no' },
    { name: 'dk', domain: 'www.expedia.dk' },
    { name: 'sg', domain: 'www.expedia.com.sg', special: 'English' },
    { name: 'my', domain: 'www.expedia.com.my', special: 'English' },
    { name: 'th', domain: 'www.expedia.co.th', special: 'symbols' },

    { name: 'id', domain: 'www.expedia.co.id', special: 'English' },
    { name: 'br', domain: 'www.expedia.com.br', special: 'dual' },
    { name: 'hk', domain: 'www.expedia.com.hk', special: 'English dual' },
    { name: 'tw', domain: 'www.expedia.com.tw', special: 'English dual' },
    { name: 'ph', domain: 'www.expedia.com.ph', special: 'English' },
    { name: 'vn', domain: 'www.expedia.com.vn', special: '' },

    { name: 'ar', domain: 'www.expedia.com.ar' },
    { name: 'fi', domain: 'www.expedia.fi' },
    { name: 'arp', domain: 'www.expedia-aarp.com' },
    { name: 'td', domain: 'www.expediafortd.com' },
    { name: 'trv', domain: 'www.travelocity.com' },
    { name: 'trc', domain: 'www.travelocity.ca', special: 'English dual' },
];

/*

 <select id="is-meta-rewards-choices" name="metaRewardsChoices" maxlength="30">
 <option value="01" selected="1">Unknown user, discount Variant</option>
 <option value="02" >Rewards member, discount Variant</option>
 <option value="03" >Return and authenticated, UN used coupon</option>
 <option value="04" >Return and authenticated, double points</option>
 <option value="05" >Return user soft logged in (recognized)</option>
 <option value="11" >Unknown user, double points</option>
 <option value="12" >Rewards member, double points</option>
 <option value="13" >Return and authenticated, used coupon</option>
 <option value="14" >Return and authenticated, double points, redeemed</option>
 <option value="00" >Not applicable</option>
 <option value="99" >Error</option>
 </select>
 */

var meta_parameters = [
    { name: 'ukusDiscount', value: "01", caption: '01 - Unknown user, discount Variant'},
    { name: 'membDiscount', value: "02", caption: '02 - Rewards member, discount Variant'},
    { name: 'retautCoupon', value: "03", caption: '03 - Return and authenticated, UN used coupon'},
    { name: 'retautDouble', value: "04", caption: '04 - Return and authenticated, double points'},
    { name: 'retsoftluser', value: "05", caption: '05 - Return user soft logged in (recognized)'},
    { name: 'ukusDoubledc', value: "11", caption: '11 - Unknown user, double points'},
    { name: 'membDoubledc', value: "12", caption: '12 - Rewards member, double points'},
    { name: 'retauthUsedc', value: "13", caption: '13 - Return and authenticated, used coupon'},
    { name: 'retauthDoubl', value: "14", caption: '14 - Return and authenticated, double points, redeemed'},
    { name: 'notApplicabl', value: "00", caption: '00 - Not applicable'},
    { name: 'errorCodeOut', value: "99", caption: '99 - Error'}
];

/*

 <select id="marketing-channel-option-choices" name="isMarketingChannelChoices" maxlength="20">
 <option value="1" selected="1">1 - Email</option>
 <option value="2" >2 - Newsletter</option>
 <option value="3" >3 - Skyscanner</option>
 <option value="4" >4 - Kayak</option>
 <option value="5" >5 - Trivago</option>
 <option value="6" >6 - Finn</option>
 <option value="7" >7 - Hotelscombined</option>
 <option value="8" >8 - Wego</option>
 <option value="9" >9 - Tripadvisor</option>
 <option value="10" >10 - Google</option>
 <option value="11" >11 - JAL.jp</option>
 <option value="12" >12 - Hotel.jp</option>
 <option value="13" >13 - Travelcochan</option>
 <option value="14" >14 - 4Travel</option>
 <option value="15" >15 - Loyalty</option>
 <option value="16" >16 - Call Center</option>
 <option value="17" >17 - AirAsiaGo</option>
 <option value="18" >18 - Qunar</option>
 <option value="100" >100 - Expedia Rewards Blue</option>
 <option value="101" >101 - Expedia Rewards Silver</option>
 <option value="102" >102 - Expedia Rewards Gold</option>
 <option value="110" >110 - Local Residents</option>
 <option value="200" >200 - Affiliate Partners NA</option>
 <option value="201" >201 - Affiliate Partners LatAm</option>
 <option value="202" >202 - Affiliate Partners EMEA</option>
 <option value="203" >203 - Affiliate Partners APAC</option>
 <option value="210" >210 - H Channel 1</option>
 <option value="300" >300 - EAN Channel 1</option>
 <option value="301" >301 - EAN Channel 2</option>
 <option value="302" >302 - EAN Channel 3</option>
 <option value="303" >303 - EAN Channel 4</option>
 <option value="304" >304 - EAN Channel 5</option>
 <option value="305" >305 - EAN Channel 6</option>
 <option value="306" >306 - EAN Channel 7</option>
 <option value="307" >307 - EAN Channel 8</option>
 <option value="308" >308 - EAN Channel 9</option>
 <option value="309" >309 - EAN Channel 10</option>
 <option value="310" >310 - EAN Channel 11</option>
 <option value="311" >311 - EAN Channel 12</option>
 <option value="312" >312 - EAN Channel 13</option>
 <option value="313" >313 - EAN Channel 14</option>
 <option value="314" >314 - EAN Channel 15</option>
 <option value="401" >401 - Package Fenced Pricing</option>
 <option value="501" >501 - Blank</option>
 <option value="502" >502 - SEM Brand</option>
 <option value="503" >503 - SEM Other</option>
 <option value="504" >504 - SEO Brand</option>
 <option value="505" >505 - SEO Unbranded</option>
 <option value="100001" >100001 - EWS Test MCTC Ecom</option>
 <option value="100002" >100002 - EWS Test MCTC Hcom</option>
 </select>
 </div>

 <option value="1" selected="1">1 - Email</option>
 <option value="2" >2 - Newsletter</option>
 */
var marketing_parameters = [
    { name: '', value: "1", caption:"1 - Email"},
    { name: '', value: "2", caption:"2 - Newsletter"},
    { name: '', value: "3", caption:"3 - Skyscanner"},
    { name: '', value: "4", caption:"4 - Kayak"},
    { name: '', value: "5", caption:"5 - Trivago"},
    { name: '', value: "6", caption:"6 - Finn"},
    { name: '', value: "7", caption:"7 - Hotelscombined"},
    { name: '', value: "8", caption:"8 - Wego"},
    { name: '', value: "9", caption:"9 - Tripadvisor"},
    { name: '', value: "10", caption:"10 - Google"},
    { name: '', value: "11", caption:"11 - JAL.jp"},
    { name: '', value: "12", caption:"12 - Hotel.jp"},
    { name: '', value: "13", caption:"13 - Travelcochan"},
    { name: '', value: "14", caption:"14 - 4Travel"},
    { name: '', value: "15", caption:"15 - Loyalty"},
    { name: '', value: "16", caption:"16 - Call Center"},
    { name: '', value: "17", caption:"17 - AirAsiaGo"},
    { name: '', value: "18", caption:"18 - Qunar"},
    { name: '', value: "100", caption:"100 - Expedia Rewards Blue"},
    { name: '', value: "101", caption:"101 - Expedia Rewards Silver"},
    { name: '', value: "102", caption:"102 - Expedia Rewards Gold"},
    { name: '', value: "110", caption:"110 - Local Residents"},
    { name: '', value: "200", caption:"200 - Affiliate Partners NA"},
    { name: '', value: "201", caption:"201 - Affiliate Partners LatAm"},
    { name: '', value: "202", caption:"202 - Affiliate Partners EMEA"},
    { name: '', value: "203", caption:"203 - Affiliate Partners APAC"},
    { name: '', value: "210", caption:"210 - H Channel 1"},
    { name: '', value: "300", caption:"300 - EAN Channel 1"},
    { name: '', value: "301", caption:"301 - EAN Channel 2"},
    { name: '', value: "302", caption:"302 - EAN Channel 3"},
    { name: '', value: "303", caption:"303 - EAN Channel 4"},
    { name: '', value: "304", caption:"304 - EAN Channel 5"},
    { name: '', value: "305", caption:"305 - EAN Channel 6"},
    { name: '', value: "306", caption:"306 - EAN Channel 7"},
    { name: '', value: "307", caption:"307 - EAN Channel 8"},
    { name: '', value: "308", caption:"308 - EAN Channel 9"},
    { name: '', value: "309", caption:"309 - EAN Channel 10"},
    { name: '', value: "310", caption:"310 - EAN Channel 11"},
    { name: '', value: "311", caption:"311 - EAN Channel 12"},
    { name: '', value: "312", caption:"312 - EAN Channel 13"},
    { name: '', value: "313", caption:"313 - EAN Channel 14"},
    { name: '', value: "314", caption:"314 - EAN Channel 15"},
    { name: '', value: "401", caption:"401 - Package Fenced Pricing"},
    { name: '', value: "501", caption:"501 - Blank"},
    { name: '', value: "502", caption:"502 - SEM Brand"},
    { name: '', value: "503", caption:"503 - SEM Other"},
    { name: '', value: "504", caption:"504 - SEO Brand"},
    { name: '', value: "505", caption:"505 - SEO Unbranded"},
    { name: '', value: "100001", caption:"100001 - EWS Test MCTC Ecom"},
    { name: '', value: "100002", caption:"100002 - EWS Test MCTC Hcom"},
];

var url_parameters = [
    { name: 'dates', default: true, type: 'checkbox', url: '', tooltip: 'when enabled, dates are added'},
    { name: 'offset', parent: 'dates', default: 64, type: 'edit', url: 'chkin={}', tooltip: 'date start offset from today'},
    { name: 'duration', parent: 'dates', default: 6, type: 'edit', url: 'chkout={}', tooltip: 'date duration from start date'},
    { name: 'air+', type: 'checkbox', url: '', tooltip: 'setup air attach'},
    { name: 'air-', type: 'checkbox', url: '', tooltip: 'remove air attach'},
    { name: 'meta+', choices: 'meta', type: 'checkbox', url: '', tooltip: 'apply meta rewards per choice'},
    { name: 'meta-', type: 'checkbox', url: '', tooltip: 'remove meta rewards'},
    { name: 'dctk', type: 'checkbox', url: 'dctkdebug=true', tooltip: 'debug dctk output'},
    { name: 'qunit+', type: 'checkbox', url: 'qunit=1', tooltip: 'enable qunit testing'},
    { name: 'qunit-', type: 'checkbox', url: 'qunit=0', tooltip: 'disable qunit testing'},
    { name: 'debug', type: 'checkbox', url: 'debug=1', tooltip: 'enable debug mode, unminify scripts'},
    { name: 'all', type: 'checkbox', url: '', tooltip: 'open all points of sale'},
    { name: 'links', type: 'checkbox', url: '', tooltip: 'generate links to all points of sale'},
    { name: 'marketing', choices: 'marketing', type: 'checkbox', url: 'mctc={}', tooltip: 'add marketing channel parameter per choice'},
    { name: 'non English', type: 'checkbox', url: 'langid={}', tooltip: 'add language option for non English'},
    { name: 'multiple', type: 'checkbox', url: '', tooltip: 'open new tab, but stay here'}
];

function calculateDate(offset)
{
    var date_result = {
        day: '01',
        month: '04',
        year: '2015'
    };

    try
    {
        var start_date = new Date();
        start_date.setDate( start_date.getDate() + offset );

        var day_start = start_date.getDate();
        if( day_start < 10 )
        {
            day_start = '0' + day_start;
        }
        var month_start = start_date.getMonth() + 1;
        if( month_start < 10 )
        {
            month_start = '0' + month_start;
        }
        var year_start = start_date.getYear() + 1900;

        date_result.day = day_start;
        date_result.month = month_start;
        date_result.year = year_start;
    }
    catch(e)
    {
        console.error('calcuate date offset: ' + e.message);
    }
    return date_result;
}

function prepareDateValue(locale, dateOffset, dateDuration){

    locale = locale.toUpperCase();

    var argumentResult = 'chkin=01/01/1901&chkout=01/02/1901';

    var start_date = calculateDate(dateOffset * 1);
    var end_date = calculateDate(dateOffset * 1 + dateDuration * 1);

    var day_start = start_date.day;
    var month_start = start_date.month;
    var year_start = start_date.year;

    var day_end = end_date.day;
    var month_end = end_date.month;
    var year_end = end_date.year;

    var date_delimiter = '/';

    if( false ||
        locale == 'US' ||
        locale == 'PH' ||
        locale == 'AARP' ||
        locale == 'ARP' ||
        locale == 'TD' ||
        locale == 'TRV' || // travelocity usa
        false )
    {

        argumentResult = "chkin=" + month_start + date_delimiter + day_start + date_delimiter + year_start;
        argumentResult += "&chkout=" + month_end + date_delimiter + day_end + date_delimiter + year_end;
    }
    else if( false ||
        locale == 'JP' ||
        locale == 'SE' ||
        locale == 'KR' ||
        locale == 'HK' ||
        locale == 'TW' ||
        false )
    {
        argumentResult = "chkin=" + year_start + date_delimiter + month_start + date_delimiter + day_start;
        argumentResult += "chkout=" + year_end + date_delimiter + month_end + date_delimiter + day_end;
    }
    else
    {
        argumentResult = "chkin=" + day_start + date_delimiter + month_start + date_delimiter + year_start;
        argumentResult += "chkout=" + day_end + date_delimiter + month_end + date_delimiter + year_end;
    }
    return argumentResult;
}


function getLangFromLocale(locale){
    var langCode = '';
    switch (locale){
        case "CA": langCode=3084;
            break;
        case "MY": langCode=1086;
            break;
        case "HK": langCode=2052; // 3076
            break;
        case "TRC": langCode=3084;
            break;
        case "ID": langCode=1057;
            break;
        case "JP": langCode=1041;
            break;
        case "KR": langCode=1042;
            break;
        case "TH": langCode=1054;
            break;
        case "TW": langCode=1028;
            break;
    }
    return langCode;
}



function insert_popup_dialog(){

    var outerFrame = createElement( 'div', document.body, 'popup-burger-dialog', '', '');

    /******************************************************************************/
    /*                do not move this line to css                                */
    /* the height must be set before adding scroll children, or it fails to work. */
    /******************************************************************************/
    outerFrame.style.height = '550px';

// function createElement( elType, elParent, elId, elText ){

    var parent_popup = outerFrame;
    var psc = createElement( 'div', parent_popup, 'parent-scroll-container', 'background:red');

    var header = createElement('div', psc, 'dialog-header', 'background:lightyellow');
    header.innerHTML = '<B>Infosite Deeplink</B>';
    var mb =     createElement('div', psc, 'dialog-body', 'background:lightblue');
    var ft =     createElement('div', psc, 'dialog-footer', 'background:lightgreen');

    var hc = createElement('div', mb, 'hotel-choices', 'background:blue');
    var zin = createElement('div', mb, 'input-controls', 'background:white');

    var coreIn = createElement('div', zin, 'core-inputs', 'background:yellow');
    var envIn = createElement('div', zin, 'env-inputs', 'background:orage');
    var posIn = createElement('div', zin, 'pos-inputs', 'background:grey');

    /* hotel choices */
    var hotTitle = createElement('div', hc, 'hotel-choices-title', 'Which hotel?');
    hotTitle.className = 'hotelChoice';
    for( var hotTypeName in hotel_choices ){
        var hotType = hotel_choices[hotTypeName];
        for( var hotelId in hotType ){
            var hotelName = hotType[hotelId];
            var caption = hotTypeName + ' - ' + hotelId + ' - ' + hotelName;
            var hotelChoice = createElement('div', hc, 'hotel-choice-' + hotTypeName + '-' + hotelId, caption);
            hotelChoice.className = 'hotelChoice';
            registerForEvents(hotelChoice, 'click', onClickHotelId);
            break;
        }
    }
    console.log('stop here');
    var hIdCheck = createElement('input', coreIn, 'his-hotel-id', 'color:black');
    hIdCheck.type = 'checkbox';
    hIdCheck.checked = true;
    var hIdCaption = createElement('label', coreIn, 'his-hotel-id-caption', 'Hotel Id:');
    hIdCaption.setAttribute('for', 'his-hotel-id');
    hIdCaption.style.marginRight = '5px';
    hIdCaption.className = 'clickMe';

    var hIdEdit = createElement('input', coreIn, 'his-hotel-id-edit', 'color:black');
    hIdEdit.style.width = '70px';
    hIdEdit.marginRight = '20px';
    hIdEdit.value = 6226;

    var packagesCheck = createElement('input', coreIn, 'packages-check', 'color:black');
    packagesCheck.type = 'checkbox';
    packagesCheck.marginLeft = '10px';
    var packagesCaption = createElement('label', coreIn, 'packages-id-caption', 'packages');
    packagesCaption.setAttribute('for', 'packages-check');
    packagesCaption.className = 'clickMe';

    var firstEnvRadio = false;
    var columnDiv;
    for( var i = 0 ; i < environments.length ; i++ ){
        if( i % 3 == 0){
            var columnIndex = i / 3;
            columnDiv = createElement('div', envIn, 'env-column-' + columnIndex, '');
            columnDiv.className = 'environmentColumn';
        }
        var env = environments[i];
        var name = env.name;
        var addr = env.suffix;
        var dotless = !env.hasDots;
        var newEnv = createElement('input', columnDiv, 'radio-env-' + name, '');
        newEnv.className = 'environmentRadio';
        newEnv.type = 'radio';
        newEnv.name = 'env';
        newEnv.value = i;
        if( !firstEnvRadio ) firstEnvRadio = newEnv;
        var newEnvCaption = createElement('label', columnDiv, 'radio-env-' + name + '-caption', name);
        newEnvCaption.className = 'clickMe';
        newEnvCaption.setAttribute('for', 'radio-env-' + name);
        newEnvCaption.title = 'Environment values:'
        + '\nName: ' + name
        + '\nAddr: ' + addr
        + '\nDotless: ' + dotless;
        // todo: use styling to put things properly.
        var breakToNewLine = createElement('br', columnDiv, '', '');
    }
    firstEnvRadio.checked = true;
    /*

     var locales = [
     { name: 'us', domain: 'www.expedia.com' },

     */
    var loc_column; // = createElement('div', posIn, '', '');
    for( var i = 0 ; i < locales.length ; i++ ){
        var loc = locales[i];
        var name = loc.name;
        var domain = loc.domain;
        if( i % 6 == 0 ){
            loc_column = createElement('div', posIn, '', '');
            loc_column.className = 'locRow';
        }
        var loc_button = createElement('div', loc_column, 'loc-button-' + name, 'color:white');
        loc_button.className = 'locChoice';
        loc_button.value = domain;
        loc_button.innerHTML = name;
        registerForEvents( loc_button, 'click', onClickLocButton );

        // var breakToNewLine = createElement('br', loc_column, '', '');
    }
    /*
     var url_parameters = [
     { name: 'dates', type: 'checkbox', url: '',
     tooltip: 'when enabled, dates are added'},

     */
    for( var i = 0 ; i < url_parameters.length ; i++ ){
        var paramObj = url_parameters[i];
        var eId = 'url-param-' + i;
        var eLabel = paramObj.name;
        var eType = paramObj.type;
        var eToolTip = paramObj.tooltip;
        if( 'undefined' != typeof paramObj.default ){
            var eDefault = paramObj.default ;
        }
        if( paramObj.type == 'checkbox' ) eType = 'input';
        if( paramObj.type == 'edit'){
            eId += '-label';
            eType = 'label';
        }
        // function createElement( elType, elParent, elId, elText ){

        var newUrlParam;
        if( paramObj.type == 'checkbox' ){
            var checkContainer = createElement('span', ft, eId + '-wrap', '');
            newUrlParam = createElement(eType, checkContainer, eId, eLabel );
        } else {
            newUrlParam = createElement(eType, ft, eId, eLabel );
        }
        newUrlParam.title = eToolTip;
        if( paramObj.type == 'checkbox' ){
            newUrlParam.type = 'checkbox';
            // newUrlParam.parentElement = checkContainer;
            var newCaption = createElement('label', checkContainer, eId + '-label', eLabel);
            newCaption.setAttribute('for', eId);
            newCaption.title = eToolTip;
            if( 'undefined' != typeof paramObj.default ){
                newUrlParam.checked = eDefault;
            }
        }
        if( paramObj.type == 'edit' ){
            var newEdit = createElement('input', ft, 'url-param-' + i, eLabel);
            newEdit.className = 'dateValues';
            newEdit.title = eToolTip;
            newEdit.style.width = '50';
            newUrlParam.setAttribute('for', 'url-param-' + i);
            if( 'undefined' != typeof eDefault ){
                newEdit.value = eDefault;
            }
        } else {
            if( 'undefined' != typeof eDefault ){
                newUrlParam.value = eDefault;
            }
        }
        /*
         var meta_parameters = [
         { name: 'ukusDiscount', value: "01", caption: 'Unknown user, discount Variant'},

         */
        if( paramObj.choices == 'meta' ){
            var sel = createElement('select', ft, 'url-param-' + i + '-meta', eLabel);
            sel.title = 'meta rewards options';
            for( var imp = 0 ; imp < meta_parameters.length ; imp++ ){
                mpObj = meta_parameters[imp];
                var key = mpObj.name;
                var val = mpObj.value;
                var txt = mpObj.caption;
                var opt = createElement('option', sel, 'url-param-' + imp + 'meta-option');
                opt.value = val;
                opt.innerHTML = txt;
            }
        }
        if( paramObj.choices == 'marketing' ){
            /*
             marketing_parameters
             { name: 'email', value: 1, caption: 'email' },
             */
            var sel = createElement('select', ft, 'url-param-' + i + '-marketing', eLabel);
            sel.title = 'marketing choices';
            for( var imp = 0 ; imp < marketing_parameters.length ; imp++ ){
                mpObj = marketing_parameters[imp];
                var key = mpObj.name;
                var val = mpObj.value;
                var txt = mpObj.caption;
                var opt = createElement('option', sel, 'url-param-' + imp + '-marketing');
                opt.value = val;
                opt.innerHTML = txt;
            }
        }
    }
}

var hotel_choices = {
    ESR: {
        15276: 'Disney, CA',
        1184243: 'Wynn, Vegas',
        894823: 'Diana, Mexico',
        15215: 'Keiko, Tokyo',
        175192: 'Elephant, Germany',
        15930: 'Treasure, Vegas',
        6226: 'Niagara, CA',
        62824: 'Penguin, Miami',
        24715: 'Circus, Vegas',
        1079922: 'Banana, Mexico'
    },
    Pegasus: {
        1966192: 'WI',
        5991408: 'Japan',
        2281311: 'Mexico',
        3084620: 'Russia',
        967381: 'California',
        1135549: 'WI',
        3893017: 'Saudi'
    },
    DirAgent: {
        1430824: 'Spain',
        4208442: 'Argentina',
        5009820: 'Argentina',
        8987028: 'Spain'
    },
    ETP: {
        4925017: 'Italy Later',
        27566: 'CA Deposit',
        889499: 'MX Deposit',
        414902: 'MX Later',
        6436963: 'AU Deposit',
        573938: 'Niagara Later',
        1058923: 'CA Deposit'
    },
    WorldSpan: {
        1545117: 'changing',
        8210639: 'Italy'
    }
};

function onClickHotelId( evt ){
    var targetId = evt.target.id;
    var extractTarget = /.*-(\S+)-(\d+)$/.exec(targetId);
    if( extractTarget ){
        var hotelType = extractTarget[1];
        var hotelId = extractTarget[2];
        var newHotelId = -1;
        var newHotelText = '';
        document.getElementById('his-hotel-id-edit').value = hotelId;

        var use_next_hotel = false;
        var next_hotel = false;
        for( var i in hotel_choices[hotelType] ){
            var current_hotel = hotel_choices[hotelType][i];
            if( !next_hotel ){
                /* default to the first in the list, in case the last is clicked */
                next_hotel = true;
                newHotelId = i;
                newHotelText = current_hotel;
            }
            if( use_next_hotel ){
                /* previous cycle matched the clicked item */
                newHotelId = i;
                newHotelText = current_hotel;
                break;
            }
            if( i == hotelId ){
                /* found match for clicked item, use next in the list */
                use_next_hotel = true;
            }
        }
        var oldId = targetId;
        var newId = targetId.replace(/-\d+$/, '-' + newHotelId)
        var newText = hotelType + ' - ' + newHotelId + ' - ' + newHotelText;
        var hotel_click_item = document.getElementById(oldId);
        hotel_click_item.innerHTML = newText;
        hotel_click_item.id = newId;
    }
}

/*
 var url_parameters = [
 { name: 'dates', default: true, type: 'checkbox', url: '', tooltip: 'when enabled, dates are added'},
 { name: 'offset', default: 64, type: 'edit', url: 'chkin={}', tooltip: 'date start offset from today'},
 { name: 'duration', default: 6, type: 'edit', url: 'chkout={}', tooltip: 'date duration from start date'},
 { name: 'air+', type: 'checkbox', url: '', tooltip: 'setup air attach'},
 { name: 'air-', type: 'checkbox', url: '', tooltip: 'remove air attach'},
 { name: 'meta+', choices: 'meta', type: 'checkbox', url: '', tooltip: 'apply meta rewards per choice'},

 */

function gatherUrlParameters(locale){
    g_openInBackground = false;
    var urlPrepResult = {
        urlTextToAppend: '/',
        enableAirAttach: false,
        disableAirAttach: false,
        enableMetaRewards: false,
        metaRewardsValue: -1,
        disableMetaRewards: false
    };
    var appended = '/';
    if( document.getElementById('his-hotel-id').checked ){
        var id = document.getElementById('his-hotel-id-edit').value;
        appended += 'h' + id + '.Hotel-Information';
    }
    var appendItems = [];
    var useDates = false;
    var dateOffset = false;
    var dateDuration = false;
    // checked item
    for(var i = 0 ; i < 100 ; i++){
        // todo: how t0 find url stuff?  ---  lock step index
        var paramObj = url_parameters[i];
        if( !paramObj ) break;
        var id = 'url-param-' + i;
        var elem = document.getElementById(id);
        var appendThis = paramObj.url;
        if(paramObj.parent == 'dates'){
            if( useDates && elem && paramObj.name == 'offset' ){
                dateOffset = elem.value;
            }
            if( useDates && elem && paramObj.name == 'duration' ){
                dateDuration = elem.value;
            }

            if( dateOffset && dateDuration ){
                var dateArg = prepareDateValue(locale, dateOffset, dateDuration)
                appendItems.push( dateArg );
            }
        }
        if(elem.type == 'checkbox'){
            if(elem.checked){
                if(paramObj.name == 'dates'){
                    useDates = true;
                }
                if(paramObj.name == 'air+'){
                    urlPrepResult.enableAirAttach = true;
                    appendThis = '';
                }
                if(paramObj.name == 'air-'){
                    urlPrepResult.disableAirAttach = true;
                    appendThis = '';
                }
                if(paramObj.name == 'meta-'){
                    urlPrepResult.disableMetaRewards = true;
                    appendThis = '';
                }
                if(paramObj.name == 'non English'){
                    var langId = getLangFromLocale(locale);
                    if( langId ){
                        appendThis = appendThis.replace(/{.*?}/, langId );
                    } else {
                        appendThis = '';
                    }
                }
                if(paramObj.name == 'multiple'){
                    g_openInBackground = true;
                }
                if(paramObj.choices){
                    var choicesId = 'url-param-' + i + '-' + paramObj.choices;
                    var choicesElem = document.getElementById(choicesId);
                    if( choicesElem && choicesElem.type.search('select') > -1 ){
                        appendThis = appendThis.replace(/{.*?}/, choicesElem.value );
                    }
                    if(paramObj.name == 'meta+' && choicesElem){
                        urlPrepResult.enableMetaRewards = true;
                        urlPrepResult.metaRewardsValue = choicesElem.value;
                        appendThis = '';
                    }
                }
                appendItems.push( appendThis );
            }
        }
    }

    var delimiter = '?';
    for( var i = 0 ; i < appendItems.length ; i++ ){
        if( appendItems[i] ){
            appended += delimiter + appendItems[i];
            delimiter = '&';
        }
    }
    urlPrepResult.urlTextToAppend = appended;

    return urlPrepResult;
}

function openNewBackgroundTab(url, background_tab){
    var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
        background_tab, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

function openUrlsWithDelays(urls){
    /* first in, first out */
    var url = urls.shift();
    if( url ){
        console.log('open url: ' + url);
        if( urls.length > 0 || g_openInBackground ){
            openNewBackgroundTab(url, true);
        } else {
            window.open(url, '_blank');
            // this causes the current window to be replaced.
            // openNewBackgroundTab(url, false);
        }
        setTimeout( function(){ openUrlsWithDelays(urls) }, 5000 );
    }
}

function prepareExtraUrls( urlPrepResult ){
    var urlResults = [];
    if( urlPrepResult.enableAirAttach ){
        urlResults.push( urlPrepResult.url + "/devtools/hotels/airAttach?mock=on" );
    }
    if( urlPrepResult.disableAirAttach ){
        urlResults.push( urlPrepResult.url + "/devtools/hotels/airAttach?mock=off" );
    }
    if( urlPrepResult.enableMetaRewards ){
        urlResults.push( urlPrepResult.url + "/devtools/hotels/metaReward?mock=on&state=" + urlPrepResult.metaRewardsValue);
    }
    if( urlPrepResult.disableMetaRewards ){
        urlResults.push( urlPrepResult.url + "/devtools/hotels/metaReward?mock=off" );
    }
    return urlResults;
}


function onClickLocButton( evt ){
    var id = evt.target.id;
    var domain = evt.target.value;
    // fails in firefox.
    // var locale = evt.target.innerText;
    var locale = evt.target.innerHTML;
    // console.log('inner text: ' + evt.target.innerText);
    // console.log('inner html: ' + evt.target.innerHTML);
    locale = locale.toUpperCase();
    var environment = false;
    var envs = document.getElementsByClassName('environmentRadio');
    for( var i = 0 ; i < envs.length ; i++ ){
        if( envs[i].checked ){
            environment_index = envs[i].value;
            environment = environments[environment_index];
            break;
        }
    }
    var url = 'http://' + domain;
    if( !environment.hasDots ){
        url = url.replace(/\./g, '');
    }
    url += environment.suffix;
    var urlPrepResult = gatherUrlParameters(locale);

    urlPrepResult.locale = locale;
    urlPrepResult.environment = environment;
    urlPrepResult.url = url;

    var urlsToOpen = prepareExtraUrls( urlPrepResult );

    url += urlPrepResult.urlTextToAppend;

    urlsToOpen.push( url );

    openUrlsWithDelays( urlsToOpen );

}

function toggleElementVisibility( element ){
    try{
        if( !element )return;
        if( 'string' == typeof element ){
            element = document.getElementById( element );
        }
        // use rect, because element.style.display may be blank if set through CSS
        var rect = element.getBoundingClientRect();
        if( rect.height < 1 || element.style.display == 'none' ){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    } catch(e){
        console.error('failed to toggle element visibility');
    }
}




initialSetup();