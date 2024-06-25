const obj = {
    name: "My favorite playlist",
    rating: 3,
    tracks:["Track-1", "Track-2", "Track-3", "Track-4",  "Track-4"],
    trackCount: 3,
    addTrack(newtrack){
        this.tracks.push(newtrack);
    },
    updateTrackCount(){
        this.trackCount = this.tracks.length;
    },
    getRating(){
        return this.rating; 
    },
    updateRating(newRating){
        this.rating = newRating;
    }
};

obj.artist = "Serduchka";
obj.licence = true;
obj.licence = false;
obj.addTrack("Track-5");



obj.updateRating(100);
console.log(obj.getRating());

const new_obj = {
    name: "My favorite playlist",
    rating: 3,
    tracks:["Track-1", "Track-2", "Track-3"],
    trackCount: 3,
};




// Object.keys;
// Object.values;

const keys = Object.keys(new_obj);
const values = Object.values(new_obj);
console.log(keys);
console.log(values);