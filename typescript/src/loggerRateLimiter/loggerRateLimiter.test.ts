import { Logger } from "./loggerRateLimiter";

it("works", () => {
  const logger = new Logger();

  expect(logger.shouldPrintMessage(0, "A")).toBeTruthy();
  expect(logger.shouldPrintMessage(0, "B")).toBeTruthy();
  expect(logger.shouldPrintMessage(0, "C")).toBeTruthy();
  expect(logger.shouldPrintMessage(0, "A")).toBeFalsy();
  expect(logger.shouldPrintMessage(0, "B")).toBeFalsy();
  expect(logger.shouldPrintMessage(0, "C")).toBeFalsy();
  expect(logger.shouldPrintMessage(11, "A")).toBeTruthy();
  expect(logger.shouldPrintMessage(11, "B")).toBeTruthy();
  expect(logger.shouldPrintMessage(11, "C")).toBeTruthy();
  expect(logger.shouldPrintMessage(11, "A")).toBeFalsy();
});
