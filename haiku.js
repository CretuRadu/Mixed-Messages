const lineOne = ['Delightful display', 'Fresh green buds appear', 'Lambs gambol in fields', 'Bluebells stand so proud', 'Much awaited sound', 'Parks and gardens burst', 'Beaches become full', 'Ripe golden harvest', 'Swallows congregate', 'Red and gold leaves fall,', 'Frosty webs sparkle', 'First few flakes of snow', 'Beautiful sunrise', "I was in fire,"]
const lineTwo = ['Snowdrops bow their pure white heads', 'Indicating spring will soon', 'Frisky with the joys of life', 'Beneath trees so sparsely dressed', 'Echoes heard amid dense trees', 'With sounds and vibrant colours', 'Of families having fun', 'Burning sun in azure skies', 'On telephone wires ready', 'Crunchy as cornflakes beneath', 'In the early morning sun', 'Dust gardens like icing on', 'On a warm summer morning.', 'The room was dark and somber.']
const lineThree = ["To the sun's glory.", 'Energize us all.', 'Bleating happily.', 'Fresh green leaves unfold.', 'Cuckoo has arrived.', 'Perfect harmony.', 'In sand and big waves.', 'Labours rewarded.', 'To migrate down south.', 'Feet on a crisp morn.', 'Brightly bejeweled.', 'A chocolate cake.', "I wait for day's start.", 'I sleep peacefully.']

const createHaiku = () => {
    console.log('Here comes a haiku!\n')
    firstLine = lineOne[Math.floor(Math.random() * lineOne.length)];
    secondLine = lineTwo[Math.floor(Math.random() * lineTwo.length)];
    thirdLine = lineThree[Math.floor(Math.random() * lineThree.length)];
    console.log(firstLine)
    console.log(secondLine)
    console.log(thirdLine)
}

createHaiku()
