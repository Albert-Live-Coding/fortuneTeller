const sentences = {
    0 : 'The early bird gets the worm, but the second mouse gets the cheese.',
    1 : 'Be on the alert to recognize your prime at whatever time of your life it may occur.',
    2 :  'Your road to glory will be rocky, but fulfilling.',
    3 :    'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
    4: `Patience is your alley at the moment. Don't worry!`,
    5: 'Nothing is impossible to a willing heart.',
    6: "Don't worry about money. The best things in life are free.",
    7: "Don't pursue happiness - create it.",
    8: 'Courage is not the absence of fear; it is the conquest of it.',
    9: 'Nothing is so much to be feared as fear.',
    10: 'All things are difficult before they are easy.',
    11: 'The real kindness comes from within you.',
    12: "A ship in harbor is safe, but that's not why ships are built.",
    13: "You don't need strength to let go of something. What you really need is understanding.",
    14: 'If you want the rainbow, you have to tolerate the rain.',
    15: 'Fear is interest paid on a debt you may not owe.',
    16: 'Hardly anyone knows how much is gained by ignoring the future.',
    17: 'Hardly anyone knows how much is gained by ignoring the future.',
    18: 'Hardly anyone knows how much is gained by ignoring the future.',
    19: 'He who throws mud loses ground.',
    20: 'Success lies in the hands of those who wants it.',
    21: 'To avoid criticism, do nothing, say nothing, be nothing.',
    22: 'One that would have the fruit must climb the tree.',
    23: 'It takes less time to do a thing right than it does to explain why you did it wrong.',
    24: 'Big journeys begin with a single step.',
    25: 'Of all our human resources, the most precious is the desire to improve.',
    26: 'Do the thing you fear and the death of fear is certain.',
    27: 'You never show your vulnerability, you are always self assured and confident.',
    28: 'People learn little from success, but much from failure.',
    29: 'Be not afraid of growing slowly, be afraid only of standing still.',
    30: 'We must always have old memories and young hopes.',
    31: "A person who won't read has no advantage over a person who can't read.",
    32: 'He who expects no gratitude shall never be disappointed.',
    33: 'I hear and I forget. I see and I remember. I do and I understand.',
    34: 'The best way to get rid of an enemy is to make a friend.',
    35: "It's amazing how much good you can do if you don't care who gets the credit.",
    36: 'Never forget that a half truth is a whole lie.',
    37: "Happiness isn't an outside job, it's an inside job.",
    38: 'If you do no run your subconscious mind yourself, someone else will.',
    39: 'Yes by calling full, you created emptiness.'
}

function randomSentence (){
    let r = Math.floor(Math.random() * 40)
    console.log(r)
    console.log(sentences[r])
}

randomSentence()