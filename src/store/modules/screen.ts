import {ActionContext} from "vuex";

export const SCREEN_MUTATIONS = {
    setWidth: 'setWidth',
    setHeight: 'setHeight',
    setPoints: 'setPoints',
    setSrc: 'setSrc',
    setActiveTool: 'setActiveTool',
};

export const SCREEN_ACTIONS = {
    addPoint: 'addPoint',
    clearPoints: 'clearPoints'
};

export interface ImageState {
    src: string,
    width: number,
    heigth: number,
}

export interface ImagePoint {
    x: number,
    y: number
}

export enum ScreenTools {
    circle,
    square,
    pencil
}

export interface ScreenState extends ImageState {
    points: ImagePoint[],
    activeTool: ScreenTools
}

let state: ScreenState = {
    src: '',
    width: 0,
    heigth: 0,
    points: [],
    activeTool: ScreenTools.pencil
};

export default {
    state: state,
    mutations: {
        [SCREEN_MUTATIONS.setWidth]: (state: ScreenState, width: number) => {
            state.width = width;
        },
        [SCREEN_MUTATIONS.setHeight]: (state: ScreenState, heigth: number) => {
            state.heigth = heigth;
        },
        [SCREEN_MUTATIONS.setSrc]: (state: ScreenState, src: string) => {
            state.src = src;
        },
        [SCREEN_MUTATIONS.setPoints]: (state: ScreenState, points: ImagePoint[]) => {
            state.points = points;
        },
        [SCREEN_MUTATIONS.setActiveTool]: (state: ScreenState, tool: ScreenTools) => {
            state.activeTool = tool;
        }
    },
    getters: {
        getScreenSrc: (state: ScreenState): string => state.src,
        getScreenWidth: (state: ScreenState): number => state.width,
        getScreenHeight: (state: ScreenState): number => state.heigth,
        getScreenPoints: (state: ScreenState): ImagePoint[] => state.points,
        getScreenActiveTool: (state: ScreenState): ScreenTools => state.activeTool,
    },
    actions: {
        [SCREEN_ACTIONS.addPoint]: (context: ActionContext<ScreenState, any>, point: ImagePoint): Promise<any> => {
            return new Promise((resolve: Function): void => {
                let points = context.state.points.concat([point]);

                context.commit(SCREEN_MUTATIONS.setPoints, points);
                resolve();
            });
        },
        [SCREEN_ACTIONS.clearPoints]: (context: ActionContext<ScreenState, any>): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setPoints, []);
                resolve();
            });
        }
    }
};
