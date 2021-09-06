import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ITutorial } from '../../models/tutorial';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';
import { Injectable } from '@angular/core';


export interface TutorialStateModel {
    tutorials: ITutorial[];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel): ITutorial[] {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add({getState, patchState}: StateContext<TutorialStateModel>, {payload}: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        });
    }

    @Action(RemoveTutorial)
    remove({getState, patchState}: StateContext<TutorialStateModel>, {payload}: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(tutorial => tutorial.name !== payload)
        });
    }

}
