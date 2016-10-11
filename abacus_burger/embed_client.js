/*
    this is the abacus burger script, for any browser to control abacus experiments
    it is loaded via a bookmarklet into the web browser

    to test this script:
        1. load expedia.com
        2. open a javascript console
        3. paste the contents of this file.

 used with css file:  styles.css  =  0B9jGtQ6OVJ67MjZjejZIem80OU0
 which is pulled in below via injecting an element on the page.

 /Users/tocoleman/src/www/users/tocoleman/extensions/bookmarklet/abacus_burger/embed_client.js
 / /www/users/tocoleman/extensions/bookmarklet/abacus_burger/embed_client.js

 how to publish a file on the cloud via google docs:

 upload to google drive
 share for anyone to find and read
 get link to share

 https:/ /drive.google.com/file/d/0B9jGtQ6OVJ67eEd0Z0N1eXhWNVk/view?usp=sharing

 then make the shorter version with "host"

 https:/ /googledrive.com/host/0B9jGtQ6OVJ67eEd0Z0N1eXhWNVk

 double / / are given a space to avoid single line inclusion comment errors.
 but naturally I break the rule below, just for fun.
*/

var g_experiments = {}; // see below.
var g_abov_cookie = ""; // 5334|0|1:5357|0|1:5668|0|1:-3|0|-1
var g_omniture = "";    // 2345.1:4433:0:2323.1:5551.0

/* default values are set within the code. */
g_experiments = {
    recent: {
        5577: {
            description: 'best feature yet.',
            cookie: -1,
            omniture: 1,
            client_set: -1
        }
    }
};
var use_console_log = localStorage.use_console_log;
function consoleLog(message) {
    if (use_console_log) {
        console.log(message);
    }
}
function consoleError(error) {
    if (use_console_log) {
        console.error(error);
    }
}
function renderBucketClient( current_omniture ){
    try {
    } catch(e){
        consoleError('failed to render bucket client');
        consoleError(e);
    }
}
function calcPosition( position, offset ){
    var pxNum = /(\d+)px/.exec( position );
    if( !pxNum ){
        consoleError('failed to get position from:');
        consoleError(position);
        return -1;
    }
    var newPxNum = Number( pxNum[1] ) + offset;
    return newPxNum + 'px';
}

function insertBurgerIcon(){

    var icon = document.createElement('img');
    icon.id = 'burger-img';
    document.body.appendChild(icon);

//  icon.style.opacity='0.3';
//  icon.style.position = 'fixed';
    // icon.style.left = '150px';

    icon.onclick = function(){
        // consoleLog('hello from mmmmmmmmmmmm good');
        toggleElementVisibility( 'popup-burger-dialog' );
        /*    var popup = document.getElementById('popup-burger-dialog');
         if( !popup.style.display ){
         popup.style.display = 'none';
         } else {
         popup.style.display = '';
         }
         */
    };
    // icon.onmouseenter = function(){ consoleLog('hello'); };
    // to get the control on the right side of the page:

//  icon.style.zIndex = '93330';
//  icon.style.top = '10px';
//  icon.style.right = '10px';
    /*
     icon.onmouseleave = function(e){
     e.target.style.zoom = '100%';
     e.target.style.opacity='0.3'
     e.target.style.top = '10px';
     e.target.style.right = '10px';
     };
     icon.onmouseover = function(e){
     e.target.style.zoom = '250%';
     e.target.style.opacity='0.9'
     e.target.style.top = '-2px';
     e.target.style.right = '-2px';
     };
     */
    // image of burger:

    icon.src="data:image/png;base64,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";

}

function registerForEvents( obj, evt, code ){
    if( obj.addEventListener ){
        obj.addEventListener(evt, code);
    }
    if( obj.attachEvent ){
        obj.attachEvent(evt, code);
    }
}

function insert_popup_dialog(){

    var wb = document.createElement('div');
    document.body.appendChild(wb);
    wb.id = 'popup-burger-dialog';
    // wb.style.margin = '10%';

    // wb.style.zIndex = 93331;
    // wb.style.background = 'white';
    // wb.style.color = 'blue';

    //     wb.style.border = '2px inset'
    // wb.style.borderColor = 'blue';
    // wb.style.borderWidth = '4px';

    // wb.style.position = 'fixed';
    // wb.style.top = '35px';
    // wb.style.right = '35px';
    // wb.style.width = '500px';

    /***************************************************************/
    /*                do not move this line to css                 */
    /***************************************************************/
    // the height must be set before adding scroll children, or it fails to work.
    wb.style.height = '400px';

    // wb.style.display = 'none';
    // wb.style.overflowY = 'scroll';

    var parent_popup = wb;
    wb = document.createElement('div');
    parent_popup.appendChild(wb);
    wb.id = 'parent-scroll-container';
    /*
     wb.style.float = 'left';
     wb.style.width = '100%';
     wb.style.height = '100%';
     */
    var hd = document.createElement('div');
    wb.appendChild(hd);
    hd.id = 'popup-title-text';
    // hd.style.position = 'fixed';
    hd.style.position = 'absolute';
    hd.style.width = '50%';
    hd.style.height = '30px';
    // hd.style.left = calcPosition( sc.parentElement.style.left, +5);
    // hd.style.top = calcPosition( sc.parentElement.style.top, +5);
    hd.style.left = '5px';
    hd.style.top = '5px';
    hd.style.textAlign = 'left'
    hd.innerHTML = '<b>Bucket</b>';

    var eb = document.createElement('input');
    wb.appendChild(eb);
    eb.type = 'text';
    eb.id = 'edit-box-cookie-top';
    eb.size = 8;
    eb.className = 'editBoxCookieTop';
    eb.maxlength = 5000;
    // eb.style.position = 'absolute';
    // eb.style.right = '10px';
    // eb.style.top = '10px';
    eb.title = '1579=1      :set bucket';
    // 1579=1,1822=0       :set many
    // 1579=1            :set
    // 16529               :add instance';

    // eb.addEventListener('keypress', onUpperEditKeyPress);
    registerForEvents( eb, 'keypress', onUpperEditKeyPress);

    eb.style.position = 'relative';
    eb.style.float = 'right';


    var sc = document.createElement('div');
    wb.appendChild(sc);
    sc.id = 'scroll-box-container-experiments';
    // sc.style.position = 'fixed';
    sc.style.position = 'absolute';
    sc.style.width = '95%';
    // direct parent says 100%
    sc.style.height = calcPosition( sc.parentElement.parentElement.style.height,  -50);
    // sc.style.right = calcPosition( sc.parentElement.style.right, +5);
    // sc.style.top = calcPosition( sc.parentElement.style.top, +45);
    sc.style.right = '5px';
    sc.style.top = '45px';
    sc.style.textAlign = 'left'
    sc.style.overflowY = 'scroll';

    var buttons = {
        clear: {
            id: 'clear_cookie_abov',
            title: 'clear all overrides for abacus experiments'
        },
        unrand: {
            id: 'unrand_all_exp',
            title: 'force all random experiments to control'
        },
        //copy: {
        //    id: 'copy_last_to_clipboard',
        //    title: 'copy override URL to clipboard'
        //},
        reload: {
            id: 'reload_current_tab',
            title: 'reload the current tab'
        },
        better: {
            id: 'open_confluence_page',
            title: 'open confluence page for a better tool',
            color: 'darkGreen'
        //},
        //search: {
        //    id: 'open_options_tab',
        //    title: 'view all experiments, change options'
        }
    };
    for( var bName in buttons )
    {
        var b = buttons[bName];
        consoleLog('add button: ' + b);
        consoleLog('id: ' + b.id);
        var nb = document.createElement('button');
        wb.appendChild(nb);

        nb.id = b.id;
        // nb.addEventListener('click', onButtonClick);
        registerForEvents( nb, 'click', onButtonClick);

        nb.className = 'topRowButtons';
        nb.innerText = bName;
        // for firefix?
        nb.innerHTML = bName;
        nb.title = b.title;
        if (b.color) {
            nb.style.color = b.color;
        }
        /*
         nb.style.position = 'relative';
         nb.style.float = 'right';
         nb.style.height = '25px';
         nb.style.width = '50px';
         nb.style.marginRight = '3px';
         */
    }
}

function getChildElementsByClassName( element, className ){
    var result = [];
    if( 'undefined' == typeof( element.getElementsByClassName ) ){
        for( var i = 0 ; i < element.childNodes.length ; i++ ){
            if( element.childNodes[i].className == className ){
                result.push( element.childNodes[i] );
            }
        }
    } else {
        result =  element.getElementsByClassName( className );
    }
    return result;
}

function toggleGroupView( e ){
    try{
        // var expContainers = e.target.parentElement.getElementsByClassName('groupExpContainer');
        var expContainers = getChildElementsByClassName( e.target.parentElement, 'groupExpContainer');
        if( expContainers && expContainers.length > 0 ){
            var ec = expContainers[0];
            toggleElementVisibility( ec );
        }
    } catch(e){
        consoleError(e);
    }
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
        consoleError('failed to toggle element visibility');
    }
}

function openUrl( url ){
    if( url.indexOf('{domain}') > -1 ){
        var domain = document.URL.replace(/(.*?\/\/.*?)[/?#].*/,"$1");
        url = url.replace('{domain}', domain);
    }
    consoleLog('open url: ' + url);
    //new tab
    //window.open(url, '_blank');
    window.open(url);
}

function trackRecentExperimentUse( expIds ){
    consoleLog('track recent');
    var ids_to_store = expIds.split(/\D+/);
    var current_ids_in_recent = localStorage.boosted_list || '';
    var max_recent_guys = 6;
    for( var i = 0 ; i < ids_to_store.length ; i++ ){
        var id = ids_to_store[i];
        current_ids_in_recent = current_ids_in_recent.replace(id, '');
        current_ids_in_recent = id + '|' + current_ids_in_recent;
        if (max_recent_guys-- < 1) break;
    }
    current_ids_in_recent = current_ids_in_recent.replace('||', '|');
    current_ids_in_recent = current_ids_in_recent.replace(/\s+/g, '');
    localStorage.boosted_list = current_ids_in_recent;
}

function getRecentExperimentsInUse(){
    var current_ids_in_recent = localStorage.boosted_list || '';
    var ids_in_use = current_ids_in_recent.split(/\D+/);
    var max_recent_guys = 6;

    var max_try = 100;
    while (ids_in_use.length > max_recent_guys) {
        ids_in_use.pop();
        if (max_try--<0) break;
    }

    return ids_in_use;
}

function onUpperEditKeyPress( evt ){
    var returnKeyCode = 13;
    var key = window.event ? evt.keyCode : evt.which;
    if( key == returnKeyCode ){
        var editBox = document.getElementById('edit-box-cookie-top');
        var textCommand = editBox.value;

        consoleLog('text command: ' + textCommand);

        var exp_id_to_add = 0;
        var variation_to_set = -1;

        var foundMatch1 = /^(\d\d\d\d\d?)$/.exec(textCommand);
        var foundMatch2 = /^(\d\d\d\d\d?)=(\d)$/.exec(textCommand);
        if( foundMatch1 ){
            exp_id_to_add = foundMatch1[1];
        }
        if( foundMatch2 ){
            exp_id_to_add = foundMatch2[1];
            variation_to_set = foundMatch2[2];
        }

        trackRecentExperimentUse( exp_id_to_add );

        add_experiment_to_grouping( exp_id_to_add, 0, 'recent', true);

        if( variation_to_set > -1 ){
            // act as if the user clicked the variation of interest.
            setExperimentCookie( exp_id_to_add, variation_to_set, true );
        }
    }
}

function onButtonClick( e ){
    var buttonId = e.target.id;
    if( buttonId == 'clear_cookie_abov' ){
        openUrl('{domain}/tools/abacus/overrides?clean=1');
        set_abov_cookie('');
        update_from_current_cookies();
    }
    if( buttonId == 'unrand_all_exp' ){
        openUrl('{domain}/tools/abacus/overrides?abov=-3|-1|-1');
        toggle_cookie_bucket_value( '-3', '-1' );
        update_from_current_cookies();
    }
    if( buttonId == 'copy_last_to_clipboard' ){
        consoleError('todo: support clipboard.');
    }
    if( buttonId == 'reload_current_tab' ){
        //         chrome.tabs.reload();
        // consoleError('todo: how to reload browser?');
        location.reload(false);
    }
    if( buttonId == 'open_confluence_page' ){
        //openUrl('http://confluence/display/POS/Chrome+Bucket+Help');
        openUrl('https://confluence/display/POS/Chrome+Bucket+Extension');
    }
    if( buttonId == 'open_options_tab' ){
        consoleError('todo: open view of all experiments');
    }
}

//             var_button.id = 'variation_' + expId + '_' + variationNumber;

function setExperimentCookie( exp_id, exp_bucket, need_to_turn_on_cookie ){
    // todo: set cookie.  and remove the code below.

    set_experiment_in_cookie( exp_id, exp_bucket );

    update_from_current_cookies();

    return;

    // for now we just change the class
    consoleLog('todo: change cookie for click on experiment ' + exp_id + ' variation: ' + exp_bucket );

    var parent_element_id = 'exp_' + exp_id + '_bucket';
    var parent_element_to_highlight = document.getElementById( parent_element_id );
    parent_element_to_highlight.className = parent_element_to_highlight.className.replace(/\s*variation_button_cookie_set\s*/, ' ');

    for( var i = 0 ; i < 8 ; i++ ){
        var element_id = 'variation_' + exp_id + '_' + i;
        var element_to_clear = document.getElementById( element_id );
        if( !element_to_clear ) continue;
        element_to_clear.className = element_to_clear.className.replace(/\s*variation_button_cookie_set\s*/, ' ');
    }

    var element_id = 'variation_' + exp_id + '_' + exp_bucket;
    var element_to_set = document.getElementById(element_id);


    if( need_to_turn_on_cookie ){
        element_to_set.className += ' variation_button_cookie_set';
        parent_element_to_highlight.className += ' variation_button_cookie_set';
    } else {
        element_to_set.className = element_to_set.className.replace(/\s*variation_button_cookie_set\s*/, ' ');
    }
}

function onClickVariationButton( e ){
    var extract_variation_info = /variation_(\d+)_(\d+)/i.exec( e.target.id );
    if( !extract_variation_info ){
        consoleError('failed to find variation info from target');
        consoleError(e);
        return;
    }
    var exp_id = extract_variation_info[1];
    var exp_var = extract_variation_info[2];

    trackRecentExperimentUse( exp_id );

    var turn_on = e.target.className.search('variation_button_cookie_set') < 0;

    setExperimentCookie( exp_id, exp_var, turn_on );
}

function onClickToToggleExperiment( e ){
    var extractId = /(\d+)/.exec(e.target.id);
    if( extractId.length > 1 ){
        var experiment_id = extractId[1];
        var element_id = 'exp_' + experiment_id + '_collapse';
        toggleElementVisibility( element_id );
    }
}

function remove_old_experiments(){
    var progress = 'a';
    try{
        consoleLog('remove_old_stuff');
        var sb = document.getElementById('scroll-box-container-experiments');
        progress = 'b';
        // var items_to_remove = sb.getElementsByClassName('groupContainer');
        var items_to_remove = getChildElementsByClassName( sb, 'groupContainer' );
        progress = 'c';
        for( var i = items_to_remove.length-1 ; i >= 0 ; i-- ){
            progress = 'd';
            var ce = items_to_remove[i];
            // removing here changes the size of the array.
            progress = 'e';
            // ce.remove();
            ce.parentNode.removeChild(ce);
        }
    } catch(e) {
        consoleError('failed to remove old stuff: ' + progress);
        consoleError(e.message);
    }
}

function get_abov_cookie(){
    var abov_current_value = '';
    var cookie_chunks = document.cookie.split(/\s*;\s*/);
    for( var i = 0 ; i < cookie_chunks.length ; i++ ){
        var coo = cookie_chunks[i];
        var key_value = coo.split(/\s*=\s*/);
        if( key_value[0] == 'abov' ){
            if( key_value.length > 1 ){
                abov_current_value = coo.replace('abov=', '');
            }
            break;
        }
    }
    return abov_current_value;
}

function set_abov_cookie( new_value ){

    new_value = new_value.replace(/::/g, ':');

    var cookie_change_request = 'abov=' + new_value + '; expires=Fri Dec 16 2022 00:00:00 UTC; path=/; ';

    var domain_less_www = document.URL.replace(/.*\/\//, ''); // remove http://
    domain_less_www = domain_less_www.replace(/\/.*/, ''); // remove stuff after domain
    domain_less_www = domain_less_www.replace('www.', '.'); // replace www. with .  do not change lab domain.

    cookie_change_request += 'domain=' + domain_less_www;

    document.cookie = cookie_change_request;
}

// document.cookie:
//"__utma=16769252.1660832810.1409786420.1411608126.1412000499.15; __utmb=16769252.8.9.1412000513759; __utmc=16769252; __utmz=16769252.1409786420.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)"
// key=value; key2=value2;
//
// abov
// 1418|0|2:1361|0|0
// id | group | value : id | group | value
function set_experiment_in_cookie( exp_id, bucket ){

    if( !exp_id ) return;

    consoleLog('deal with clearing bucket value.');

    var abov_current_value = get_abov_cookie();

    var abov_new_value = '';
    if( abov_current_value.search(exp_id) > -1 ){
        // replace bucket value with new one.
        var find_exp = new RegExp( exp_id + '[|][^|]+[|][^:]+');
        if( bucket == 'remove' ){
            abov_new_value = abov_current_value.replace(find_exp, '' )
        } else {
            abov_new_value = abov_current_value.replace(find_exp, exp_id + '|0|' + bucket )
        }
    } else {
        if( bucket == 'remove' ) return;
        if( abov_current_value.length > 5 ){
            abov_new_value = abov_current_value + ':' + exp_id + '|0|' + bucket;
        } else {
            abov_new_value = abov_current_value + exp_id + '|0|' + bucket;
        }
    }

    set_abov_cookie( abov_new_value );

    /*
     if( abov_current_value.length > 3 ){
     document.cookie = document.cookie.replace(/abov=[^;]+/, 'abov=' + abov_new_value + ';')
     } else {
     document.cookie += ';abov=' + abov_new_value + ';'
     }
     */
}

function toggle_cookie_bucket_value( id, bucket )
{
    var abov = get_abov_cookie();
    if( abov.search('-3') < 0 )
    {
        set_experiment_in_cookie( -3, -1 );
    }
    else
    {
        set_experiment_in_cookie( -3, 'remove' );
    }
}

function lookup_experiment( exp_id ){
    if( 'undefined' == typeof experiments_json ){
        // internal site has as experiments.
        // the script injected from the jenkins job has the first line:
        // var experiments = {
        if ('undefined' != typeof experiments) {
            experiments_json = experiments;
        } else {
            experiments_json = g_experiments;
        }
    }
    if( !experiments_json[ exp_id ] ){
        experiments_json[ exp_id ] = {
            'id': exp_id,
            'name': 'Experiment_' + exp_id,
            'description': 'Experiment ' + exp_id,
            'owner': 'expedia',
            'target_ids': '1',
            'tpids': '1',
            'buckets': '2',
            'status': 'Running',
            'type': 'Throttling',
            'instances': '1:A:01, 2:T:01',
            'i_description': 'Throttle 100% for Control',
            'i_update': '01/01/2014 11:10 AM',
            'treatments': {
                0:  {
                    'value': '0',
                    'percentage': '100',
                    'description': 'Control Group'
                },
                1:  {
                    'value': '1',
                    'percentage': '0',
                    'description': 'New Feature'
                }
            }
        };
    }
    return experiments_json[ exp_id ];
} // '

function prepare_experiment_object( exp_id, current_abacus_variation ){
    // var exp_obj = experiments_json[ exp_id ];
    var exp_obj = lookup_experiment( exp_id );
    if( !exp_obj ) {
        exp_obj = {
            name: exp_id,
            description: '',
            treatments: {
                0: {
                    value: 0,
                    percentage: 100,
                    description: 'control'
                },
                1: {
                    value: 1,
                    percentage: 0,
                    description: 'one'
                },
                2: {
                    value: 2,
                    percentage: 0,
                    description: 'two'
                },
                3: {
                    value: 3,
                    percentage: 0,
                    description: 'three'
                }
            }
        };
    }
    var prep_obj = {
        name: exp_obj.name,
        description: exp_obj.description,
        cookie: -1,
        omniture: -1,
        client_set: -1,
        // variations: exp_obj.treatments
        // do a deep copy, to avoid changing the source when setting cookie or omniture values.
        variations: { }
    };
    for( var i in exp_obj.treatments){
        var_obj = exp_obj.treatments[i];
        if( var_obj ){
            prep_obj.variations[i] = {
                value: var_obj.value,
                percentage: var_obj.percentage,
                description: var_obj.description
            };
            if( var_obj.value == current_abacus_variation ){
                prep_obj.variations[i].omnitureSet = true;
            }
        }
    }
    return prep_obj;
}

function show_omniture( omn_str, page_name ){
    try{
        var omn_exp_variations = {};
        var extract_next = /(\d+)\D+(\d+)/g;
        var next_match;
        var prepared_experiments = { recent:{}};
        prepared_experiments[ page_name ] = {};

        while( next_match = extract_next.exec( omn_str ) ){
            var exp_id = next_match[1];
            var exp_bucket = next_match[2];
            omn_exp_variations[ exp_id ] = exp_bucket;
            // var exp_obj = experiments_json[ exp_id ];
            var exp_obj = lookup_experiment( exp_id );
            if( !exp_obj ) continue;  // todo: what to do with this guy?

            prepared_experiments[page_name][ exp_id ] = prepare_experiment_object( exp_id, exp_bucket );
            prepared_experiments[page_name][ exp_id ].omniture = exp_bucket;
        }
        var recent_ids = getRecentExperimentsInUse();

        for( var i = 0 ; i < recent_ids.length ; i++ ){
            var exp_id = recent_ids[i];
            var exp_bucket = omn_exp_variations[exp_id] || -1;
            // var exp_obj = experiments_json[ exp_id ];
            var exp_obj = lookup_experiment( exp_id );
            if( !exp_obj ) continue;  // todo: what to do with this guy?
            prepared_experiments.recent[ exp_id ] = prepare_experiment_object( exp_id, exp_bucket );
            if( exp_bucket > -1 ){
                prepared_experiments.recent[ exp_id ].omniture = exp_bucket;
            }
        }

        //debugger;

        show_experiments( prepared_experiments );

    }catch(e){
        consoleError('failed to show omniture');
        consoleError(e);
    }
}

function update_from_current_cookies(){
    var abov_current_value = get_abov_cookie();
    update_variations_from_cookies( abov_current_value );
}

function update_from_current_omniture(){
    consoleLog('update_from_current_omniture');

    var current_experiments = '';
    var current_pagename = '';
    if( 'undefined' != typeof dctk && dctk.omtr ){
        current_pagename = dctk.omtr.pageName;
        if( dctk.omtr.list1 ){
            current_experiments = dctk.omtr.list1 || dctk.omtr.prop34 || dctk.omtr.evar34;
            if( current_experiments.length < 12){
                current_experiments = '';
            }
        }
    }
    if( !current_pagename ){
        var pageIdElement = document.getElementById('pageId');
        if( pageIdElement ){
            current_pagename = pageIdElement;
        }
    }
    if( current_experiments && current_pagename ){
        show_omniture( current_experiments, current_pagename );
    }
}

// 5334|0|1:5357|0|1:5668|0|1:-3|0|-1
function update_variations_from_cookies( cookie_value ){
    try{
        consoleLog('setting vars');
        var unrand_button = document.getElementById('unrand_all_exp');
        unrand_button.className = 'topRowButtons';

        // var unbucket_me_guys = document.getElementsByClassName('variation_button_cookie_set');
        var unbucket_me_guys = getChildElementsByClassName( document, 'variation_button_cookie_set');
        // changing the class actually changes the result set, copy them out first.
        var copy_ubg = [];
        for( var i = 0 ; i < unbucket_me_guys.length ; i++){
            copy_ubg.push( unbucket_me_guys[i] );
            // unbucket_me_guys[0].className = unbucket_me_guys[0].className.replace(/\s*variation_button_cookie_set\s*/, ' ');
            var do_nothing = 1;
        }
        for( var i = 0 ; i < copy_ubg.length ; i++){
            copy_ubg[i].className = copy_ubg[i].className.replace(/\s*variation_button_cookie_set\s*/, ' ');
        }
        var exp_bits = cookie_value.split(':');
        for( var i = 0 ; i < exp_bits.length ; i++ ){
            exp_chunks = exp_bits[i].split('|');
            var exp_id = exp_chunks[0];
            var exp_var = exp_chunks[2];
            if( exp_id == -3 )
            {
                unrand_button.className = 'topRowButtons unrand_set';
            }
            for( var var_index = 0 ; var_index < 9 ; var_index++ ){
                var id = 'variation_' + exp_id + '_' + var_index;
                var control_to_tweak = document.getElementById( id );
                if( !control_to_tweak ) continue;

                if( exp_var == var_index ){
                    control_to_tweak.className += ' variation_button_cookie_set';
                    var bucket_circle_guy = document.getElementById('exp_' + exp_id + '_bucket');
                    if( bucket_circle_guy ){
                        bucket_circle_guy.className += ' variation_button_cookie_set';
                    }
                }
            }
        }
    }catch(e){
        consoleError('failed to update from cookies');
        consoleError(e);
    }
}

function add_experiment_to_grouping( expId, expObj, groupName, make_first ) {

    consoleLog('remove exp if id already added');

    var group_exp_container = document.getElementById('group_' + groupName + '_exp_container');
    if (!group_exp_container) {
        group_exp_container = add_group_container(groupName);
    }

    // todo: incorporate the group name into the id to avoid duplicates.
    //var exp_root_code = 'exp_' + groupName + '_' + expId;
    var exp_root_code = 'exp_' + expId;

    var exp_container_id = exp_root_code + '_container';
    var exp_container = document.getElementById(exp_container_id);
    if (exp_container) {
        try {
            group_exp_container.removeChild(exp_container);
        } catch (e) {
            //consoleError('failed to remove container when adding an experiment to grouping.');
        }
        group_exp_container.insertBefore(exp_container, group_exp_container.firstChild);
        return;
    }

    if (!expObj) {
        expObj = prepare_experiment_object(expId);
    }
    var expDiv = document.createElement('div');
    if (make_first) {
        group_exp_container.insertBefore(expDiv, group_exp_container.firstChild);
    } else {
        group_exp_container.appendChild(expDiv);
    }

    consoleLog('todo: avoid duplicate experiment ids');

    expDiv.id = exp_container_id;
    expDiv.className = 'expContainer';

    var expHeader = document.createElement('div');
    expDiv.appendChild(expHeader);

    expHeader.id = exp_root_code + '_header';
    expHeader.className = 'exp_header';

    var expCollapse = document.createElement('div');
    expDiv.appendChild(expCollapse);

    expCollapse.id = exp_root_code + '_collapse';
    expCollapse.className = 'expCollapse';

    var bucketDiv = document.createElement('span');
    expHeader.appendChild(bucketDiv);

    bucketDiv.id = exp_root_code + '_bucket';
    // bucketDiv.addEventListener('click', onClickToToggleExperiment);
    registerForEvents(bucketDiv, 'click', onClickToToggleExperiment);

    bucketDiv.className = 'expBucket bucket_display_' + expId;
    bucketDiv.innerText = expObj.omniture > -1 ? expObj.omniture : '?';
    // firefox needs this?
    bucketDiv.innerHTML = expObj.omniture > -1 ? expObj.omniture : '?';
    bucketDiv.style.position = 'relative';
    bucketDiv.style.float = 'left';
    bucketDiv.style.height = '25px';
    bucketDiv.style.width = '25px';

    bucketDiv.title = "";
    var spacer = "";

    if (expObj.cookie > -1) {
        bucketDiv.className += ' expBucketCookieSet';
//        bucketDiv.style.background = 'lightgreen';
        bucketDiv.title += spacer + expObj.cookie + ": override via cookie";
        spacer = "\n";
    }
    if (expObj.omniture > -1) {
        bucketDiv.title += spacer + expObj.omniture + ": bucket from Omniture";
        spacer = "\n";
    }
    if (expObj.client_set > -1) {
        bucketDiv.title += spacer + expObj.client_set + ": bucket from Client traffic";
    }
    var nameDiv = document.createElement('span');
    expHeader.appendChild(nameDiv);

    nameDiv.id = exp_root_code + '_name';
    // nameDiv.addEventListener('click', onClickToToggleExperiment);
    registerForEvents(nameDiv, 'click', onClickToToggleExperiment);

    nameDiv.className = 'expName';
    nameDiv.innerText = expId + '_' + expObj.name;
    // for firefox?
    nameDiv.innerHTML = expId + '_' + expObj.name;

    var linkRow = document.createElement('div');
    expCollapse.appendChild(linkRow);

    linkRow.id = exp_root_code + '_linkRow';
    linkRow.className = 'expLinkRow';

    var variationRow = document.createElement('div');
    expCollapse.appendChild(variationRow);

    variationRow.id = exp_root_code + 'variationRow';
    variationRow.className = 'expVariationRow';

    var getBucketLink = document.createElement('a');
    linkRow.appendChild(getBucketLink);

    var domain = document.URL.replace(/(.*?\/\/.*?)[/?#].*/, "$1");
    getBucketLink.id = exp_root_code + '_getBucket';
    getBucketLink.className = 'expLink';
    getBucketLink.href = domain + '/tools/abacus/test?expid=' + expId;
    getBucketLink.target = '_blank';
    getBucketLink.innerText = 'get bucket';
    // for firefox?
    getBucketLink.innerHTML = 'get bucket';

    var showAbacusLink = document.createElement('a');
    linkRow.appendChild(showAbacusLink);

    showAbacusLink.id = exp_root_code + '_showAbacus';
    showAbacusLink.className = 'expLink';
    //showAbacusLink.href = 'http://abacusws.stable.bgb.karmalab.net:57118/abacus/abtest/get/experimentdetails?expId=' + expId;
    showAbacusLink.href = 'http://abacus-metadata-server.exp-int.net/abacus/abtest/v3/get/experimentdetails?expId=' + expId;
    showAbacusLink.target = '_blank';
    showAbacusLink.innerText = 'abacus';
    // for firefox?
    showAbacusLink.innerHTML = 'abacus';

    consoleLog('add variation buttons');

    var variation_count = 0;
    for (var index in expObj.variations) {
        variation_count++;
    }
    if (variation_count < 2) {
        expObj.variations = [];
        for (var i = 0 ; i < 7 ; i++) {
            expObj.variations.push({
                value: i,
                percentage: 0,
                description: '?'
            });
        }
    }

    for( var index in expObj.variations )
    {
        var varObj = expObj.variations[index];
        var variationNumber = varObj.value;

        var variation_p = varObj.percentage;
        var variation_n = varObj.description;

        if( 'undefined' == typeof variation_p ) variation_p = 1;
        if( 'undefined' == typeof variation_n ) variation_n = '?unknown?';

        var button_text = variation_p + '% : ' + variation_n;

        var var_button = document.createElement('div');
        // variationRow.id = 'exp_' + expId + 'variationRow';
        var variationRow = document.getElementById(exp_root_code + 'variationRow');
        variationRow.appendChild( var_button );

        var_button.id = 'variation_' + expId + '_' + variationNumber;
        var_button.className = 'variation_button ';
        if( index < 1 ) var_button.className += ' element_on_new_line';
        var_button.innerHTML = button_text;
        var_button.title = 'bucket ' + variationNumber + ': ' + button_text;
//            var_button.addEventListener('mouseover', on_mouse_over_variation);
//            var_button.addEventListener('click', on_click_variation_button);
        // var_button.addEventListener('click', onClickVariationButton);
        registerForEvents( var_button, 'click', onClickVariationButton);

        if( varObj.cookieSet )
        {
            var_button.className += ' variation_button_cookie_set';
            var_button.title += "\n    forced bucket in local cookie";
        }

        /*            if( experiment_id == g_last_invalid_experiment_id )
         {
         var_button.className += ' variation_button_invalid_abacus';
         var_button.title += "\n    experiment broken in abacus";
         }
         else  */
        if( varObj.omnitureSet )
        {
            var_button.className += ' variation_button_active_abacus_set';
            var_button.title += "\n    active treatment in abacus";
        }
    }

    return;

    var detailsDiv = document.createElement('div');
    // expCollapse.id = 'exp_' + expId + '_collapse';

    var expCollapse = document.getElementById(exp_root_code + '_collapse');
    expCollapse.appendChild( detailsDiv );

    detailsDiv.id = exp_root_code + '_details';
    detailsDiv.innerText = 'details here for experiment ' + expId;
    // for firefox.
    detailsDiv.innerHTML = 'details here for experiment ' + expId;
    // detailsDiv.style.height = '25px';

    var detailsDiv2 = document.createElement('div');
    expCollapse.appendChild( detailsDiv2 );

    detailsDiv2.id = exp_root_code + '_details2';
    // for firefox
    detailsDiv2.innerHTML = 'even more stuff for exp: ' + expId;
    detailsDiv2.innerText = 'even more stuff for exp: ' + expId;
    // detailsDiv2.style.height = '25px';

}

function add_group_container(groupName, makeFirst){
    var group_div = document.createElement('div');
    sc.appendChild(group_div);

    group_div.id = 'group_' + groupName + '_container';
    group_div.className = 'groupContainer';
    group_div.style.position = 'relative';
    group_div.style.width = '100%';

    var group_name_div = document.createElement('div');
    group_div.appendChild( group_name_div );

    group_name_div.id = 'group_' + groupName + '_name';
    group_name_div.className = 'groupName';
    // group_name_div.addEventListener('click', toggleGroupView);
    registerForEvents( group_name_div, 'click', toggleGroupView);

    group_name_div.className = 'pageName';
    group_name_div.innerText = groupName;
    // firefox needs this?
    group_name_div.innerHTML = groupName;
    group_name_div.position = 'relative';
    group_name_div.width = '100%';

    var group_exp_container = document.createElement('div');
    group_div.appendChild( group_exp_container );

    group_exp_container.id = 'group_' + groupName + '_exp_container';
    group_exp_container.className = 'groupExpContainer';
    group_exp_container.width = '100%';

    return group_div;
}

function sort_numbers( a, b ){
    if (a<b) return 1;
    return -1;
}
function get_experiment_ids_in_order( obj_in ){

    var array_raw = [];
    for (var key in obj_in) {
        var key_as_number = Number(key);
        if (isNaN(key_as_number)) continue;
        array_raw.push(Number( key_as_number ));
    }

    var array_out = array_raw.sort(sort_numbers);

    return array_out;
}

function show_experiments( exps ){

    remove_old_experiments();
    var sc = document.getElementById( 'scroll-box-container-experiments' );

    for( var groupName in exps )
    {
        var group_div = add_group_container(groupName, false);

        var sorted_ids = get_experiment_ids_in_order(exps[ groupName ]);

        //for( var expId in exps[ groupName ] )
        for( var i in sorted_ids )
        {
            var expId = sorted_ids[i];
            var expObj = exps[ groupName ][ expId ];
            add_experiment_to_grouping( expId, expObj, groupName, false );
        }
    }

    // make sure recent ones are added last, to remove the others.
    // todo: incorporate the group name in the ids, to avoid duplicates.
    if (exps.recent) {
        var groupName = 'recent';
        var group_div = add_group_container(groupName, false);

        var sorted_ids = get_experiment_ids_in_order(exps[ groupName ]);

        //for( var expId in exps[ groupName ] )
        for( var i in sorted_ids )
        {
            var expId = sorted_ids[i];
            var expObj = exps[ groupName ][ expId ];
            add_experiment_to_grouping( expId, expObj, groupName, false );
        }
    }
}

var burger_found = document.getElementById('burger-img');

if( !burger_found ){
    // consoleLog('no burger found, inserting');
    insertBurgerIcon();
}

var wb = document.getElementById('popup-burger-dialog');
if( !wb ){
    // consoleLog('no popup found, inserting');
    insert_popup_dialog();
}

wb = document.getElementById('popup-burger-dialog');

var sc = document.getElementById('scroll-box-container-experiments');


show_experiments( g_experiments );
show_experiments( g_experiments );
show_experiments( g_experiments );
show_experiments( g_experiments );

consoleLog('adding conditional styles');

var sheet = document.styleSheets[0];
var ind = 0; // infosite only works with index zero.

if( window.navigator.userAgent.search(/chrome/i) > -1  ){
    //consoleLog('chrome insert rule');
    // opera
//  sheet.insertRule(" #burger-img:hover { webkit-transform: scale(2); -webkit-transform-origin: right top }", ind);
    sheet.insertRule(" #burger-img:hover { transform: scale(2); transform-origin: 35px 10px }", ind);
    sheet.insertRule(" #burger-img:hover { -moz-transform: scale(2.5); -moz-transform-origin: right top; }", ind);
    sheet.insertRule(" #burger-img:hover {opacity: 0.9; cursor: pointer; }", ind);
}
else if( window.navigator.userAgent.search(/safari/i) > -1 ){
    sheet.insertRule(" #burger-img:hover {opacity: 0.9; cursor: pointer; }", ind);
    sheet.insertRule(" #burger-img:hover {zoom: 250%; top: 1px; right: 1px }", ind);
}
else if( window.navigator.userAgent.search(/firefox/i) > -1 ){
    consoleLog('firefox insert rule');
    sheet.insertRule(" #burger-img:hover { -moz-transform: scale(2.5); -moz-transform-origin: 38px 8px; }", ind);
    sheet.insertRule(" #burger-img:hover {opacity: 0.9; cursor: pointer; }", ind);
}
else {
    consoleLog('ie insert rule');
    // IE
    // sheet.insertRule(" #burger-img:hover { zoom: 250%; top: -2px; right: -2px }", ind);
    // done here and in css, sometimes one or the other works.
    sheet.addRule("#burger-img:hover", "zoom: 250%; top: 10px; right: 70px");
    sheet.addRule("#burger-img:hover", "opacity: 0.9; cursor: pointer");
}

if( window.navigator.userAgent.search(/firefox/i) > -1 ){
    sheet.insertRule(" .expBucket { padding: 6px 10px; }", ind);
}

function inject_page_elements() {
    try {
        var cssPart = document.createElement('link');

        cssPart.setAttribute("rel", "stylesheet");
        cssPart.setAttribute("type", "text/css");
        //cssPart.setAttribute("href", 'https://googledrive.com/host/0B9jGtQ6OVJ67MjZjejZIem80OU0');
        cssPart.setAttribute("href", 'https://rawgit.com/tomgcoleman/expedia/master/abacus_burger/styles.css');
        document.getElementsByTagName("head")[0].appendChild(cssPart);

        var script  = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'UTF-8');

        // javascript is loaded as source code
        script.setAttribute('src', 'https://expweb.builds.exp-tools.net/job/chrome_bucket_abacus_gather/lastSuccessfulBuild/artifact/all_running_populated.js?r=' + Math.random());

        document.getElementsByTagName('head')[0].appendChild(script);

    } catch(e) {
        consoleError('abacus burger, embed client, failed to inject page elements.');
        consoleError(e);
    }
}

var max_wait = 10;
function populate_when_experiments_ready(){
    if( 'undefined' == typeof experiments_json && 'undefined' == typeof experiments ){
        consoleLog('********* waiting for experiments to be ready ************');
        consoleLog('********* waiting for experiments to be ready ************');
        consoleLog('********* waiting for experiments to be ready ************');
        consoleLog('********* waiting for experiments to be ready ************');
        consoleLog('********* waiting for experiments to be ready ************');
        if( max_wait-- > 0 ){
            setTimeout( populate_when_experiments_ready, 2000 );
        }
    } else {
        consoleLog('********* experiments are ready ************');
        consoleLog('********* experiments are ready ************');
        consoleLog('********* experiments are ready ************');
        consoleLog('********* experiments are ready ************');
        consoleLog('********* experiments are ready ************');
        update_from_current_omniture();
        update_from_current_cookies();
    }
}
/*
 // for local testing in IE
 if( 'undefined' == typeof localStorage ){
 var localStorage = {};
 }
 if( 'undefined' == typeof localStorage.boosted_list ){
 localStorage.boosted_list = '';
 }
 */

// give two seconds for everything to load.
setTimeout( populate_when_experiments_ready, 2000 );

inject_page_elements();


/*  sheet.insertRule(" #burger-img:hover { -moz-transform: scale(2.5); -moz-transform-origin: 38px 8px; }", ind); */