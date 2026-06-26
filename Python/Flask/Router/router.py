from flask import Blueprint
from Controller.controller import read,about,ser,con

router = Blueprint("crud",__name__)

router.route("/")(read)
router.route("/about")(about)
router.route("/services")(ser)
router.route("/contact")(con)