from flask import Blueprint
from Controller.controller import addStudent,getStudent,update_students,delete_students
router = Blueprint("crud",__name__)

# router.route("/")(read)
# router.route("/about")(about)
# router.route("/services")(ser)
# router.route("/contact")(con)

router.route("/add",methods =["POST"])(addStudent)
router.route("/show",methods =["GET"])(getStudent)
router.route("/updateStu/<int:id>",methods =["PUT"])(update_students)
router.route("/deleteStu/<int:id>",methods =["DELETE"])(delete_students)