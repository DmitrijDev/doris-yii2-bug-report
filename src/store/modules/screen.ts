import {ActionContext} from "vuex";

export const SCREEN_MUTATIONS = {
    setSrc: 'setSrc',
    setWidth: 'setWidth',
    setHeight: 'setHeight',
    setPoints: 'setPoints',
    setSquares: 'setSquares',
    setActiveTool: 'setActiveTool',
    setHistoryPoints: 'setHistoryPoints',
    setHistorySquares: 'setHistorySquares'
};

export const SCREEN_ACTIONS = {
    setSrc: 'setSrc',
    addPoint: 'addPoint',
    addSquare: 'addSquare',
    clearPoints: 'clearPoints',
    clearSquares: 'clearSquares',
    clearHistoryPoints: 'clearHistoryPoints',
    clearHistorySquares: 'clearHistorySquares'
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

export interface ImageSquare {
    beginX: number,
    beginY: number,
    width: number,
    height: number
}

export enum ScreenTools {
    circle,
    square,
    pencil
}

export interface ScreenState extends ImageState {
    points: ImagePoint[],
    squares: ImageSquare[],
    activeTool: ScreenTools
    historyPoints: ImagePoint[],
    historySquares: ImageSquare[],
}

let state: ScreenState = {
    src: '',
    width: 0,
    heigth: 0,
    points: [],
    squares: [],
    historyPoints: [],
    historySquares: [],
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
        [SCREEN_MUTATIONS.setSquares]: (state: ScreenState, squares: ImageSquare[]) => {
            state.squares = squares;
        },
        [SCREEN_MUTATIONS.setHistorySquares]: (state: ScreenState, squares: ImageSquare[]) => {
            state.historySquares = squares;
        },
        [SCREEN_MUTATIONS.setHistoryPoints]: (state: ScreenState, points: ImagePoint[]) => {
            state.historyPoints = points;
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
        getScreenSquares: (state: ScreenState): ImageSquare[] => state.squares,
        getScreenActiveTool: (state: ScreenState): ScreenTools => state.activeTool,
        getScreenHistoryPoints: (state: ScreenState): ImagePoint[] => state.historyPoints,
        getScreenHistorySquares: (state: ScreenState): ImageSquare[] => state.historySquares,
    },
    actions: {
        [SCREEN_ACTIONS.addPoint]: (context: ActionContext<ScreenState, any>, point: ImagePoint): Promise<any> => {
            return new Promise((resolve: Function): void => {
                let points = context.state.points.concat([point]);
                context.commit(SCREEN_MUTATIONS.setPoints, points);

                let historyPoints = context.state.historyPoints.concat([point]);
                context.commit(SCREEN_MUTATIONS.setHistoryPoints, historyPoints);

                resolve();
            });
        },
        [SCREEN_ACTIONS.setSrc]: (context: ActionContext<ScreenState, any>, src: string): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setSrc, src);

                Promise.all([
                    context.dispatch(SCREEN_ACTIONS.clearPoints),
                    context.dispatch(SCREEN_ACTIONS.clearSquares),
                    context.dispatch(SCREEN_ACTIONS.clearHistoryPoints),
                    context.dispatch(SCREEN_ACTIONS.clearHistorySquares),
                ]).then(() => {
                    resolve()
                });
            });
        },
        [SCREEN_ACTIONS.addSquare]: (context: ActionContext<ScreenState, any>, square: ImageSquare): Promise<any> => {
            return new Promise((resolve: Function): void => {
                let squares = context.state.squares.concat([square]);
                context.commit(SCREEN_MUTATIONS.setSquares, squares);

                let historySquares = context.state.historySquares.concat([square]);
                context.commit(SCREEN_MUTATIONS.setHistorySquares, historySquares);

                resolve();
            });
        },
        [SCREEN_ACTIONS.clearPoints]: (context: ActionContext<ScreenState, any>): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setPoints, []);
                resolve();
            });
        },
        [SCREEN_ACTIONS.clearSquares]: (context: ActionContext<ScreenState, any>): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setSquares, []);
                resolve();
            });
        },
        [SCREEN_ACTIONS.clearHistoryPoints]: (context: ActionContext<ScreenState, any>): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setHistoryPoints, []);
                resolve();
            });
        },
        [SCREEN_ACTIONS.clearHistorySquares]: (context: ActionContext<ScreenState, any>): Promise<any> => {
            return new Promise((resolve: Function): void => {
                context.commit(SCREEN_MUTATIONS.setHistorySquares, []);
                resolve();
            });
        }
    }
};
