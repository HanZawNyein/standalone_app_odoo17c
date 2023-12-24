from odoo.http import request, route, Controller


class BookShopController(Controller):
    @route("/book_shop/standalone_app", auth="public")
    def standalone_app(self):
        return request.render(
            'book_shop.standalone_app',
            {
                'session_info': request.env['ir.http'].get_frontend_session_info(),
            }
        )
