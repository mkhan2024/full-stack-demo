# progress page - apurba

I am working on the progress section of group 3.

scott mentioned that user progress will be shown as an individual exercise review/detail. This means this page won't be the workout list. The workout section will be ravi's. The exercises list will be jashan's. My portion will be when an exercise is selected and how the user performed on that exercise over time.

## what i'm tracking

For one exercise:

- date
- weight
- reps
- sets
- notes if desired by the user

I also need to show something about their best weight and last time they did it. Also maybe the 1rm estimate if we have time (weight * (1 + reps/30)) i don't really understand this yet however i saw this note from scott.

## pages/api later

Page: /progress
Select an exercise then see history.

Api backend (same pattern as class):

Get logs for one exercise
POST new log
Delete a log

Route -> controller -> service -> prisma

## depends on

Jashan needs to create exercises first or the dropdown will be empty. I can still build the table for logs with a fake id for now.

Don't touch workouts.html etc. Whatever ravi is doing. Don't mess with clerk unless all agree.