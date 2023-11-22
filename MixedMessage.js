// Array
const crush = ['Lucia', 'Victoria', 'Andrea', 'Mathilda', 'Ame', 'Ariannita', 'Dasha'];
const confession = ["I've been wanting to share something with you that has been on my mind a lot lately. I've realized that my feelings for you go beyond friendship, and I can't ignore them any longer.",
"There's something I need to get off my chest. I've developed deep feelings for you, and I can't help but think about you all the time. It's important to me that you know how much you mean to me.",
"I've been hesitant to say this, but I can't keep it to myself any longer. I've come to realize that my feelings for you are more than just friendly. I wanted to be honest with you about it because you deserve to know.",
"I've been grappling with my emotions, and I think it's time I share them with you. I've developed feelings for you that go beyond friendship, and I wanted to be open and honest about it. I value our connection, and I believe honesty is crucial in any relationship."]
 
// Select a random element from each array
 const randomElement = arr => {
    return Math.floor(Math.random()*arr.length)
 }

 // Generate a mixed message
const mixedMessage = () => {
   const randomCrush = crush[randomElement(crush)];
   const randomConfession = confession[randomElement(confession)];

   return `${randomCrush}, ${randomConfession} Will you be my girlfriend?`
}
console.log(mixedMessage());