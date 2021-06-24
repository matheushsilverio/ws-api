const tableName = "Maps";

const mapsBase = [
  {
    name: "Bind",
    img_gallery:
      "https://i.ibb.co/pyJZchh/Valorant-Wallpaper-Bind-galleryimage.jpg",
  },
  {
    name: "Split",
    img_gallery:
      "https://i.ibb.co/f9bSkd0/Valorant-Wallpaper-Split-Map-galleryimage.jpg",
  },
  {
    name: "Ascent",
    img_gallery:
      "https://i.ibb.co/Fzxhgxv/Valorant-Wallpaper-Ascent-galleryimage.jpg",
  },
  {
    name: "Haven",
    img_gallery:
      "https://i.ibb.co/7RVccML/Valorant-Wallpaper-Haven-galleryimage.jpg",
  },
  {
    name: "Icebox",
    img_gallery:
      "https://i.ibb.co/k9CJHKS/Valorant-Wallpaper-Icebox-galleryimage.jpg",
  },
  { name: "Breeze", img_gallery: "" },
];

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert(mapsBase);
    });
};
