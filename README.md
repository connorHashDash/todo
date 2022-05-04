# Todooey

Todooey is a todo, task management application in which  descriptions, due dates,
and priority can be assigned to tasks in a simple, intuitive manner.

## How to use 

Simply fill in a name, and a due date for the todos and hit enter. From the todo "cards" you can
adjust the descriptions, priority and amend the date. 

The time until deadline is handily displayed on the header of the card for easy scanning.

## Under the hood

The mechanics behind how Todooey functions is simply a multi dimensional array, with [0, 0] on the
array equalling the title of the first project, then [0, 1] equalling the the first todo card. 

[4, 5] Would be project 4, todo 5 for example.

Everything that manages the array can be found in 'src/projectArray.js' folder.

## Things to add

I intend on coming back after completing the Odin Project and changing a few design decisions,
namely the traffic light colour layout in the 'Priority' tab. 


