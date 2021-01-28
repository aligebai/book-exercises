it will log [1, 4, 3] because the modification on
line 3 does not occur on array1, it occurs on the array itself
that has been saved. So when we modify it, we are modifying the
original array, and when we call it, even if we're calling it
from a different array than the one we used to moodify it,
it will still return the modified array.