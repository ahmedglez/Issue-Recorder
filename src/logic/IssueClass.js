class Issue {
  constructor(description, severity, type, assigned, id, date) {
    this.description = description;
    this.severity = severity;
    this.type = type;
    this.assigned = assigned;
    this.id = id;
    this.date = date;
  }
}

export { Issue };
