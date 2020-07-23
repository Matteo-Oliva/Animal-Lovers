import { MessageService } from './shared/services/message.service';
import { LogDirective } from './log.directive';

describe('LogDirective', () => {
  it('should create an instance', () => {
    const directive = new LogDirective(null);
    expect(directive).toBeTruthy();
  });
});
