const tableName = "agents";

const agentsBase = [
  {
    name: "Jett",
    img_char: "https://i.ibb.co/HxJrzC8/V-AGENTS-587x900-Jett.png",
  },
  {
    name: "Kill Joy",
    img_char: "https://i.ibb.co/fxwQc2t/V-AGENTS-587x900-Kill-Joy.png",
  },
  {
    name: "Omen",
    img_char: "https://i.ibb.co/cNkzcfn/V-AGENTS-587x900-Omen.png",
  },
  {
    name: "Phoenix",
    img_char: "https://i.ibb.co/6PGdFKR/V-AGENTS-587x900-Phx.png",
  },
  {
    name: "Reyna",
    img_char: "https://i.ibb.co/Q8cKwxy/V-AGENTS-587x900-Reyna.png",
  },
  {
    name: "Sage",
    img_char: "https://i.ibb.co/q0hFwsk/V-AGENTS-587x900-sage.png",
  },
  {
    name: "Viper",
    img_char: "https://i.ibb.co/MgLSb9Y/V-AGENTS-587x900-Viper.png",
  },
  {
    name: "Yoru",
    img_char: "https://i.ibb.co/6sMFkzS/V-AGENTS-587x900-yoru.png",
  },
  {
    name: "Raze",
    img_char: "https://i.ibb.co/zFyWwgf/V-AGENTS-587x900-ALL-Raze-2.png",
  },
  {
    name: "Skye",
    img_char: "https://i.ibb.co/Wcdp2nR/V-AGENTS-587x900-ALL-Skye.png",
  },
  {
    name: "Sova",
    img_char: "https://i.ibb.co/mvsysxW/V-AGENTS-587x900-ALL-Sova-2.png",
  },
  {
    name: "Breach",
    img_char: "https://i.ibb.co/yFDN5Nf/V-AGENTS-587x900-Breach.png",
  },
  {
    name: "Brimstone",
    img_char: "https://i.ibb.co/n8jvBFv/V-AGENTS-587x900-Brimstone.png",
  },
  { name: "Astra", img_char: "" },
  {
    name: "Cypher",
    img_char: "https://i.ibb.co/F37wmDH/V-AGENTS-587x900-Cypher.png",
  },
];

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(() => knex(tableName).insert(agentsBase));
};
