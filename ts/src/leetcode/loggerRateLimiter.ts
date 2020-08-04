type Entry = {
  readonly timestamp: number;
  readonly message: string;
};

class Logger {
  private seen = new Set<string>();
  public entries: Entry[] = [];

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const { seen, entries } = this;

    // rotate out old entries
    const cutOff = timestamp - 10;
    while (entries.length) {
      const [entry] = entries;
      if (entry.timestamp > cutOff) break;

      entries.shift();
      seen.delete(entry.message);
    }

    if (seen.has(message)) return false;

    entries.push({ timestamp, message });
    seen.add(message);
    return true;
  }
}

export { Logger };
