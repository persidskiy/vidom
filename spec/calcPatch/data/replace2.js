module.exports = {
    "name" : "replace2",
    "trees" : [
        {
            "tag" : "div",
            "children" : [
                {
                    "tag" : "div"
                },
                {
                    "tag" : "div"
                }
            ]
        },
        {
            "tag" : "div",
            "children" : [
                {
                    "tag" : "span"
                },
                {
                    "tag" : "div"
                }
            ]
        }
    ],
    "patch" : [
        {
            "type" : 4,
            "path" : ".0",
            "newNode" : {
                "tag" : "span"
            }
        }
    ]
};