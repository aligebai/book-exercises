It will log 'hi' and 'hello'. A value's object can be
mutated, but strings and other primitives are not. So the
value 'a' of foo was mutated, and the value of qux was
reassigned but not mutated, which is the reason why it returned
the original value it had.