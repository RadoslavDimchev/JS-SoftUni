function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = input.shift();
    let typeList = input.pop();

    for (let songInfo of input) {
        let [type, name, time] = songInfo.split('_');
        let song = new Song(type, name, time);

        if (typeList === song.type) {
            console.log(song.name);
        } else if (typeList === 'all') {
            console.log(song.name);
        }
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