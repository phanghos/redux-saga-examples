import Reactotron from 'reactotron-react-native';

export default class Logger {
  static log(title: string, message: any) {
    this.display(title, message, 'LOG');
  }
  static error(title: string, message: any) {
    this.display(title, message, 'ERROR');
  }
  static info(title: string, message: any) {
    this.display(title, message, 'INFO');
  }
  static warn(title: string, message: any) {
    this.display(title, message, 'WARNING');
  }

  private static display(title: string, message: any, type: string) {
    Reactotron.display({
      name: type,
      preview: title,
      value: message,
      important: true,
    });
  }
}
