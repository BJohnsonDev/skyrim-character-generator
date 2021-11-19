const _genders = [// Name, Symbol
/*1*/["Male", "♂"],
/*2*/["Female", "♀"]];


const _races = [// Name, Symbol (human, elf, beast)
/*1*/["Altmer", "E"],
/*2*/["Argonian", "B"],
/*3*/["Bosmer", "E"],
/*4*/["Breton", "H"],
/*5*/["Dunmer", "E"],
/*6*/["Imperial", "H"],
/*7*/["Khajiit", "B"],
/*8*/["Nord", "H"],
/*9*/["Orc", "E"],
/*a*/["Redguard", "H"]];


const _virtues = [// Name, Description
/*1*/["Valor", "Seeks knowledge and self-improvement via skill books, spell tomes, and training.\nLooks at every battle as an opportunity to win the day."],
/*2*/["Charity", "Donates to beggars and temples\nDoes favors for friendly NPCs."],
/*3*/["Patience", "Attempts to solve problems diplomatically via speechcraft or calming spells."],
/*4*/["Temperance", "Does not use drugs (Skooma, Moon Sugar, Sleeping Tree Sap, etc.).\nRarely consumes potions.\nEats and drinks in moderation."],
/*5*/["Diligence", "Does not steal from or loot the dead.\nHas a non-violent, honorable occupation."],
/*6*/["Kindness", "Does not harm or steal from friends or neighbors.\nOnly harms 'evil' NPCs."]];


const _flaws = [// Name, Description
/*1*/["Pride", "Selects boastful speech options.\nObsessed with mastering a skill by any means necessary (crime, exploits, etc.)."],
/*2*/["Greed", "Hoards septims and one or two other miscellaneous items.\nHas a goal of a certain level of wealth."],
/*3*/["Lust", "Easily seduced by Daedra and other negative influences of the opposite sex."],
/*4*/["Gluttony", "Uses drugs, food, and alcohol excessively."],
/*5*/["Wrath", "Quick tempered and always resorts to violence.\nMay assault or kill NPCs for petty reasons."],
/*6*/["Envy", "Obsessed with gaining the same power or status of an existing NPC (guild master, thane, jarl, etc.)."]];


const _skills = [// Name, Type (mage, warrior, thief)
/*1*/["Alteration", "Mage"],
/*2*/["Conjuration", "Mage"],
/*3*/["Destruction", "Mage"],
/*4*/["Enchanting", "Mage"],
/*5*/["Illusion", "Mage"],
/*6*/["Restoration", "Mage"],
/*7*/["Archery", "Warrior"], // 7 (prevent  8)
/*8*/["Block", "Warrior"], // 8 (prevent  7)
/*9*/["Heavy Armor", "Warrior"], // 9 (prevent 14)
/*a*/["One-handed", "Warrior"], //10 (prevent 12)
/*b*/["Smithing", "Warrior"],
/*c*/["Two-handed", "Warrior"], //12 (prevent 10)
/*d*/["Alchemy", "Thief"],
/*e*/["Light Armor", "Thief"], //14 (prevent  9)
/*f*/["Lockpicking", "Thief"],
/*g*/["Pickpocket", "Thief"],
/*h*/["Sneak", "Thief"],
/*i*/["Speech", "Thief"]];


const _jobs = [// Masuline Text, Feminine Text, Description
/*1*/["Assassin", "Assassin", "Employed by either governments or guilds, assassins are murderers for hire."],
/*2*/["Alchemist", "Alchemist", "Mixing all manner of reagents, an alchemist is skilled in healing and harming with potions and poisons."],
/*3*/["Blacksmith", "Blacksmith", "Smelting and forging metals into useful items is hard work—hard as steel."],
/*4*/["Chef", "Chef", "As an expert in the culinary arts, seasonings and spices are your spells; pots and pans, your armory."],
/*5*/["Farmer", "Farmer"],
/*6*/["Fisherman", "Fisherman"],
/*7*/["Hunter", "Huntress"],
/*8*/["Merchant", "Merchant"],
/*9*/["Miner", "Miner"],
/*a*/["Soldier", "Soldier"],
/*b*/["Thief", "Thief"],
/*c*/["Noble", "Noble"],
/*d*/["Pirate", "Pirate"],
/*e*/["Bandit", "Bandit"],
/*f*/["Lumberjack", "Lumberjill"],
/*g*/["Priest", "Priestess"],
/*h*/["Innkeeper", "Barmaid"],
/*i*/["Scribe", "Scribe"],
/*j*/["Gambler", "Gambler"],
/*k*/["Jeweler", "Jeweler"],
/*l*/["Enchanter", "Enchantress"],
/*m*/["Tailor", "Tailor"],
/*n*/["Mercenary", "Mercenary"],
/*o*/["Scholar", "Scholar"],
/*p*/["Bard", "Bard"],
/*q*/["Physician", "Physician"],
/*r*/["Tinkerer", "Tinkerer"],
/*s*/["Soothsayer", "Soothsayer"],
/*t*/["Bounty Hunter", "Bounty Hunter"],
/*u*/["Courier", "Courier"],
/*v*/["Banker", "Banker"],
/*w*/["Brewmaster", "Brewmaster"],
/*x*/["Dockworker", "Dockworker"],
/*y*/["Escort", "Courtesan"],
/*z*/["Gladiator", "Gladiator"]];


const _fears = [
/*1*/["Bears"],
/*2*/["Daedra"],
/*3*/["Draugr"],
/*4*/["Falmer"],
/*5*/["Ghosts"],
/*6*/["Spiders"],
/*7*/["Spriggans"],
/*8*/["Trolls"],
/*9*/["Vampires"],
/*a*/["Wisp Mothers"],
/*b*/["Crypts"],
/*c*/["Magic"],
/*d*/["Water"],
/*e*/["Bandits"],
/*f*/["Storms"],
/*g*/["Dragons"],
/*h*/["Darkness"],
/*i*/["Horses"],
/*j*/["Insects"],
/*k*/["Daylight"],
/*l*/["Guards"]];


const _interests = [
/*1*/["Agriculture",
    "Learns from farmers and alchemists.\nCollects plants and fungi for alchemy.\nInterested in adding a garden to your home."],
/*2*/["Architecture",
    "Studies the structural design of buildings, forts, houses, keeps, and ruins.\nMay be obsessed with Dwarven or Nordic ruins."],
/*3*/["Beastiary",
    "Collects Herbane's Beastiary books, and studies the habits and dwellings of Skyrim's creatures."],
/*4*/["Economics",
    "Worships Zenithar.\nSeeks/makes haggling potions.\nImposes rules and restrictions on what can be traded with merchants."],
/*5*/["Culinary Arts",
    "Samples and rates the food and drink at various inns.\nInvents new recipes.\nPlans lavish meals that incorporate alchemy ingredients (venison smothered in troll fat, snowberry jam, etc.).\nWorships 'The Gourmet'."],
/*6*/["Fitness",
    "Starts each day with a morning sprint.\nWorks out at sawmills (lifting logs, chopping wood).\nSwims regularly."],
/*7*/["History",
    "Collects books on history, and takes on quests pertaining to historical events."],
/*8*/["Riding",
    "Takes horseback rides at sunrise or sunset when relaxing in a town or village."],
/*9*/["Climbing",
    "Obsessed with climbing Skyrim's highest mountains.\nWould always rather repel than fast-travel."],
/*a*/["Politics",
    "Interested in peoples' opinions about the Empire, the civil war, and political figures in Skyrim."],
/*b*/["Theology",
    "Studies Aedric and Daedric religions.\nInvestigates devine locations and phenomena."]];


const _homes = [
/*1*/["Riverwood", "http://elderscrolls.wikia.com/wiki/Riverwood_(Skyrim)", "Riverwood"],
/*2*/["Falkreath", "http://elderscrolls.wikia.com/wiki/Falkreath_(Skyrim)", "FalkreathExterior01"],
/*3*/["Ivarstead", "http://elderscrolls.wikia.com/wiki/Ivarstead_(Skyrim)", "IvarsteadExterior01"],
/*4*/["Karthwasten", "http://elderscrolls.wikia.com/wiki/Karthwasten", "KarthwastenExterior01"],
/*5*/["Kynesgrove", "http://elderscrolls.wikia.com/wiki/Kynesgrove_(Skyrim)", "Kynesgrove"],
/*6*/["Morthal", "http://elderscrolls.wikia.com/wiki/Morthal", "MorthalExterior01"],
/*7*/["Markarth", "http://elderscrolls.wikia.com/wiki/Markarth", "MarkarthExterior01"],
/*8*/["Riften", "http://elderscrolls.wikia.com/wiki/Riften_(Skyrim)", "RiftenOrigin"],
/*9*/["Solitude", "http://elderscrolls.wikia.com/wiki/Solitude_(Skyrim)", "SolitudeOrigin"],
/*a*/["Winterhold", "http://elderscrolls.wikia.com/wiki/Winterhold_(Skyrim)", "WinterholdExterior01"],
/*b*/["Windhelm", "http://elderscrolls.wikia.com/wiki/Windhelm_(Skyrim)", "Windhelm"],
/*c*/["Darkwater Crossing", "http://elderscrolls.wikia.com/wiki/Darkwater_Crossing_(Skyrim)", "DarkwaterCrossingExterior01"],
/*d*/["Rorikstead", "http://elderscrolls.wikia.com/wiki/Rorikstead", "RoriksteadEdge"],
/*e*/["Shor's Stone", "http://elderscrolls.wikia.com/wiki/Shor%27s_Stone_(Skyrim)", "ShorsStoneExterior01"],
/*f*/["Stonehills", "http://elderscrolls.wikia.com/wiki/Stonehills_(Skyrim)", "StonehillsExterior01"],
/*g*/["Dragon Bridge", "http://elderscrolls.wikia.com/wiki/Dragon_Bridge_(Skyrim)", "DragonBridgeExterior01"],
/*h*/["Helgen", "http://elderscrolls.wikia.com/wiki/Helgen", "HelgenExterior"],
/*i*/["Whiterun", "http://elderscrolls.wikia.com/wiki/Whiterun_(Skyrim)", "Whiterun"],
/*j*/["Dawnstar", "http://elderscrolls.wikia.com/wiki/Dawnstar_(Skyrim)", "DawnstarExterior01"]];


const rand = (n, except) => {
  let output = Math.ceil(Math.random() * n);
  if (except != undefined && except.includes(output)) {
    do { output = Math.ceil(Math.random() * n); } while (except.includes(output));
  } else {
    return Math.ceil(Math.random() * n);
  }
};

Number.prototype.to36 = function () { return this.valueOf().toString(36); };

String.prototype.from36 = function () { return parseInt(this.valueOf(), 36); };

String.prototype.itemFrom36 = function (array) {
  let index = parseInt(this.valueOf(), 36) - 1;
  return index > 0 && (array || []).length >= index + 1 ? array[index] : "[?]";
};

Array.prototype.getItem = function (item) {
  let a = this.valueOf();
  let index = item - 1;
  return index >= 0 && (a || []).length > index ? a[index] : "[?]";
};

Array.prototype.shuffle = function () {
  let a = this.valueOf();
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

const getQueryParam = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

async function randomCharacter() {
  let c = {
    seed: "0",
    name: "",
    gender: rand(_genders.length),
    race: rand(_races.length),
    virtue: rand(_virtues.length),
    flaw: rand(_flaws.length),
    fear: rand(_fears.length),
    interest: rand(_interests.length),
    job: rand(_jobs.length),
    home: rand(_homes.length),
    skill1: 0,
    skill2: 0,
    skill3: 0
  };

  let allSkills = [];
  for (let i = 0; i < _skills.length; i++) allSkills.push(i + 1);
  allSkills.shuffle();
  let skills = allSkills.slice(0, 3);
  do {
    if (
      skills.includes(7) && skills.includes(8) || // prevent Archery & Block
      skills.includes(9) && skills.includes(14) || // prevent Heavy Armor & Light Armor
      skills.includes(10) && skills.includes(12) || // prevent One-handed & Two-handed
      c.fear.to36() == "c" && (skills[0] < 7 || skills[1] < 7 || skills[2] < 7) // prevent magic skills with magic fear
    ) {
      allSkills.shuffle();
      skills = allSkills.slice(0, 3);
    } else { break; }
  } while (true);
  c.skill1 = skills[0];
  c.skill2 = skills[1];
  c.skill3 = skills[2];
  c.seed =
    c.gender.to36() +
    c.race.to36() +
    c.virtue.to36() +
    c.flaw.to36() +
    c.fear.to36() +
    c.interest.to36() +
    c.job.to36() +
    c.home.to36() +
    c.skill1.to36() +
    c.skill2.to36() +
    c.skill3.to36() +
    "";
  c.name = await generateName(_genders.getItem(c.gender)[0].toLowerCase(), _races.getItem(c.race)[0].toLowerCase(), c.seed.from36());
  return c;
};

async function loadCharacter(seed) {
  let c = {
    seed: seed,
    name: "",
    gender: parseInt(seed.charAt(0), 36),
    race: parseInt(seed.charAt(1), 36),
    virtue: parseInt(seed.charAt(2), 36),
    flaw: parseInt(seed.charAt(3), 36),
    fear: parseInt(seed.charAt(4), 36),
    interest: parseInt(seed.charAt(5), 36),
    job: parseInt(seed.charAt(6), 36),
    home: parseInt(seed.charAt(7), 36),
    skill1: parseInt(seed.charAt(8), 36),
    skill2: parseInt(seed.charAt(9), 36),
    skill3: parseInt(seed.charAt(10), 36)
  };

  c.name = await generateName(_genders.getItem(c.gender)[0].toLowerCase(), _races.getItem(c.race)[0].toLowerCase(), c.seed.from36());
  return c;
};

async function generateName(gender, race, seed) {
  //	let seed = (((g+1)*789)*(r*321))^(1234321);
  var name = "Nameless";

  try {
    await fetch("./names/" + race + ".json")
      .then(response => response.json())
      .then(nameList => {
        switch (race) {
          case 'khajiit':
            name = getKhajiitName(nameList, gender);
            break;
          case 'argonian':
            name = getArgonianName(nameList, gender);
            break;
          default:
            name = getRandomName(gender == 'male' ? nameList.male : nameList.female);
            break;
        }

        if (nameList.hasSurname) {
          let surname = '';
          switch (race) {
            // Orc family name is based on the parent's name & gender based
            case 'orc':
              surname = getOrcSurname(nameList, gender);
              break;
            // Redguards occasionally have family names based on relatives or birthplace
            case 'redguard':
              // 10% chance for redguard characters to have a surname
              if ((Math.random() * 1) <= 0.1) {
                surname = getRedguardSurname(nameList);
              }
              break;
            case 'nord':
              surname = getNordSurname(nameList);
              break;
            default:
              surname = getRandomName(nameList.surnames);
              break;
          }

          if (surname.length > 0) {
            name = name + " " + surname;
          }
        }
      });
  } catch (error) {
    console.log(error);
  } finally {
    return name;
  }
};

const getRandomName = names => {
  const random = Math.floor(Math.random() * names.length);
  return names[random];
};

// Returns an Orcish family name
const getOrcSurname = (names, gender) => {
  const prefix = (gender == 'male' ? "gro-" : "gra-");
  return `${prefix}${getRandomName(gender == 'male' ? names.male : names.female)}`;
};

// Returns a Redguard family nmame
const getRedguardSurname = names => {
  const prefixes = ["at", "af", "al"];
  const random = Math.floor(Math.random() * prefixes.length);
  // 2 equals name based on birthplace
  const suffix = getRandomName(random === 2 ? names.birthplaces : names.male.concat(names.female));
  return `${prefixes[random]}-${suffix}`;
};

// Returns a Nord title or clan name. Could use some work.
const getNordSurname = list => {
  if (Math.round(Math.random() * 1)) {
    return getRandomName(list.titles);
  } else {
    return `${getRandomName(list.clanPrefix)}-${getRandomName(list.clanSuffix)}`;
  }
};

// Returns a Khajiit name with added prefix/suffix. Might want to make the prefix/suffix generation input based rather than rng based in the future.
const getKhajiitName = (list, gender) => {
  // Males are more likely to have an honorific title according to UESP
  const chanceTitle = (gender === 'male' ? 0.5 : 0.15);
  // Prefixes are more common than suffixes
  const prefixBias = 0.75;
  const titlesM = [
    { prefix: 'Dar', suffix: 'dar' },
    { prefix: 'Do', suffix: 'do' },
    { prefix: 'Dro', suffix: 'dro' },
    { prefix: 'J', suffix: 'ja' },
    { prefix: 'Jo', suffix: 'jo' },
    { prefix: 'M', suffix: 'ma' },
    { prefix: 'R', suffix: 'ra' },
    { prefix: 'Ri', suffix: 'ri' },
    { prefix: 'S', suffix: 'sa' }
  ]
  const titlesF = [
    { prefix: 'Daro', suffix: 'daro' },
    { prefix: 'Do', suffix: 'do' },
    { prefix: 'Dra', suffix: 'dra' },
    { prefix: 'L', suffix: 'la' },
    { prefix: 'Ko', suffix: 'ko' },
    { prefix: 'M', suffix: 'ma' },
    { prefix: 'R', suffix: 'ra' },
    { prefix: 'Ri', suffix: 'ri' },
    { prefix: 'S', suffix: 'sa' }
  ]
  let name = getRandomName(gender === 'male' ? list.male : list.female);
  if ((Math.random() * 1) <= chanceTitle) {
    const isPrefix = ((Math.random() * 1) <= prefixBias ? true : false);
    if (isPrefix) {
      const prefix = (gender === 'male' ? getRandomName(titlesM).prefix : getRandomName(titlesF).prefix);
      name = `${prefix}'${name.toLowerCase()}`;
    } else {
      const suffix = (gender === 'male' ? getRandomName(titlesM).suffix : getRandomName(titlesF).suffix);
      name = `${name}-${suffix}`;
    }
  }
  return name;
};

// Returns an Argonian name. 50% chance the name is hyphenated.
const getArgonianName = (list, gender) => {
  const isHyphenated = (Math.round(Math.random() * 1) ? true : false);
  let name = getRandomName(gender === 'male' ? list.male : list.female);
  if (isHyphenated || name.length <= 3) name += `-${getRandomName(gender === 'male' ? list.male : list.female)}`
  return name;
};

class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
        React.createElement(Character, null)));
  }
}


class Character extends React.Component {
  constructor(props) {
    super(props);
    let seed = getQueryParam("seed");
    this.state = {seed: seed}; //(seed || "") == "" ? randomCharacter() : loadCharacter(seed);
    this.handleReroll = this.handleReroll.bind(this);
  }
  handleReroll(e) {
    randomCharacter()
    .then(newChar => {
      this.setState(newChar);
    });
  }
  componentDidMount() {
    randomCharacter()
    .then(newChar => {
      this.setState(newChar);
    });
  }
  render() {
    let nameText = this.state.name;
    document.title = "Skyrim Character Generator – " + this.state.name;
    let genderText = _genders.getItem(this.state.gender)[0];
    let genderSymbol = _genders.getItem(this.state.gender)[1];
    let raceText = _races.getItem(this.state.race)[0];
    let raceType = _races.getItem(this.state.race)[1];
    let virtueText = _virtues.getItem(this.state.virtue)[0];
    let virtueDesc = _virtues.getItem(this.state.virtue)[1];
    let flawText = _flaws.getItem(this.state.flaw)[0];
    let flawDesc = _flaws.getItem(this.state.flaw)[1];
    let fearOverview =
      "Our biggest fears can drive us to the brink of madness.\n" +
      "They can also show us doors (escape routes) to people, places,\n" +
      "events, and opportunities we never would have seen otherwise. Use\n" +
      "your character's fears to gain a new outlook on life in the north.";
    let fearText = _fears.getItem(this.state.fear)[0];
    let fearDesc = _fears.getItem(this.state.interest)[1];
    let interestOverview =
      "Interests will help to diversify your character by helping you add\n" +
      "additional hobbies or fascinations to your them that shouldn't have\n" +
      "a direct mechanical effect on the game. They're a bonus; not a buden.";
    let interestText = _interests.getItem(this.state.interest)[0];
    let interestDesc = _interests.getItem(this.state.interest)[1];
    let jobOverview =
      "This is the occupation of the character leading\n" +
      "into your play-through. The choice to continue this\n" +
      "line of work is completely yours, but be sure to use\n" +
      "it in building your character's backstory.";
    let jobText = _jobs.getItem(this.state.job)[genderText.charAt(0) == "M" ? 0 : 1];
    let jobDesc = _jobs.getItem(this.state.job)[2];
    let homeOverview =
      "Your home will either be the location your character\n" +
      "was from before the events that lead to your play-through,\n" +
      "or the location that you will settle into throughout the\n" +
      "course of the game. Starting here is a really good idea.\n" +
      "The cell's location code is provided for quick console entry.";
    let homeText = _homes.getItem(this.state.home)[0];
    let homeLink = _homes.getItem(this.state.home)[1];
    let homeCOC = _homes.getItem(this.state.home)[2];
    let skillsOverview =
      "Focus on these skills if given an option";
    let skill1Text = _skills.getItem(this.state.skill1)[0];
    let skill1Type = _skills.getItem(this.state.skill1)[1];
    let skill2Text = _skills.getItem(this.state.skill2)[0];
    let skill2Type = _skills.getItem(this.state.skill2)[1];
    let skill3Text = _skills.getItem(this.state.skill3)[0];
    let skill3Type = _skills.getItem(this.state.skill3)[1];
    return (
      React.createElement("div", { className: "character" },
        React.createElement("button", { className: "reroll", onClick: this.handleReroll.bind(this) }, "\u21BB Reroll Character"),
        React.createElement("br", null),
        React.createElement("table", null,
          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Seed"), React.createElement("td", null, React.createElement("a", { href: "https://BJohnsonDev.github.io/skyrim-character-generator?seed=" + this.state.seed, title: "Right-click and copy this link to share this character." }, this.state.seed))),

          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Name"), React.createElement("td", null, nameText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Gender"), React.createElement("td", null,
              React.createElement("div", { className: "symbol gender" + genderText.charAt(0) },
                React.createElement("span", null, genderSymbol)), "\xA0", genderText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Race"), React.createElement("td", null,
              React.createElement("div", { className: "symbol race" + raceType },
                React.createElement("span", null, raceType.charAt(0))), "\xA0", raceText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Virtue"),
            React.createElement("td", { title: virtueDesc },
              React.createElement(InfoIcon, null), "\xA0", virtueText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label" }, "Flaw"),
            React.createElement("td", { title: flawDesc },
              React.createElement(InfoIcon, null), "\xA0", flawText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label", title: fearOverview }, "Fear"),
            React.createElement("td", { title: fearDesc },
              React.createElement(InfoIcon, null), "\xA0", fearText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label", title: interestOverview }, "Interest"),
            React.createElement("td", { title: interestDesc },
              React.createElement(InfoIcon, null), "\xA0", interestText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label", title: jobOverview }, "Job"),
            React.createElement("td", { title: jobDesc },
              React.createElement(InfoIcon, null), "\xA0", jobText)),


          React.createElement("tr", null,
            React.createElement("td", { className: "label", title: homeOverview }, "Home"),
            React.createElement("td", null,
              React.createElement("a", { href: homeLink, target: "_blank", style: { marginRight: '5px', whiteSpace: 'nowrap' } }, homeText),
              React.createElement("br", null),
              React.createElement("code", null, "coc\xA0", homeCOC))),


          React.createElement("tr", null,
            React.createElement("td", { className: "label", title: skillsOverview }, "Skills"),
            React.createElement("td", null,
              React.createElement(SkillText, { type: skill1Type, text: skill1Text }), React.createElement("br", null),
              React.createElement(SkillText, { type: skill2Type, text: skill2Text }), React.createElement("br", null),
              React.createElement(SkillText, { type: skill3Type, text: skill3Text }))))));
  }
}


function InfoIcon() { return React.createElement("div", { className: "symbol info" }, React.createElement("span", null, "\u2139")); }

function SkillText(props) { return React.createElement("span", { className: "skill" + props.type.charAt(0) }, props.text); }

class Skill extends React.Component {
  render() {
    return (
      React.createElement("div", null));
  }
}




ReactDOM.render(React.createElement(App, null), document.getElementById('root'));