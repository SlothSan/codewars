/*
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
*/

const sortPhotos = (photos) => {
  photos.sort((a, b) => {
    let [yearA, numA] = a
      .split(".")
      .map((part) => parseInt(part.match(/\d+/)[0]));
    let [yearB, numB] = b
      .split(".")
      .map((part) => parseInt(part.match(/\d+/)[0]));
    return yearA !== yearB ? yearA - yearB : numA - numB;
  });

  let recentPhotos = photos.slice(-5);
  let lastPhoto = recentPhotos[recentPhotos.length - 1];
  let [currentYear, lastNum] = lastPhoto
    .split(".")
    .map((part) => parseInt(part.match(/\d+/)[0]));

  recentPhotos.push(`${currentYear}.img${lastNum + 1}`);
  return recentPhotos;
};

console.log(
  sortPhotos(["2016.img1", "2016.img2", "2015.img3", "2016.img4", "2013.img5"])
);
