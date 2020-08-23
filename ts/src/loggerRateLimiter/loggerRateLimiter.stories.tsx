import { Logger } from "./loggerRateLimiter";
import React, { useState, useMemo } from "react";

const LogRateLimiter: React.FC = () => {
  const [time, setTime] = useState<number | undefined>(undefined);
  const [input, setInput] = useState<string>("");
  const logger = useMemo(() => new Logger(), []);

  return (
    <div>
      {logger.entries.map((entry) => (
        <div>
          {entry.timestamp}: {entry.message}
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (time === undefined) {
            alert("time required");
            return;
          }

          const entry = {
            timestamp: time,
            message: input,
          };

          if (logger.shouldPrintMessage(entry.timestamp, entry.message)) {
            logger.entries.push(entry);
          }
        }}
      ></form>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export const Empty = <LogRateLimiter />;
