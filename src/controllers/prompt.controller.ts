import {createInterface} from 'readline';

export class PromptController {

    private static promptController: PromptController;
    private prompt;

    private constructor() {
        this.prompt = createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    static get Instance(): PromptController {
        if (PromptController.promptController === undefined) {
            PromptController.promptController = new PromptController();
        }
        return PromptController.promptController;
    }

    askQuestion(question: string) {
        return new Promise((resolve, reject) => {
            return this.prompt.question(question, (answer) => {
                if (!answer) {
                    reject(new Error('Has been an error'));
                }
                resolve(answer);
            });
        })
    }

    public closeReadline(): void {
        this.prompt.close();
    }

}