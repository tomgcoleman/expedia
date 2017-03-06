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
        ,
        {
            "description": "git: Map link data attribute should be MapInListing",
            "regexMatch": "The 'data-track' attribute of see map link should be 'HOT:SR:MapInListing'",
            "bug": "https://jira/jira/browse/BHS-9364"
        }
        ,
        {
            "description": "git: Sponsored listing description headline in travel ad should be visible",
            "regexMatch": "For hotel .* : Sponsored listing .* headline in travel ad should be visible.'",
            "bug": "https://jira/jira/browse/BHS-9365"
        }
        ,
        {
            "description": "git: Expedia Rate label must be visible for ESR hotels.",
            "regexMatch": "For hotel .* : Expedia Rate label must be visible for ESR hotels.",
            "bug": "https://jira/jira/browse/BHS-9366"
        }
        ,
        {
            "description": "git: Page title phone number is visible",
            "regexMatch": "Page title phone number is visible",
            "bug": "https://jira/jira/browse/BHS-9367"
        }

    ]
}