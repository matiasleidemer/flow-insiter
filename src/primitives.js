// @flow

const varBoolean: bool = false;

const varNumber: number = 42;

const varString: string = "insiter";

const varVoid: void = undefined;

const varNull: null = null;

const whatever: any = 1234;

// literal example
const logMessageColor = (severity: "info" | "warn" | "fatal") => {
  switch (severity) {
    case "info"  : return "green";
    case "warn"  : return "yellow";
    case "fatal" : return "red";
  }
}

logMessageColor("info");
// logMessageColor("foo");
