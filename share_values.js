console.log("checking data layer to share values.");

if (analyticsdatalayer && analyticsdatalayer.proctor) {
    window.proctor = analyticsdatalayer.proctor;

    console.log('analyticsdatalayer = ' + analyticsdatalayer);
    console.log('proctor = ' + window.proctor);

    var proctor_share = document.createElement('div');
    proctor_share.id = 'proctor_share';
    proctor_share.className = window.proctor;
    document.body.appendChild(proctor_share);

    console.log('proctor value in element with id:  proctor_share');
    var element = document.getElementById('proctor_share');
    console.log(element);
}
