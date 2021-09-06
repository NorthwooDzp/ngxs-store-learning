import { ITutorial } from '../../models/tutorial';


export class AddTutorial {
    static readonly type: string = '[Tutorial] Add';

    constructor(public payload: ITutorial) {
    }
}

export class RemoveTutorial {
    static readonly type: string = '[Tutorial] Remove';

    constructor(public payload: string) {
    }
}
