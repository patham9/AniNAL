import ast
import numpy as np
import matplotlib.pyplot as plt

results = """
_TODO_COPY_FROM_SHEET_
"""

lines = results.split("\n")
wins = 0
total = 0
humscore = 0
sysscore = 0
humanlists = []
syslists = []
humanlistsavg = [0 for i in range(100)]
syslistsavg = [0 for i in range(100)]
for x in lines:
    if x.strip() != "":
        parts = x.split(",")
        hum = float(parts[5])
        sys = float(parts[7])
        humanarray = "[" + x.split(",humanrun,")[1].split(",sysrun,")[0] + "]"
        sysarray = "[" + x.split(",sysrun,")[1] + "]"
        humanlist = ast.literal_eval(humanarray)
        syslist = ast.literal_eval(sysarray)
        ok = False
        for x in humanlist:
            if x != 1.0:
                ok = True
        if not ok:
            continue
        humanlists.append(humanlist)
        for i,x in enumerate(syslist):
            syslistsavg[i] += x
        for i,x in enumerate(humanlist):
            humanlistsavg[i] += x
        syslists.append(syslist)
        print(humanlist, syslist)
        humscore += hum
        sysscore += sys
        if sys > hum:
            wins+=1
        total+=1

for i,x in enumerate(syslistsavg):
    syslistsavg[i] /= total
for i,x in enumerate(humanlistsavg):
    humanlistsavg[i] /= total

## Plotting each array in the list
#for i, array in enumerate(humanlists):
#    plt.plot(array, color="blue", alpha=0.1)

## Plotting each array in the list
#for i, array in enumerate(syslists):
#    plt.plot(array, color="green", alpha=0.1)

syslistsavg = np.array(syslistsavg)
humanlistsavg = np.array(humanlistsavg)

# Plotting the average with standard deviation shading
plt.plot(syslistsavg, color="green", label="NARS Avg.")
plt.fill_between(
    range(len(syslistsavg)),
    syslistsavg - np.std(syslists, axis=0),
    syslistsavg + np.std(syslists, axis=0),
    color="green",
    alpha=0.1,
)

plt.plot(humanlistsavg, color="blue", label="Humans Avg.")
plt.fill_between(
    range(len(humanlistsavg)),
    humanlistsavg - np.std(humanlists, axis=0),
    humanlistsavg + np.std(humanlists, axis=0),
    color="blue",
    alpha=0.1,
)

# Adding labels and a legend
plt.xlabel('Time')
plt.ylabel('Values')
plt.ylim(ymin=0.3)
plt.ylim(ymax=1)
plt.legend()

# Display the plot
plt.show()
