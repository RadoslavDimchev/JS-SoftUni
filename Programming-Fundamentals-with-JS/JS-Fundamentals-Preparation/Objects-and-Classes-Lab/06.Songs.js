function songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = array.shift();
    let desiredType = array.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = array[i];
        let currentArray = currentInput.split('_');
        let currentSong = new Song(currentArray[0], currentArray[1], currentArray[2]);
        songs.push(currentSong);
    }

    if (desiredType === 'all') {
        songs.forEach(s => console.log(s.name));
    } else {
        songs.
            filter(s => s.typeList === desiredType).
            forEach(s => console.log(s.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);