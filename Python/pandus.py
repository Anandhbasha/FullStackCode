# pip install pandas
import pandas

s1 = pandas.Series([10,20,30],index=["a","b","c"])

# print(s1['a'])
# print(s1['b'])

# dict
# data = {"apple":3,"Orange":5,"banana":10}
# s2 = pandas.Series(data)
# # print(s2)
# # print(s2*2)
# # print(s2+s2)
# print(s2[s2>4])

data = {
    "name":["arun","ajay","kumar"],
    "age":[20,21,20],
    "city":["cbe","erode","salem"]
}

df = pandas.DataFrame(data,index=[1,2,3])
print(df)

# write to csv
# df.to_csv("output.csv")
# print("csv created succesfylly")

df.to_excel("output.xlsx")
print("csv created succesfylly")