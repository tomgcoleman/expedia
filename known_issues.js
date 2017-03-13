{
    "known_issues":
    [
        {
            "description": "git: Bathtub in room filter checkbox has no omniture Literal Match",
            "textMatch": "Omniture value for filter #amenitiesContainer, option 1 is HOT:SR:HotelPreference (found undefined)",
            "bug": "https://jira/jira/browse/BHS-8150"
        }
        ,
        {
            "description": "git: Bathtub in room filter checkbox has no omniture Regex Match",
            "regexMatch": "Omniture.*?option 1 is HOT:SR:HotelPreference.*?undefined",
            "bug": "https://jira/jira/browse/BHS-8150"
        }
        ,
        {
            "description": "git: sponsored listings are missing the map link",
            "regexMatch": "For hotel.*Map link must be visible.",
            "bug": "https://jira/jira/browse/BHS-9431"
        }
        ,
        {
            "description": "git: Large footer ads should be visible in breakpoint: 1251, but actually is hidden",
            "regexMatch": "Large footer ads should be visible in breakpoint: .* but actually is hidden",
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
            "regexMatch": "For hotel .* : Sponsored listing .* in travel ad should be visible.",
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
        ,
        {
            "description": "git: Sort bar must be visible",
            "regexMatch": "Sort bar .* must be visible",
            "bug": "https://jira/jira/browse/BHS-9368"
        }
        ,
        {
            "description": "git: EDS modal issues when date range too large",
            "regexMatch": "EDS .* must be visible",
            "bug": "https://jira/jira/browse/BHS-9369"
        }
        ,
        {
            "description": "git: Distance info must be visible",
            "regexMatch": "For hotel .* Distance info must be visible",
            "bug": "https://jira/jira/browse/BHS-9370"
        }
        ,
        {
            "description": "git: Distance sort must appear for search type",
            "regexMatch": "Distance sort must appear for search type",
            "bug": "https://jira/jira/browse/BHS-9371"
        }
        ,
        {
            "description": "git: The check-out date should store in sessionStorage",
            "regexMatch": "The check-out date should store in sessionStorage",
            "bug": "https://jira/jira/browse/BHS-9372"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "Hotel icon in wizard summary must be visible",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": ".* in wizard summary must be visible",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "Search wizard .* glass icon is visible",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "The 'data-track' attribute of change search button should be 'HOT.SR.UpdateSearch'",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "Check .* date's day of week in wizard summary must be visible.",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "Room counts in wizard summary must be visible.",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: HSR wizard with in valid dates has many new unit errors",
            "regexMatch": "Check .* date should be:.*, actually is: .*",
            "bug": "https://jira/jira/browse/BHS-9373"
        }
        ,
        {
            "description": "git: ESR disclaimer must be visible.",
            "regexMatch": "ESR disclaimer must be visible.",
            "bug": "https://jira/jira/browse/BHS-9374"
        }
        ,
        {
            "description": "git: Travel link-off hyperlink must be visible",
            "regexMatch": "Travel link-off hyperlink must be visible",
            "bug": "https://jira/jira/browse/BHS-9397"
        }
        ,
        {
            "description": "git: The selected sort in the URL should match the visibly selected sort.",
            "regexMatch": "The selected sort in the URL should match the visibly selected sort.",
            "bug": "https://jira/jira/browse/BHS-9398"
        }
        ,
        {
            "description": "git: The guest rating sort is incorrect",
            "regexMatch": "The guest rating sort is incorrect",
            "bug": "https://jira/jira/browse/BHS-9399"
        }
        ,
        {
            "description": "git: Filter orientation pill should match the selected filter state",
            "regexMatch": "Filter orientation .* has a pill .* which matches the selected filter state",
            "bug": "https://jira/jira/browse/BHS-9402"
        }
        ,
        {
            "description": "git: The number of rooms should match with expected value",
            "regexMatch": "The number of rooms should match with expected value",
            "bug": "https://jira/jira/browse/BHS-9403"
        }
        ,
        {
            "description": "git: Filter select to zero triggers many errors",
            "regexMatch": "Hotel name filter submit button must be enabled",
            "bug": "https://jira/jira/browse/BHS-9404"
        }
        ,
        {
            "description": "git: Filter select to zero triggers many errors",
            "regexMatch": "Omniture value for Hotel Name filter orientation should match with expected",
            "bug": "https://jira/jira/browse/BHS-9404"
        }
        ,
        {
            "description": "git: Filter select to zero triggers many errors",
            "regexMatch": "Hotel name filter orientation clear button should be visible",
            "bug": "https://jira/jira/browse/BHS-9404"
        }
        ,
        {
            "description": "git: Filter select to zero triggers many errors",
            "regexMatch": "Hotel name is not displayed in the orientation container",
            "bug": "https://jira/jira/browse/BHS-9404"
        }
        ,
        {
            "description": "git: Filter select to zero triggers many errors",
            "regexMatch": "Hotel name text box doesn't contain the hotel name",
            "bug": "https://jira/jira/browse/BHS-9404"
        }
        ,
        {
            "description": "git: Hotel Name sort triggers an error",
            "regexMatch": "The hotel name sort is incorrect! PreviousHotelName",
            "bug": "https://jira/jira/browse/BHS-9405"
        }
        ,
        {
            "description": "git: Filter checkbox is not checked",
            "regexMatch": "filter checkbox is not checked",
            "bug": "https://jira/jira/browse/BHS-9417"
        }
        ,
        {
            "description": "git: Filter checkbox is not checked",
            "regexMatch": "Filter orientation must appear if filtered by",
            "bug": "https://jira/jira/browse/BHS-9417"
        }
        ,
        {
            "description": "git: Skelly : Footer should be visible",
            "regexMatch": "Footer should be visible",
            "bug": "https://jira/jira/browse/BHS-9442"
        }
        ,
        {
            "description": "git: Skelly : Hotwire banner container should be visible",
            "regexMatch": "Hotwire banner container should be visible",
            "bug": "https://jira/jira/browse/BHS-9443"
        }
        ,
        {
            "description": "git: Star filter count should display after selecting filter",
            "regexMatch": "Hotel Class filter count should display even after we select any one of the hotel class",
            "bug": "https://jira/jira/browse/BHS-9444"
        }
        ,
        {
            "description": "git: The 'data-track' attribute of see details should be 'HOT:SR:MapSeeDetails'",
            "regexMatch": "The 'data-track' attribute of see details should be 'HOT:SR:MapSeeDetails'",
            "bug": "https://jira/jira/browse/BHS-9451"
        }
        ,
        {
            "description": "git: Dynamic strike price data attributes incoorect",
            "regexMatch": "Dynamic strike price does not have correct value for attribute 'data-",
            "bug": "https://jira/jira/browse/BHS-9452"
        }
        ,
        {
            "description": "git: Wizard error message must be visible",
            "regexMatch": "Wizard error message must be visible",
            "bug": "https://jira/jira/browse/BHS-9455"
        }
        ,
        {
            "description": "git: IS: Show more link for Alternate hotel name should displays for Payment sub-section.",
            "regexMatch": "Show more link for Alternate hotel name should displays for Payment sub-section.",
            "bug": "https://jira/jira/browse/BHS-9462"
        }
    ]
}