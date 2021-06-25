export default class Logger {
  static log(instance, message) {
    console.log(`\x1b[35m[${instance}]\x1b[0m ${message}`);
  }
}
