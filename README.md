# Mushroom Mania

+ npm install in lib folder
+ run grunt on lib folder
+ plug in your database api info in app/values/FBCreds.js

## Instructions

Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/modern-framework/mushroom-mania && cd $_
Requirements

For this exercise, you're going to create a basic application, with a single view. Your job is to load the JSON data below and display it in a list. Above the list, provide one text box, and two radio buttons.

The radio buttons should be labeled Poisonous and Non-poisonous.

When the user types any text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.

When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need:

An Angular application module.
One controller defined in your application. The controller will load the JSON with an XHR call using the $http function that Angular provides.
One partial bound to the controller.
Several directives will be helpful. ng-repeat, ng-click, and the filter property on the ng-repeat.
Load the JSON below into a new Firebase application rather than reading it from a local file.
Put the JSON object into $scope.mushrooms and bind that variable in your partial.
Data

{
    "mushrooms": {
        "mushroom0": {
            "name": "enoki",
            "edible": true,
            "description": "Enoki mushrooms grow in bunches. They have long, slender stems and small, white caps. These crisp mushrooms have a mild flavor that has been described as somewhat fruity."
        },
        "mushroom1": {
            "name": "portabella",
            "edible": true,
            "description": "Portabella mushrooms are similar to white mushrooms but are much larger and more brown in color. They are harvested when they are very mature, which gives them a more dense texture and a deeper flavor."
        },
        "mushroom2": {
            "name": "shiitake",
            "edible": true,
            "description": "Shiitake mushrooms are mostly brown and have wide, umbrella-shaped tops. They have a dense texture and meaty taste."
        },
        "mushroom3": {
            "name": "morel",
            "edible": true,
            "description": "These cone-shaped mushrooms vary in color from tan to brown. They also have a stronger flavor, which has been described as earthy, smoky or even nutty."
        },
        "mushroom4": {
            "name": "oyster",
            "edible": true,
            "description": "These mushrooms get their name from their appearance and their flavor. They typically are white, beige or gray and are found in the wild growing on logs or trees. Their stems have broad gills and rise into a flat, mostly uneven top that resembles an oyster. These mushrooms have a soft texture and delicate flavor that some people compare with seafood."
        },
        "mushroom5": {
            "name": "chanterelle",
            "edible": true,
            "description": "They have a delicate texture, so care must be taken when they are cooked, to avoid having them become tough. Their taste has been described as nutty."
        },
        "mushroom6": {
            "name": "reishi",
            "edible": true,
            "description": "This mushroom has a long history of use as an herbal medicine. Modern research is now confirming its healing power in the body."
        },
        "mushroom7": {
            "name": "cremini",
            "edible": true,
            "description": "Cremini, also known as crimini mushrooms, are simply a different strain than the white button. Developed by commercial growers, they are brown in color and have a slightly deeper taste."
        },
        "mushroom8": {
            "name": "porcini",
            "edible": true,
            "description": "Due to their strong nutty flavor, this is an incredibly popular gourmet mushroom."
        },
        "mushroom9": {
            "name": "matsutaki",
            "edible": true,
            "description": "Every year between September and January, pickers on the West Coast of North America search for this spicy-smelling mushroom with a passion usually only reserved for morel hunters."
        },
        "mushroom10": {
            "name": "agaric",
            "edible": false,
            "description": "The main toxic agents in Amanita muscaria are muscimol and ibotenic acid. These act on the central nervous system causing loss of coordination, alternating agitation and sleep, nausea and in some cases hallucinations."
        },
        "mushroom11": {
            "name": "angel wing",
            "edible": false,
            "description": "Found throughout the Northern Hemisphere angel wing gets its name firstly from how it looks and secondly because eating it gives a good chance of sending you packing."
        },
        "mushroom12": {
            "name": "dapperling",
            "edible": false,
            "description": "This small, tasty looking mushroom and many of the Lepiota family, contain the deadly amatoxin which is capable of destroying the liver. It is found in conifer forests throughout Europe and North America and has been responsible for several deaths over the years."
        },
        "mushroom13": {
            "name": "podostroma",
            "edible": false,
            "description": "The main toxins in these fungi are trichothecene mycotoxins which have particularly unpleasant effects and may cause death within a matter of days. The symptoms are system wide and can affect all organs, primarily liver, kidneys and brain. There is also a depletion of blood cells, peeling of skin off the face and hair loss making it look like the victim is suffering from radiation poisoning."
        },
        "mushroom14": {
            "name": "conocybe filaris",
            "edible": false,
            "description": "This mushroom is commonly found on lawns and is native to the Pacific Northwest region of the US. Whilst it doesn’t look immediately inviting as a snack its appearance in gardens brings it into closer proximity with people than many other mushrooms."
        },
        "mushroom15": {
            "name": "webcap",
            "edible": false,
            "description": "The webcap is a particularly innocuous looking mushroom similar in appearance to many edible species. In fact it is incredibly poisonous and eating it will possibly kill you; if not within weeks at a later date when your kidneys pack in."
        },
        "mushroom16": {
            "name": "autumn skullcap",
            "edible": false,
            "description": "As with many other poisonous mushrooms the skullcaps look similar to other, edible species. In this case they may be confused with honey fungus, sheathed woodtuft and velvet foot amongst others."
        }
    }
}# modern-framework-mushrooms
