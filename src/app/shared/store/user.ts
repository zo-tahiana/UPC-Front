import { BehaviorSubject } from 'rxjs';

class UserStore {
  user = new BehaviorSubject({} as any);
}

export const userStore = new UserStore();
