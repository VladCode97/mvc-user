import {User} from "./models/interfaces/user";
import {PromptController} from "./controllers/prompt.controller";
import {RoleEnum} from "./models/enums/role";
import {UserView} from "./views/user.view";
import {UserController} from "./controllers/user.controller";

async function requestUserData(): Promise<User> {
    const promptController = PromptController.Instance;
    return {
        id: Math.floor((Math.random() + 1) * 1000),
        name: await promptController.askQuestion('What is your name: ') as string,
        document: await promptController.askQuestion('What is your document: ') as string,
        role: await promptController.askQuestion('What is your role: ') as RoleEnum,
    };
}

async function main() {
    const promptController = PromptController.Instance;
    const userView = new UserView(new UserController());
    while (true) {
        const question = await promptController.askQuestion('What would you like to choice it ? \n' +
            '1. Create user: \n' +
            '2. Get all users \n' +
            '3. Close \n ') as string;
        if (question === '1') {
            userView.create(await requestUserData())
        } else if (question === '2') {
            console.log(userView.getAll());
        } else {
            console.log('See you soon');
            promptController.closeReadline();
            break;
        }
    }
}

main();