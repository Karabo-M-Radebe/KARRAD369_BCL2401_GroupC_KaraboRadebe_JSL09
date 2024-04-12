# Resolved promises quiz

1. What is a promise (in your own words)?
A delayed operation that will eventually finish running in the background but *promises* to return the result of the operation once done.

2. Which part of the code we have so far is a promise?
The fetch request from the API, that will eventually return the Unsplash images API object

3. What are the three states a promise can be in?
Pending
Resolved
Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
It means that the promise that was sent out has been fulfilled (came back posistive).

5. How do we tell the code to do something only AFTER a promise is resolved?
   By using the .then() method