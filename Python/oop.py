# # # class
# # # object

# # class Fan:
# #     # propeties
# #     fanColor = "brown"
# #     fanSpeed = "1200rpm"
# #     noofWings = 3
# #     # methods
# #     def rotate(self):
# #         print("Fan is running")
# # # instence or Object
# # f1 = Fan()
# # f1.fanSpeed = "1000rpm"
# # print(f1.fanColor)
# # print(f1.fanSpeed)
# # print(f1.noofWings)
# # f1.rotate()

# # f2 = Fan()
# # f2.fanColor = "blue"
# # print(f2.fanColor)
# # print(f2.fanSpeed)
# # print(f2.noofWings)
# # f2.rotate()


# # static Method
# # class Fan:   
# #     fanColor = "brown"
# #     fanSpeed = "1200rpm"
# #     noofWings = 3
# #     # methods
# #     def rotate():
# #         print("Fan is running")
# # # instence or Object
# # Fan.fanColor = "Green"
# # print(Fan.fanColor)

# # # class method
# # class Fan:   
# #     fanColor = "brown"
# #     fanSpeed = "1200rpm"
# #     noofWings = 3
# #     # methods
# #     def rotate(cls):
# #         print("Fan is running")
# # # instence or Object
# # f1= Fan()
# # f1.fanColor = "Green"
# # print(Fan.fanColor)




# # class Car:
# #     def __init__(self):
# #         carName = "BMW"
# #         print("Hello This Constructor function")
# #         print("Car Name is:",carName)

# # c =Car()

# # Access Specifiers
#     # scope of the variable
#         #private
# # class BankAccount:
# #     __balance = 500
# #     def showBalane(self):
# #         print(self.__balance)

# # acc =  BankAccount()
# # acc.showBalane()
#         #protected
#         #public
# # # Encapsulation
# # class BankAccount:
# #     __balance = 500   
# #     def deposit(self,amount):
# #         self.__balance += amount
# #     def withdrawn(self,amount):
# #         if amount<self.__balance:
# #             self.__balance -= amount
# #         else:
# #             print("Insufficient Balance")
# #     def showBalane(self):
# #         return self.__balance
# # acc =  BankAccount()
# # print(acc.showBalane())
# # acc.deposit(10000)
# # print(acc.showBalane())
# # acc.withdrawn(1000)
# # print(acc.showBalane())


# # Inheritence
# #     # single Inheritence
# # class Jap:
# #     courseTitle1 = "Python"
# #     courseTitle2 = "React"
# #     courseTitle3 = "Node"
# #     courseTitle4 = "MongoDb"
# #     courseTitle5 = "SQL"
# #     courseTitle6 = "JS"
# #     courseTitle7 = "CSS"
# #     courseTitle8 = "HTML"
# # class Mithun(Jap):
# #     pass

# # m = Mithun()
# # print(m.courseTitle1)
# # print(m.courseTitle2)
# # print(m.courseTitle3)
#     # mutiple Inheritence
# # class Singer:
# #     def show(self):
# #         print("He is a Singer")
# # class Dancer:
# #     def show(self):
# #         print("He is a Dancer")

# # class Person(Dancer,Singer):
# #     pass


# # P = Person()
# # P.show()
#     # multilevel Inheritence
# # class Qtree:
# #     trainer = "Anandh"
# # class AssignTrainer(Qtree):
# #     pass
# # class Students(AssignTrainer):
# #     pass

# # S= Students()
# # print(S.trainer)

#     # Hyrachical Inheritence
# # class Jap:
# #     courseTitle1 = "Python"
# #     courseTitle2 = "React"
# #     courseTitle3 = "Node"
# #     courseTitle4 = "MongoDb"
# #     courseTitle5 = "SQL"
# #     courseTitle6 = "JS"
# #     courseTitle7 = "CSS"
# #     courseTitle8 = "HTML"
# # class Mithun(Jap):
# #     pass
# # class Jeeve(Jap):
# #     pass

#     # Hybrid Inheritence
# # class Qtree:
# #     course1 = "Jap"
# #     course1 = "Python"
# #     course1 = "Java"
# #     course1 = "MERN"
# # class Trainer(Qtree):
# #     name = "Anandh"
# # class Mithun(Trainer):
# #     pass
# # class Jeeve(Trainer):
# #     pass


# # polymorphism
# #     #method overloading
# # class Add:
# #     def Addition(self,a=0,b=0,c=0):
# #         print(a+b+c)
# # a = Add()
# # a.Addition(10)
# # a.Addition(10,20)
# # a.Addition(10,20,300)
#     # method overridding
# # class Singer:
# #     def show(self):
# #         print("He is a Singer")
# # class Dancer:
# #     def show(self):
# # #         print("He is a Dancer")

# # # class Person(Dancer,Singer):
# # #     pass

# # # P = Person()
# # # P.show()
# # # S =Singer()
# # # S.show()

# # # Abstraction
# # from abc import ABC,abstractmethod
# # class BankLoan(ABC):
# #     @abstractmethod
# #     def intrest(self):
# #         pass
# # class SBI(BankLoan):
# #     def intrest(self):
# #         print("SBI Personal loan Rate of Intrest is 7%")
# # class HDFC(BankLoan):
# #     def intrest(self):
# #         print("HDFC Personal loan Rate of Intrest is 8%")
    


# # # Operator overloading
# # class Student:
# #     def __init__(self,marks):
# #         self.marks = marks
# #     def __add__(self, other):
# #         return self.marks+other.marks
# #     def __sub__(self, other):
# #         return self.marks-other.marks
# #     def __mul__(self, other):
# #         return self.marks*other.marks
    
# # s1 = Student(80)
# # s2 = Student(90)
# # print(s1+s2)
# # print(s1-s2)
# # print(s1*s2)
# # # composition
# # class Hospital:
# #     def name(self):
# #         print("Hospital name is ABC")
# # class Doctor:
# #     def __init__(self):
# #         self.h = Hospital()
# #         self.h.name()
    
# # D =Doctor()

# # exception handling

# # 
# # print("Hello Welcome")

# # try:
# #     def greeets():
# #         print(bvklkjkjkl)
# # except:
# #     print("Hello Welcome")


# # print("Hello Welcome")




# try:
#     num1 = int(input("Enter the number:"))
#     a =10
#     res = a/num1
#     print(res)
# except:
#     print("Please enter the correct value")

# print("Pytgon is working")