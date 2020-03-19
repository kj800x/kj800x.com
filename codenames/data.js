ALL_WORDS = [
  "hood",
  "cross",
  "point",
  "bow",
  "pass",
  "plate",
  "cell",
  "theatre",
  "bell",
  "scale",
  "straw",
  "press",
  "force",
  "laser",
  "ambulance",
  "thumb",
  "bottle",
  "scorpion",
  "wave",
  "day",
  "revolution",
  "turkey",
  "fair",
  "washer",
  "mass"
];

const g = "green";
const b = "black";
const t = "tan";
const bl = "blue";
const r = "red";

function genRoles(templateArray) {
  const out = [];
  for ([num, val] of templateArray) {
    for (var i = 0; i < num; i++) {
      out.push({ ...val });
    }
  }
  return out;
}

function trueRole(roleA, roleB) {
  if (roleA === b || roleB === b) {
    return b;
  }
  if (roleA === g || roleB === g) {
    return g;
  }
  return roleA;
}

function buildRole(roleA, roleB) {
  return {
    roleA,
    roleB,
    trueRole: trueRole(roleA, roleB)
  };
}

const DUET_ROLES_TEMPLATE = genRoles([
  // Actually green
  [3, buildRole(g, g)],
  [5, buildRole(g, t)],
  [5, buildRole(t, g)],

  // Actually black
  [1, buildRole(b, b)],
  [1, buildRole(b, g)],
  [1, buildRole(g, b)],
  [1, buildRole(t, b)],
  [1, buildRole(b, t)],

  // Actually tan
  [7, buildRole(t, t)]
]);

const CLASSIC_BLUE_START_ROLES_TEMPLATE = genRoles([
  [8, buildRole(bl, bl)],
  [7, buildRole(r, r)],
  [1, buildRole(b, b)],
  [11, buildRole(t, t)]
]);

const CLASSIC_RED_START_ROLES_TEMPLATE = genRoles([
  [7, buildRole(bl, bl)],
  [8, buildRole(r, r)],
  [1, buildRole(b, b)],
  [11, buildRole(t, t)]
]);
