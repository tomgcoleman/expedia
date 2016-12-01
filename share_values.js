console.log("checking data layer to share values.");

if (analyticsdatalayer && analyticsdatalayer.proctor) {
    window.proctor = analyticsdatalayer.proctor;

    console.log('analyticsdatalayer = ' + analyticsdatalayer);
    console.log('proctor = ' + window.proctor);
}
