class DomObserver {

  states: Array<string>;
  observer: MutationObserver;

  constructor() {
    this.states = [];
    this.createObserver();
  }

  observe(): void {
    const body = this.getBody();
    this.observer.observe(body, {
      childList: true,
    })
  }

  loadState(number: number): string {
    return this.states[number];
  }

  private createObserver(): void {
    const callback = this.getCallback();
    this.observer = new MutationObserver(callback)
  }

  private getBody(): Node {
    return document.getElementsByTagName('body')[0];
  }

  private getCallback(): MutationCallback {
    return (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
          const state = document.getElementsByTagName('body')[0].outerHTML;
          this.states.push(state);
        }
      }
    };
  }
}


export default DomObserver;
