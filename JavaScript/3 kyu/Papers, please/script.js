/* 
Papers, Please is an indie video game where the player takes on a the role of a border crossing immigration officer in the fictional dystopian Eastern Bloc-like country of Arstotzka in the year 1982. As the officer, the player must review each immigrant and returning citizen's passports and other supporting paperwork against a list of ever-increasing rules using a number of tools and guides, allowing in only those with the proper paperwork, rejecting those without all proper forms, and at times detaining those with falsified information.

Objective
Your task is to create a constructor function (or class) and a set of instance methods to perform the tasks of the border checkpoint inspection officer. The methods you will need to create are as follow:

Method: receiveBulletin
Each morning you are issued an official bulletin from the Ministry of Admission. This bulletin will provide updates to regulations and procedures and the name of a wanted criminal.

The bulletin is provided in the form of a string. It may include one or more of the following:

Updates to the list of nations (comma-separated if more than one) whose citizens may enter (begins empty, before the first bulletin):
example 1: Allow citizens of Obristan
example 2: Deny citizens of Kolechia, Republia
Updates to required documents
example 1: Foreigners require access permit
example 2: Citizens of Arstotzka require ID card
example 3: Workers require work pass
Updates to required vaccinations
example 1: Citizens of Antegria, Republia, Obristan require polio vaccination
example 2: Entrants no longer require tetanus vaccination
Update to a currently wanted criminal
example 1: Wanted by the State: Hubert Popovic
Method: inspect
Each day, a number of entrants line up outside the checkpoint inspection booth to gain passage into Arstotzka. The inspect method will receive an object representing each entrant's set of identifying documents. This object will contain zero or more properties which represent separate documents. Each property will be a string value. These properties may include the following:

Applies to all entrants:
passport
certificate_of_vaccination
Applies only to citizens of Arstotzka
ID_card
Applies only to foreigners:
access_permit
work_pass
grant_of_asylum
diplomatic_authorization
The inspect method will return a result based on whether the entrant passes or fails inspection:

Conditions for passing inspection

All required documents are present
There is no conflicting information across the provided documents
All documents are current (ie. none have expired) -- a document is considered expired if the expiration date is November 22, 1982 or earlier
The entrant is not a wanted criminal
If a certificate_of_vaccination is required and provided, it must list the required vaccination
A "worker" is a foreigner entrant who has WORK listed as their purpose on their access permit
If entrant is a foreigner, a grant_of_asylum or diplomatic_authorization are acceptable in lieu of an access_permit. In the case where a diplomatic_authorization is used, it must include Arstotzka as one of the list of nations that can be accessed.
If the entrant passes inspection, the method should return one of the following string values:

If the entrant is a citizen of Arstotzka: Glory to Arstotzka.
If the entrant is a foreigner: Cause no trouble.
If the entrant fails the inspection due to expired or missing documents, or their certificate_of_vaccination does not include the necessary vaccinations, return Entry denied: with the reason for denial appended.

Example 1: Entry denied: passport expired.
Example 2: Entry denied: missing required vaccination.
Example 3: Entry denied: missing required access permit.
If the entrant fails the inspection due to mismatching information between documents (causing suspicion of forgery) or if they're a wanted criminal, return Detainment: with the reason for detainment appended.

If due to information mismatch, include the mismatched item. e.g.Detainment: ID number mismatch.
If the entrant is a wanted criminal: Detainment: Entrant is a wanted criminal.
NOTE: One wanted criminal will be specified in each daily bulletin, and must be detained when received for that day only. For example, if an entrant on Day 20 has the same name as a criminal declared on Day 10, they are not to be detained for being a criminal.
Also, if any of an entrant's identifying documents include the name of that day's wanted criminal (in case of mismatched names across multiple documents), they are assumed to be the wanted criminal.
In some cases, there may be multiple reasons for denying or detaining an entrant. For this exercise, you will only need to provide one reason.

If the entrant meets the criteria for both entry denial and detainment, priority goes to detaining.
For example, if they are missing a required document and are also a wanted criminal, then they should be detained instead of turned away.
In the case where the entrant has mismatching information and is a wanted criminal, detain for being a wanted criminal.
Test Example
const bulletin = `Entrants require passport
Allow citizens of Arstotzka, Obristan`;

const inspector = new Inspector();
inspector.receiveBulletin(bulletin);

const entrant1 = {
    passport:`ID#: GC07D-FU8AR
    NATION: Arstotzka
    NAME: Guyovich, Russian
    DOB: 1933.11.28
    SEX: M
    ISS: East Grestin
    EXP: 1983.07.10`
};

inspector.inspect(entrant1); //'Glory to Arstotzka.'
Additional Notes
Inputs will always be valid.
There are a total of 7 countries: Arstotzka, Antegria, Impor, Kolechia, Obristan, Republia, and United Federation.
Not every single possible case has been listed in this Description; use the test feedback to help you handle all cases.
The concept of this kata is derived from the video game of the same name, but it is not meant to be a direct representation of the game.
If you enjoyed this kata, be sure to check out my other katas.
*/

class Inspector {
  constructor() {
    this.values = {};
    this.commonRegexPatterns = {
      DURATION: "DURATION: (\\d+ [A-Z]+|[A-Z]+)",
      PURPOSE: "PURPOSE: ([A-Z]+)",
      WEIGHT: "WEIGHT: (\\d{2,3})",
      HEIGHT: "HEIGHT: (\\d{2,3})",
      nationality: "NATION: ([A-Z][a-z]+\\s*[A-Z]*[a-z]*)\\n+",
      ISS: "ISS: ([A-Z][a-z]+.?\\s*[A-Z]*[a-z]*)\\n+",
      DOB: "DOB: (\\d{4}\\.+\\d{2}\\.+\\d{2})",
      SEX: "SEX: (F|M)",
      "ID number": "ID#: (\\w*-*\\w*)",
      FIELD: "FIELD: ([A-Z][a-z]+\\s*[a-z]*)",
    };
    this.specialRegexPatterns = {
      name: "NAME: ([A-Z]\\w+),+\\s([A-Z][a-z]+)",
      EXP: "EXP: (\\d{4}\\.+\\d{2}\\.+\\d{2})",
    };
    this.signatures = [
      ...Object.keys(this.commonRegexPatterns),
      ...Object.keys(this.specialRegexPatterns),
      "DOCUMENT",
      "ACCESS",
      "VACCINES",
    ];

    // By country requirements
    this.foreignersRequirements = [];
    this.citizensRequirements = [];
    this.entrantsRequirements = [];
    this.allowedNations = [];

    // Other requirements
    this.requiredVaccinations = {};
    this.workersRequirements = [];
    this.wantedByTheState = "";

    // Other utility objects
    this.experienceDate = new Date(1982, 10, 22); // Months are 0-based in JavaScript Date
  }

  receiveBulletin(bulletin) {
    const req = bulletin.split("\n");

    req.forEach((s) => {
      if (s.match(/Allow citizens of.+/)) {
        const pattern =
          /(?:Allow citizens of)? ([A-Z][a-z]+\s*[A-Z]*[a-z]*),*/g;
        let match;
        while ((match = pattern.exec(s)) !== null) {
          this.allowedNations.push(match[1]);
        }
      } else if (s.match(/Deny citizens of.+/)) {
        const pattern =
          /(?: Deny citizens of)? ([A-Z][a-z]+\s*[A-Z]*[a-z]*),*/g;
        let match;
        while ((match = pattern.exec(s)) !== null) {
          const index = this.allowedNations.indexOf(match[1]);
          if (index !== -1) this.allowedNations.splice(index, 1);
        }
      } else if (s.match(/\D+ no longer require (\w+\s?\w*) vaccination/)) {
        const pattern = /\D+ no longer require (\w+\s?\w*) vaccination/;
        const match = pattern.exec(s);

        if (match) {
          const vaccination = match[1];
          const nations = [];

          const nationPattern =
            /(?:^Citizens of|(?!^)\G,) ([A-Z][a-z]+(?: [A-Z][a-z]+)*)(?=[a-zA-Z, ]*?)/g;
          let nationMatch;
          while ((nationMatch = nationPattern.exec(s)) !== null) {
            nations.push(nationMatch[1]);
          }

          if (nations.length > 0) {
            while (nations.length > 0) {
              const nation = nations.shift();
              if (this.requiredVaccinations[vaccination]) {
                const index =
                  this.requiredVaccinations[vaccination].indexOf(nation);
                if (index !== -1)
                  this.requiredVaccinations[vaccination].splice(index, 1);
              }
            }
          } else if (s.includes("Foreigners")) {
            if (this.requiredVaccinations[vaccination]) {
              const index =
                this.requiredVaccinations[vaccination].indexOf("FOREIGNERS");
              if (index !== -1)
                this.requiredVaccinations[vaccination].splice(index, 1);
            }
          } else {
            if (this.requiredVaccinations[vaccination]) {
              const index =
                this.requiredVaccinations[vaccination].indexOf("ENTRANTS");
              if (index !== -1)
                this.requiredVaccinations[vaccination].splice(index, 1);
            }
          }
        }
      } else if (s.match(/\D+ require (\w+\s?\w*) vaccination/)) {
        const pattern =
          /(?:^Citizens of|(?!^)\G,) ([A-Z][a-z]+(?: [A-Z][a-z]+)*)(?=[a-zA-Z, ]*?)/g;
        let match;
        const nations = [];
        while ((match = pattern.exec(s)) !== null) {
          nations.push(match[1]);
        }

        const vaccinationPattern = /\D+ require (\w+\s?\w*) vaccination/;
        const vaccinationMatch = vaccinationPattern.exec(s);

        if (vaccinationMatch) {
          const vaccination = vaccinationMatch[1];
          if (nations.length > 0) {
            this.requiredVaccinations[vaccination] = nations;
          } else if (s.includes("Foreigners")) {
            this.requiredVaccinations[vaccination] = ["FOREIGNERS"];
          } else {
            this.requiredVaccinations[vaccination] = ["ENTRANTS"];
          }
        }
      } else if (s.match(/Foreigners require \D+/)) {
        this.change(
          s,
          /(?:Foreigners require) (\D+)/,
          this.foreignersRequirements
        );
      } else if (s.match(/Workers require \D+/)) {
        this.change(s, /(?:Workers require) (\D+)/, this.workersRequirements);
      } else if (s.match(/Citizens of Arstotzka require \D+/)) {
        this.change(
          s,
          /(?:Citizens of Arstotzka require) (\D+)/,
          this.citizensRequirements
        );
      } else if (s.match(/Wanted by the State: \D+/)) {
        const pattern = /(?:Wanted by the State: )(\D+)/;
        const match = pattern.exec(s);
        if (match) this.wantedByTheState = match[1];
      } else if (s.match(/Entrants require \D+/)) {
        this.change(s, /(?:Entrants require) (\D+)/, this.entrantsRequirements);
      }
    });
  }

  change(word, regex, col) {
    const pattern = new RegExp(regex);
    const match = pattern.exec(word);
    if (match) col.push(match[1]);
  }

  check(v, type) {
    if (
      type === "DOCUMENT" ||
      type === "EXP" ||
      type === "ACCESS" ||
      type === "VACCINES"
    )
      return "";
    if (new Set(v).size > 1) return `Detainment: ${type} mismatch.`;
    return "";
  }

  vaccineCheck() {
    const vaccineSet = Object.keys(this.requiredVaccinations);

    for (const s of vaccineSet) {
      const nations = this.requiredVaccinations[s];
      for (const nation of nations) {
        if (
          (nation === "FOREIGNERS" &&
            this.values["nationality"][0] !== "Arstotzka") ||
          nation === "ENTRANTS" ||
          nation === this.values["nationality"][0]
        ) {
          if (!this.values["DOCUMENT"].includes("certificate of vaccination")) {
            return "Entry denied: missing required certificate of vaccination.";
          }
          if (this.values["VACCINES"][0].includes(s)) continue;
          return `Entry denied: missing required vaccination.`;
        }
      }
    }
    return "";
  }

  expChecking(date) {
    if (date === null) return "";

    const localDate = new Date(date.substring(0, 10).replace(/\./g, "-"));
    if (
      localDate > this.experienceDate ||
      localDate.toDateString() === this.experienceDate.toDateString()
    )
      return "";
    return `Entry denied: ${date.substring(11)} expired.`;
  }

  inspect(a) {
    this.resetValues();

    for (const ks in a) {
      this.setDocument(ks, a[ks]);
    }

    if (this.values["name"].includes(this.wantedByTheState))
      return "Detainment: Entrant is a wanted criminal.";
    for (let i = 0; i < this.signatures.length; i++) {
      const test = this.check(
        this.values[this.signatures[i]],
        this.signatures[i]
      );
      if (test) return test;
    }

    for (let i = 0; i < this.values["EXP"].length; i++) {
      const test = this.expChecking(this.values["EXP"][i]);
      if (test) return test;
    }

    for (const entrantsRequirement of this.entrantsRequirements) {
      if (!this.values["DOCUMENT"].includes(entrantsRequirement)) {
        return `Entry denied: missing required ${entrantsRequirement}.`;
      }
    }

    if (this.values["nationality"][0] !== "Arstotzka") {
      for (const foreignersRequirement of this.foreignersRequirements) {
        if (!this.values["DOCUMENT"].includes(foreignersRequirement)) {
          if (foreignersRequirement === "access permit") {
            if (this.values["DOCUMENT"].includes("diplomatic authorization")) {
              if (!this.values["ACCESS"][0].includes("Arstotzka")) {
                return "Entry denied: invalid diplomatic authorization.";
              } else {
                continue;
              }
            } else if (this.values["DOCUMENT"].includes("grant of asylum")) {
              continue;
            } else {
              return `Entry denied: missing required ${foreignersRequirement}.`;
            }
          }
          return `Entry denied: missing required ${foreignersRequirement}.`;
        }
      }
    }

    if (!this.allowedNations.includes(this.values["nationality"][0]))
      return "Entry denied: citizen of banned nation.";

    if (
      this.values["PURPOSE"].includes("WORK") &&
      this.workersRequirements.includes("work pass")
    ) {
      if (!this.values["DOCUMENT"].includes("work pass"))
        return "Entry denied: missing required work pass.";
    }

    const vaccine = this.vaccineCheck();
    if (vaccine) return vaccine;

    if (
      this.values["nationality"][0] === "Arstotzka" &&
      this.citizensRequirements.includes("ID card") &&
      !this.values["DOCUMENT"].includes("ID card")
    ) {
      return "Entry denied: missing required ID card.";
    }

    if (this.values["nationality"][0] === "Arstotzka") {
      return "Glory to Arstotzka.";
    }

    return "Cause no trouble.";
  }

  setDocument(docName, document) {
    const doc = docName.replace(/_/g, " ");
    if (!this.values["DOCUMENT"]) this.values["DOCUMENT"] = [];
    this.values["DOCUMENT"].push(doc);
    this.getName(document);
    this.getDate(doc, document);
    if (docName === "diplomatic_authorization") {
      if (!this.values["ACCESS"]) this.values["ACCESS"] = [];
      this.values["ACCESS"].push(document);
    }
    if (docName === "certificate_of_vaccination") {
      if (!this.values["VACCINES"]) this.values["VACCINES"] = [];
      this.values["VACCINES"].push(document);
    }
    for (const patternKey in this.commonRegexPatterns) {
      const pattern = new RegExp(this.commonRegexPatterns[patternKey]);
      const match = pattern.exec(document);
      if (match) {
        if (!this.values[patternKey]) this.values[patternKey] = [];
        this.values[patternKey].push(match[1]);
      }
    }
  }

  getDate(docName, document) {
    const pattern = new RegExp(this.specialRegexPatterns["EXP"]);
    const match = pattern.exec(document);
    if (match) {
      if (!this.values["EXP"]) this.values["EXP"] = [];
      this.values["EXP"].push(`${match[1]} ${docName}`);
    }
  }

  getName(name) {
    const pattern = new RegExp(this.specialRegexPatterns["name"]);
    const match = pattern.exec(name);
    if (match) {
      if (!this.values["name"]) this.values["name"] = [];
      this.values["name"].push(`${match[2]} ${match[1]}`);
    }
  }

  resetValues() {
    this.values = {};
    for (const signature of this.signatures) {
      this.values[signature] = [];
    }
  }
}
