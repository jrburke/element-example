{
    "appDir": "../www",
    "baseUrl": "lib",
    "paths": {
        "app": "../app",
        "appIndex": "../index"
    },
    "dir": "../www-built",
    "modules": [
        {
            "name": "app",
            "include": "element!build:appIndex.html"
        }
    ],
    // Set to no minification for educational purposes.
    // Remove this if you want minified code.
    "optimize": "none"
}
