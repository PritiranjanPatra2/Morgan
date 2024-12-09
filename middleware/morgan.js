import morgan from "morgan";
import fs from "fs";

let logMessages = [];

const createMorganMiddleware = () => {
  const logFormat =
    ":method :url :remote-addr :status :response-time ms :timestamp";

  morgan.token("timestamp", () => new Date().toISOString());

  return morgan(logFormat, {
    stream: {
      write: (message) => {
        const trimmedMessage = message.trim();
        logMessages.push(trimmedMessage);
        console.log(trimmedMessage); 

        
        fs.appendFileSync("app.log", trimmedMessage + "\n", "utf8");
      },
    },
  });
};

export { createMorganMiddleware, logMessages };
