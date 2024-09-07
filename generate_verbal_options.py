criteriaX = {"The darker among left/right dependent if sample is X" :
             """if(middleShape.label == "X")
                {
                    if(darker(leftShape, rightShape))
                    {
                        return chosenShape.location == "left";
                    }
                    else
                    if(darker(rightShape, leftShape))
                    {
                        return chosenShape.location == "right";
                    }
                }""",
             "The brighter among left/right dependent if sample is X": 
             """if(middleShape.label == "X")
                {
                    if(brighter(leftShape, rightShape))
                    {
                        return chosenShape.location == "left";
                    }
                    else
                    if(brighter(rightShape, leftShape))
                    {
                        return chosenShape.location == "right";
                    }
                }
                """,
             "The left one if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             """,
             "The right one if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             """,
             "The one with brightness 0.99 if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             """,
             "The one with brightness 0.00 if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }""",
             "The one with brightness 0.50 if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             """,
             "The one with circle shape if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             """,
             "The one with rectangle shape if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             """,
             "The one with triangle shape if sample is X":
             """if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             """}

criterias = []
for x in criteriaX:
    for y in criteriaX:
        criterias += [(x,y)]
        #print((x,y))

codes = []
options = []
switchStatements = []
criteriaslist = ["criterias = ["]
for i,(x,y) in enumerate(criterias):
    criteriaslist.append(f"criteria_N{i},")
    switchStatements.append("""case "N"""+str(i)+"""": selectedCriteria = criteria_N"""+str(i)+"""; break;""")
    options.append("""<option value="N"""+str(i)+"""">""" + x + ", " + y.replace("X","Y") + """</option>""")
    
    code = """function criteria_N_INDEXI_(chosenShape, leftShape, middleShape, rightShape)    
              {"""
    code += criteriaX[x]
    code += criteriaX[y].replace("X","Y")
    code += """return false;
               }"""
    code = code.replace("_INDEXI_",str(i))
    codes.append(code)
criteriaslist.append("]")

for x in codes:
    print(x)
print("\n\n\n\n\n")
for x in options:
    print(x)
print("\n\n\n\n\n")
for x in switchStatements:
    print(x)
print("\n\n\n\n\n")
for x in criteriaslist:
    print(x)

