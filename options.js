/* File generated with GPT-4 from the option list in demo.html via prompt (fill in the full option list by copy-pasting from demo.html):
>>PROMPT START
Consider the option list:

"    <select onchange="optionSelected(this.value)">
        <option value="1">The left/right dependent on whether it has same shape as sample</option>
        ...
        <option value="32">Left/right dependent on whether right is a blue rectangle</option>
        ...
    </select>
"

//The left/right dependent on whether it has the same shape as sample
function criteria_1(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.shape == middleShape.shape;
}

//Left/right dependent on whether right is a blue rectangle
function criteria_32(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

Please complete criteria_42:
<<PROMPT END
*/

//The left/right dependent on whether it has same shape as sample
function criteria_1(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.shape == middleShape.shape;
}

//The left/right dependent on whether it has same color as sample
function criteria_2(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.color == middleShape.color;
}

//Left/right dependent on anything has same color as sample
function criteria_3(chosenShape, leftShape, middleShape, rightShape)
{
    if(chosenShape.color == leftShape.color || chosenShape.color == middleShape.color || chosenShape.color == rightShape.color)
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on anything has same color as sample
function criteria_3i(chosenShape, leftShape, middleShape, rightShape)
{
    if(chosenShape.color == leftShape.color || chosenShape.color == middleShape.color || chosenShape.color == rightShape.color)
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on anything has same shape as sample
function criteria_4(chosenShape, leftShape, middleShape, rightShape)
{
    if(chosenShape.shape == leftShape.shape || chosenShape.shape == middleShape.shape || chosenShape.shape == rightShape.shape)
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on anything has same shape as sample
function criteria_4i(chosenShape, leftShape, middleShape, rightShape)
{
    if(chosenShape.shape == leftShape.shape || chosenShape.shape == middleShape.shape || chosenShape.shape == rightShape.shape)
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a rectangle
function criteria_5(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether sample is a rectangle
function criteria_5i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a triangle
function criteria_6(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a triangle
function criteria_6i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a triangle
function criteria_c6(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a triangle
function criteria_c6i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is blue
function criteria_7(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is blue
function criteria_7i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is red
function criteria_8(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is red
function criteria_8i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is green
function criteria_9(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is green
function criteria_9i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is green
function criteria_y9(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is green
function criteria_y9i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a blue rectangle
function criteria_10(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a blue rectangle
function criteria_10i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a red rectangle
function criteria_11(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a red rectangle
function criteria_11i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green rectangle
function criteria_12(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green rectangle
function criteria_12i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green rectangle
function criteria_y12(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green rectangle
function criteria_y12i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a blue triangle
function criteria_13(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a blue triangle
function criteria_13i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a red triangle
function criteria_14(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a red triangle
function criteria_14i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green triangle
function criteria_15(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green triangle
function criteria_15i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green triangle
function criteria_y15(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green triangle
function criteria_y15i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a blue triangle
function criteria_c13(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a blue triangle
function criteria_c13i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "blue" && middleShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a red triangle
function criteria_14(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a red circle
function criteria_c14(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a red triangle
function criteria_c14i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "red" && middleShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green triangle
function criteria_c15(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green triangle
function criteria_c15i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "green" && middleShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether sample is a green triangle
function criteria_cy15(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether sample is a green triangle
function criteria_cy15i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == "yellow" && middleShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a rectangle
function criteria_16(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a rectangle
function criteria_16i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a triangle
function criteria_17(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a triangle
function criteria_17i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a triangle
function criteria_c17(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a triangle
function criteria_c17i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is blue
function criteria_18(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is blue
function criteria_18i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is red
function criteria_19(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is red
function criteria_19i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is green
function criteria_20(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is green
function criteria_20i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is green
function criteria_y20(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is green
function criteria_y20i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a blue rectangle
function criteria_21(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a blue rectangle
function criteria_21i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a red rectangle
function criteria_22(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a red rectangle
function criteria_22i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green rectangle
function criteria_23(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a green rectangle
function criteria_23i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green rectangle
function criteria_y23(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a green rectangle
function criteria_y23i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a blue triangle
function criteria_24(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a blue triangle
function criteria_24i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a red triangle
function criteria_25(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a red triangle
function criteria_25i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_26(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_26i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a green triangle
function criteria_y26(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_y26i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a blue triangle
function criteria_c24(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a blue circle
function criteria_c24i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a red triangle
function criteria_c25(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a red triangle
function criteria_c25i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_c26(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_c26i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether left is a green triangle
function criteria_cy26(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is a green triangle
function criteria_cy26i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a rectangle
function criteria_27(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a rectangle
function criteria_27i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a triangle
function criteria_28(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a triangle
function criteria_28i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a triangle
function criteria_c28(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a triangle
function criteria_c28i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is blue
function criteria_29(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is blue
function criteria_29i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is red
function criteria_30(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is red
function criteria_30i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is green
function criteria_31(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is green
function criteria_31i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is green
function criteria_y31(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is green
function criteria_y31i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a blue rectangle
function criteria_32(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a blue rectangle
function criteria_32i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a red rectangle
function criteria_33(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a red rectangle
function criteria_33i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a green rectangle
function criteria_34(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a green rectangle
function criteria_34i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a yellow rectangle
function criteria_y34(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a yellow rectangle
function criteria_y34i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a blue triangle
function criteria_35(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a blue triangle
function criteria_35i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "blue" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a red triangle
function criteria_36(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a red triangle
function criteria_36i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "red" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a green triangle
function criteria_37(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a green triangle
function criteria_37i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "green" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is a green triangle
function criteria_y37(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether right is a green triangle
function criteria_y37i(chosenShape, leftShape, middleShape, rightShape)
{
    if(rightShape.color == "yellow" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a rectangle
function criteria_38(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "rectangle" || middleShape.shape == "rectangle" || rightShape.shape == "rectangle")
    {
        chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a rectangle
function criteria_38i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "rectangle" || middleShape.shape == "rectangle" || rightShape.shape == "rectangle")
    {
        chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a triangle
function criteria_39(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "triangle" || middleShape.shape == "triangle" || rightShape.shape == "triangle")
    {
        chosenShape.location == "left";
    }
    chosenShape.location == "right";
}

//Left/right dependent on whether anything is a triangle
function criteria_39i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "triangle" || middleShape.shape == "triangle" || rightShape.shape == "triangle")
    {
        chosenShape.location == "right";
    }
    chosenShape.location == "left";
}

//Left/right dependent on whether anything is a triangle
function criteria_c39(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "circle" || middleShape.shape == "circle" || rightShape.shape == "circle")
    {
        chosenShape.location == "left";
    }
    chosenShape.location == "right";
}

//Left/right dependent on whether anything is a triangle
function criteria_c39i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.shape == "circle" || middleShape.shape == "circle" || rightShape.shape == "circle")
    {
        chosenShape.location == "right";
    }
    chosenShape.location == "left";
}

//Left/right dependent on whether anything is blue
function criteria_40(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" || middleShape.color == "blue" || rightShape.color == "blue")
    {
        chosenShape.location == "left";
    }
    chosenShape.location == "right";
}

//Left/right dependent on whether anything is blue
function criteria_40i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" || middleShape.color == "blue" || rightShape.color == "blue")
    {
        chosenShape.location == "right";
    }
    chosenShape.location == "left";
}

//Left/right dependent on whether anything is red
function criteria_41(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" || middleShape.color == "red" || rightShape.color == "red")
    {
        chosenShape.location == "left";
    }
    chosenShape.location == "right";
}

//Left/right dependent on whether anything is red
function criteria_41i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" || middleShape.color == "red" || rightShape.color == "red")
    {
        chosenShape.location == "right";
    }
    chosenShape.location == "left";
}

//Left/right dependent on whether anything is green
function criteria_42(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" || middleShape.color == "green" || rightShape.color == "green")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is green
function criteria_42i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" || middleShape.color == "green" || rightShape.color == "green")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is yellow
function criteria_y42(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" || middleShape.color == "yellow" || rightShape.color == "yellow")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is yellow
function criteria_y42i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" || middleShape.color == "yellow" || rightShape.color == "yellow")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a blue rectangle
function criteria_43(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "rectangle" || 
       middleShape.color == "blue" && middleShape.shape == "rectangle" || 
       rightShape.color == "blue" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a blue rectangle
function criteria_43i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "rectangle" || 
       middleShape.color == "blue" && middleShape.shape == "rectangle" || 
       rightShape.color == "blue" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a red rectangle
function criteria_44(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "rectangle" || 
       middleShape.color == "red" && middleShape.shape == "rectangle" || 
       rightShape.color == "red" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a red rectangle
function criteria_44i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "rectangle" || 
       middleShape.color == "red" && middleShape.shape == "rectangle" || 
       rightShape.color == "red" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a green rectangle
function criteria_45(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "rectangle" || 
       middleShape.color == "green" && middleShape.shape == "rectangle" || 
       rightShape.color == "green" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a green rectangle
function criteria_45i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "rectangle" || 
       middleShape.color == "green" && middleShape.shape == "rectangle" || 
       rightShape.color == "green" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a yellow rectangle
function criteria_y45(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "rectangle" || 
       middleShape.color == "yellow" && middleShape.shape == "rectangle" || 
       rightShape.color == "yellow" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a yellow rectangle
function criteria_y45i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "rectangle" || 
       middleShape.color == "yellow" && middleShape.shape == "rectangle" || 
       rightShape.color == "yellow" && rightShape.shape == "rectangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a blue triangle
function criteria_46(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "triangle" || 
       middleShape.color == "blue" && middleShape.shape == "triangle" || 
       rightShape.color == "blue" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a blue triangle
function criteria_46i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "triangle" || 
       middleShape.color == "blue" && middleShape.shape == "triangle" || 
       rightShape.color == "blue" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a red triangle
function criteria_47(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "triangle" || 
       middleShape.color == "red" && middleShape.shape == "triangle" || 
       rightShape.color == "red" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a red triangle
function criteria_47i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "triangle" || 
       middleShape.color == "red" && middleShape.shape == "triangle" || 
       rightShape.color == "red" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a green triangle
function criteria_48(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "triangle" || 
       middleShape.color == "green" && middleShape.shape == "triangle" || 
       rightShape.color == "green" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a green triangle
function criteria_48i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "triangle" || 
       middleShape.color == "green" && middleShape.shape == "triangle" || 
       rightShape.color == "green" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a yellow triangle
function criteria_y48(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "triangle" || 
       middleShape.color == "yellow" && middleShape.shape == "triangle" || 
       rightShape.color == "yellow" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a yellow triangle
function criteria_y48i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "triangle" || 
       middleShape.color == "yellow" && middleShape.shape == "triangle" || 
       rightShape.color == "yellow" && rightShape.shape == "triangle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a blue circle
function criteria_c46(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "circle" || 
       middleShape.color == "blue" && middleShape.shape == "circle" || 
       rightShape.color == "blue" && rightShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a blue circle
function criteria_c46i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "blue" && leftShape.shape == "circle" || 
       middleShape.color == "blue" && middleShape.shape == "circle" || 
       rightShape.color == "blue" && rightShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a red circle
function criteria_c47(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "circle" || 
       middleShape.color == "red" && middleShape.shape == "circle" || 
       rightShape.color == "red" && rightShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a red circle
function criteria_c47i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "red" && leftShape.shape == "circle" || 
       middleShape.color == "red" && middleShape.shape == "circle" || 
       rightShape.color == "red" && rightShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a green circle
function criteria_c48(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "circle" || 
       middleShape.color == "green" && middleShape.shape == "circle" || 
       rightShape.color == "green" && rightShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a green circle
function criteria_c48i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "green" && leftShape.shape == "circle" || 
       middleShape.color == "green" && middleShape.shape == "circle" || 
       rightShape.color == "green" && rightShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether anything is a yellow circle
function criteria_cy48(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "circle" || 
       middleShape.color == "yellow" && middleShape.shape == "circle" || 
       rightShape.color == "yellow" && rightShape.shape == "circle")
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on whether anything is a yellow circle
function criteria_cy48i(chosenShape, leftShape, middleShape, rightShape)
{
    if(leftShape.color == "yellow" && leftShape.shape == "circle" || 
       middleShape.color == "yellow" && middleShape.shape == "circle" || 
       rightShape.color == "yellow" && rightShape.shape == "circle")
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//The left/right dependent on whether it is blue
function criteria_49(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.color == "blue";
}

//The left/right dependent on whether it is red
function criteria_50(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.color == "red";
}

//The left/right dependent on whether it is green
function criteria_51(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.color == "green";
}

//The left/right dependent on whether it is yellow
function criteria_y51(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.color == "yellow";
}

//The left/right dependent on whether it is rectangle
function criteria_52(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.shape == "rectangle";
}

//The left/right dependent on whether it is triangle
function criteria_53(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.shape == "triangle";
}

//The left/right dependent on whether it is circle
function criteria_c53(chosenShape, leftShape, middleShape, rightShape)
{
    return chosenShape.shape == "circle";
}
