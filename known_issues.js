{
    "known_issues":
    [
        {
            "description": "git Bathtub in room filter checkbox has no omniture Literal Match",
            "textMatch": "Omniture value for filter #amenitiesContainer, option 1 is HOT:SR:HotelPreference (found undefined)",
            "bug": "https://jira/jira/browse/BHS-8150"
        }
        ,
        {
            "description": "git Bathtub in room filter checkbox has no omniture Regex Match",
            "regexMatch": "Omniture.*?option 1 is HOT:SR:HotelPreference.*?undefined",
            "bug": "https://jira/jira/browse/BHS-8150"
        }
        ,
        {
            "description": "git sponsored listings are missing the map link",
            "regexMatch": "For hotel.*Map link must be visible.",
            "bug": "https://jira/jira/browse/BHS-9431"
        }
        ,
        {
            "description": "git Large footer ads should be visible in breakpoint: 1251, but actually is hidden",
            "textMatch": "Large footer ads should be visible in breakpoint: 1251, but actually is hidden",
            "bug": "https://jira/jira/browse/BHS-9341"
        }
        ,
        {
            "description": "git: For hotel X Map link must be visible.",
            "regexMatch": "For hotel .* Map link must be visible.",
            "bug": "https://jira/jira/browse/BHS-9342"
        }
    ]
}