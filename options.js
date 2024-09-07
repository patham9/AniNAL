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
    if(middleShape.color == leftShape.color || middleShape.color == rightShape.color)
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on anything has same color as sample
function criteria_3i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.color == leftShape.color || middleShape.color == rightShape.color)
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on anything has same shape as sample
function criteria_4(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == leftShape.shape || middleShape.shape == rightShape.shape)
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Left/right dependent on anything has same shape as sample
function criteria_4i(chosenShape, leftShape, middleShape, rightShape)
{
    if(middleShape.shape == leftShape.shape || middleShape.shape == rightShape.shape)
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

function brighter(shape1, shape2)
{
    return parseFloat(shape1.shade.replace("B_","")) > parseFloat(shape2.shade.replace("B_",""));
}

function darker(shape1, shape2)
{
    return parseFloat(shape1.shade.replace("B_","")) < parseFloat(shape2.shade.replace("B_",""));
}

function equal_bright(shape1, shape2)
{
    return shape1.shade == shape2.shade;
}

//The left/right dependent on whether it is brighter than sample
function criteria_m1(chosenShape, leftShape, middleShape, rightShape)
{
    return brighter(chosenShape, middleShape);
}

//The left/right dependent on whether it is darker than sample
function criteria_m2(chosenShape, leftShape, middleShape, rightShape)
{
    return darker(chosenShape, middleShape);
}

//The left/right dependent on whether it is equally bright as sample
function criteria_m3(chosenShape, leftShape, middleShape, rightShape)
{
    return equal_bright(chosenShape, middleShape);
}

//Left/right dependent on whether left is brighter than sample
function criteria_m4(chosenShape, leftShape, middleShape, rightShape)
{
    if(brighter(leftShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether left is brighter than sample
function criteria_m5(chosenShape, leftShape, middleShape, rightShape)
{
    if(brighter(leftShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is brighter than sample
function criteria_m6(chosenShape, leftShape, middleShape, rightShape)
{
    if(brighter(rightShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether right is brighter than sample
function criteria_m7(chosenShape, leftShape, middleShape, rightShape)
{
    if(brighter(rightShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is darker than sample
function criteria_m8(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(leftShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}


//Right/left dependent on whether left is darker than sample
function criteria_m9(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(leftShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is darker than sample
function criteria_m10(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(rightShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether right is darker than sample
function criteria_m11(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(rightShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is darker than right
function criteria_m12(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(leftShape, rightShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether left is darker than right
function criteria_m13(chosenShape, leftShape, middleShape, rightShape)
{
    if(darker(leftShape, rightShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is equally bright as sample
function criteria_m14(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(leftShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether left is equally bright as sample
function criteria_m15(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(leftShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether right is equally bright as sample
function criteria_m16(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(rightShape, middleShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether right is equally bright as sample
function criteria_m17(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(rightShape, middleShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

//Left/right dependent on whether left is equally bright as right
function criteria_m18(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(leftShape, rightShape))
    {
        return chosenShape.location == "left";
    }
    return chosenShape.location == "right";
}

//Right/left dependent on whether left is equally bright as right
function criteria_m19(chosenShape, leftShape, middleShape, rightShape)
{
    if(equal_bright(leftShape, rightShape))
    {
        return chosenShape.location == "right";
    }
    return chosenShape.location == "left";
}

function criteria_N0(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N1(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N2(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N3(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N4(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N5(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N6(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N7(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N8(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N9(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N10(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N11(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N12(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N13(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N14(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N15(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N16(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N17(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N18(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N19(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
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
                if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N20(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N21(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N22(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N23(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N24(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N25(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N26(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N27(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N28(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N29(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "left";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N30(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N31(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N32(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N33(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N34(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N35(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N36(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N37(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N38(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N39(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.location == "right";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N40(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N41(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N42(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N43(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N44(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N45(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N46(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N47(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N48(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N49(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.99";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N50(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N51(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N52(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N53(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N54(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N55(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N56(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N57(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N58(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N59(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.00";
                }if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N60(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N61(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N62(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N63(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N64(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N65(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N66(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N67(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N68(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N69(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shade == "B_0.50";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N70(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N71(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N72(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N73(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N74(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N75(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N76(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N77(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N78(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N79(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "circle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N80(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N81(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N82(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N83(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N84(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N85(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N86(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N87(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N88(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N89(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "rectangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
function criteria_N90(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
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
                }return false;
               }
function criteria_N91(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
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
                return false;
               }
function criteria_N92(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "left";
                }
             return false;
               }
function criteria_N93(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.location == "right";
                }
             return false;
               }
function criteria_N94(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.99";
                }
             return false;
               }
function criteria_N95(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.00";
                }return false;
               }
function criteria_N96(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shade == "B_0.50";
                }
             return false;
               }
function criteria_N97(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "circle";
                }
             return false;
               }
function criteria_N98(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "rectangle";
                }
             return false;
               }
function criteria_N99(chosenShape, leftShape, middleShape, rightShape)    
              {if(middleShape.label == "X")
                {
                    return chosenShape.shape == "triangle";
                }
             if(middleShape.label == "Y")
                {
                    return chosenShape.shape == "triangle";
                }
             return false;
               }
