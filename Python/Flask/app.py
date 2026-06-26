# pip install flask
from flask import Flask
from Router.router import router
# need to create a server Flask

app = Flask(__name__)
# create the application object
app.register_blueprint(router)

if __name__ =="__main__":
    app.run(debug=True)