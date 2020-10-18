class Person {
  constructor(public name: string, public children: Person[] = []) {}
}

class ThroneInheritance {
  private root: Person
  private lookup: Map<string, Person> = new Map()
  private dead: Set<string> = new Set()

  constructor(kingName: string) {
    this.root = new Person(kingName)
    this.lookup.set(kingName, this.root)
  }

  birth(parentName: string, childName: string): void {
    const parent = this.lookup.get(parentName)!
    const tri = new Person(childName)
    parent.children.push(tri)
    this.lookup.set(childName, tri)
  }

  death(name: string): void {
    this.dead.add(name)
  }

  getInheritanceOrder(): string[] {
    const order: string[] = []

    const q: Person[] = [this.root]
    while (q.length) {
      const t = q.pop()!

      order.push(t.name)

      for (let c of [...t.children].reverse()) {
        q.push(c)
      }
    }

    return order.filter((name) => !this.dead.has(name))
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
