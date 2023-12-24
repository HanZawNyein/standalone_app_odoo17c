{
    "name": "Book Shop",
    "author": "Han Zaw Nyein",
    "depends": ["base", "web"],
    "data": [
        "views/home.xml",
    ],
    "assets": {
        'book_shop.assets_standalone_app': [
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),
            ('include', 'web._assets_core'),
            'book_shop/static/src/**/*',
        ]
    }
}
