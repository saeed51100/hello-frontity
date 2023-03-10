const settings = {
    "name": "hello-frontity",
    "state": {
        "frontity": {
            "url": "http://localhost/test.raiatec.com/",
            "title": "Test Frontity Blog",
            "description": "WordPress installation for Frontity development"
        }
    },
    "packages": [
        {
            name: "my-first-theme"
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "url": "http://localhost/test.raiatec.com/"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
