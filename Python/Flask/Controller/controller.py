from flask import request,jsonify
from config.db import collection
from bson import ObjectId
# Add student
def addStudent():
    data = request.get_json()
    res = collection.insert_one(data)
    return jsonify({"message":"User added Sucessfully","id":str(res.inserted_id)})
# read
def getStudent():
    students = []
    for student in collection.find():
        student["_id"] = str(student["_id"])
        students.append(student)
        return jsonify(students)