class Entry {
  constructor(public time: number, public msg: string) {}
}

class Logger {
  private seen = new Set<string>();
  private entries: Entry[] = [];

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const { seen, entries } = this;

    // rotate out old entries
    const cutOff = timestamp - 10;
    while (entries.length) {
      const [entry] = entries;
      if (entry.time > cutOff) break;

      entries.shift();
      seen.delete(entry.msg);
    }

    if (seen.has(message)) return false;

    entries.push(new Entry(timestamp, message));
    seen.add(message);
    return true;
  }
}

export { Logger };
