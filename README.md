# Etch-a-sketch

## An exercise in DOM manipulation

## Description

This project is an exercise is DOM manipulation, using everything I've learned up until this point from [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

The result of this exercise should be something between a sketchpad, and an etch-a-sketch

> **_What is etch-a-sketch?_**<br /> Etch a sketch is a mechanical drawing toy where the user uses two knobs to draw a single continous line that can sketch out various pieces of artwork.[[1]](https://en.wikipedia.org/wiki/Etch_A_Sketch)

## The assignment

During the exercise, I am given some basic directions to outline the end-product of the exercise, coming up with how to reach the solution however, is all on me.

The directions are as follows:

<ol>
<li>Create a 16x16 grid of square divs
    <ul>
    <li>the divs may only be created using javascript DOM manipulation, no hard coding into the HTML and CSS allowed!
    <li>
    put the square divs into a div container to manage them from as a whole
    </li>
    <li>
    use flexbox to make divs form a grid. Make sure NOT to use css grid for this.
    </ul>
<li>
<li>Set up a "hover" effect so the grid changes color when the mouse passes over them, leaving a "pixelated" trail through the grind, like a pen would.</li>
<li>Add a button to the top of the screen that will send a popup for the user, asking for the number of squares per side for the new grid.
    <ul>
    <li>once submitted, the existing grid shoudl be removed, and replaced with the new grid, ggenerating in the same total space as before (e.g. 960px wide) so a new sketch pad is formed.</li>
    <li> Account for the performance impact of the larger grid sizes, by limiting the users input to a maximum of 100.
</ol>
