from flask import Blueprint
from Controller.controller import addStudent,getStudent
router = Blueprint("crud",__name__)

# router.route("/")(read)
# router.route("/about")(about)
# router.route("/services")(ser)
# router.route("/contact")(con)

router.route("/add",methods =["POST"])(addStudent)
router.route("/show",methods =["GET"])(getStudent)