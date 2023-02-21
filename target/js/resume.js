if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'resume'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'resume'.");
}
var resume = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var resume;
  function Resume(academics, awards, header, history, lastModified, misc, objective, skillarea) {
    if (academics === void 0)
      academics = null;
    if (awards === void 0)
      awards = null;
    if (history === void 0)
      history = [];
    if (lastModified === void 0)
      lastModified = null;
    if (misc === void 0)
      misc = [];
    if (objective === void 0)
      objective = [];
    if (skillarea === void 0)
      skillarea = [];
    this.academics = academics;
    this.awards = awards;
    this.header = header;
    this.history = history;
    this.lastModified = lastModified;
    this.misc = misc;
    this.objective = objective;
    this.skillarea = skillarea;
  }
  function Resume$Academics(degrees) {
    this.degrees = degrees;
  }
  function Resume$Academics$Degrees(degree) {
    this.degree = degree;
  }
  function Resume$Academics$Degrees$Degree(date, gpa, institution, level, location, major) {
    if (gpa === void 0)
      gpa = new Resume$Academics$Degrees$Degree$Gpa();
    if (institution === void 0)
      institution = 'The Ohio State University';
    if (level === void 0)
      level = 'B.S.';
    if (location === void 0)
      location = new Location();
    if (major === void 0)
      major = 'Computer Science and Engineering';
    this.date = date;
    this.gpa = gpa;
    this.institution = institution;
    this.level = level;
    this.location = location;
    this.major = major;
  }
  function Resume$Academics$Degrees$Degree$Gpa(note, possible, score) {
    if (note === void 0)
      note = new Resume$Academics$Degrees$Degree$Gpa$Note();
    if (possible === void 0)
      possible = '4.00';
    if (score === void 0)
      score = '3.38';
    this.note = note;
    this.possible = possible;
    this.score = score;
  }
  function Resume$Academics$Degrees$Degree$Gpa$Note(para) {
    if (para === void 0)
      para = 'Major GPA: 3.61 out of 4.00.';
    this.para = para;
  }
  Resume$Academics$Degrees$Degree$Gpa$Note.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Note',
    interfaces: []
  };
  Resume$Academics$Degrees$Degree$Gpa$Note.prototype.component1 = function () {
    return this.para;
  };
  Resume$Academics$Degrees$Degree$Gpa$Note.prototype.copy_61zpoe$ = function (para) {
    return new Resume$Academics$Degrees$Degree$Gpa$Note(para === void 0 ? this.para : para);
  };
  Resume$Academics$Degrees$Degree$Gpa$Note.prototype.toString = function () {
    return 'Note(para=' + Kotlin.toString(this.para) + ')';
  };
  Resume$Academics$Degrees$Degree$Gpa$Note.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.para) | 0;
    return result;
  };
  Resume$Academics$Degrees$Degree$Gpa$Note.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.para, other.para))));
  };
  Resume$Academics$Degrees$Degree$Gpa.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gpa',
    interfaces: []
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.component1 = function () {
    return this.note;
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.component2 = function () {
    return this.possible;
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.component3 = function () {
    return this.score;
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.copy_7t83x8$ = function (note, possible, score) {
    return new Resume$Academics$Degrees$Degree$Gpa(note === void 0 ? this.note : note, possible === void 0 ? this.possible : possible, score === void 0 ? this.score : score);
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.toString = function () {
    return 'Gpa(note=' + Kotlin.toString(this.note) + (', possible=' + Kotlin.toString(this.possible)) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.note) | 0;
    result = result * 31 + Kotlin.hashCode(this.possible) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  Resume$Academics$Degrees$Degree$Gpa.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.note, other.note) && Kotlin.equals(this.possible, other.possible) && Kotlin.equals(this.score, other.score)))));
  };
  Resume$Academics$Degrees$Degree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Degree',
    interfaces: []
  };
  Resume$Academics$Degrees$Degree.prototype.component1 = function () {
    return this.date;
  };
  Resume$Academics$Degrees$Degree.prototype.component2 = function () {
    return this.gpa;
  };
  Resume$Academics$Degrees$Degree.prototype.component3 = function () {
    return this.institution;
  };
  Resume$Academics$Degrees$Degree.prototype.component4 = function () {
    return this.level;
  };
  Resume$Academics$Degrees$Degree.prototype.component5 = function () {
    return this.location;
  };
  Resume$Academics$Degrees$Degree.prototype.component6 = function () {
    return this.major;
  };
  Resume$Academics$Degrees$Degree.prototype.copy_bzfdhp$ = function (date, gpa, institution, level, location, major) {
    return new Resume$Academics$Degrees$Degree(date === void 0 ? this.date : date, gpa === void 0 ? this.gpa : gpa, institution === void 0 ? this.institution : institution, level === void 0 ? this.level : level, location === void 0 ? this.location : location, major === void 0 ? this.major : major);
  };
  Resume$Academics$Degrees$Degree.prototype.toString = function () {
    return 'Degree(date=' + Kotlin.toString(this.date) + (', gpa=' + Kotlin.toString(this.gpa)) + (', institution=' + Kotlin.toString(this.institution)) + (', level=' + Kotlin.toString(this.level)) + (', location=' + Kotlin.toString(this.location)) + (', major=' + Kotlin.toString(this.major)) + ')';
  };
  Resume$Academics$Degrees$Degree.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.gpa) | 0;
    result = result * 31 + Kotlin.hashCode(this.institution) | 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.major) | 0;
    return result;
  };
  Resume$Academics$Degrees$Degree.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.gpa, other.gpa) && Kotlin.equals(this.institution, other.institution) && Kotlin.equals(this.level, other.level) && Kotlin.equals(this.location, other.location) && Kotlin.equals(this.major, other.major)))));
  };
  Resume$Academics$Degrees.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Degrees',
    interfaces: []
  };
  Resume$Academics$Degrees.prototype.component1 = function () {
    return this.degree;
  };
  Resume$Academics$Degrees.prototype.copy_loc4za$ = function (degree) {
    return new Resume$Academics$Degrees(degree === void 0 ? this.degree : degree);
  };
  Resume$Academics$Degrees.prototype.toString = function () {
    return 'Degrees(degree=' + Kotlin.toString(this.degree) + ')';
  };
  Resume$Academics$Degrees.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.degree) | 0;
    return result;
  };
  Resume$Academics$Degrees.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.degree, other.degree))));
  };
  Resume$Academics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Academics',
    interfaces: []
  };
  Resume$Academics.prototype.component1 = function () {
    return this.degrees;
  };
  Resume$Academics.prototype.copy_djorfo$ = function (degrees) {
    return new Resume$Academics(degrees === void 0 ? this.degrees : degrees);
  };
  Resume$Academics.prototype.toString = function () {
    return 'Academics(degrees=' + Kotlin.toString(this.degrees) + ')';
  };
  Resume$Academics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.degrees) | 0;
    return result;
  };
  Resume$Academics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.degrees, other.degrees))));
  };
  function Resume$Awards(award) {
    this.award = award;
  }
  function Resume$Awards$Award(organization, period, title) {
    if (organization === void 0)
      organization = 'The Ohio State University';
    if (title === void 0)
      title = "Dean's Array";
    this.organization = organization;
    this.period = period;
    this.title = title;
  }
  Resume$Awards$Award.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Award',
    interfaces: []
  };
  Resume$Awards$Award.prototype.component1 = function () {
    return this.organization;
  };
  Resume$Awards$Award.prototype.component2 = function () {
    return this.period;
  };
  Resume$Awards$Award.prototype.component3 = function () {
    return this.title;
  };
  Resume$Awards$Award.prototype.copy_jwsdjz$ = function (organization, period, title) {
    return new Resume$Awards$Award(organization === void 0 ? this.organization : organization, period === void 0 ? this.period : period, title === void 0 ? this.title : title);
  };
  Resume$Awards$Award.prototype.toString = function () {
    return 'Award(organization=' + Kotlin.toString(this.organization) + (', period=' + Kotlin.toString(this.period)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Resume$Awards$Award.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.organization) | 0;
    result = result * 31 + Kotlin.hashCode(this.period) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Resume$Awards$Award.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.organization, other.organization) && Kotlin.equals(this.period, other.period) && Kotlin.equals(this.title, other.title)))));
  };
  Resume$Awards.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Awards',
    interfaces: []
  };
  Resume$Awards.prototype.component1 = function () {
    return this.award;
  };
  Resume$Awards.prototype.copy_skgysm$ = function (award) {
    return new Resume$Awards(award === void 0 ? this.award : award);
  };
  Resume$Awards.prototype.toString = function () {
    return 'Awards(award=' + Kotlin.toString(this.award) + ')';
  };
  Resume$Awards.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.award) | 0;
    return result;
  };
  Resume$Awards.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.award, other.award))));
  };
  function Resume$Header(address, contact, name) {
    this.address = address;
    this.contact = contact;
    this.name = name;
  }
  function Resume$Header$Address(city, state, street, zip) {
    this.city = city;
    this.state = state;
    this.street = street;
    this.zip = zip;
  }
  Resume$Header$Address.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Address',
    interfaces: []
  };
  Resume$Header$Address.prototype.component1 = function () {
    return this.city;
  };
  Resume$Header$Address.prototype.component2 = function () {
    return this.state;
  };
  Resume$Header$Address.prototype.component3 = function () {
    return this.street;
  };
  Resume$Header$Address.prototype.component4 = function () {
    return this.zip;
  };
  Resume$Header$Address.prototype.copy_w74nik$ = function (city, state, street, zip) {
    return new Resume$Header$Address(city === void 0 ? this.city : city, state === void 0 ? this.state : state, street === void 0 ? this.street : street, zip === void 0 ? this.zip : zip);
  };
  Resume$Header$Address.prototype.toString = function () {
    return 'Address(city=' + Kotlin.toString(this.city) + (', state=' + Kotlin.toString(this.state)) + (', street=' + Kotlin.toString(this.street)) + (', zip=' + Kotlin.toString(this.zip)) + ')';
  };
  Resume$Header$Address.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.street) | 0;
    result = result * 31 + Kotlin.hashCode(this.zip) | 0;
    return result;
  };
  Resume$Header$Address.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.city, other.city) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.street, other.street) && Kotlin.equals(this.zip, other.zip)))));
  };
  function Resume$Header$Contact(email, phone) {
    this.email = email;
    this.phone = phone;
  }
  Resume$Header$Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  Resume$Header$Contact.prototype.component1 = function () {
    return this.email;
  };
  Resume$Header$Contact.prototype.component2 = function () {
    return this.phone;
  };
  Resume$Header$Contact.prototype.copy_puj7f4$ = function (email, phone) {
    return new Resume$Header$Contact(email === void 0 ? this.email : email, phone === void 0 ? this.phone : phone);
  };
  Resume$Header$Contact.prototype.toString = function () {
    return 'Contact(email=' + Kotlin.toString(this.email) + (', phone=' + Kotlin.toString(this.phone)) + ')';
  };
  Resume$Header$Contact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    return result;
  };
  Resume$Header$Contact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.email, other.email) && Kotlin.equals(this.phone, other.phone)))));
  };
  function Resume$Header$Name(firstname, middlenames, surname) {
    if (firstname === void 0)
      firstname = '';
    if (middlenames === void 0)
      middlenames = '';
    if (surname === void 0)
      surname = '';
    this.firstname = firstname;
    this.middlenames = middlenames;
    this.surname = surname;
  }
  Resume$Header$Name.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Name',
    interfaces: []
  };
  Resume$Header$Name.prototype.component1 = function () {
    return this.firstname;
  };
  Resume$Header$Name.prototype.component2 = function () {
    return this.middlenames;
  };
  Resume$Header$Name.prototype.component3 = function () {
    return this.surname;
  };
  Resume$Header$Name.prototype.copy_6hosri$ = function (firstname, middlenames, surname) {
    return new Resume$Header$Name(firstname === void 0 ? this.firstname : firstname, middlenames === void 0 ? this.middlenames : middlenames, surname === void 0 ? this.surname : surname);
  };
  Resume$Header$Name.prototype.toString = function () {
    return 'Name(firstname=' + Kotlin.toString(this.firstname) + (', middlenames=' + Kotlin.toString(this.middlenames)) + (', surname=' + Kotlin.toString(this.surname)) + ')';
  };
  Resume$Header$Name.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.firstname) | 0;
    result = result * 31 + Kotlin.hashCode(this.middlenames) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    return result;
  };
  Resume$Header$Name.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstname, other.firstname) && Kotlin.equals(this.middlenames, other.middlenames) && Kotlin.equals(this.surname, other.surname)))));
  };
  Resume$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  Resume$Header.prototype.component1 = function () {
    return this.address;
  };
  Resume$Header.prototype.component2 = function () {
    return this.contact;
  };
  Resume$Header.prototype.component3 = function () {
    return this.name;
  };
  Resume$Header.prototype.copy_no5jgx$ = function (address, contact, name) {
    return new Resume$Header(address === void 0 ? this.address : address, contact === void 0 ? this.contact : contact, name === void 0 ? this.name : name);
  };
  Resume$Header.prototype.toString = function () {
    return 'Header(address=' + Kotlin.toString(this.address) + (', contact=' + Kotlin.toString(this.contact)) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  Resume$Header.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.contact) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Resume$Header.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.address, other.address) && Kotlin.equals(this.contact, other.contact) && Kotlin.equals(this.name, other.name)))));
  };
  function Resume$History(achievements, description, employer, jobtitle, location, period, projects) {
    if (achievements === void 0)
      achievements = [];
    if (description === void 0)
      description = [];
    if (location === void 0)
      location = new Location();
    if (projects === void 0)
      projects = [];
    this.achievements = achievements;
    this.description = description;
    this.employer = employer;
    this.jobtitle = jobtitle;
    this.location = location;
    this.period = period;
    this.projects = projects;
  }
  function Resume$History$Project(description, title) {
    this.description = description;
    this.title = title;
  }
  Resume$History$Project.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Project',
    interfaces: []
  };
  Resume$History$Project.prototype.component1 = function () {
    return this.description;
  };
  Resume$History$Project.prototype.component2 = function () {
    return this.title;
  };
  Resume$History$Project.prototype.copy_puj7f4$ = function (description, title) {
    return new Resume$History$Project(description === void 0 ? this.description : description, title === void 0 ? this.title : title);
  };
  Resume$History$Project.prototype.toString = function () {
    return 'Project(description=' + Kotlin.toString(this.description) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Resume$History$Project.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Resume$History$Project.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.description, other.description) && Kotlin.equals(this.title, other.title)))));
  };
  Resume$History.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'History',
    interfaces: []
  };
  Resume$History.prototype.component1 = function () {
    return this.achievements;
  };
  Resume$History.prototype.component2 = function () {
    return this.description;
  };
  Resume$History.prototype.component3 = function () {
    return this.employer;
  };
  Resume$History.prototype.component4 = function () {
    return this.jobtitle;
  };
  Resume$History.prototype.component5 = function () {
    return this.location;
  };
  Resume$History.prototype.component6 = function () {
    return this.period;
  };
  Resume$History.prototype.component7 = function () {
    return this.projects;
  };
  Resume$History.prototype.copy_cqdgm0$ = function (achievements, description, employer, jobtitle, location, period, projects) {
    return new Resume$History(achievements === void 0 ? this.achievements : achievements, description === void 0 ? this.description : description, employer === void 0 ? this.employer : employer, jobtitle === void 0 ? this.jobtitle : jobtitle, location === void 0 ? this.location : location, period === void 0 ? this.period : period, projects === void 0 ? this.projects : projects);
  };
  Resume$History.prototype.toString = function () {
    return 'History(achievements=' + Kotlin.toString(this.achievements) + (', description=' + Kotlin.toString(this.description)) + (', employer=' + Kotlin.toString(this.employer)) + (', jobtitle=' + Kotlin.toString(this.jobtitle)) + (', location=' + Kotlin.toString(this.location)) + (', period=' + Kotlin.toString(this.period)) + (', projects=' + Kotlin.toString(this.projects)) + ')';
  };
  Resume$History.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.achievements) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.employer) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobtitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.period) | 0;
    result = result * 31 + Kotlin.hashCode(this.projects) | 0;
    return result;
  };
  Resume$History.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.achievements, other.achievements) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.employer, other.employer) && Kotlin.equals(this.jobtitle, other.jobtitle) && Kotlin.equals(this.location, other.location) && Kotlin.equals(this.period, other.period) && Kotlin.equals(this.projects, other.projects)))));
  };
  function Resume$LastModified(date) {
    this.date = date;
  }
  Resume$LastModified.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LastModified',
    interfaces: []
  };
  Resume$LastModified.prototype.component1 = function () {
    return this.date;
  };
  Resume$LastModified.prototype.copy_19hvy$ = function (date) {
    return new Resume$LastModified(date === void 0 ? this.date : date);
  };
  Resume$LastModified.prototype.toString = function () {
    return 'LastModified(date=' + Kotlin.toString(this.date) + ')';
  };
  Resume$LastModified.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    return result;
  };
  Resume$LastModified.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.date, other.date))));
  };
  function Resume$Skillarea(skillset, title) {
    if (skillset === void 0)
      skillset = [];
    this.skillset = skillset;
    this.title = title;
  }
  function Resume$Skillarea$Skillset(skill, title) {
    if (skill === void 0)
      skill = [];
    this.skill = skill;
    this.title = title;
  }
  Resume$Skillarea$Skillset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Skillset',
    interfaces: []
  };
  Resume$Skillarea$Skillset.prototype.component1 = function () {
    return this.skill;
  };
  Resume$Skillarea$Skillset.prototype.component2 = function () {
    return this.title;
  };
  Resume$Skillarea$Skillset.prototype.copy_c879xe$ = function (skill, title) {
    return new Resume$Skillarea$Skillset(skill === void 0 ? this.skill : skill, title === void 0 ? this.title : title);
  };
  Resume$Skillarea$Skillset.prototype.toString = function () {
    return 'Skillset(skill=' + Kotlin.toString(this.skill) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Resume$Skillarea$Skillset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.skill) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Resume$Skillarea$Skillset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.skill, other.skill) && Kotlin.equals(this.title, other.title)))));
  };
  Resume$Skillarea.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Skillarea',
    interfaces: []
  };
  Resume$Skillarea.prototype.component1 = function () {
    return this.skillset;
  };
  Resume$Skillarea.prototype.component2 = function () {
    return this.title;
  };
  Resume$Skillarea.prototype.copy_5bnttq$ = function (skillset, title) {
    return new Resume$Skillarea(skillset === void 0 ? this.skillset : skillset, title === void 0 ? this.title : title);
  };
  Resume$Skillarea.prototype.toString = function () {
    return 'Skillarea(skillset=' + Kotlin.toString(this.skillset) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Resume$Skillarea.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.skillset) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Resume$Skillarea.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.skillset, other.skillset) && Kotlin.equals(this.title, other.title)))));
  };
  Resume.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resume',
    interfaces: []
  };
  Resume.prototype.component1 = function () {
    return this.academics;
  };
  Resume.prototype.component2 = function () {
    return this.awards;
  };
  Resume.prototype.component3 = function () {
    return this.header;
  };
  Resume.prototype.component4 = function () {
    return this.history;
  };
  Resume.prototype.component5 = function () {
    return this.lastModified;
  };
  Resume.prototype.component6 = function () {
    return this.misc;
  };
  Resume.prototype.component7 = function () {
    return this.objective;
  };
  Resume.prototype.component8 = function () {
    return this.skillarea;
  };
  Resume.prototype.copy_8yu5cb$ = function (academics, awards, header, history, lastModified, misc, objective, skillarea) {
    return new Resume(academics === void 0 ? this.academics : academics, awards === void 0 ? this.awards : awards, header === void 0 ? this.header : header, history === void 0 ? this.history : history, lastModified === void 0 ? this.lastModified : lastModified, misc === void 0 ? this.misc : misc, objective === void 0 ? this.objective : objective, skillarea === void 0 ? this.skillarea : skillarea);
  };
  Resume.prototype.toString = function () {
    return 'Resume(academics=' + Kotlin.toString(this.academics) + (', awards=' + Kotlin.toString(this.awards)) + (', header=' + Kotlin.toString(this.header)) + (', history=' + Kotlin.toString(this.history)) + (', lastModified=' + Kotlin.toString(this.lastModified)) + (', misc=' + Kotlin.toString(this.misc)) + (', objective=' + Kotlin.toString(this.objective)) + (', skillarea=' + Kotlin.toString(this.skillarea)) + ')';
  };
  Resume.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.academics) | 0;
    result = result * 31 + Kotlin.hashCode(this.awards) | 0;
    result = result * 31 + Kotlin.hashCode(this.header) | 0;
    result = result * 31 + Kotlin.hashCode(this.history) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastModified) | 0;
    result = result * 31 + Kotlin.hashCode(this.misc) | 0;
    result = result * 31 + Kotlin.hashCode(this.objective) | 0;
    result = result * 31 + Kotlin.hashCode(this.skillarea) | 0;
    return result;
  };
  Resume.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.academics, other.academics) && Kotlin.equals(this.awards, other.awards) && Kotlin.equals(this.header, other.header) && Kotlin.equals(this.history, other.history) && Kotlin.equals(this.lastModified, other.lastModified) && Kotlin.equals(this.misc, other.misc) && Kotlin.equals(this.objective, other.objective) && Kotlin.equals(this.skillarea, other.skillarea)))));
  };
  function Location(city, state) {
    if (city === void 0)
      city = 'New York';
    if (state === void 0)
      state = 'NY';
    this.city = city;
    this.state = state;
  }
  Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: []
  };
  Location.prototype.component1 = function () {
    return this.city;
  };
  Location.prototype.component2 = function () {
    return this.state;
  };
  Location.prototype.copy_puj7f4$ = function (city, state) {
    return new Location(city === void 0 ? this.city : city, state === void 0 ? this.state : state);
  };
  Location.prototype.toString = function () {
    return 'Location(city=' + Kotlin.toString(this.city) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  Location.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  Location.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.city, other.city) && Kotlin.equals(this.state, other.state)))));
  };
  function Date_0(month, year) {
    if (year === void 0)
      year = null;
    this.month = month;
    this.year = year;
  }
  Date_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Date',
    interfaces: []
  };
  Date_0.prototype.component1 = function () {
    return this.month;
  };
  Date_0.prototype.component2 = function () {
    return this.year;
  };
  Date_0.prototype.copy_6sxnot$ = function (month, year) {
    return new Date_0(month === void 0 ? this.month : month, year === void 0 ? this.year : year);
  };
  Date_0.prototype.toString = function () {
    return 'Date(month=' + Kotlin.toString(this.month) + (', year=' + Kotlin.toString(this.year)) + ')';
  };
  Date_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    return result;
  };
  Date_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.month, other.month) && Kotlin.equals(this.year, other.year)))));
  };
  function Period(from, to) {
    if (to === void 0)
      to = null;
    this.from = from;
    this.to = to;
  }
  Period.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Period',
    interfaces: []
  };
  Period.prototype.component1 = function () {
    return this.from;
  };
  Period.prototype.component2 = function () {
    return this.to;
  };
  Period.prototype.copy_mk69qr$ = function (from, to) {
    return new Period(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  Period.prototype.toString = function () {
    return 'Period(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  Period.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  Period.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  var name;
  function main() {
    println('Hello JavaScript! ' + name);
    println(resume);
  }
  Object.defineProperty(_, 'resume', {
    get: function () {
      return resume;
    }
  });
  Resume$Academics$Degrees$Degree$Gpa.Note = Resume$Academics$Degrees$Degree$Gpa$Note;
  Resume$Academics$Degrees$Degree.Gpa = Resume$Academics$Degrees$Degree$Gpa;
  Resume$Academics$Degrees.Degree = Resume$Academics$Degrees$Degree;
  Resume$Academics.Degrees = Resume$Academics$Degrees;
  Resume.Academics = Resume$Academics;
  Resume$Awards.Award = Resume$Awards$Award;
  Resume.Awards = Resume$Awards;
  Resume$Header.Address = Resume$Header$Address;
  Resume$Header.Contact = Resume$Header$Contact;
  Resume$Header.Name = Resume$Header$Name;
  Resume.Header = Resume$Header;
  Resume$History.Project = Resume$History$Project;
  Resume.History = Resume$History;
  Resume.LastModified = Resume$LastModified;
  Resume$Skillarea.Skillset = Resume$Skillarea$Skillset;
  Resume.Skillarea = Resume$Skillarea;
  _.Resume = Resume;
  _.Location = Location;
  _.Date = Date_0;
  _.Period = Period;
  Object.defineProperty(_, 'name', {
    get: function () {
      return name;
    }
  });
  _.main = main;
  var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30;
  tmp$ = new Resume$Header$Name('Jin', 'S', 'Yu');
  tmp$_0 = new Resume$Header(new Resume$Header$Address('Forest Hills', 'NY', '6530 108nd St, Apt 2A', '11375'), new Resume$Header$Contact('career19@jsy.us', '347-688-JAVA(5282)'), tmp$);
  tmp$_1 = ['Seeking a software engineering position in a creative and collaborative environment \n    where I can practice my craft and learn as well as teach.', 'My current interests include Android and iOS mobile application development,\n    the Java, Kotlin, Swift and Scala programming languages, open-source development(https://github.com/sheng168),\n    high throughput and low latency architecture\n    and API design(https://bitbucket.org/sheng/parsefacade).'];
  tmp$_2 = [new Resume$Skillarea([new Resume$Skillarea$Skillset(['Java', 'Kotlin', 'Scala', 'Swift', 'Objective C', 'C# .Net', 'JavaScript', 'TypeScript'], 'Programming Languages'), new Resume$Skillarea$Skillset(['Object Pascal (Delphi)', 'C/C++', 'Visual Basic', 'SQL', 'MIPS assembly', 'SPARC assembly', 'Motorola micro-controller assembly', 'HyperTalk', 'AppleScript', 'Shell scripting'], 'Archive Languages'), new Resume$Skillarea$Skillset(['Java Programming Language', 'Threading/Synchronization', 'JDBC', 'java.io', 'java.net', 'Collections', 'Reflection API', 'Servlets and JSP', 'JMS', 'Spring', 'Swing/AWT'], 'Java'), new Resume$Skillarea$Skillset(['Object Oriented Design and Analysis', 'Design Patterns', 'UML Modeling', 'Use Case', 'Sequence Diagram'], 'Software Design'), new Resume$Skillarea$Skillset(['Mac OS X', 'UNIX (Linux and Solaris)', 'Windows', 'BeOS'], 'Operating Systems'), new Resume$Skillarea$Skillset(['Oracle', 'IBM DB2', 'MS SQL Server and TSQL', 'SQLite', 'Access', 'FileMaker Pro'], 'Database Management'), new Resume$Skillarea$Skillset(['Eclipse', 'JetBrains', 'NetBeans', 'Xcode', 'Microsoft Visual Studio', 'GIT', 'Subversion(SVN)'], 'Development Environments')], 'Software Skills'), new Resume$Skillarea([new Resume$Skillarea$Skillset(['Equities', 'Options', 'Futures', 'FIX format', 'Micro and Macro Economics', 'Economics History', 'Banking System'], 'Finance')], 'Finance')];
  tmp$_3 = new Location('New York', 'NY');
  tmp$_4 = new Period(new Date_0(7, 2018), new Date_0(1, 2021));
  tmp$_5 = ['JVM micro services using Java/Kotlin, Dropwizard, Kafka, Docker, AWS. '];
  tmp$_6 = new Resume$History(['Create Dropwizard bundles to reuse software and consistently implement features: \n                                Vault secret management, Jwt token security and interceptor base REST request logging', 'Refactor codebase to move CorrelationInfo to ThreadLocal, \n                                use primitive where object is not needed \n                                and increase platform independence by using more Kotlin', 'Create Maven parent pom to share dependencies between services and ease migration of services from Java 8 to 11.'], tmp$_5, 'Clearme.com', 'Sr Software Engineer', tmp$_3, tmp$_4);
  tmp$_7 = new Location('New York', 'NY');
  tmp$_8 = new Period(new Date_0(1, 2016), new Date_0(4, 2018));
  tmp$_9 = new Resume$History(void 0, ['As a member of the Agent team, Maintain and enhance the network monitoring SaaS product. \n        Triage bug reports, fix software defects and develop new features. \n        Estimate development effects for backlog tasks. Perform R&D to determine feasibility and break down large tasks. \n        Evaluate software libraries for inclusion in our projects. Perform code reviews and production support.'], 'Catchpoint', 'Sr Software Engineer', tmp$_7, tmp$_8, [new Resume$History$Project('Contribute my experience to this major effort to reimplement our core product. Advocate for finding simple designs to our problems; using a limited number of well know features to compose our solution.', 'Agent 2.0 Rewrite'), new Resume$History$Project('Create a grammar to replace the existing hand-written parser for test scripts.', 'Antlr Grammar'), new Resume$History$Project('Port Agent software from Windows/Linux to MacOS using mainly C# and .Net in Visual Studio and Xamarin Studio.\n            Instrument Safari Mobile in simulator and real device to measure network activity while performing automated testing.', 'Safari Mobile'), new Resume$History$Project('Create the Java client library for our REST API. \n            Ensure that authentication token renewal is implemented both correctly and efficiently.', 'Java Client for REST API')]);
  tmp$_10 = new Location('New York', 'NY');
  tmp$_11 = new Period(new Date_0(4, 2015), new Date_0(11, 2015));
  tmp$_12 = new Resume$History(void 0, ['Responsible for the development of mobile SDK.'], 'RealNetworks', 'Lead Mobile SDK Engineer', tmp$_10, tmp$_11, [new Resume$History$Project('Develop Android SDK while managing contractor to develop iOS SDK. \n            Allow third-party apps to have easy access to RealPlayer Cloud data store via REST API.\n            We settled on building our SDK on top of Retrofit and OkHttp to allow use to \n            use type-safe Java interfaces to map to our REST API and perform client side \n            transformations to fix inconsistencies.', 'RealCloud SDK'), new Resume$History$Project('Polish private API for public consumption allowing third-party apps \n            to generate video stories by supplying their own content.', 'RealTimes SDK')]);
  tmp$_13 = new Location('New York', 'NY');
  tmp$_14 = new Period(new Date_0(8, 2014), new Date_0(4, 2015));
  tmp$_15 = new Resume$History(void 0, ['Responsible for the deployment of Algomi platform to client environment. \n        Work with sales team to communicate technical architecture and integration requirements.'], 'Algomi', 'US Integration Lead Engineer', tmp$_13, tmp$_14);
  tmp$_16 = new Location('New York', 'NY');
  tmp$_17 = new Period(new Date_0(4, 2011), new Date_0(8, 2014));
  tmp$_18 = ['Responsible for the development of new applications with mobile, desktop and server components.'];
  tmp$_19 = [new Resume$History$Project('Develop mobile application for parents to monitor child"s usage of Android device.\n            All data is store using a popular backend-as-a-service.\n            Parents receive real-time activity stream and can update child"s device configuration\n            via push notifications.', 'Abeona'), new Resume$History$Project('Develop Android and iOS messaging applications using XMPP and OpenFire server.', 'Mobile Messaging Application'), new Resume$History$Project('Develop location-based messaging using Twitter API.', 'Mobile Twitter Application'), new Resume$History$Project('Develop server application using SMPP for inter-carrier messaging.', 'Server Application')];
  tmp$_20 = new Resume$History(['Successfully developed and deployed cross-platform mobile application to Android, iOS and Web', 'Lead development of Android and iOS XMPP client', 'Implement SMPP client and server that is capable of saturating gigabit ethernet', 'Train new development team members by documenting application code, creating diagrams, performing code review and prividing hands-on training'], tmp$_18, 'RealNetworks', 'Lead Development Engineer', tmp$_16, tmp$_17, tmp$_19);
  tmp$_21 = new Location('New York', 'NY');
  tmp$_22 = new Period(new Date_0(11, 2006), new Date_0(8, 2010));
  tmp$_23 = ['Maintain and create applications to support trading platform.'];
  tmp$_24 = [new Resume$History$Project('Create Drop Copy server application that process FIX message in near-realtime from Tibrv and send to clients via MQueue.\n            Create server application to allow application messages to be replayed.\n            Create server application to capture high volume trading data into MS SQL Server.\n            Instructment applications with JMX to enable remote monitoring and configuration change.\n            Refactor and architect software to into reusable components allowing connections of data sources to\n            data destinations with flexible processing and threading models.\n            A data source or destination can be a TIBCO Rendezvous subject, IBM MQueue, TCP connection, JDBC database or JMS.\n            Implement fault-tolerant feature using active/inactive process model.\n            Replace custom code with open-source component to reduce code size while increasing functionality.', 'Server Applications'), new Resume$History$Project('Take order execution updates from TIBCO Rendezvous and display them in a dynamic Java Swing interface.\n            Read updates from TCP connection and display them in a table component within a Java Applet.\n            Both applications use multiple threads to perform background operations to keep user interface responsive.          ', 'Desktop Applications')];
  tmp$_25 = [tmp$_6, tmp$_9, tmp$_12, tmp$_15, tmp$_20, new Resume$History(['Reduce message processing latency by 80% from 50ms to 10ms by implementing straight-through processing', 'Eliminate 30 minute end-of-day message backlog by increasing throughput to keep up with incoming message burst', 'Increase application reliability by fixing threading bugs and memory leaks', 'Simplify software while adding functionality by factoring out shared code across projects'], tmp$_23, 'Merrill Lynch', 'Senior Software Developer', tmp$_21, tmp$_22, tmp$_24), new Resume$History(void 0, void 0, 'Crispwireless', 'Senior Systems Engineer', new Location('New York', 'NY'), new Period(new Date_0(3, 2006), new Date_0(9, 2006))), new Resume$History(void 0, void 0, 'SOFT Inc', 'Senior Systems Consultant', new Location('New York', 'NY'), new Period(new Date_0(9, 2005), new Date_0(12, 2005))), new Resume$History(void 0, void 0, 'SRA International', 'Professional Staff Software Developer', new Location('Fairfax', 'VA'), new Period(new Date_0(1, 2005), new Date_0(9, 2005)))];
  tmp$_26 = new Resume$Awards(new Resume$Awards$Award('The Ohio State University', new Period(new Date_0(1, 2004), new Date_0(12, 2004)), "Dean's List"));
  tmp$_27 = new Date_0(12, 2004);
  tmp$_28 = new Location('Columbus', 'Ohio');
  tmp$_29 = new Resume$Academics(new Resume$Academics$Degrees(new Resume$Academics$Degrees$Degree(tmp$_27, new Resume$Academics$Degrees$Degree$Gpa(new Resume$Academics$Degrees$Degree$Gpa$Note('Major GPA = 3.61 out of 4.00.'), '4.00', '3.38'), 'The Ohio State University', 'B.S.', tmp$_28, 'Computer Science and Engineering')));
  tmp$_30 = ['Achieve world leading level 72 in Plants vs Zombies Free Vasebreaker Endless on iPhone', 'This resume is created and edited as a XML document. XSLT is use to ' + 'create HTML, plain text or PDF versions with the same content as needed.', 'It has been converted to JSON and rendered using AngularJS into HTML.'];
  resume = new Resume(tmp$_29, tmp$_26, tmp$_0, tmp$_25, new Date_0(12, 2019), tmp$_30, tmp$_1, tmp$_2);
  name = new Resume$Header$Name('Kotlin');
  main();
  Kotlin.defineModule('resume', _);
  return _;
}(typeof resume === 'undefined' ? {} : resume, kotlin);
