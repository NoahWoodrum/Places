function Places() {
  this.places = {};
  this.currentId = 0;
}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

function Location(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let places = new Places();
let location = new Location("Florida", "DisneyWorld", "Fall", "Awesome!");
let location2 = new Location("Colorado", "Xgames", "Winter", "Radical");
places.addPlace(location);
places.addPlace(location2);
places.places;