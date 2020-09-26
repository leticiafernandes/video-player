class MyPlugin extends Clappr.CorePlugin {
  get name() { return 'my-plugin' }

  constructor(options) {
    super(options)
    
    this.endScreen()
  }

  endScreen() {
    console.log('hello world plugin')
  }
}