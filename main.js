var friends = ['Dave', 'Abraham', 'Joey', 'Emma', 'Aric']


for (var i = 0; i < friends.length; i++){
    var songNumber = 99
    console.log(friends[i] + ':');
    while (songNumber > 1){
        if (songNumber > 2) {
        console.log(songNumber + ' lines of code in the file, ' + songNumber + 'lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (songNumber - 1) + ' lines of code in the file');
    } else if (songNumber === 2) {
        console.log(songNumber + ' lines of code in the file, ' + songNumber + 'lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (songNumber - 1) + ' line of code in the file');
    } else {
        
    }
    songNumber--;
    }
    console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
}
