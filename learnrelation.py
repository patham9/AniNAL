import NAR
import random

NAR.AddInput("*volume=0")
NAR.AddInput("*babblingops=2")
NAR.AddInput("*setopname 1 ^left")
NAR.AddInput("*setopname 2 ^right")
NAR.AddInput("*space 100 S")
valueRange = [x/100 for x in range(100)]
#valueRange = [0.0, 0.5, 0.9]
correct = 0
incorrect = 0
runs = 200

for i in range(runs):
    leftSize = random.choice(valueRange)
    rightSize = random.choice([x for x in valueRange if x != leftSize])
    PickTheSmallest = True if random.random() > 0.5 else False
    OCREvent = "<(sample * SMALLER) --> ocr>. :|:" if PickTheSmallest else "<(sample * BIGGER) --> ocr>. :|:"
    leftEvent = f"<(left * S_{leftSize}) --> size>. :|:"
    rightEvent = f"<(right * S_{rightSize}) --> size>. :|:"
    NAR.AddInput(OCREvent)
    NAR.AddInput("*concurrent")
    NAR.AddInput(leftEvent)
    NAR.AddInput("*concurrent")
    NAR.AddInput(rightEvent)
    NAR.AddInput("*concurrent")
    NAR.AddInput("5")
    ret = NAR.AddInput("G! :|:")
    executions = ret["executions"]
    guessed = False
    if not executions:
        guessed = True
        decision = random.choice(["^left", "^right"])
        NAR.AddInput(decision + ". :|:")
        executions = [{"operator": decision}]
    feedback = "G. :|: %0%"
    operator = executions[0]["operator"]
    if leftSize < rightSize and operator == "^left" and PickTheSmallest:
        feedback = "G. :|:"
    if leftSize < rightSize and operator == "^right" and not PickTheSmallest:
        feedback = "G. :|:"
    if leftSize > rightSize and operator == "^right" and PickTheSmallest:
        feedback = "G. :|:"
    if leftSize > rightSize and operator == "^left" and not PickTheSmallest:
        feedback = "G. :|:"
    if i > runs*2.0/3.0 and not guessed and ret["reason"] is not None:
        if feedback == "G. :|: %0%":
            incorrect += 1
        else:
            correct += 1
    NAR.AddInput(feedback)
    NAR.AddInput("100")

print(f"correct={correct} incorrect={incorrect} ratio={correct / (correct + incorrect)} total={correct+incorrect}")
