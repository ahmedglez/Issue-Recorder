class Issue {
  constructor(description, severity, type, assigned, id) {
    this.description = description;
    this.severity = severity;
    this.type = type;
    this.assigned = assigned;
    this.id = id;
  }
}

export { Issue };
