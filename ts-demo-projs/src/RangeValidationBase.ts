type StringOrNumber = string | number

class RangeValidationBase {
  constructor(private start: number, private end: number) {}
  protected RangeCheck(value: number): boolean {
    return value >= this.start && value <= this.end
  }
  protected GetNumber(value: string): number {
    return new Number(value).valueOf()
  }
}

class SeparateTypeRangeValidation extends RangeValidationBase {
  IsInRangeString(value: string): boolean {
    return this.RangeCheck(this.GetNumber(value))
  }
  IsInRangeNumber(value: number): boolean {
    return this.RangeCheck(value)
  }
}

class AnyRangeValidation extends RangeValidationBase {
  IsInRange(value: any): boolean {
    if(typeof value === 'number') {
      return this.RangeCheck(value)
    } else if(typeof value === 'string') {
      return this.RangeCheck(this.GetNumber(value))
    }
    return false
  }
}

class UnionRangeValidation extends RangeValidationBase {
  IsInRange(value: StringOrNumber): boolean {
    if(typeof value === 'number') {
      return this.RangeCheck(value)
    }
    return this.RangeCheck(this.GetNumber(value))
  }
}
