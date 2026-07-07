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

# put
def update_students(id):
    data = request.get_json()
    res = collection.update_one({"_id:ObjectId(id)"},{"$set":data})

    if res.modified_count>0:
        return jsonify({"message":"Student Updtated Succesfully"})
    return jsonify({"message":"Unable to Updtate"})

# Delete
def deleteStu(id):
    data = request.get_json()
    res = collection.delete_one({"_id:ObejectId(id)"})
    if res.deleted_count_count>0:
        return jsonify({"message":"Student Deleted Succesfully"})
    return jsonify({"message":"Unable to Deleted"})