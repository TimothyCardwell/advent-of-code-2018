export class FrequencyEvaluator {
  public frequency: number = 0;
  private _frequencyChanges: number[];

  constructor(frequencyChanges: number[]) {
    this._frequencyChanges = frequencyChanges;

    this.CalculateFrequency();
  }

  private CalculateFrequency(): void {
    this._frequencyChanges.forEach(x => {
        // Update the frequency
        this.frequency += x
    });
  }
}
