from google.appengine.api import users
from google.appengine.ext import ndb

import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
    	self.response.headers['Content-Type'] = 'text/plain'
        self.response.write("404 Page not <i>quite</i>found")
application = webapp2.WSGIApplication([
    ('/404', MainPage),
], debug=True)